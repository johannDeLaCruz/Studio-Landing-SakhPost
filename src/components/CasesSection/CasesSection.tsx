import styles from './CasesSection.module.scss'
import { CircleButton } from '@ui/CircleButton'
import { cases } from './constants'

export const CasesSection: React.FC = () => {
    return (
        <section className={styles.root} id='cases'>
            <h2>Лучшие работы</h2>
            <div className={styles.casesList}>
                {cases.map(({ name, img, category }, index) => (
                    <div key={index} className={styles.caseCard}>
                        <img src={img} alt='case-image' />
                        <div className={styles.content}>
                            <div className={styles.category}>
                                <h3>{category}</h3>
                            </div>
                            <div className={styles.name}>
                                <p>{name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttonWrapper}>
                <CircleButton type='white'>Все кейсы</CircleButton>
            </div>
        </section>
    )
}
