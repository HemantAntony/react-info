import logo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="React logo"/>
            <h3>ReactFacts</h3>
            <h4>Light</h4>
            <label className="navbar--toggle">
                <input type="checkbox" className="navbar--checkbox"/>
                <span className="navbar--slider"></span>
            </label>
            <h4>Dark</h4>
        </nav>
    )
}