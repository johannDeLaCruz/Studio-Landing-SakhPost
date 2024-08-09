import styles from './BurguerButton.module.scss'

export const BurguerButton: React.FC = () => {
    return (
        <div className={styles.root}>
            <span className={styles.long}></span>
            <span className={styles.short}></span>
            <span className={styles.long}></span>
        </div>
    )
}
