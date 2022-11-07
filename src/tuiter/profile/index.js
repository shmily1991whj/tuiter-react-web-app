import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";


const ProfileComponent = () => {
    const profileData = useSelector(state => state.profile);
    return(
        <div>
            <div className='row'>
                <div className='col-1'>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className='col-11'>
                    {/*<h3 className='fw-bold'>{profileData.firstName} {profileData.lastName}</h3>*/}
                    <h3 className='fw-bold'>{profileData.Name}</h3>
                    <span className='text-muted'>{profileData.tuitCount} Tweets</span>
                </div>
            </div>
            <img alt="banner" className='wd-banner' src={`/images/${profileData.bannerPicture}`}></img>
            <div className='mt-2 position-relative'>
                <img alt="user" className='position-absolute wd-profile rounded-circle' src={`/images/${profileData.profilePicture}`}></img>
                <Link to='/tuiter/edit-profile'>
                    <button className='btn btn-outline-dark rounded-pill float-end'>
                        Edit profile
                    </button>
                </Link>
            </div>
            <br/>
            <div className='mt-4'>
                {/*<h5 className='fw-bold mb-0'>{profileData.firstName} {profileData.lastName}</h5>*/}
                <h5 className='fw-bold mb-0'>{profileData.Name}</h5>
                <p className='text-muted'>{profileData.handle}</p>
                <p>{profileData.bio}</p>
            </div>
            <div className='text-muted'>
                <span>
                    <i className="fas fa-map-marker-alt"></i> {profileData.location}
                </span>
                <span className='ms-3'>
                    <i className="fas fa-gift"></i> Born {profileData.dateOfBirth}
                </span>
                <span className='ms-3'>
                    <i className="far fa-calendar-alt"></i> Joined {profileData.dateJoined}
                </span>
            </div>
            <div className='mt-3'>
                <span className='fw-bold'>{profileData.followingCount}</span>
                <span className='text-muted'> Following</span>
                <span className='fw-bold ms-4'>{profileData.followersCount}</span>
                <span className='text-muted'> Followers</span>
            </div>
        </div>
    );
};

export default ProfileComponent;