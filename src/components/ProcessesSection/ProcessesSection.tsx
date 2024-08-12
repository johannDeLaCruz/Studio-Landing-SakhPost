import styles from './ProcessesSection.module.scss'
import { processesCards } from './constants'

export const ProcessesSection: React.FC = () => {
    return (
        <section className={styles.root} id='processes'>
            <div className={styles.header}>
                <span>Процессы</span>
                <h2>результат — часть работы, но не менее важны коммуникация и процессы</h2>
            </div>
            <div className={styles.processesGrid}>
                {processesCards.map((card, index) => (
                    <div key={index} className={styles.processCard}>
                        <figure className={styles.imageWrapper}>
                            <img src='#' alt='process-image' />
                        </figure>
                        <div className={styles.content}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
