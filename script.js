/*
**Descrizione**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API
*/

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

function getRandomEmails(quante){
  let email = ''
  let contatoreRisposte = 0
  for(let i = 0; i < quante; i++){
    axios.get(endPoint)
      .then(response => {
        contatoreRisposte++
        if(response.data.success){
           email += `<li>${response.data.response}</li>`
        }
        if(contatoreRisposte === quante - 1){
          document.querySelector('.loader').classList.add('d-none')
          document.getElementById('ulBonus').innerHTML = email
        }
      })
  }
}