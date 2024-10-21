// Form
const btnClearLocalStorage = document.getElementById("clearLocalStorage")
const btnSubmit = document.getElementById("btnSubtmit")

const usersArray = (JSON.parse(localStorage.getItem("users")) || [])

const alertMessage = (id, message, type = "danger") => {
  const alertToFill = document.getElementById(id)
  alertToFill.innerHTML = [`<div class="alert alert-${type}" role="alert">`,
                         `${message}`,
                         "</div>"].join("") // pretty cool this shit 
  setTimeout(() => {
    alertToFill.innerHTML = ""
  }, 3000);
}

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault()
  let validationAddUser = false
  const inputValueArray = [...document.querySelectorAll("input")].map(input => input.value);
  const objectUser = {"user" : inputValueArray[0], "email": inputValueArray[1], "password": inputValueArray[2], "repeat password" : inputValueArray[3]}

  if (inputValueArray.some(value => !value)) {
    alertMessage("alertBtnPlaceholder", "Rellena tus vainas")
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(objectUser["email"])) {
    alertMessage("alertEmailPlaceholder", "MEEEH email incorrecto pendejo")
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{12,}$/.test(objectUser["password"])) {
    alertMessage("alertPasswordPlaceholder", "STRIKE!!!")
  } else if (objectUser["password"] !== objectUser["repeat password"]){
    alertMessage("alertRepeatPasswordPlaceholder", "QUE SEAN IGUALES INUTIL")
  } else {
    validationAddUser = true
  }
  if (validationAddUser) {
    usersArray.push(objectUser)
    localStorage.setItem("users", JSON.stringify(usersArray))
    alertMessage("alertBtnPlaceholder", "A PROPER USER GREAT JOB MATE!!!", "success")
    setTimeout(() => {
      window.location.href = "./pages/users.html"
    }, 3000);
  }
})

btnClearLocalStorage.addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.clear()
});

// Users


// const createCards = () => {
//   const cardDivToFill = document.getElementById("cardsPlaceholder")
//   const usersLocalStorage = JSON.parse(localStorage.getItem("users"))

//   usersLocalStorage.forEach(userObj => {
//     const cardHtml = document.createElement("div")
//     cardHtml.className = "card"
//     cardHtml.innerHTML = ['<div class="card">',
//                           '<div class="card-body">',
//                             `<h5 class="card-title">${userObj.user}</h5>`,
//                             `<h6 class="card-subtitle">${userObj.email}</h6>`,
//                           '</div>',
//                         '</div>'].join("")
//     cardDivToFill.append(cardHtml)
//   }); 
// }
// createCards()
