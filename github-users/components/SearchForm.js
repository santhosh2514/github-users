import { useState } from 'react';

import styles from '../styles/SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Search GitHub User</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
