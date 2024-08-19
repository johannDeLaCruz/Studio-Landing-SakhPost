import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { CTASection } from '@components/CTASection'
import '@assets/styles/main.scss'
import { ReactNode, useEffect } from 'react'

type LayoutType = 'light' | 'dark'

type LayoutProps = {
    children: ReactNode
    bodyClassName?: string
    type?: LayoutType
}

export function Layout({ children, bodyClassName = '', type = 'light' }: LayoutProps) {
    useEffect(() => {
        document.body.className = bodyClassName

        return () => {
            document.body.className = ''
        }
    }, [bodyClassName])

    return (
        <>
            <Header type={type} />
            <main>
                {children} <CTASection />
            </main>
            <Footer />
        </>
    )
}
