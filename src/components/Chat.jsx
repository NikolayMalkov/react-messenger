import styles from './../css/main.module.css';
import Header from '../components/Header';
import Message from './Message';

export default function Chat() {
    return (
        <div className={styles.wrap}>

            <Header />

            <div className={styles.container}>
                <div className={styles.dialog}>

                    <Message />

                </div>

                <div className={styles.textareaWrap}>
                    <div className={styles.textareaIcons}>
                        <img src="addfile.svg" alt="addfile" />
                    </div>
                    <div className={styles.textarea}>
                        <textarea name="textarea" placeholder="type a message here"></textarea>
                    </div>
                    <div className={styles.textareaIcons}>
                        <img src="addfile.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}