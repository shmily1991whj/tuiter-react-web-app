import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpg"
        }
    }
) => {
    return(
        <li className="list-group-item ">
            <div className="row">
                <div className="col-9">
                    <div>
                        <span className="fw-bold ">{post.username} <i className="fa fa-check-circle"> </i></span>
                        <span className="text-muted"> {post.time} </span>
                        <p className="text-muted"> {post.topic}</p>
                        <p className="card-text">{post.title} </p>
                        <span className="text-muted"> {post.tweets} </span>
                    </div>
                </div>
                <div className="col-3">
                    <img alt='bodyImage' width={100} className="float-end rounded-4" src={`/images/${post.image}`}/>
                </div>


            </div>
        </li>
    );
};
export default PostSummaryItem;
