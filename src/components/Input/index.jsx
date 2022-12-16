import styles from './input.module.css';

export function Input({text}) {
    return(
        <form >
            <input className={styles.test} placeholder={text} type="text" />
        </form>
    )
}