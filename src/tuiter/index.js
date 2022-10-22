// import {Link}
//     from "react-router-dom";
//
// function Tuiter() {
//     return(
//         <div>
//             <Link to="/">Lab</Link> |
//             <Link to="/hello">Hello</Link> |
//             <Link to="/tuiter">Tuiter</Link>
//             <h1>Tuiter</h1>
//         </div>
//     )
// }
// export default Tuiter

// import Nav from "../nav";
// import NavigationSidebar
//     from "./NavigationSidebar/index";
// import WhoToFollowListItem
//     from "./who-to-follow-list/who-to-follow-list-item";
// import PostSummaryItem
//     from "./post-summary-list/post-summary-item";
// import ExploreComponent
//     from "./explore/index";
//
//
//
// function Tuiter() {
//
//     return (
//         <div>
//             <Nav/>
//             <NavigationSidebar active="home"/>
//             <WhoToFollowListItem/>
//             <PostSummaryItem/>
//             <ExploreComponent/>
//
//             <h1>Tuiter</h1>
//         </div>
//     )
// }
// export default Tuiter

import React from "react";

import NavigationSidebar from "./NavigationSidebar/index";
import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./explore/index";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index";






function Tuiter() {
    return (

        <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active ="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6 "
                 style={{"position": "relative"}}>
                {/*<ExploreComponent/>*/}
                {/*<HomeComponent/>*/}
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>


            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
                <WhoToFollowList/>
            </div>
        </div>

    );
}

export default Tuiter





