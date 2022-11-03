import "./index.css";
const Card = ({name}) => {
    return(
        <div className="card-container">
            <div className="card-content mt-5">
                <h1>{name && name}</h1>
            </div>
        </div>
    )
}
export default Card;