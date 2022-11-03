import "./index.css";
const Header = () => {
    return (
        <div id="home" className="header container">
            <div className="row header-row">
                <div className="logo col-3">
                    <h1>Saray Teknik</h1>
                </div>
                <div className="col-9">
                    <ul className="header-navbar">
                        <li>Anasayfa</li>
                        <li>Hakkında</li>
                        <li>Servis</li>
                        <li>İletişim</li>
                    </ul>
                </div>
            </div>
            <div className="up-button"><a href="#home">/\</a></div>
        </div>
    )
}
export default Header;