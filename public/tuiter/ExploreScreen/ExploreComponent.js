import PostSummaryList from "../PostSummaryItem/index.js";
const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11">
                <div class="position-relative ">
                    <input class="ps-5 form-control rounded-pill " placeholder="Search Tuiter"/>
                    <i class="position-absolute wd-search-tuiter fa fa-search" ></i>
                </div>
            </div>
            <div class="col-1">
                <i class="fa fa-cog" ></i>
            </div>
        </div>


        <ul class="nav nav-tabs mt-1 mb-1">
            <li class="nav-item">
                <a class="nav-link active " href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-xs-none d-sm-none d-xxl-block d-xl-block d-lg-block d-md-block" href="#">Entertainment</a>
            </li>

        </ul>

        <div class="position-relative">
            <img src="../../images/starship.jpg" width="100%"/>
            <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
        </div>
           ${PostSummaryList()}
    `); }
export default ExploreComponent;

