import "./Location.css";

function Location({item}){
    var content = item?.content[0];
    return (
        <article className="Location">
            <img className="Location__image" src={`./images/${content?.images[0]}`} alt="Location"/>
            <div className="Location__content">
                <h2 className="Location__category Category" style={{color: content?.color}}>{content?.title}</h2>
                <p className="Location__text">{content?.text}</p>
            </div>
        </article>
    );
}

export default Location;