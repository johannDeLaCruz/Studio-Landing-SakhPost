import { Layout } from '@components/Layout'
import styles from './CasesPage.module.scss'
import { TAGS } from '@ui/Tag/constants'
import { Tag } from '@ui/Tag'
import { cards } from './constants'

export const CasesPage: React.FC = () => {
    return (
        <Layout type='dark'>
            <section className={styles.root} aria-labelledby='cases-title'>
                <div className={styles.head}>
                    <header>
                        <h1>Кейсы</h1>
                        <p>Проекты, которые генерируют прибыль и повышают репутацию бизнеса</p>
                    </header>
                    <div className={styles.tags}>
                        {TAGS.map(({ id, name, icon }) => (
                            <Tag key={id} icon={icon}>
                                {name}
                            </Tag>
                        ))}
                    </div>
                </div>
                <div className={styles.casesList}>
                    {cards.map(({ id, image, title, subtitle, description }) => (
                        <article key={id}>
                            <div className={styles.imageWrapper}>
                                <img src={image} alt={title} />
                            </div>
                            <div className={styles.content}>
                                <h2>{title}</h2>
                                <div className={styles.descriptionWrapper}>
                                    <p className={styles.subtitle}>{subtitle}</p>
                                    <p className={styles.description}>{description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </Layout>
    )
}
