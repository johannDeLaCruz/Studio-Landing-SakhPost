import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface PlayerOptions {
    controls?: boolean
    autoplay?: boolean
    responsive?: boolean
    fluid?: boolean
    poster?: string
    loop?: boolean
    sources: {
        src: string
        type: string
    }[]
}

interface Player {
    dispose: () => void
    on: (event: string, callback: () => void) => void
    play: () => void
    pause: () => void
}

interface VideoPlayerProps {
    options: PlayerOptions
    wrapperStyle?: React.CSSProperties
    videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>
    onReady?: (player: Player) => void
    fillMode?: 'width' | 'height'
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    options,
    wrapperStyle,
    // videoProps,
    onReady,
    fillMode = 'width',
}) => {
    const videoRef = useRef<HTMLDivElement | null>(null)
    const playerRef = useRef<Player | null>(null)

    useEffect(() => {
        if (videoRef.current) {
            const videoElement = document.createElement('video')
            videoElement.className = 'video-js vjs-big-play-centered'
            videoElement.setAttribute('playsinline', 'true')

            if (fillMode === 'height') {
                videoElement.style.height = '100%'
                videoElement.style.width = 'auto'
            } else {
                videoElement.style.width = '100%'
                videoElement.style.height = 'auto'
            }

            videoRef.current.appendChild(videoElement)

            playerRef.current = videojs(videoElement, {
                ...options,
                html5: {
                    vhs: {
                        overrideNative: true,
                    },
                    nativeAudioTracks: false,
                    nativeVideoTracks: false,
                },
            }) as unknown as Player
            if (onReady && playerRef.current) {
                onReady(playerRef.current)
            }
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose()
                playerRef.current = null
            }
        }
    }, [options, onReady, fillMode])

    return (
        <div style={wrapperStyle} data-vjs-player>
            <div ref={videoRef} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}
