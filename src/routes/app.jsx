import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div className="main">
      <div className="side-nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="drop-projects">
            <p className="drop-title">Projects</p>
            <div className="drop-links">
              <Link to={"/studybuddies"} className="proj-links">StudyBuddies</Link>
              {/* <br /> */}
              <Link to={"/spoiled-potatoes"} className="proj-links">Spoiled Potatoes</Link>
            </div>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
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
