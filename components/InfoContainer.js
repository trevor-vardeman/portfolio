import { useProjectContext } from "../components/context/ProjectContext"
import About from "./About"
import InfoDetail from "./InfoDetail"

function InfoContainer() {
  const { project } = useProjectContext()

  if (project === null) {
    return <About />
  } else {
    return <InfoDetail />
  }
}

export default InfoContainer