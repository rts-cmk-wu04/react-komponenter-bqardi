import "./Collection.css";

function Collection({item}){
    return (
        <article className="Collection">
            <img className="Collection__image" src={`./images/${item?.content[0].images[0]}`} alt="Collection"/>
            <img className="Collection__profile" src={`./images/${item?.content[0].images[1]}`} alt="Profile"/>
            <div className="Collection__content">
                <h2 className="Collection__category">{item?.title}</h2>
                <h1 className="Collection__title">{item?.content[0].title}</h1>
                <p className="Collection__text">{item?.content[0].text}</p>
            </div>
        </article>
    );
}

export default Collection;