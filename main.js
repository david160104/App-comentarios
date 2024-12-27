const formComments = document.querySelector("#comments")
const commentsContainer = document.querySelector("#container-comments")

formComments.addEventListener("submit", function(evento){
    evento.preventDefault()
    const comment = document.querySelector("textarea")
    console.log(comment.value)

    if (comment.value === "") {
        alert("No has escrito nada")
        return     
    }


    const div = document.createElement("div")
    div.classList.add("comment")
    
    const now = new Date()
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Australia/Sydney",
        timeZoneName: "short",
      };

    const commentDay = Intl.DateTimeFormat("es-MX", options).format(now);
    const random = Math.random()
    const uuid = Math.floor(random * 10000)
    div.id = "C" + uuid    
    div.innerHTML = `
        <div class="comment-info">
            <img src="perfil.jpg" alt="User Image" class="user-avatar">
            <div>
                <p class="user-name">Barry Allen<span class="timestamp">${commentDay}</span></p>
                <p class="comment-text">${comment.value}</p>
            </div>
        </div>
        <div class="comment-actions">
            <button id="${uuid}">Borrar</button>
        </div>
    `

    commentsContainer.appendChild(div)
    comment.value = ""

    const buttonsDelete = document.querySelectorAll(".comment-actions button")
    for (let i = 0; i < buttonsDelete.length; i++){
        const buttonDelete = buttonsDelete[i]        
        buttonDelete.addEventListener('click', function(){
            const id = buttonDelete.getAttribute("id")
            const divToDelate = document.querySelector(`#C${id}`)            
            divToDelate && divToDelate.remove()
        })
    }
})

