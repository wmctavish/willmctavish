
var content1 = document.getElementById("content1");
var content1tri = document.getElementById("traingle1");
var content2tri = document.getElementById("traingle2");
var content3tri = document.getElementById("traingle3");
var content4tri = document.getElementById("traingle4");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");

var content5 = document.getElementById("content5");
var content6 = document.getElementById("content6");
var content7 = document.getElementById("content7");
var content8 = document.getElementById("content8");

document.getElementById("clickme1").addEventListener("click", () => {
    content1.classList.toggle("displayed");
    content1tri.classList.toggle("triangled");
    if (content2.className || content3.className || content4.className == "content displayed") {
        content2.className = "content";
        content3.className = "content";
        content4.className = "content";
    };
    if (content2tri.className || content3tri.className || content4tri.className == "triangled") {
        content2tri.className = "triangle";
        content3tri.className = "triangle";
        content4tri.className = "triangle";
    };
})

document.getElementById("clickme2").addEventListener("click", () => {
    content2.classList.toggle("displayed");
    content2tri.classList.toggle("triangled");
    if (content1.className || content3.className || content4.className == "content displayed") {
        content1.className = "content";
        content3.className = "content";
        content4.className = "content";
    };
    if (content1tri.className || content3tri.className || content4tri.className == "triangled") {
        content1tri.className = "triangle";
        content3tri.className = "triangle";
        content4tri.className = "triangle";
    };
})

document.getElementById("clickme3").addEventListener("click", () => {
    content3.classList.toggle("displayed");
    content3tri.classList.toggle("triangled");
    if (content1.className || content2.className || content4.className == "content displayed") {
        content1.className = "content";
        content2.className = "content";
        content4.className = "content";
    };
    if (content1tri.className || content2tri.className || content4tri.className == "triangled") {
        content1tri.className = "triangle";
        content2tri.className = "triangle";
        content4tri.className = "triangle";
    };
})

document.getElementById("clickme4").addEventListener("click", () => {
    content4.classList.toggle("displayed");
    content4tri.classList.toggle("triangled");
    if (content1.className || content2.className || content3.className == "content displayed") {
        content1.className = "content";
        content2.className = "content";
        content3.className = "content";
    };
    if (content1tri.className || content2tri.className || content3tri.className == "triangled") {
        content1tri.className = "triangle";
        content2tri.className = "triangle";
        content3tri.className = "triangle";
    };
})



document.getElementById("clickme5").addEventListener("click", () => {
    content5.classList.toggle("displayed");
    if (content6.className || content6.className || content6.className == "content displayed") {
        content6.className = "content";
        content7.className = "content";
        content8.className = "content";
    }
})

document.getElementById("clickme6").addEventListener("click", () => {
    content6.classList.toggle("displayed");
    if (content5.className || content7.className || content8.className == "content displayed") {
        content5.className = "content";
        content7.className = "content";
        content8.className = "content";
    }
})

document.getElementById("clickme7").addEventListener("click", () => {
    content7.classList.toggle("displayed");
    if (content5.className || content6.className || content8.className == "content displayed") {
        content5.className = "content";
        content6.className = "content";
        content8.className = "content";
    }
})

document.getElementById("clickme8").addEventListener("click", () => {
    content8.classList.toggle("displayed");
    if (content5.className || content6.className || content7.className == "content displayed") {
        content5.className = "content";
        content6.className = "content";
        content7.className = "content";
    }
})