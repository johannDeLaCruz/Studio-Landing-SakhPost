import styles from './BurguerButton.module.scss'

type BurguerButtonType = 'light' | 'dark'

type BurguerButtonProps = {
    type?: BurguerButtonType
}

export const BurguerButton: React.FC<BurguerButtonProps> = ({ type = 'light' }) => {
    const textStyle = type === 'dark' ? styles.iconPrimary : styles.iconInverse

    return (
        <div className={styles.root}>
            <span className={`${styles.long} ${textStyle}`}></span>
            <span className={`${styles.short} ${textStyle}`}></span>
            <span className={`${styles.long} ${textStyle}`}></span>
        </div>
    )
}
