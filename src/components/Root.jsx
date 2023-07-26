import{Link, Outlet} from"react-router-dom"


export default function Root() {
  return (
    <>
      <div className="nav-bar-rapper">
        <ul className="nav-bar">
            <li className="nav-link">
                <Link to="/"><span className="link-text">Home</span></Link>
            </li>
            <li className="nav-link">
                <Link to="/about"><span className="link-text">About</span></Link>
            </li>
            <li className="nav-link">
                <Link to="/projects"><span className="link-text">Project</span></Link>
            </li>
            <li className="nav-link">
                <Link to="/contact"><span className="link-text">Contact</span></Link>
            </li>
            <div>
                <Outlet/> 

            </div>
            
            
        </ul>
      </div>
    </>
  )
}
