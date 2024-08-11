import styles from './CasesSection.module.scss'
import { CircleButton } from '@ui/CircleButton'

export const CasesSection: React.FC = () => {
    return (
        <section className={styles.root} id='cases'>
            <h2>Лучшие работы</h2>
            <div className={styles.casesList}>
                <div className={styles.caseCard}></div>
                <div className={styles.caseCard}></div>
                <div className={styles.caseCard}></div>
            </div>
            <div className={styles.buttonWrapper}>
                <CircleButton type='white'>Все кейсы</CircleButton>
            </div>
        </section>
    )
}
