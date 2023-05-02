import { useProjectContext } from './context/ProjectContext'

function ProjectList() {
  const { setProject } = useProjectContext()

  return (
    <ul>
      <li>
        <p onClick={() => setProject("triptracker")}>TripTracker</p>
      </li>
      <li>
        <p onClick={() => setProject("seenit")}>seenit</p>
      </li>
      <li>
        <p onClick={() => setProject("alldogs")}>All Dogs Go to the Spa</p>
      </li>
      <li>
        <p onClick={() => setProject("lyricliker")}>Lyric Liker</p>
      </li>
      <li>
        <p onClick={() => setProject("worldwideweather")}>Worldwide Weather</p>
      </li>
    </ul>
  )
}

export default ProjectList