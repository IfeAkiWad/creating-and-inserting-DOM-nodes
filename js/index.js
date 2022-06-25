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
let imgDiv = document.createElement('div')
document.body.appendChild(imgDiv)
imgDiv.setAttribute("style", "margin:0auto;display:flex;align-items:center;")

let image = document.createElement('img')
image.setAttribute("style", "width:200px;height:200px;")
image.setAttribute("alt", "smiley face")
image.src = "https://c8.alamy.com/comp/F4JBW6/a-cool-looking-emoji-emoticon-smiley-face-character-with-sunglasses-F4JBW6.jpg"
imgDiv.appendChild(image)

//about me
let aboutMe = document.createElement('div')
document.body.appendChild(aboutMe)
aboutMe.setAttribute('class', 'about-me')
aboutMe.innerHTML = "About Me"
aboutMe.style.color = "white"
aboutMe.style.textAlign = "center"
aboutMe.style.fontSize = "larger"

// About me form
let aboutForm = document.createElement('div') 
document.body.appendChild(aboutForm)
aboutForm.innerHTML += 
`
<p> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   
</p>
`

aboutForm.style.textAlign = "center"
aboutForm.style.color = "white"
aboutForm.style.textAlign = "center"

//Comments
let commentDiv = document.createElement('div') 
document.body.appendChild(commentDiv)
let commentForm = document.createElement('div')
commentForm.innerHTML +=
`
<h1>Say Hello!</h1>
<form>
<textarea id="comment">

</textarea>
<br/>
<input type="submit" value="Add Comment">

</form>
`
commentForm.style.textAlign = "center"
commentDiv.appendChild(commentForm)

// append comment text onto DOM
commentForm.addEventListener("submit", appendComment)

function appendComment(event) {
    event.preventDefault()

    let commentValue = document.getElementById("comment").value
    console.log(commentValue)

    let commentContainer = document.createElement('div')
    document.body.appendChild(commentContainer)
    commentContainer.append(commentValue)
    commentContainer.style.color = "red"
    
    commentValue = document.getElementById("comment").value = " "
}
