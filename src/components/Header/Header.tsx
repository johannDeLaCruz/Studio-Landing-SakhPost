import { BurguerButton } from '@ui/BurguerButton'
import { Logo } from '@ui/Logo'

import styles from './Header.module.scss'

export const Header: React.FC = () => {
    return (
        <header className={styles.root}>
            <Logo />
            <BurguerButton />
        </header>
    )
}
