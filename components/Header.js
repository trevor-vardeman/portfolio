import Link from 'next/link'

function Header() {
  return (
    <div className="flex-container">
      {/* <div className="flex-item"> */}
        <Link className="link" href="/">TV</Link>
      {/* </div> */}
      {/* <div className="flex-item"> */}
        <div className="flex-container">
          {/* <li className="flex-item"> */}
            <p>Email</p>
          {/* </li> */}
          {/* <li> */}
            <p>GitHub</p>
          {/* </li> */}
          {/* <li> */}
            <p>LinkedIn</p>
          {/* </li> */}
        </div>
      {/* </div> */}
    </div>
  )
}

export default Header