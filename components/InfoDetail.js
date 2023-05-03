import { useProjectContext } from './context/ProjectContext'

function InfoDetail() {
  const { project } = useProjectContext()

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
      <a href={project.links.github}>github</a><br></br>
      <a href={project.links.site}>visit site</a>
    </div>
  )
}

export default InfoDetail