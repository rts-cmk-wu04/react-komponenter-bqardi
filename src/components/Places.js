import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import "./Places.css";

function Places({item}){
    var [index, setIndex] = useState(0);
    var content = item?.content;

    useEffect(() => {
        var timeout = setInterval(() => {
            setIndex(nextSlide(index, content.length));
        }, 10000);
        return () => clearInterval(timeout);
    }, [content, index]);

    return (
        <article className="Places">
            {item?.content.map((content, i) => {
                var activeClass = i === index ? " js-active" : "";
                return <img key={content.images[0]} className={`Places__image${activeClass}`} src={`./images/${content.images[0]}`} alt={content.title}/>
            })}
            <div className="Places__content">
                <h2 className="Places__category Category">{item?.title}</h2>
                <Link to="/react-komponenter-bqardi/" className="Places__like">&hearts;</Link>
                {item?.content.map((content, i) => {
                    var activeClass = i === index ? " js-active" : "";
                    return (
                        <div key={content.title} className={`Places__description${activeClass}`}>
                            <h1 className="Places__title">{content.title}</h1>
                            <p className="Places__text">{content.text}</p>
                        </div>
                    );
                })}
            </div>
            <nav className="Places__index">
                {item?.content.map((content, i) => {
                    var activeClass = i === index ? " js-active" : "";
                    return <span key={content.title} className={`Places__indicator${activeClass}`}>&mdash;</span>
                })}
            </nav>
        </article>
    );
}

function nextSlide(index, max){
    var i = index + 1;
    if (i >= max) {
        i = 0;
    }
    return i;
}

export default Places;