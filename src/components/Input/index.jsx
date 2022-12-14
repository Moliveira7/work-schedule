import styles from './input.module.css';

export function Input({text}) {
    return(
        <form className={styles.test}>
            <input placeholder={text} type="text" />
        </form>
    )
}