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
        navheight = "597px";
        else navheight = "567px";
    document.getElementById("nav").style.height = navheight;
}

function closeNav(){
    document.getElementById("nav").style.height = "0";
}

fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav').innerHTML = data;
    });