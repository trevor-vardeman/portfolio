import { useProjectContext } from './context/ProjectContext'

function Header() {
  const { setProject } = useProjectContext()

  return (
    <div className="flex-container">
      {/* <div className="flex-item"> */}
      <p className="pointer" onClick={() => setProject(null)}>TV</p>
      {/* </div> */}
      <div className="flex-item">
        <ul className="flex-container">
          <li>
            <a href="mailto:trevortx@gmail.com?subject=Loved Your Portfolio!&body=I'd love to hire you!" target="_blank">Email</a>
          </li>
          <li>
            <a href="https://github.com/trevor-vardeman" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/trevor-vardeman/" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header