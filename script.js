let closebtn = document.querySelector(".closebtn")
let openbtn = document.querySelector(".openbtn")

openbtn.addEventListener('click', () => {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
})

document.onclick = function (e) {
    if (!document.getElementById("main").contains(e.target) && !document.getElementById("mySidebar").contains(e.target)) {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        document.body.style.backgroundColor = "white";
    }
}