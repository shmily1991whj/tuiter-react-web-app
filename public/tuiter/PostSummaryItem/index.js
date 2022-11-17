import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"
const PostSummaryList = () => {
    return (`
           ${PostSummaryItem(post)}
    `); }
export default PostSummaryList;
