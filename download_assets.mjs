import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const TARGET_URL = 'https://www.globaluniforms.co.in/';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'assets', 'images'); // Saving to public/assets/images

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const downloadFile = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve); 
                });
            } else {
                file.close();
                fs.unlink(filepath, () => {}); // Delete failed file
                // Don't reject, just log error standardly
                console.error(`Failed to download ${url}: Status ${response.statusCode}`);
                resolve(false); 
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            console.error(`Error downloading ${url}: ${err.message}`);
            resolve(false);
        });
    });
};

const main = async () => {
    console.log(`Fetching ${TARGET_URL}...`);
    
    // Simple HTML fetch
    const html = await new Promise((resolve, reject) => {
        https.get(TARGET_URL, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });

    // Regex to find images (img src="...") and background images (url(...))
    // This is a rough scraper, but should catch most assets.
    // We look for .jpg, .png, .webp, .svg
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const bgRegex = /url\(['"]?([^'"\)]+\.(?:png|jpg|jpeg|webp|svg))['"]?\)/g;
    const videoRegex = /<source[^>]+src="([^">]+)"/g;

    const assets = new Set();
    
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
        if (match[1]) assets.add(match[1]);
    }
    while ((match = bgRegex.exec(html)) !== null) {
        if (match[1]) assets.add(match[1]);
    }
    while ((match = videoRegex.exec(html)) !== null) {
        if (match[1]) assets.add(match[1]);
    }

    console.log(`Found ${assets.size} potential assets.`);

    const downloads = [];
    let counter = 0;

    for (let assetUrl of assets) {
        // Handle relative URLs
        let fullUrl = assetUrl;
        if (!assetUrl.startsWith('http')) {
            // Handle root relative and path relative
            if (assetUrl.startsWith('/')) {
                fullUrl = new URL(assetUrl, TARGET_URL).toString();
            } else {
                fullUrl = new URL(assetUrl, TARGET_URL).toString(); // Base is the site
            }
        }

        // Get filename
        const filename = path.basename(new URL(fullUrl).pathname) || `asset_${counter++}.jpg`;
        // Prevent query params in filename
        const cleanFilename = filename.split('?')[0]; 
        const filepath = path.join(OUTPUT_DIR, cleanFilename);

        console.log(`Downloading: ${fullUrl} -> ${cleanFilename}`);
        downloads.push(downloadFile(fullUrl, filepath));
    }

    await Promise.all(downloads);
    console.log('Download complete.');
};

main();
