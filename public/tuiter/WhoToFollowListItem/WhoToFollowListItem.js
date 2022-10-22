const WhoToFollowListItem = (who) => {
    return(`  
    ${who.map(w => (`
        <div class="list-group-item fw-bold">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src=${w.avatarIcon}
                    height="50px" width="100%"/>
                </div>
                <div class="col-8 wd-follow-text">
                    <div class="fw-bold">${w.userName}
                        <i class ="fa fa-check-circle"> </i>
                    </div>
                    <div class="text-secondary">
                        ${w.handle}
                    </div>
                </div>
                <div class="col-2">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </div>

    
    
    `)).join('')}
     `);
}

export default WhoToFollowListItem;