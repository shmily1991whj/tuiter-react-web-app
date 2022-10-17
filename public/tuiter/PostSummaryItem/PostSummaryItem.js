const PostSummaryItem = (post) => {
    return(`  
    ${post.map(p => (`   
    <ul class="list-group">
            <li class="list-group-item">
                <div class="row">
                    <div class="col-8">
                        <span class="text-muted"> ${p.topic}</span>
                        <div>
                            <span class="fw-bold">${p.userName} <i class ="fa fa-check-circle"> </i></span>
                            <span class="text-muted"> ${p.time} </span>
                            <p class="fw-bold">${p.title} </p>
                            <span class="text-muted"> ${p.tweets} </span>
                        </div>
                    </div>

                    <div class="col-4">
                        <img  class="wd-newsImage float-end" src=${p.image} height="100px" >
                    </div>
                </div>
            </li>
           
        </ul>    
    `)).join('')}
     `);
}

export default PostSummaryItem;