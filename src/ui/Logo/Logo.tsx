import styles from './Logo.module.scss'

export const Logo: React.FC = () => {
    return (
        <div className={styles.root}>
            <span>makers</span>
            <span>digital</span>
        </div>
    )
}
