//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

document.body.style.backgroundColor = "black"

// Title
let pageTitle = document.createElement("div")
pageTitle.innerHTML = 'My Page'
document.body.appendChild(pageTitle)
pageTitle.style.color = "white"
pageTitle.style.textAlign = "center"
pageTitle.style.fontSize = "larger"

// image
let name = document.createElement('div')
let imgDiv = document.createElement('div')
document.body.appendChild(imgDiv)
imgDiv.setAttribute("style", "margin:0auto;display:flex;align-items:center;")

let image = document.createElement('img')
image.setAttribute("style", "width:200px;height:200px;")
image.setAttribute("alt", "smiley face")
image.src = "https://c8.alamy.com/comp/F4JBW6/a-cool-looking-emoji-emoticon-smiley-face-character-with-sunglasses-F4JBW6.jpg"
imgDiv.appendChild(image)



