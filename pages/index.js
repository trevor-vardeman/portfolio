import InfoContainer from '../components/InfoContainer'
import ProjectsContainer from '../components/ProjectsContainer'

export default function Home() {
  return (
    <div className="flex-container">
      <InfoContainer />
      <ProjectsContainer />
    </div>
  )
}