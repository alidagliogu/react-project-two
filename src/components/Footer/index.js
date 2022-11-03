import "./index.css";
const Footer = () =>{
    return(
        <div>
            <div className="footer container-fluid row pb-5">
                <div className="col-4">
                    <div className="logo footer-logo">
                        <h1>Saray Teknik</h1>
                    </div>
                    <div className="footer-item">
                        <ul>
                            <li>Anasayfa</li>
                            <li>Hakkında</li>
                            <li>Servis</li>
                            <li>İletişim</li>
                        </ul>
                    </div>

                </div>
                <div className="col-4 mt-5">
                    <h1 className="">İletişim</h1>
                    <h2>Cep: 0(534) 951 90 00</h2>
                    <h3>Adres : Saray mahallesi keresteciler sanayi sitesi Adnan Menderes bulvarı no 51/7kahramankazan/Ankara</h3>
                </div>
                <div className="col-4 footer-search">
                    <div>
                        <input className="footer-input" type={"email"} placeholder="Email"></input>
                        <button className="btn btn-danger btn-lg">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;