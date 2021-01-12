import "./Services.css";

function Services({item}){
    var pTag = "";
console.log(item?.content[0])
    if (item?.content[0].color !== "small") {
        pTag = <p className="Services__text">{item?.content[0].text}</p>;
    }

    return (
        <article className={`Services${pTag ? "" : " Services--small"}`}>
            <img className="Services__image" src={`./images/${item?.content[0].images[0]}`} alt="Services"/>
            <h1 className="Services__title">{item?.content[0].title}</h1>
            {pTag}
        </article>
    );
}

export default Services;