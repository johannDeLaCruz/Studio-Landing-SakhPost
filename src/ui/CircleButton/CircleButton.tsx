import styles from './CircleButton.module.scss'

type CircleButtonTypes = 'white' | 'transparent'

type CircleButtonProps = {
    type?: CircleButtonTypes
    children: React.ReactNode
}

export const CircleButton: React.FC<CircleButtonProps> = ({ type = 'white', children }) => {
    const buttonClass = type === 'white' ? styles.white : styles.transparent

    return <button className={`${styles.root} ${buttonClass}`}>{children}</button>
}
