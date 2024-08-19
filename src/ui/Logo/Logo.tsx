import styles from './Logo.module.scss'

type LogoType = 'light' | 'dark'

type LogoProps = {
    type?: LogoType
}

export const Logo: React.FC<LogoProps> = ({ type = 'light' }) => {
    return (
        <div className={styles.root}>
            <span className={type === 'dark' ? styles.textPrimary : styles.textInverse}>
                makers
            </span>
            <span className={type === 'dark' ? styles.textPrimary : styles.textInverse}>
                digital
            </span>
        </div>
    )
}
