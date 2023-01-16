function toggle(x){
    var elm = document.getElementById("list-"+x);
    elm.classList.toggle("remove-"+x);
    var elm = document.getElementById("icon-"+x);
    elm.classList.toggle("rotate");
}