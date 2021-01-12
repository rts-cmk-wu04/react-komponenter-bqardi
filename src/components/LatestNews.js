import "./LatestNews.css";
import TopHeading from "./TopHeading";
import {Link} from "@reach/router";

function LatestNews({item}){
    return (
        <article className="LatestNews">
            <TopHeading color="blue">Latest news</TopHeading>
            <div className="LatestNews__content">
                {item?.content.map(content => {
                    return (
                        <div>
                            <img style={{display: "block"}} key={content.title} src={`./images/${content.images[0]}`} alt={content.title}/>
                        </div>
                    )
                })}
            </div>
            <div className="LatestNews__readMore">
                <Link className="LatestNews__link" to="/">More news</Link>
            </div>
        </article>
    );
}

export default LatestNews;