import { DetailPortfolioSection } from '@/components/DetailPortfolio/DetailPortfolioSection'
import { IntroSection } from '@/components/IntroSection'
import { ProjectList } from '@/components/PortfolioList/ProjectList'

export default function Home() {
   return (
      <>
         <IntroSection />
         <DetailPortfolioSection />
         <ProjectList />
      </>
   )
}
