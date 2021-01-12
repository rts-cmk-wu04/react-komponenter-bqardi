import "./Places.css";

function Places({item}){
    return (
        <article className="Places">
            <img className="Places__image" src={`./images/${item?.content[0].images[0]}`} alt="Places"/>
            <div className="Places__content">
                <h2 className="Places__category Category">{item?.title}</h2>
                <span className="Places__like">&hearts;</span>
                <div className="Places__description">
                    <h1 className="Places__title">{item?.content[0].title}</h1>
                    <p className="Places__text">{item?.content[0].text}</p>
                </div>
            </div>
            <nav className="Places__index">
                <span className="Places__indicator js-active">&mdash;</span>
                <span className="Places__indicator">&mdash;</span>
                <span className="Places__indicator">&mdash;</span>
            </nav>
        </article>
    );
}

export default Places;