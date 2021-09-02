import styles from './../css/main.module.css';

export default function LoginForm() {
  return (
    <div className={styles.formWrap}>
      <form>
        <input type="text" name="username" />
      </form>
    </div>
  )
}