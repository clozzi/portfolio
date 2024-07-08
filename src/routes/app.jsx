import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div className="main">
      <div className="side-nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <p>Make projects dropdown</p>
          </li>
          <li>
            <Link to={"/studybuddies"}>StudyBuddies</Link>
          </li>
          <li>
            <Link to={"/spoiled-potatoes"}>Spoiled Potatoes</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <p>Contact</p>
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
