import "./Card.css";

function Card({details, children}){
    return (
        <div className={`Card ${details?.span}`} style={{backgroundColor: details?.color}}>
            {children}
        </div>
    );
}

export default Card;