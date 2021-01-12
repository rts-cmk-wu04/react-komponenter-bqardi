import News from "./News";
import "./Lifestyle.css";

function Lifestyle({item}){
    return (
        <article className="Lifestyle">
            {item?.content.map(content => <News key={content.title} item={content}/>)}
        </article>
    );
}

export default Lifestyle;