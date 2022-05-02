import './../../pages/index.css';
import Api from './../components/Api'
import SubmitForm from '../components/SubmitForm';
import Card from '../components/Card'
import Section from '../components/Section';

// let formRenderer = null;
const formSection = '.form-section'
const cardSection ='.card-section'

// const cardList = null

const api = new Api({
  url: 'https://swapi.dev/api'
})

// const card = new Card({
  
//   cardSelector: '.card-template', 
// })


const form = new SubmitForm({
  selector: '.form-template',
  handleFormSubmit: (formData) => {
    console.log(formData)
    console.log(+formData.character)


    api.getCharacter(+formData.character)
    .then(CharacterData => {
      api.getPlanet(CharacterData.homeworld)
      .then((planetData) => {
        const isCardExist = document.querySelector('.card')
        const card = new Card({CharacterData, planetData}, {  
          cardSelector: '.card-template', 
        })

        if (!isCardExist) {

          const cardElement = card.generateCard(CharacterData)
          cardList.setItem(cardElement)
                 
        } else {
          card.setValueOnElement(CharacterData)
        }

      }) 
      
      
      

    })
    
    

  }
});

const cardList = new Section({
	data: []
}, cardSection);

const formRenderer = new Section({
	data: []
}, formSection);

const formElement = form.generate();

formRenderer.setItem(formElement);

