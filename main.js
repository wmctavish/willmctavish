
var content1 = document.getElementById("content1");
var content1tri = document.getElementById("traingle1");
var content2tri = document.getElementById("traingle2");
var content3tri = document.getElementById("traingle3");
var content4tri = document.getElementById("traingle4");
var content5tri = document.getElementById("traingle5");
var content6tri = document.getElementById("traingle6");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var content6 = document.getElementById("content6");


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
    if (content5.className || content6.className == "contentrow2 displayed") {
        content5.className = "contentrow2";
        content6.className = "contentrow2";
    };
    if (content5tri.className || content6tri == "triangle triangled") {
        content5tri.className = "triangle";
        content6tri.className = "triangle";
    };
});

document.getElementById("clickme5").addEventListener("click", () => {
    content5.classList.toggle("displayed");
    content5tri.classList.toggle("triangled");
    if (content4.className || content6.className == "contentrow2 displayed") {
        content4.className = "contentrow2";
        content6.className = "contentrow2";
    };
    if (content4tri.className || content6tri == "triangle triangled") {
        content4tri.className = "triangle";
        content6tri.className = "triangle";
    };
});

document.getElementById("clickme6").addEventListener("click", () => {
    content6.classList.toggle("displayed");
    content6tri.classList.toggle("triangled");
    if (content4.className || content5.className == "contentrow2 displayed") {
        content4.className = "contentrow2";
        content5.className = "contentrow2";
    };
    if (content4tri.className || content5tri.className == "triangle triangled") {
        content4tri.className = "triangle";
        content5tri.className = "triangle";
    };
});