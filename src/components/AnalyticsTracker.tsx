
"use client";

import { useEffect, useRef } from 'react';

export default function AnalyticsTracker() {
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            // Use navigator.sendBeacon for better reliability on page unload/load, 
            // or simple fetch. For simple page load counting, fetch is fine.
            // We want to avoid counting double on StrictMode in dev, hence the ref.
            fetch('/api/analytics', { method: 'POST' }).catch(console.error);
        }
    }, []);

    return null;
}
