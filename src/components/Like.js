import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import "./Like.css";

function Like({index, callback}){
    var [liked, setLiked] = useState([]);

    useEffect(() => {
        if (liked.length <= index) {
            let likedObj = [...liked];
            likedObj.push({
                index,
                isLiked: false,
                likeClass: ""
            });
            setLiked(likedObj);
        }
    }, [index, liked]);    
    
    function clickHandler(e){
        e.preventDefault();
        let likedObj = [...liked];
        likedObj[index].isLiked = !likedObj[index].isLiked;
        likedObj[index].likeClass = likedObj[index].isLiked ? " js-liked" : "";
        setLiked(likedObj);
        callback(liked[index]);
    }

    var title = "";
    var className = "";
    
    if (liked.length > index) {
        title = liked[index].isLiked ? "You've already liked this picture." : "Like this picture? Click to like.";
        className = `Like${liked[index].likeClass}`;
    }

    return <Link onClick={clickHandler} to="/react-komponenter-bqardi/" title={title} className={className}>&hearts;</Link>;
}

export default Like;