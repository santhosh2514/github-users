"use client";

import { useState } from "react";
import { Octokit } from "octokit";

import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";
import UserCard from "@/components/UserCard";

import styles from "@/styles/Home.module.css";

const octokit = new Octokit({});

export default function Home() {
    const [result, setResult] = useState(null);

    const handleSearch = async (username) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        const newEntry = { term: username, result: {} };

        try {
            const response = await octokit.request(`GET /users/${username}`, {
                username: 'USERNAME',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            const data = response.data;

            if (response.status === 200) {
                const userData = {
                    login: data.login,
                    name: data.name,
                    avatar_url: data.avatar_url,
                    html_url: data.html_url,
                };
                newEntry.result = userData;
                setResult(userData);
                localStorage.setItem('searchHistory', JSON.stringify([...history, newEntry]));
            }
        } catch (error) {
            const newEntry = { term: username, result: 'No data found' };
            setResult(null);
            localStorage.setItem('searchHistory', JSON.stringify([...history, newEntry]));
        }
    };

    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <SearchForm onSearch={handleSearch} />
                {result && (
                    <div className={styles.resultsContainer}>
                        <h2 className={styles.resultsHeading}>Search results</h2>
                        <div className={styles.cardContainer}>
                            <UserCard result={result} />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
