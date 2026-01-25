"use client";

import { useEffect, useRef } from 'react';

export default function AnalyticsProvider() {
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            // Fire and forget tracking
            fetch('/api/analytics', { method: 'POST' }).catch(() => { });
        }
    }, []);

    return null;
}
