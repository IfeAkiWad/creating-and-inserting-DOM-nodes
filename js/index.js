//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

document.body.style.backgroundColor = "black"

// Title
let pageTitle = document.createElement("div")
pageTitle.innerHTML = 'My Page'
document.body.appendChild(pageTitle)
pageTitle.style.color = "white"
pageTitle.style.textAlign = "center"