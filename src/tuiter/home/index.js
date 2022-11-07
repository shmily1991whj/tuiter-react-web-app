// import React from "react";
// import postsArray from './posts.json';
// import PostItem
//     from "./post-item";
//
// const HomeComponent = () => {
//     return(
//         <ul className="list-group">
//             {
//                 postsArray.map(post =>
//                     <PostItem
//                         key={post._id} post={post}/> )
//             }
//         </ul>
//     );
// };
// export default HomeComponent;


import React from "react";
// import PostList from "../post-list";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    return (
        <div>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );
}

export default HomeComponent;