import Like from "./Like";
import "./PlacesView.css";

function PlacesView({item, index}){
    return (
        <article className="PlacesView">
            {item?.content.map((content, i) => {
                var activeClass = i === index ? " js-active" : "";
                return <img key={content.images[0]} className={`PlacesView__image${activeClass}`} src={`./images/${content.images[0]}`} alt={content.title}/>
            })}
            <div className="PlacesView__content">
                <h2 className="PlacesView__category Category">{item?.title}</h2>
                <Like index={index} callback={(liked) =>{
                    var isLiked = liked.isLiked;
                    var likeText = isLiked ? "liked..." : "unliked :-(";
                    console.log(likeText, liked);
                }}/>
                {item?.content.map((content, i) => {
                    var activeClass = i === index ? " js-active" : "";
                    return (
                        <div key={content.title} className={`PlacesView__description${activeClass}`}>
                            <h1 className="PlacesView__title">{content.title}</h1>
                            <p className="PlacesView__text">{content.text}</p>
                        </div>
                    );
                })}
            </div>
            <nav className="PlacesView__index">
                {item?.content.map((content, i) => {
                    var activeClass = i === index ? " js-active" : "";
                    return <span key={content.title} className={`PlacesView__indicator${activeClass}`}>&mdash;</span>
                })}
            </nav>
        </article>
    );
}

export default PlacesView;