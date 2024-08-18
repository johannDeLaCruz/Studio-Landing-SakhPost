import styles from './Tag.module.scss'

type CircleButtonProps = {
    children: React.ReactNode
    icon?: string
}

export const Tag: React.FC<CircleButtonProps> = ({ children, icon }) => {
    return (
        <button className={styles.root}>
            {icon && <img src={icon} className={styles.icon} />}
            {children}
        </button>
    )
}
