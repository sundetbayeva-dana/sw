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
let qwe;
let qweqwe;

const addCards = (resp) => {
  const card = new Card(resp,{
    
    cardSelector: '.card-template', 
  })

  qwe = card.generateCard(); 
  // qweqwe = card.removeCard()
  // const cardElement = card.generateCard(); 
  // cardList.addItem(cardElement); 
}



const form = new SubmitForm({
  selector: '.form-template',
  handleFormSubmit: (formData) => {
    console.log(formData)
    console.log(+formData.character)

    api.getCharacter(+formData.character)
    .then(res => {
      console.log(res)
      addCards(res)
      cardList.setItem(qwe);
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
