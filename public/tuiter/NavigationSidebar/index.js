const NavigationSidebar = (active) => {
    switch(active) {
        case 'home':
            return (`
            <div class="me-1 w-100">
                <div class="list-group w-100 float-end">
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class ="fab fa-twitter"> </i>
                    </a>
                    <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action active d-flex align-items-center">
                        <i class ="fas fa-home me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1 "> Home </span>
                    </a>
                    
                                        
                    <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-hashtag me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Explore </span>
                    </a>
                    <a href="#notification"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-bell me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Notifications </span>
                    </a>
                    <a href="#Message"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-envelope me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Messages </span>
                    </a>
                    <a href="#bookmarks"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-bookmark me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Bookmarks </span>
                    </a>

                    <a href="#lists"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fa fa-list-ul me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Lists </span>
                    </a>

                    <a href="#profile"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fa fa-user me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Profile </span>
                    </a>

                    <a href="#more"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fa fa-ellipsis-h me-1"></i>
                        <span class="d-flex d-none d-xl-block ns-1"> More </span>
                    </a>
                </div>

                <button class="btn btn-primary rounded-pill float-end w-100 m-auto px-1">Tweet</button>


            </div>
 `);
        case 'explore':
            return (`
            <div class="me-1 w-100">
                <div class="list-group w-100 float-end">
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class ="fab fa-twitter"> </i>
                    </a>
                    <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-home me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1 "> Home </span>
                    </a>
                    
                                        
                    <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action d-flex align-items-center active">
                        <i class ="fas fa-hashtag me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Explore </span>
                    </a>
                    <a href="#notification"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-bell me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Notifications </span>
                    </a>
                    <a href="#Message"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-envelope me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Messages </span>
                    </a>
                    <a href="#bookmarks"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fas fa-bookmark me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Bookmarks </span>
                    </a>

                    <a href="#lists"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fa fa-list-ul me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Lists </span>
                    </a>

                    <a href="#profile"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class ="fa fa-user me-1"> </i>
                        <span class="d-flex d-none d-xl-block ns-1"> Profile </span>
                    </a>

                    <a href="#more"
                       class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fa fa-ellipsis-h me-1"></i>
                        <span class="d-flex d-none d-xl-block ns-1"> More </span>
                    </a>
                </div>

                <button class="btn btn-primary rounded-pill float-end w-100 m-auto px-1">Tweet</button>


            </div>
 `);
    }
};
export default NavigationSidebar;

