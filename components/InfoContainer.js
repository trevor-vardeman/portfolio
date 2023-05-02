import { useProjectContext } from "../components/context/ProjectContext"
import About from "./About"
import AllDogs from "./projects/AllDogs"
import LyricLiker from "./projects/LyricLiker"
import Seenit from "./projects/Seenit"
import TripTracker from "./projects/TripTracker"
import WorldwideWeather from "./projects/WorldwideWeather"

function InfoContainer() {
  const { project } = useProjectContext()

  if (project === "") {
    return <About />
  } else if (project === "triptracker") {
    return <TripTracker />
  } else if (project === "seenit") {
    return <Seenit />
  } else if (project === "alldogs") {
    return <AllDogs />
  } else if (project === "lyricliker") {
    return <LyricLiker />
  } else if (project === "worldwideweather") {
    return <WorldwideWeather />
  } else return
}

export default InfoContainer