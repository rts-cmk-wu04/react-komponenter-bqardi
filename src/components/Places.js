import { useEffect, useState } from "react";
import PlacesView from "./PlacesView";

function Places({item}){
    var [index, setIndex] = useState(0);
    
    var content = item?.content;

    useEffect(() => {
        var timeout = setInterval(() => {
            setIndex(nextSlide(index, content.length));
        }, 10000);
        return () => clearInterval(timeout);
    }, [content, index]);

    return <PlacesView item={item} index={index}/>;
}

function nextSlide(index, max){
    var i = index + 1;
    if (i >= max) {
        i = 0;
    }
    return i;
}

export default Places;