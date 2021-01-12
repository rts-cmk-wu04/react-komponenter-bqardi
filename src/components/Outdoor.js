import "./Outdoor.css";

function Outdoor({item}){
    return (
        <article className="Outdoor">
            <img className="Outdoor__image" src={`./images/${item?.content[0].images[0]}`} alt="Outdoor experience"/>
            <div className="Outdoor__content">
                <h2 className="Outdoor__category Category">{item?.title}</h2>
                <h1 className="Outdoor__title">{item?.content[0].title}</h1>
                <p className="Outdoor__text">{item?.content[0].text}</p>
                <figure className="Outdoor__thumbnails">
                    <img className="Outdoor__thumbnail" src={`./images/${item?.content[0].images[1]}`} alt="Outdoor experience 1"/>
                    <img className="Outdoor__thumbnail" src={`./images/${item?.content[0].images[2]}`} alt="Outdoor experience 2"/>
                    <img className="Outdoor__thumbnail" src={`./images/${item?.content[0].images[3]}`} alt="Outdoor experience 3"/>
                </figure>
            </div>
        </article>
    );
}

export default Outdoor;