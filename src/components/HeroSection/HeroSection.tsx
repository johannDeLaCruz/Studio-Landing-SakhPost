import HeroVideo from '@assets/videos/hero-video.mp4'
import { VideoPlayer } from '@ui/VideoPlayer'
import { CircleButton } from '@ui/CircleButton'
import { useIsNotDesktop } from '@hooks/useMediaQuery'

import styles from './HeroSection.module.scss'

export const HeroSection: React.FC = () => {
    const isNotDesktop = useIsNotDesktop()
    const videoJsOptions = {
        autoplay: true,
        controls: false,
        responsive: true,
        fluid: true,
        muted: true,
        loop: true,
        sources: [
            {
                src: HeroVideo,
                type: 'video/mp4',
            },
        ],
    }
    return (
        <section id='hero' className={styles.root}>
            <VideoPlayer
                options={videoJsOptions}
                wrapperStyle={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
                // videoProps={{
                //     style: { objectFit: 'cover' },
                //     playsInline: true,
                // }}
                fillMode={'height'}
            />
            <div className={styles.content}>
                <div>
                    {!isNotDesktop && <span>Работаем c 2018</span>}
                    <h1>Разработка сайтов, дизайн, брендинг, продвижение</h1>
                </div>
                <CircleButton type='transparent'>начать проект</CircleButton>
            </div>
            {isNotDesktop && <span>Работаем c 2018</span>}
            <div className={styles.social}>
                <a href='#'>dprofile</a>
                <a href='#'>behance</a>
                <a href='#'>instagram</a>
            </div>
        </section>
    )
}
