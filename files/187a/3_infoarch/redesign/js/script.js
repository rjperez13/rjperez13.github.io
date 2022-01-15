function initialize() {
    resizeColumnHeight();
    resizeBottom();
}

function resizeColumnHeight() {
    sidebarHeight = document.getElementById('sidebar').offsetHeight;
    contentHeight = document.getElementById('content').offsetHeight;
    if (contentHeight > sidebarHeight) {
        document.getElementById('sidebar').style.height=contentHeight-42+'px';
    } else if (contentHeight < sidebarHeight) {
        document.getElementById('content').style.height=sidebarHeight-42+'px';
    }
}

function resizeBottom() {
    windowHeight = window.innerHeight;
    bottomHeight = document.getElementById('page-container').offsetHeight;
    document.getElementById('background-bottom').style.height=windowHeight - (bottomHeight+50)+'px;';
}

window.onresize = function(){
    resizeBottom();
};