import "./index.css";
import Header from "../../components/Header";
import Content from "../..//components/Content";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
const Home = () => {
    const customers = [
        {id:1, name:'Gaz Altı Kaynak Tamiri'},
        {id:2, name:'Kömür Çeşitleri'},
        {id:3, name:'El Aletleri Tamiri'}
    ];
    return (
        <div>
            <Header/>
            <Content/>
            <div className="card-container-center container">
                {customers.map((t)=>
                    <Card name={t.name}/>
                )
                }
            </div>
            <Footer/>
        </div>
    )
}
export default Home;