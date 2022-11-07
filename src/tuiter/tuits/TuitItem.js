import React from "react";
import './index.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import{deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        post = {
            "image1": "elon.jpg",
            "image2":"musk.jpg",
            "name": "Elon Musk",
            "handle": "elonmusk",
            "time": "・23h",
            "text1": "Amazon show about",
            "text2":"@Inspiration4x",
            "text3":"mission!",
            "title": "Countdown: Inspiration4 Mission to Space I Netflix Official site",
            "content":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4x crew on the first all-civilian orbital space...",

            "liked": true,
            "replies": "4.2k",
            "retuits": "3.5k",
            "likes": "37.5k"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(

        <li className="list-group-item">
            <div className="row  border-secondary  mt-3">
                <div className="col-1">
                    <img alt='userImage' className="rounded-circle" src={`/images/${post.image}`}
                         height="40px" width="40px"/>
                </div>
                <div className="col-11 wd-follow-text">
                    <span className="fw-bold">{post.name} <i className="fa fa-check-circle"> </i></span>
                    <span className="text-secondary"> {post.handle}</span>
                    <span className="text-muted"> {post.time}</span>
                    <i className="bi bi-x-lg float-end"
                       onClick={()=> deleteTuitHandler(post._id)}></i>


                    <div className="border rounded">
                        <p>{post.tuit}</p>
                        <p className="card-text">{post.content}</p>
                    </div>
                    <p></p>


                </div>

                <div>
                    <TuitStats
                        replies={post.replies}
                        retuits={post.retuits}
                        likes={post.likes}
                        liked={post.liked}/>
                </div>
            </div>

        </li>

    );
};

export default TuitItem;