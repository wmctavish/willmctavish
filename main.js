
var content1 = document.getElementById("content1");
var content1tri = document.getElementById("traingle1");
var content2tri = document.getElementById("traingle2");
var content3tri = document.getElementById("traingle3");
var content4tri = document.getElementById("traingle4");
var content5tri = document.getElementById("traingle5");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");



document.getElementById("clickme1").addEventListener("click", () => {
    content1.classList.toggle("displayed");
    content1tri.classList.toggle("triangled");
    if (content2.className || content3.className == "contentrow1 displayed") {
        content2.className = "contentrow1";
        content3.className = "contentrow1";
    };
    if (content2tri.className || content3tri.className == "triangled") {
        content2tri.className = "triangle";
        content3tri.className = "triangle";
    };
});

document.getElementById("clickme2").addEventListener("click", () => {
    content2.classList.toggle("displayed");
    content2tri.classList.toggle("triangled");
    if (content1.className || content3.className == "contentrow1 displayed") {
        content1.className = "contentrow1";
        content3.className = "contentrow1";
        
    };
    if (content1tri.className || content3tri.className == "triangled") {
        content1tri.className = "triangle";
        content3tri.className = "triangle";
        
    };
});

document.getElementById("clickme3").addEventListener("click", () => {
    content3.classList.toggle("displayed");
    content3tri.classList.toggle("triangled");
    if (content1.className || content2.className == "contentrow1 displayed") {
        content1.className = "contentrow1";
        content2.className = "contentrow1";
    };
    if (content1tri.className || content2tri.className == "triangled") {
        content1tri.className = "triangle";
        content2tri.className = "triangle";
    };
});

document.getElementById("clickme4").addEventListener("click", () => {
    content4.classList.toggle("displayed");
    content4tri.classList.toggle("triangled");
    if (content5.className == "contentrow2 displayed") {
        content5.className = "contentrow2";
    };
    if (content5tri.className == "triangled") {
        content5tri.classList.toggle("triangle");
    };
});

document.getElementById("clickme5").addEventListener("click", () => {
    content5.classList.toggle("displayed");
    content5tri.classList.toggle("triangled");
    if (content4.className == "contentrow2 displayed") {
        content4.className = "contentrow2";
    };
    if (content4tri.className == "triangled") {
        content4tri.classList.toggle("triangle");
    };
});