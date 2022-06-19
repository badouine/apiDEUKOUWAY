import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">DEUKOUWAY</span>
            <div className="navItems">
                <button className="navButton">Inscription</button>
                <button className="navButton">Se connecter</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar