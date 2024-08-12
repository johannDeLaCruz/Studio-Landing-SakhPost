import styles from './Footer.module.scss'
import Digital from '@assets/icons/digital.svg'
import Makers from '@assets/icons/makers.svg'

export const Footer: React.FC = () => {
    return (
        <footer className={styles.root} id='footer'>
            <div className={styles.body}>
                <nav aria-label='Footer navigation'>
                    <ul>
                        <li>
                            <a href='#cases'>кейсы</a>
                        </li>
                        <li>
                            <a href='#expertise'>экспертиза</a>
                        </li>
                        <li>
                            <a href='#processes'>процессы</a>
                        </li>
                        <li>
                            <a href='#contacts'>контакты</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.contacts}>
                    <div className={styles.social}>
                        <h2>Соцсети</h2>
                        <ul>
                            <li>
                                <a href='https://dprofile.com' aria-label='Visit dprofile'>
                                    dprofile
                                </a>
                            </li>
                            <li>
                                <a href='https://behance.net' aria-label='Visit Behance'>
                                    behance
                                </a>
                            </li>
                            <li>
                                <a href='https://instagram.com' aria-label='Visit Instagram'>
                                    instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contactsInfo}>
                        <h2>на связи</h2>
                        <p>
                            <a href='mailto:makers@digital.ru'>makers@digital.ru</a>
                        </p>
                        <p>
                            <a href='tel:+79099009999'>+7 909 900-99-99</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <a href='#'>политика конфиденциальности</a>
                <div>
                    <p>© 2024</p>
                    <a href='#hero' aria-label='Back to top'>
                        вверх ↑
                    </a>
                </div>
            </div>
            <div className={styles.logo}>
                <img src={Makers} alt='makers' />
                <img src={Digital} alt='digital' />
            </div>
        </footer>
    )
}
