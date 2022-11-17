import React from "react";
import './index.css';
// import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post

    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(

        <li className="list-group-item">
            <div className="row  border-secondary  mt-3">
                <div className="col-1">
                    <img alt='userImage' className="rounded-circle" src={`/images/${post.image}`}
                         height="40px" width="40px"/>
                </div>
                <div className="col-11 wd-follow-text">
                    <span className="fw-bold">{post.username} <i className="fa fa-check-circle"> </i></span>
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

                <div className='ms-5'>
                    <i className="far fa-comment fs-5 ms-1 me-2"></i>
                    {post.replies}
                    <i className="fas fa-retweet fs-5 ms-5 me-2"></i>
                    {post.retuits}
                    <span className='ms-5'>Likes: {post.likes}</span>
                    <i onClick={()=> dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1
                    }))}
                       className="fas fa-thumbs-up fs-5 ms-1 me-5 "></i>
                    Dislikes: {post.dislikes}
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        dislikes: post.dislikes + 1
                    }))}
                       className="fas fa-thumbs-down fs-5 ms-1 me-4"></i>


                {/*<div className='col-3'>*/}
                {/*    {liked && <i className="fas fa-heart text-danger"></i>}*/}
                {/*    {!liked && <i className="fas fa-heart"></i>}*/}
                {/*    <span className='ps-2'>{likes}</span>*/}
                {/*</div>*/}
                <i className="fas fa-share-square ms-4"></i>
            </div>
            </div>

        </li>

    );
};

export default TuitItem;