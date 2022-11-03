let n = 50;
let contents = document.querySelectorAll(".text");
contents.forEach(content => {

    let displayText = content.textContent.slice(0,n);
    let moreText = content.textContent.slice(n);
    content.innerHTML=`${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
});

function readMore(btn){

    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide")
    post.querySelector(".more").classList.toggle("hide")
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

