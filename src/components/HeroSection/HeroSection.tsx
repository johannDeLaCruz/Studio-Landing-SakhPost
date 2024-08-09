import styles from './HeroSection.module.scss'
import HeroVideo from '@assets/videos/hero-video.mp4'
import { VideoPlayer } from '@ui/VideoPlayer'


export const HeroSection: React.FC = () => {
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
                    wrapperStyle={{ width: '100%', height: '100%' }}
                    // videoProps={{
                    //     style: { objectFit: 'cover' },
                    //     playsInline: true,
                    // }}
                    fillMode={"height"}                   
                />
        </section>
    )
}
