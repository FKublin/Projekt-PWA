const shareImageButton = document.querySelector('#share-image-button');
const createPostArea = document.querySelector('#create-post');
const closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
const sharedMomentsArea = document.querySelector('#food-revievs');
const addReviewBtn = document.querySelector('#post-btn');
const addReviewForm = document. querySelector('#add-review-form')

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if(deferredPrompt)  {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome);

        if(choiceResult.outcome === 'dismissed') {
          console.log('Instalacja anulowana');
        }
        else {
          console.log('Instalacja zakonczona sukcesem');
        }
    });
  
    deferredPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

const addNewReview = () => {
  let values = {};
  $.each($('#add-review-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
console.log(values)

axios.post('http://localhost:3000/review/add', values)
.then(function (response) {
  document.getElementById('food-revievs').innerHTML = "";
  closeCreatePostModal()
   createCard(response.data);
})
.catch(function (error) {
  console.log(error);
});
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

addReviewBtn.addEventListener('click', addNewReview);

/*function createCard() {
  var cardWrapper = document.createElement('div');
  cardWrapper.className = 'food-reviev-card mdl-card mdl-shadow--2dp';
  var cardTitle = document.createElement('div');
  cardTitle.className = 'mdl-card__title';
  cardTitle.style.backgroundImage = 'url("/src/images/sf-boat.jpg")';
  cardTitle.style.backgroundSize = 'cover';
  cardTitle.style.height = '90px';
  cardWrapper.appendChild(cardTitle);
  var cardTitleTextElement = document.createElement('h4');
  cardTitleTextElement.className = 'mdl-card__title-text';
  cardTitleTextElement.textContent = 'Złoty kurczak';
  cardSupportingText.style.textAlign = 'center';
  cardTitle.appendChild(cardTitleTextElement);
  var cardSupportingText = document.createElement('div');
  cardSupportingText.className = 'mdl-card__supporting-text';
  cardSupportingText.textContent = 'zupa instant';
  cardSupportingText.style.textAlign = 'center';
  document.createElement('div');
  cardSupportingText.textContent = 'Smak';
  document.createElement('div');
  cardSupportingText.textContent = 'Cena';
  document.createElement('div');
  cardSupportingText.textContent = 'Dostępność';
  cardWrapper.appendChild(cardSupportingText);
  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);
}*/

function createCard(data) {
  data.map(data => {
    var cardWrapper = document.createElement('div');
    cardWrapper.className = 'food-reviev-card mdl-card mdl-shadow--6dp';
    cardWrapper.style.background =  '#ffff66';
    cardWrapper.style.marginBottom = '10px';
    cardWrapper.style.alignContent = 'center';
    var cardTitle = document.createElement('div');
    cardTitle.className = 'mdl-card__title';
    
    cardTitle.style.height = '90px';
    cardWrapper.appendChild(cardTitle);
    var cardTitleTextElement = document.createElement('h2');
    cardTitleTextElement.className = 'mdl-card__title-text';
    cardTitleTextElement.textContent = data.name;
    cardTitle.appendChild(cardTitleTextElement);
    var cardSupportingText = document.createElement('div');
    cardSupportingText.className = 'mdl-card__supporting-text';
    cardSupportingText.style.color = '#000';
    cardSupportingText.style.fontSize = '20px';
    cardSupportingText.textContent = data.description; 
    cardSupportingText.style.textAlign = 'left';
    cardWrapper.appendChild(cardSupportingText);
    var cardTasteRating = document.createElement('div');
    cardTasteRating.className = 'mdl-card__supporting-text';
    cardTasteRating.style.color = '#000';
    cardTasteRating.style.fontSize = '15px';
    cardTasteRating.textContent = 'Smak: ' + data.tasteRating + '\t\tCena: ' + data.priceRating + '\t\tDostępność: ' + data.availabilityRating;
    cardWrapper.appendChild(cardTasteRating);
    componentHandler.upgradeElement(cardWrapper);
    sharedMomentsArea.appendChild(cardWrapper);
  })
  console.log(data)
  
}

fetch('http://localhost:3000/review/all')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    createCard(data);
  });