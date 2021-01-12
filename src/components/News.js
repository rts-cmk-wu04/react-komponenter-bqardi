import "./News.css";

function News({item}){
    return (
        <article className="News">
            <img className="News__image" src={`./images/${item.images[0]}`} alt={item.title}/>
            <div className="News__content">
                <h1 className="News__category Category" style={{color: item.color}}>{item.title}</h1>
                <p className="News__text">{item.text}</p>
            </div>
        </article>
    );
}

export default News;