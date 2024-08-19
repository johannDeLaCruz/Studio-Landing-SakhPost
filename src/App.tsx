import { Layout } from '@components/Layout'
import { HeroSection } from '@components/HeroSection'
import { AboutSection } from '@components/AboutSection'
import { CasesSection } from '@components/CasesSection'
import { ExpertiseSection } from '@components/ExpertiseSection'
import { ProcessesSection } from '@components/ProcessesSection'

function App() {
    return (
        <Layout type='light'>
            <HeroSection />
            <AboutSection />
            <CasesSection />
            <ExpertiseSection />
            <ProcessesSection />
        </Layout>
    )
}

export default App
