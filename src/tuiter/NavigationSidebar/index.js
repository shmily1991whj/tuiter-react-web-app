import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";



const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group pl-1">
            <a className="list-group-item "> <i className="fab fa-twitter"> </i></a>
            <Link to="/tuiter/home" className={`list-group-item d-flex align-items-center
                    ${active === 'home'?'active':''}`}>
                <i className="fas fa-home me-1 "> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Home </span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item d-flex align-items-center
                    ${active === 'explore'?'active':''}`}>
                <i className="fas fa-hashtag me-1"> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Explore </span>

            </Link>
            <Link to="/" className={`list-group-item d-flex align-items-center
                    ${active === 'labs'?'active':''}`}>
                <i className="fas fa-running me-1"> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Labs </span>
            </Link>
            <a className={`list-group-item d-flex align-items-center
                    ${active === 'notifications'?'active':''}`}>
                <i className="fas fa-bell me-1 "> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Notifications </span>

            </a>
            <a className={`list-group-item d-flex align-items-center
                    ${active === 'messages'?'active':''}`}>
                <i className="fas fa-envelope me-1 "> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Messages </span>

            </a>
            <a className={`list-group-item d-flex align-items-center
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fas fa-bookmark me-1"> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Bookmarks </span>

            </a>
            <a className={`list-group-item d-flex align-items-center
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list-ul me-1"> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Lists </span>

            </a>
            <a className={`list-group-item d-flex align-items-center
                    ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user me-1 "> </i>
                <span className="d-flex d-none d-xl-block ns-1 "> Profile </span>

            </a>
            <a className={`list-group-item d-flex align-items-center
                    ${active === 'more'?'active':''}`}>
                <i className="fa fa-ellipsis-h me-1 "></i>
                <span className="d-flex d-none d-xl-block ns-1 "> More </span>

            </a>
            <button className="btn btn-primary rounded-pill float-end w-100 m-auto px-1">Tweet</button>


        </div>
    );
};
export default NavigationSidebar;


