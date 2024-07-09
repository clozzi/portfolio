import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div className="main">
      <div className="side-nav">
        <ul>
          <li>
            <Link to={"/"} className="nav-link">Home</Link>
          </li>
          <li className="drop-projects">
            <a className="drop-title">Projects</a>
            <div className="drop-links">
              <Link to={"/studybuddies"} className="proj-links">StudyBuddies</Link>
              <Link to={"/spoiled-potatoes"} className="proj-links">Spoiled Potatoes</Link>
            </div>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">About</Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="display">
        <Outlet />
      </div>
    </div>
  )
}

export default App
