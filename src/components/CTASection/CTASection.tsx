import styles from './CTASection.module.scss'
import Avatar from '@assets/images/Avatar.png'
import { CircleButton } from '@ui/CircleButton'

export const CTASection: React.FC = () => {
    return (
        <section className={styles.root} id='cta'>
            <header>
                <h2>Давайте обсудим ваш проект</h2>
                <div className={styles.manager}>
                    <div className={styles.imageWrapper}>
                        <img src={Avatar} alt='manager-photo' />
                    </div>
                    <div className={styles.content}>
                        <p>Это Сергей — наш менеджер, Он с радостью ответит на все ваши вопросы</p>
                        <a href='#'>Написать в телеграм ↗</a>
                    </div>
                </div>
            </header>
            <form aria-labelledby='contact-form-title'>
                <label htmlFor='name'>как вас зовут?</label>
                <input type='text' id='name' name='name' placeholder='как вас зовут?' />
                <label htmlFor='phone'>телефон</label>
                <input type='tel' id='phone' name='phone' placeholder='телефон' />
                <label htmlFor='task'>кратко опишите задачу</label>
                <textarea
                    id='task'
                    name='task'
                    placeholder='кратко опишите задачу'
                    rows={6}
                ></textarea>
                <div className={styles.formAction}>
                    <CircleButton type='white'>написать нам</CircleButton>
                    <p>
                        Нажимая на кнопку, вы соглашаетесь с политикой{' '}
                        <a href='#'>конфиденциальности</a>
                    </p>
                </div>
            </form>
        </section>
    )
}
