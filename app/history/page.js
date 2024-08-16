"use client";

import { useState, useEffect } from 'react';

import Navbar from '@/components/Navbar';
import HistoryTable from '@/components/HistoryTable';

export default function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setHistory(savedHistory);
    }, []);

    return (
        <div>
            <Navbar />
            <main style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                <HistoryTable history={history} />
            </main>
        </div>
    );
}
