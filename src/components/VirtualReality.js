import "./VirtualReality.css";

function VirtualReality({item}){
    return (
        <article className="VirtualReality">
            <img className="VirtualReality__image" src={`./images/${item?.content[0].images[0]}`} alt="VirtualReality"/>
            <div className="VirtualReality__bookmark">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.07" height="27.004" viewBox="0 0 10.07 27.004">
                <path id="Path_19" data-name="Path 19" d="M381.951,2543v27l5.082-5.734,4.988,5.734v-27Z" transform="translate(-381.951 -2543)" fill="red"/>
            </svg>
            </div>
            <div className="VirtualReality__content">
                <h1 className="VirtualReality__title">{item?.content[0].title}</h1>
                <h2 className="VirtualReality__category Category" style={{color: item?.content[0].color}}>{item?.title}</h2>
            </div>
        </article>
    );
}

export default VirtualReality;