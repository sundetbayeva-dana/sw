import './../../pages/index.css';
import Api from './../components/Api'
import SubmitForm from '../components/SubmitForm';
import Card from '../components/Card'
import Section from '../components/Section';

const api = new Api({
  url: 'https://swapi.dev/api'
})

const errorText = document.querySelector('.character-error')

// const card = new Card({  
//   cardSelector: '.card-template', 
// })

const form = new SubmitForm({
  selector: '.form-section',
  handleFormSubmit: (formData) => {

    const cardElement = document.querySelector('.card')
    if ((+formData.character <= 0 || +formData.character > 83) || !Number.isInteger(+formData.character)) {      

      errorText.classList.add('element_visible')
      errorText.textContent = 'Введите число от 1 до 83'
      if (cardElement) {
        cardElement.classList.add('element_invisible')
      }
      
    } else {
      errorText.classList.remove('element_visible')
      
      api.getCharacter(formData.character)
      .then(characterData => {
        api.getPlanet(characterData.homeworld)
        .then((planetData) => {
          const card = new Card({  
            cardSelector: '.card-template', 
          })       
          if (!cardElement) {
            
            const cardItem = card.generateCard({characterData, planetData})
            cardList.setItem(cardItem)
            
          } else {
            cardElement.classList.remove('element_invisible')
            card.setValueOnElement({characterData, planetData})
          }
  
        })
        .catch((err) => {
          errorText.classList.add('element_visible')
          errorText.textContent = 'Произошла ошибка. Попробуйте позже:)'
          console.log(err)
        })
  
      })
      .catch((err) => {
        errorText.classList.add('element_visible')
        errorText.textContent = 'Произошла ошибка. Попробуйте позже:)'
        console.log(err)
      })
    }
    
  }
});
form.setEventListeners()

const cardList = new Section('.card-section');
