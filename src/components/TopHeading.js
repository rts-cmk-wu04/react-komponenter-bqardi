import "./TopHeading.css";

function TopHeading({children, color}){
    return (
        <header className={`TopHeading TopHeading--${color}`}>
            <h1 className="TopHeading__title">{children}</h1>
        </header>
    );
}

export default TopHeading;