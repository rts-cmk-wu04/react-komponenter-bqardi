import "./Travel.css";

function Travel({travel}){
    return (
        <div className="Travel">
            <img className="Travel__image" src={`./images/${travel?.content[0].images[0]}`} alt="Travel"/>
            <div className="Travel__content">
                <h2 className="Travel__category">{travel?.title}</h2>
                <h1 className="Travel__title">{travel?.content[0].title}</h1>
                <p className="Travel__text">{travel?.content[0].text}</p>
            </div>
        </div>
    );
}

export default Travel;