import { Link } from "@reach/router";
import "./NewYorkTimes.css";

function NewYorkTimes({item}){
    return (
        <article className={`NewYorkTimes NewYorkTimes--${item?.content[0].color}`}>
            <h1 className="NewYorkTimes__title Category">{item?.content[0].title}</h1>
            <p className="NewYorkTimes__text">{item?.content[0].text}</p>
            <div className="NewYorkTimes__readMore">
                <Link className="NewYorkTimes__link" to="./">Read more</Link>
            </div>
        </article>
    );
}

export default NewYorkTimes;