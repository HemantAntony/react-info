import logo from "../images/logo.png"

export default function Navbar({darkMode, toggleDarkMode}) {
    return (
        <nav className={darkMode ? "dark" : "light"}>
            <img src={logo} alt="React logo" className="nav--image"/>
            <h3 className="nav--title">ReactFacts</h3>
            <h4 className="nav--light">Light</h4>
            <label className="navbar--toggle">
                <input type="checkbox" className="navbar--checkbox" onClick={toggleDarkMode}/>
                <span className="navbar--slider"></span>
            </label>
            <h4 className="nav--dark">Dark</h4>
        </nav>
    )
}