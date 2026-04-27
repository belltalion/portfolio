import { DetailPortfolioSection } from '@/components/DetailPortfolio/DetailPortfolioSection'
import { IntroSection } from '@/components/IntroSection'
import { OssSection } from '@/components/OssSection'
import { ProjectList } from '@/components/PortfolioList/ProjectList'

export default function Home() {
   return (
      <>
         <IntroSection />
         <DetailPortfolioSection />
         <OssSection />
         <ProjectList />
      </>
   )
}
