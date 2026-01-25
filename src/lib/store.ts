
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data.json');

type Query = {
    id: string;
    name: string;
    email: string;
    phone: string;
    address?: string;
    message?: string;
    date: string;
};

type Analytics = {
    totalViews: number;
    dailyViews: Record<string, number>; // "YYYY-MM-DD": count
};

type DBData = {
    queries: Query[];
    analytics: Analytics;
};

// Initialize DB if not exists
const initDB = (): DBData => {
    if (!fs.existsSync(DB_PATH)) {
        const initialData: DBData = {
            queries: [],
            analytics: {
                totalViews: 0,
                dailyViews: {}
            }
        };
        fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
        return initialData;
    }
    try {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // Fallback if file is corrupted
        return { queries: [], analytics: { totalViews: 0, dailyViews: {} } };
    }
};

export const getDB = (): DBData => {
    return initDB();
};

export const saveDB = (data: DBData) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

export const addQuery = (query: Omit<Query, 'id' | 'date'>) => {
    const db = getDB();
    const newQuery: Query = {
        ...query,
        id: Math.random().toString(36).substring(7),
        date: new Date().toISOString()
    };
    db.queries.unshift(newQuery); // Add to top
    saveDB(db);
    return newQuery;
};

export const incrementViews = () => {
    const db = getDB();
    const today = new Date().toISOString().split('T')[0];

    db.analytics.totalViews += 1;
    db.analytics.dailyViews[today] = (db.analytics.dailyViews[today] || 0) + 1;

    saveDB(db);
    return db.analytics;
};
