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

    const h2 = createNewElement('h2' , null , data[dog].name)
    appendToParent (h2, mainDogSection);

    const image = createNewElement('img' , null);
    image.setAttribute("src", data[dog].image);
    appendToParent (image, mainDogSection);

    const div = createNewElement('div' , 'main__dog-section__desc');
    appendToParent (div, mainDogSection);

    const h3 = createNewElement('h3' , null , 'Bio');
    appendToParent (h3, div);

    const p_bio = createNewElement('p' , null , data[dog].bio);
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
  if (!li) return;  
  displayADog(getButtonId);
})