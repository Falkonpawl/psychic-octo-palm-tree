function goToFoto(){
    window.location.href='https://photos.app.goo.gl/iXqFMurErGbZWQNM6'
}

function goToMap(){
    window.location.href = 'map.html'
}
const pageWidth = document.documentElement.scrollWidth

function openNav(){
    let navheight = 0
        if(+pageWidth<391)
        navheight = "525px";
        else navheight = "495.5px";
    document.getElementById("nav").style.height = navheight;
}