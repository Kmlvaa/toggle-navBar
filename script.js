const sidebar = document.querySelector(".sidebar")
const container = document.querySelector(".container")
function openSidebar(e){
    e.preventDefault()
    sidebar.style.width = "300px";
    container.style.opacity = "0.2";
    sidebar.classList.remove("hide");
    sidebar.classList.add("show");
};

function closeSidebar(e){
    e.preventDefault()
    sidebar.style.width = "0";
    container.style.opacity = "1";
    sidebar.style.transition = "0.6s linear"
    sidebar.classList.remove("show");
    sidebar.classList.add("hide");
};