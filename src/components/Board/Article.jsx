import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import React from "react";

const Article = props => {
    const location = useLocation();
    const { data } = location.state;

    console.log(data);
    return(
        <div className={"container-fluid"}>
            {/*<Navbar />*/}
            <div className={"blog-card"}>
                <div className={"media col-sm-6 col-xs-6"}></div>
                <div className={"card-body col-sm-6 col-xs-6"}>
                    <p className={"tagline text-center"}>{data.postDate}</p>
                    <h3 className={"title text-center"}>{data.postTitle}</h3>
                    <div className={"divider"}></div>
                    {/*userId*/}
                    <p className={"paragraph text-justify"}>{data.postContent}</p>
                    <a className={"read-more glyphicon glyphicon-chevron-down"}></a>
                </div>
            </div>
        </div>
    );
}

export default Article;