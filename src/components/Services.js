import "./Services.css";

function Services({item}){
    return (
        <article className="Services">
            <img className="Services__image" src={`./images/${item?.content[0].images[0]}`} alt="Services"/>
            <h1 className="Services__title">{item?.content[0].title}</h1>
            <p className="Services__text">{item?.content[0].text}</p>
        </article>
    );
}

export default Services;