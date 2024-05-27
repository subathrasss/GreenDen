var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var close_nav = document.getElementById("close_nav")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
close_nav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})
var productcont = document.getElementById("productcont")

var search = document.getElementById("search")

search.addEventListener("keyup", function () {
    var h1list = productcont.querySelectorAll("div")
    
    var enval = event.target.value.toUpperCase()

    for (i = 0; i < h1list.length; i++) {
        var proname=h1list[i].querySelector("h1").textContent
        
        if (proname.toUpperCase().indexOf(enval) < 0) {
            h1list[i].style.display = "none"
        }
        else {
            h1list[i].style.display = "block"
        }
    }

})
