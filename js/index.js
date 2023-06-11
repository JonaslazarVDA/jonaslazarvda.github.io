var lastScroll = 0;

var customScroll = (e) => {
    e.preventDefault();
    st = window.pageYOffset || document.documentElement.scrollTop;
    if (lastScroll%document.documentElement.clientHeight != 0 && lastScroll != document.documentElement.scrollHeight-document.documentElement.clientHeight) {
        lastScroll = st <= 0? 0 : st;
        return
    }
    let page = Math.floor(st/document.documentElement.clientHeight)+(st > lastScroll? 1 : 0);
    window.scrollTo({top: page*document.documentElement.clientHeight, behavior: "smooth",});
    lastScroll = st <= 0? 0 : st;
    let navbar = document.querySelector(".navbar");
    if (page == 0)
        navbar.classList.add("navtop");
    else
        navbar.classList.remove("navtop");
}

document.addEventListener("scroll", customScroll, false);
document.addEventListener("mousewheel", customScroll, false);
document.addEventListener("touchmove", customScroll, false);
