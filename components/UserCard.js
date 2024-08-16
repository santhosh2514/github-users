import styles from "../styles/UserCard.module.css";

const UserCard = ({ result }) => {
  return (
    <div className={styles.usercard}>
      <div className={styles.image_container}>
        <p>User image</p>
        <img src={result.avatar_url} alt="User Avatar" className={styles.avatar} />
      </div>
      <div>
        <p>Github User Name</p>
        <p className={styles.username}>{result.login}</p>
      </div>
    </div>
  );
};

export default UserCard;
