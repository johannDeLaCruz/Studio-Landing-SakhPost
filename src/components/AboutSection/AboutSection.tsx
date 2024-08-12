import styles from './AboutSection.module.scss'
import { VideoPlayer } from '@ui/VideoPlayer'
import AdvantageVideo from '@assets/videos/advantage-video.mp4'

export const AboutSection: React.FC = () => {
    const videoJsOptions = {
        autoplay: true,
        controls: false,
        responsive: true,
        fluid: true,
        muted: true,
        loop: true,
        sources: [
            {
                src: AdvantageVideo,
                type: 'video/mp4',
            },
        ],
    }
    return (
        <section className={styles.root} id='about'>
            <header>
                <span>О нас</span>
                <h2>создаем топовые решения, которые радуют и превосходят ваши ожидания</h2>
            </header>
            <div className={styles.advantages}>
                <div className={styles.advantageItem}>
                    <span>120+</span>
                    <span>Реализованных проектов</span>
                </div>
                <div className={styles.advantageItem}>
                    <span>6</span>
                    <span>Лет на рынке</span>
                </div>
                <div className={styles.advantageItem}>
                    <span>18</span>
                    <span>Талантов в команде</span>
                </div>
            </div>
            <VideoPlayer
                options={videoJsOptions}
                wrapperStyle={{
                    borderRadius: '1rem',
                    overflow: 'hidden',
                }}
                // videoProps={{
                //     style: { objectFit: 'cover' },
                //     playsInline: true,
                // }}
                fillMode={'width'}
            />
        </section>
    )
}
