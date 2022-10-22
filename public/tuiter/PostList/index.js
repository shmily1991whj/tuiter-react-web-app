import PostItem from "./PostItem.js";
import post from "./posts.js"
const PostItemList = () => {
    return (`
        <ul class="list-group">
            ${PostItem(post)}
        </ul>
    `); }



export default PostItemList;


