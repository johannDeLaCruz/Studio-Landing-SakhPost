import { AboutSection } from '@components/AboutSection'
// import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { HeroSection } from '@components/HeroSection'
import { CasesSection } from '@components/CasesSection'
import { ExpertiseSection } from '@components/ExpertiseSection'
import '@assets/styles/main.scss'

function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <CasesSection />
            <ExpertiseSection />
            {/* <Footer /> */}
        </>
    )
}

export default App
