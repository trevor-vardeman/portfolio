import { useProjectContext } from './context/ProjectContext'
import { projects } from "./ProjectData"

function ProjectList() {
  const { setProject } = useProjectContext()

  return (
    <ul>
      <li>
        <p onClick={() => setProject(projects[0])}>TripTracker</p>
      </li>
      <li>
        <p onClick={() => setProject(projects[1])}>seenit</p>
      </li>
      <li>
        <p onClick={() => setProject(projects[2])}>All Dogs Go to the Spa</p>
      </li>
      <li>
        <p onClick={() => setProject(projects[3])}>Lyric Liker</p>
      </li>
      <li>
        <p onClick={() => setProject(projects[4])}>Worldwide Weather</p>
      </li>
    </ul>
  )
}

export default ProjectList