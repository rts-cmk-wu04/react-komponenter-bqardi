import "./Travel.css";

function Travel({item}){
    return (
        <div className="Travel">
            <img className="Travel__image" src={`./images/${item?.content[0].images[0]}`} alt="Travel"/>
            <div className="Travel__content">
                <h2 className="Travel__category Category">{item?.title}</h2>
                <h1 className="Travel__title">{item?.content[0].title}</h1>
                <p className="Travel__text">{item?.content[0].text}</p>
            </div>
        </div>
    );
}

export default Travel;