const dogsList = document.querySelector('.dogs-list');
const mainDogSection = document.querySelector('.main__dog-section');

function createNewElement(element = '', className = '', innerText = '') {
    const newElement = document.createElement(element);
    newElement.className = className;
    newElement.innerText = innerText;
    return newElement;
}

function appendToParent(element, parentElement) {
    return parentElement.append(element);
}

for (i = 0; i < data.length; i++) {
    const dogListButton = createNewElement('li' , 'dogs-list__button' , data[i].name);
    dogListButton.id = i;
    appendToParent (dogListButton, dogsList);
}

const strGoodDog = "Is naughty? "

function isGoodDog(dog) {
    let answer= '';
        if (data[dog].isGoodDog == 0) {
            answer = 'yes!'
        } else {
            answer = 'no!'
        }
    return answer;
}

function displayADog (dog) {

    mainDogSection.innerHTML = '';

    const h2 = createNewElement('h2' , '' , data[dog].name)
    appendToParent (h2, mainDogSection);

    const image = createNewElement('img' , '');
    image.setAttribute("src", data[dog].image);
    appendToParent (image, mainDogSection);

    const div = createNewElement('div' , 'main__dog-section__desc');
    appendToParent (div, mainDogSection);

    const h3 = createNewElement('h3' , '' , 'Bio');
    appendToParent (h3, div);

    const p_bio = createNewElement('p' , '' , data[dog].bio);
    appendToParent (p_bio, div);

    const p_goodDog = createNewElement('p' , 'goodDog' , (strGoodDog + isGoodDog(dog)));
    appendToParent (p_goodDog, mainDogSection);

    const button = createNewElement('button' , 'main__dog-section__btn_class' , 'Good Dog!');
    appendToParent (button, mainDogSection);

    const dogSectionButtonClick = document.querySelector('button');
    dogSectionButtonClick.addEventListener("click", function (event) {
    event.preventDefault();
    const toggleDogBehaviour = document.querySelector('button');
        if (toggleDogBehaviour.innerText == 'Good Dog!') {
            toggleDogBehaviour.innerText = 'Bad Dog!';
            data[dog].isGoodDog = true;
            document.querySelector('.goodDog').innerText = (strGoodDog + isGoodDog(dog))
        } else {
            toggleDogBehaviour.innerText = 'Good Dog!';
            data[dog].isGoodDog = false;
            document.querySelector('.goodDog').innerText = (strGoodDog + isGoodDog(dog))
        }
    })
}

const dogListButtonClick = document.querySelector('.dogs-list');
dogListButtonClick.addEventListener("click", function (event) {
  event.preventDefault();
  let getButtonId = event.target.id;
  let li = event.target.closest('li');
  if (!li || getButtonId == '') return; 
  displayADog(getButtonId);
})

const dogAddButtonClick = document.querySelector('.dogs-list__button--add');
dogAddButtonClick.addEventListener("click", function (event) {
  event.preventDefault();
  addDog ();
})

function addDog() {
mainDogSection.innerHTML = '';

const h2 = createNewElement('h2' , '' , 'Add a new Dog')
appendToParent (h2, mainDogSection);

const form = createNewElement('form' , 'form' , '');
appendToParent (form, mainDogSection);

const labelName = createNewElement('label' , '' , `Dog's name`);
labelName.setAttribute("for", "name");
appendToParent (labelName, form);

const inputName = createNewElement('input' , '' , '');
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "name");
inputName.id = 'name';
appendToParent (inputName, form);

const labelImage = createNewElement('label' , '' , `Dog's picture`)
labelImage.setAttribute("for", "image");
appendToParent (labelImage, form);

const inputImage = createNewElement('input' , '' , '');
inputImage.setAttribute("type", "url");
inputImage.setAttribute("name", "image");
inputImage.id = 'image';
appendToParent (inputImage, form);

const labelBio = createNewElement('label' , '' , `Dog's bio`)
labelBio.setAttribute("for", "bio");
appendToParent (labelBio, form);

const textareaBio = createNewElement('textarea' , '' , '');
textareaBio.setAttribute("type", "textarea");
textareaBio.setAttribute("rows", "5");
textareaBio.setAttribute("name", "bio");
textareaBio.id = 'bio';
appendToParent (textareaBio, form);

const inputSubmit = createNewElement('input' , 'form__button' , '');
inputSubmit.setAttribute("value", "Let's add a dog!");
inputSubmit.setAttribute("name", "submit");
inputSubmit.id = 'submit';
appendToParent (inputSubmit, form);


const addDogClick = document.querySelector('.form__button');
addDogClick.addEventListener("click", function(event) {
    event.preventDefault();
    const addName = document.querySelector('#name').value;
    const addImage = document.querySelector('#image').value;
    const addBio = document.querySelector('#bio').value;
    console.log(addName);
    console.log(addImage);
    console.log(addBio);
    document.querySelector('.form').reset ();
    addDogItem (addName , addImage , addBio)
})
}

function addDogItem (a ,b ,c) {
let newIdNumber =(data.length+ 1);
let newDogItem = {id: newIdNumber, name:a, bio:c, isGoodDog: false, image:b}
data.unshift(newDogItem);
dogsList.innerHTML = '';
 const li = createNewElement('li' , 'dogs-list__button dogs-list__button--add' , '+')
 appendToParent (li, dogsList);
    for (i = 0; i < data.length; i++) {
        const dogListButton = createNewElement('li' , 'dogs-list__button' , data[i].name);
        dogListButton.id = i;
        appendToParent (dogListButton, dogsList);
    }

const dogAddButtonClick = document.querySelector('.dogs-list__button--add');
dogAddButtonClick.addEventListener("click", function (event) {
    event.preventDefault();
    addDog ();
    })
}