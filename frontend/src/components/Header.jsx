import logo from '../assets/sitematelogo.png'

export default function Header() {
    return (
        <>
            <nav className="header">
                <img src={logo} className="logo"/>
            </nav>
        </>
    )
}