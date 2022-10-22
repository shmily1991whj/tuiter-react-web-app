import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <div class="list-group-item fw-bold">Who to follow</div>
            ${WhoToFollowListItem(who)}
            </div>
        </ul>>
    `); }
export default WhoToFollowList;