import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";
import {findTuitThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitThunk())
    },[dispatch])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className='list-group-item'>
                    Loading...
                </li>
            }
            {
                tuits.map(post =>

                    <PostSummaryItem
                        key={post._id} post={post}/>

                )

            }
            {/*{*/}
            {/*    postsArray.map(post =>*/}
            {/*        <PostSummaryItem*/}
            {/*            key={post._id} post={post}/> )*/}
            {/*}*/}
        </ul>
    );
};
export default PostSummaryList;

