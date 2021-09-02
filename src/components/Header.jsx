import styles from './../css/main.module.css';

export default function Header(){
    return (
        <div className={styles.header}>
        <div className={styles.profileInfo}>
          <span className={styles.avatar}>
            <img src="user.png" alt="avatar" />
          </span>
          <span className={styles.username}>
            <p>Username</p>
            <p>last online 2 hours</p>
          </span>
        </div>
        <div className={styles.options}>
          <img src="clip.svg" alt="clip" />
          <img src="options.svg" alt="options" />
        </div>
      </div>
    )
}