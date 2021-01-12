import "./Digest.css";
import TopHeading from "./TopHeading";

function Digest({item}){
    return (
        <article className="Digest">
            <TopHeading color="green">News Digest</TopHeading>
            <div className="Digest__content">
                {item?.content.map((content, index) => (
                    <div key={content.title} className="Digest__item">
                        <div className="Digest__icon" style={{backgroundColor: content.color}}>{index + 1}</div>
                        <h1 className="Digest__title">{content.title}</h1>
                        <p className="Digest__text">{content.text}</p>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default Digest;