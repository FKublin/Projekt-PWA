var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
var sharedMomentsArea = document.querySelector('#shared-moments');

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

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

/*function createCard() {
  var cardWrapper = document.createElement('div');
  cardWrapper.className = 'shared-moment-card mdl-card mdl-shadow--2dp';
  var cardTitle = document.createElement('div');
  //cardTitle.className = 'mdl-card__title';
  //cardTitle.style.backgroundImage = 'url("/src/images/sf-boat.jpg")';
  //cardTitle.style.backgroundSize = 'cover';
  //cardTitle.style.height = '90px';
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
  // document.createElement('div');
  // cardSupportingText.textContent = 'Smak';
  // document.createElement('div');
  // cardSupportingText.textContent = 'Cena';
  // document.createElement('div');
  // cardSupportingText.textContent = 'Dostępność';
  cardWrapper.appendChild(cardSupportingText);
  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);
}*/

// function createCard() {
//   var cardWrapper = document.createElement('div');
//   cardWrapper.className = 'shared-moment-card mdl-card mdl-shadow--2dp';
//   var cardTitle = document.createElement('div');
//   cardTitle.className = 'mdl-card__title';
//   cardTitle.style.backgroundImage = 'url("/src/images/sf-boat.jpg")';
//   cardTitle.style.backgroundSize = 'cover';
//   cardTitle.style.height = '180px';
//   cardWrapper.appendChild(cardTitle);
//   var cardTitleTextElement = document.createElement('h2');
//   cardTitleTextElement.className = 'mdl-card__title-text';
//   cardTitleTextElement.textContent = 'San Francisco Trip';
//   cardTitle.appendChild(cardTitleTextElement);
//   var cardSupportingText = document.createElement('div');
//   cardSupportingText.className = 'mdl-card__supporting-text';
//   cardSupportingText.textContent = 'In San Francisco';
//   cardSupportingText.style.textAlign = 'center';
//   cardWrapper.appendChild(cardSupportingText);
//   componentHandler.upgradeElement(cardWrapper);
//   sharedMomentsArea.appendChild(cardWrapper);
// }

// fetch('https://httpbin.org/get')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     createCard();
//   });