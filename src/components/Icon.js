import "./Icon.css";

function Icon(props){
    return (
        <img src={`./icons/${props.file}`} alt="Ikon" className="Icon"/>
    );
}

export default Icon;