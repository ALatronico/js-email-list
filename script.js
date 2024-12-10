const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail"
const generate = document.getElementById('newMails')

for(let i = 0; i < 10;i++){
  axios.get(endPoint)
    .then(response => {
      if(response.data.success){
        email = `<li>${response.data.response}</li>`
        printList(email)
      }
    })
}
 
//EVENTS
generate.addEventListener('click', () => {
  document.querySelector('ul').innerHTML = ''
  for(let i = 0; i < 10; i++){
    axios.get(endPoint)
      .then(response => {
        if(response.data.success){
          email = `<li>${response.data.response}</li>`
          printList(email)
        }
      })
  }
})

//BONUS
getRandomEmails(10)

//FUNCTIONS
function printList(list) {
  document.querySelector('ul').innerHTML += list
}

function printListBonus(list) {
list
}

function getRandomEmails(howMany){
  let email = ''
  let counter = 0
  for(let i = 0; i < howMany; i++){
    axios.get(endPoint)
      .then(response => {
        counter++
        if(response.data.success){
           email += `<li>${response.data.response}</li>`
        }
        if(counter === howMany - 1){
          document.querySelector('.loader').classList.add('d-none')
          document.getElementById('ulBonus').innerHTML = email
        }
      })
  }
}