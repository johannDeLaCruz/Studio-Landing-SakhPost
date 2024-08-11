import styles from './ExpertiseSection.module.scss'
import GlobeIcon from '@assets/icons/globe.svg'
import { expertiseCards } from './constants'

export const ExpertiseSection: React.FC = () => {
    return (
        <section className={styles.root} id='expertise'>
            <div className={styles.header}>
                <span>Экспертиза</span>
                <h2>
                    Исследуем ваш бизнес, создадим успешный продукт, обновим фирменный стиль или
                    разработаем брендинг с нуля
                </h2>
            </div>
            <div className={styles.expertiseGrid}>
                {expertiseCards.map((card, index) => (
                    <div className={styles.expertiseCard} key={index}>
                        <img src={GlobeIcon} alt='globe-icon' />
                        <div className={styles.expertiseContent}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
