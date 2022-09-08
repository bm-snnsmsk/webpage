/* navbar START */ 
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
    // navbar ikonlarının seçili olmasını sağlar
    const myNavbar = document.body.querySelector("#mainNavbar") ;
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74
        }) ;
    }
}) ;
let btnCanvas = document.querySelectorAll('.btn-close-canvas') ;
for(let i = 0 ; i < btnCanvas.length ; i++){
    btnCanvas[i].addEventListener('click', () => {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click() ; // data-bs-dismiss="offcanvas" bu özelliğe sahip elementi zorla tıkla
    }) ;
}

/* navbar END */ 