import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { CTASection } from '@components/CTASection'
import '@assets/styles/main.scss'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
