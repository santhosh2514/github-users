import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

import styles from '../styles/HistoryTable.module.css';

const HistoryTable = (props) => {
  const [history, setHistory] = useState(props.history);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(storedHistory);
  }, []);


  const removeHistoryItem = (indexToRemove) => {
    const updatedHistory = history.filter((_, index) => index !== indexToRemove);
    setHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Search Term</th>
          <th className={styles.tableHeader}>Search Result</th>
          <th className={styles.tableHeader}> Actions</th>
        </tr>
      </thead>
      <tbody>
        {history.length > 0 ? (
          history.map((item, index) => (
            <tr key={index}>
              <td className={`${styles.tableCell} ${styles.tableCellCenter}`}>{item.term}</td>
              <td className={styles.tableCell}>
                <UserCard result={item.result} />
              </td>
              <td className={`${styles.tableCell} ${styles.tableCellCenter}`}>
                <button
                  className={styles.deleteButton}
                  onClick={() => removeHistoryItem(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="3"
              className={`${styles.tableCell} ${styles.tableCellCenter}`}
            >
              No history available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default HistoryTable;
