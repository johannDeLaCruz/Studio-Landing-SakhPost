import { BurguerButton } from '@ui/BurguerButton'
import { Logo } from '@ui/Logo'
import { useIsNotDesktop } from '@hooks/useMediaQuery'

import styles from './Header.module.scss'

export const Header: React.FC = () => {
    const isNotDesktop = useIsNotDesktop()
    return (
        <header className={styles.root}>
            <Logo />
            {isNotDesktop ? (
                <BurguerButton />
            ) : (
                <nav>
                    <div>
                        <a href='#cases'>Кейсы</a>
                        <a href='#contact'>Контакты</a>
                    </div>
                    <div>
                        <a href='#expertise'>Экспертиза</a>
                        <a href='$processes'>Процессы</a>
                    </div>
                </nav>
            )}
        </header>
    )
}
