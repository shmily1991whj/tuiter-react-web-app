import React from "react";

const PostItem = (
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

            "icon1":"4.2k",
            "icon2":"3.5k",
            "icon3":"37.5k"
        }
    }
) => {
    if(post.title && post.content) {
        // return (`
    return(
        <li className="list-group-item ">
            <div className="row  border-secondary  mt-3">
                <div className="col-1">
                    <img alt='userImage' className="rounded-circle" src={`/images/${post.image1}`}
                         height="40px" width="40px"/>
                </div>


                <div className="col-11 wd-follow-text">
                    <div className="row">
                        <div className="col-11">
                            <span className="fw-bold">{post.name} <i className="fa fa-check-circle"> </i></span>
                            <span className="text-secondary"> {post.handle}</span>
                            <span className="text-muted"> {post.time}</span>
                            <div>
                                <span className="fw-bold"> {post.text1}</span>
                                <span className="fw-bold text-primary" >{post.text2}</span>
                                <span className="fw-bold"> {post.text3} </span>
                            </div>
                        </div>
                        <div className="col-1">
                            <i className="fa fa-ellipsis-h me-1 position-absolute wd-ellip fs-5 text-muted"></i>
                        </div>
                        <img alt='bodyImage' className="border rounded-top wd-image" src={`/images/${post.image2}`}/>
                            <div className="border rounded-bottom">
                                {/*<div className="border ms-3 mt-3">*/}
                                <div>{post.title}</div>
                                <div className="text-muted">{post.content}</div>
                            </div>

                        </div>
                        <div className="mt-2 mb-2">
                            <span className="">
                                    <a href="/" className="text-muted text-decoration-none">
                                        <i className="far fa-comment"></i> <span className="ps-3">{post.icon1}</span>
                                    </a>
                            </span>

                            <span className="ps-5">
                                <a href="/" className="text-muted text-decoration-none">
                                    <i className="fas fa-retweet"></i> <span className="ps-3">{post.icon2}</span>
                                </a>
                            </span>

                            <span className="ps-5">
                                <a href="/" className="text-muted text-decoration-none">
                                    <i className="far fa-heart"></i> <span className="ps-3">{post.icon3}</span>
                                </a>
                            </span>

                            <span className="ps-5">
                                <a href="/" className="text-muted text-decoration-none">
                                    <i className="fas fa-share-square"></i>
                                </a>
                            </span>
                        </div>

                    </div>
                </div>
        </li>
    );
    } else {
        return (
            <li className="list-group-item ">
                <div className="row  border-secondary  mt-3">
                    <div className="col-1">
                        <img alt='userImage' className="rounded-circle" src={`/images/${post.image1}`}
                             height="40px" width="40px"/>
                    </div>


                    <div className="col-11 wd-follow-text">
                        <div className="row">
                            <div className="col-11">
                                <span className="fw-bold">{post.name} <i className="fa fa-check-circle"> </i></span>
                                <span className="text-secondary"> {post.handle}</span>
                                <span className="text-muted"> {post.time}</span>
                                <div>
                                    <span className="fw-bold"> {post.text1}</span>
                                    <span className="fw-bold text-primary">{post.text2}</span>
                                    <span className="fw-bold"> {post.text3} </span>
                                </div>
                            </div>
                            <div className="col-1">
                                <i className="fa fa-ellipsis-h me-1 position-absolute wd-ellip fs-5 text-muted"></i>
                            </div>
                            <img alt='bodyImage' className="border rounded wd-image" src={`/images/${post.image2}`}/>

                        </div>
                        <div className="mt-2 mb-2">
                            <span className="">
                                    <a href="/" className="text-muted text-decoration-none">
                                        <i className="far fa-comment"></i> <span className="ps-3">{post.icon1}</span>
                                    </a>
                            </span>

                            <span className="ps-5">
                                <a href="/" className="text-muted text-decoration-none">
                                    <i className="fas fa-retweet"></i> <span className="ps-3">{post.icon2}</span>
                                </a>
                            </span>

                            <span className="ps-5">
                                <a href="/" className="text-muted text-decoration-none">
                                    <i className="far fa-heart"></i> <span className="ps-3">{post.icon3}</span>
                                </a>
                            </span>

                            <span className="ps-5">
                                <a href="/" className="text-muted text-decoration-none">
                                    <i className="fas fa-share-square"></i>
                                </a>
                            </span>
                        </div>

                    </div>
                </div>
            </li>
        );
    }
};
export default PostItem;
