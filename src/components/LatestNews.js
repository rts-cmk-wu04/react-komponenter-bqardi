import "./LatestNews.css";
import TopHeading from "./TopHeading";
import {Link} from "@reach/router";
import News from "./News";

function LatestNews({item}){
    return (
        <article className="LatestNews">
            <TopHeading color="blue">Latest news</TopHeading>
            <div className="LatestNews__content">
                {item?.content.map(content => <News key={content.title} item={content}/>)}
            </div>
            <div className="LatestNews__readMore">
                <Link className="LatestNews__link" to="./">More news</Link>
            </div>
        </article>
    );
}

export default LatestNews;