import { BurguerButton } from '@ui/BurguerButton'
import { Logo } from '@ui/Logo'
import { useIsNotDesktop } from '@hooks/useMediaQuery'

import styles from './Header.module.scss'

type HeaderType = 'light' | 'dark'

type HeaderProps = {
    type?: HeaderType
}

export const Header: React.FC<HeaderProps> = ({ type = 'light' }) => {
    const isNotDesktop = useIsNotDesktop()
    const textStyle = type === 'dark' ? styles.textPrimary : styles.textInverse
    return (
        <header className={styles.root}>
            <Logo type={type} />
            {isNotDesktop ? (
                <BurguerButton type={type} />
            ) : (
                <nav>
                    <div>
                        <a href='#cases' className={textStyle}>
                            Кейсы
                        </a>
                        <a href='#contact' className={textStyle}>
                            Контакты
                        </a>
                    </div>
                    <div>
                        <a href='#expertise' className={textStyle}>
                            Экспертиза
                        </a>
                        <a href='#processes' className={textStyle}>
                            Процессы
                        </a>
                    </div>
                </nav>
            )}
        </header>
    )
}
