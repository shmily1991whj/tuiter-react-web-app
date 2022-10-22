const PostItem = (post) => {
        return (`
    ${post.map(p => (`  


            <div class="row border-bottom border-secondary  mt-3" >
                <div class="col-1">
                    <img class="rounded-circle" src=${p.image1}
                         height="40px" width="40px">
                </div>


                <div class="col-11 wd-follow-text">
                    <div class="row">
                        <div class="col-11">
                            <span class="fw-bold">${p.name} <i class ="fa fa-check-circle"> </i></span>
                            <span class="text-secondary"> ${p.handle}</span>
                            <span class="text-muted"> ${p.time}</span>
                            <p>
                                <span class="fw-bold"> ${post.text1}</span>
                                <span class="fw-bold" style="color: dodgerblue">${p.text2}</span>
                                <span class="fw-bold"> ${p.text3} </span>
                            </p>    
                        </div>
                        <div class="col-1">
                            <i class="fa fa-ellipsis-h me-1 position-absolute wd-ellip fs-5 text-muted"></i>
                        </div>

                        <div class="border border-secondary rounded ">
                            <img class="wd-img border-bottom border-secondary " src=${p.image2}
                              <div class="ms-3 mt-3">
                                    <div>${p.title}</div>
                                    <div class="text-muted">${p.content}</div>
<!--                                    <p class="text-muted"></p>-->
                              </div>

                        </div>   
                        <div class="mt-2 mb-2">
                            <span class="">
                                    <a href="#" class="text-muted text-decoration-none">
                                        <i class="far fa-comment"></i> <span class="ps-3">${p.icon1}</span>
                                    </a>
                            </span>
                            
                            <span class="ps-5">
                                <a href="#" class="text-muted text-decoration-none">
                                    <i class="fas fa-retweet"></i> <span class="ps-3">${p.icon2}</span>
                                </a>
                            </span>
            
                            <span class="ps-5">
                            <a href="#" class="text-muted text-decoration-none">
                                <i class="far fa-heart"></i> <span class="ps-3">${p.icon3}</span>
                            </a>
                            </span>
            
                            <span class="ps-5">
                            <a href="#" class="text-muted text-decoration-none">
                                <i class="fas fa-share-square"></i>
                            </a>
                            </span>
                         </div>
                         <div ></div>
                         
                    
                </div>
            </div>
            






    `)).join('')}
     `);

}

export default PostItem;