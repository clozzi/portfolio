import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div className="main">
      <div className="side-nav">
        <p>Render this as sidebar navigation for site</p>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <p>Make projects dropdown</p>
          </li>
          <li>
            <Link to={"/projects/1"}>P1</Link>
          </li>
          <li>
            <Link to={"/projects/2"}>P2</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
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
