// html'in DOM içeriği yüklendiğinde
window.addEventListener('DOMContentLoaded',(e) => { 
  // alert("test edildi");
    let navbarMobile = function(){
        const nCollapsible = document.body.querySelector('#mainNavbar') ;
        if(!nCollapsible){
            return ;
        }
        if(window.scrollY === 0){
            nCollapsible.classList.remove("navbar-mobile") ;
        }else{
            nCollapsible.classList.add("navbar-mobile") ;
        }
    }
    navbarMobile() ;
    document.addEventListener("scroll",navbarMobile) ;// scroll olayı varsa
    const myNavbar = document.body.querySelector("#mainNavbar") ;
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74
        }) ;
    }
}) ;