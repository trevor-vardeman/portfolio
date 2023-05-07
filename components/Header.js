import { useProjectContext } from './context/ProjectContext'

function Header() {
  const { setProject } = useProjectContext()

  return (
    <div className="flex-container">
      <p className="pointer" onClick={() => setProject(null)}>TV</p>
      <div className="flex-item">
        <ul className="flex-container">
          <li className="header-list-item">
            <a href="mailto:trevortx@gmail.com?subject=Loved Your Portfolio!&body=I'd love to hire you!" target="_blank">Email</a>
          </li>
          <li className="header-list-item">
            <a href="https://github.com/trevor-vardeman" target="_blank">GitHub</a>
          </li>
          <li className="header-list-item">
            <a href="https://www.linkedin.com/in/trevor-vardeman/" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header