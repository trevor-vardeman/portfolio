import { useProjectContext } from './context/ProjectContext'

function InfoDetail() {
  const { project } = useProjectContext()
  console.log(project)

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
      {typeof project.links.github === "string" 
        ? <a href={project.links.github}>github</a> 
        : 
          <div>
            <a href={project.links.github.client}>github client</a><br></br>
            <a href={project.links.github.server}>github server</a>
          </div>
      }<br></br>
      {project.links.site !== "" ? <a href={project.links.site}>visit site</a> : null}
    </div>
  )
}

export default InfoDetail