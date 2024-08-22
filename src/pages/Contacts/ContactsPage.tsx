import { Layout } from '@components/Layout'
import styles from './ContactsPage.module.scss'

export const ContactsPage: React.FC = () => {
    return (
        <Layout type='dark'>
            <section className={styles.root} aria-labelledby='contact-title'>
                <div className={styles.contactsWrapper}>
                    <h1>Cвяжитесь с нами</h1>
                    <div className={styles.contacts}>
                        <div>
                            <h2>телефон</h2>
                            <p>
                                <a href='tel:+79099009999'>+7 909 900-99-99</a>
                            </p>
                        </div>
                        <div>
                            <h2>почта</h2>
                            <p>
                                <a href='mailto:makers@digital.ru'>makers@digital.ru</a>
                            </p>
                        </div>
                        <div>
                            <h2>Телеграм</h2>
                            <p>
                                <a href='@username'>@username</a>
                            </p>
                        </div>
                        <div>
                            <h2>Время работы</h2>
                            <p>По будням с 10 до 18</p>
                        </div>
                    </div>
                </div>
                <div className={styles.addressList}>
                    <div className={styles.addressItem}>
                        <div className={styles.content}>
                            <h3>главный офис</h3>
                            <address>Южно-Сахалинск, проспект мира, 1196</address>
                        </div>
                        <div className={styles.iframeWrapper}>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=...'
                                title='Map of главный офис'
                                width='100%'
                                height='100%'
                                frameBorder='0'
                                allowFullScreen={true}
                                loading='lazy'
                            ></iframe>
                        </div>
                    </div>
                    <div className={styles.addressItem}>
                        <div className={styles.content}>
                            <h3>Студия разработки</h3>
                            <address>Южно-Сахалинск, проспект мира, 1196</address>
                        </div>
                        <div className={styles.iframeWrapper}>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=...'
                                title='Map of Студия разработки'
                                width='100%'
                                height='100%'
                                frameBorder='0'
                                allowFullScreen={true}
                                loading='lazy'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
