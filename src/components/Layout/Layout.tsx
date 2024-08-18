import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { CTASection } from '@components/CTASection'
import '@assets/styles/main.scss'
import { ReactNode, useEffect } from 'react'

interface LayoutProps {
    children: ReactNode
    bodyClassName?: string
}

export function Layout({ children, bodyClassName = '' }: LayoutProps) {
    useEffect(() => {
        document.body.className = bodyClassName

        return () => {
            document.body.className = ''
        }
    }, [bodyClassName])

    return (
        <>
            <Header />
            <main>
                {children} <CTASection />
            </main>
            <Footer />
        </>
    )
}
