import "./TopHeading.css";

function TopHeading(props){
    return (
        <header className={`TopHeading TopHeading--${props.color}`}>
            <h1 className="TopHeading__title">{props.children}</h1>
        </header>
    );
}

export default TopHeading;