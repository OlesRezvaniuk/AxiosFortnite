import axios from 'axios';

// axios
//   .get(
//     'https://pixabay.com/api/?key=30029348-12068a2fdca19007a6804d89e&q=yellow+flowers&image_type=photo'
//   )
//   .then(res => {
//     console.log(res.data.hits);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const getGitData = async name => {
//   const opt = {
//     KEY: '30029348-12068a2fdca19007a6804d89e',
//     type: 'image_type=photo',
//     ornt: 'orientation=horizontal',
//     ss: 'safesearch=true',
//     ulr: 'https://pixabay.com/api/',
//     pp: 'per_page=40',
//   };
//   try {
//     const response = await axios(
//       `${opt.ulr}?key=${opt.KEY}&q=${name}&${opt.type}&${opt.ornt}&${opt.ss}&${opt.pp}&page=1`
//     );
//     return response;
//   } catch (err) {
//     console.log('error', err);
//   }
// };

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import Newitems from './js/RequestClass';

const refs = {
  form: document.querySelector('#search-form'),
};
const inputEl = refs.form.querySelector('input[type=text]');
const btnEl = refs.form.querySelector('button[type=submit]');
const gallery = document.querySelector('.gallery');
btnEl.textContent = '';
btnEl.insertAdjacentHTML(
  'beforeend',
  `<img class='btnEl__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1024px-OOjs_UI_icon_search-ltr.svg.png" width='16px' alt="img-svg"/>`
);

refs.form.addEventListener('submit', onSearchInput);

function onSearchInput(e) {
  e.preventDefault();
  const SearchText = e.currentTarget.elements;
  const searchWord = SearchText.searchQuery.value.trim();
  let name = searchWord;
  if (name === '') {
    return;
  }
  getGitData(name).then(nameX => initializeName(nameX));
}

const getGitData = async name => {
  const opt = {
    KEY: '30029348-12068a2fdca19007a6804d89e',
    type: 'image_type=photo',
    ornt: 'orientation=horizontal',
    ss: 'safesearch=true',
    ulr: 'https://pixabay.com/api/',
    pp: 'per_page=40',
  };
  try {
    const response = await fetch(
      `${opt.ulr}?key=${opt.KEY}&q=$cat&${opt.type}&${opt.ornt}&${opt.ss}&${opt.pp}&page=1`
    );
    return response;
  } catch (err) {
    console.log('error', err);
  }
};

function initializeName(nameX) {
  //   console.log(nameX.hits[0].webformatURL);
  const privet = nameX.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="gallery__item post" style='overflow: hidden; position: relative'>
           <a href="${largeImageURL}">
            <img
              class="gallery__image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"

            />
            </a>
            <div class="info">
                <p class="info-item" style='display: flex; flex-direction: column'>
                    <b>Likes</b><span>${likes}</span>
                </p>
                <p class="info-item" style='display: flex; flex-direction: column'>
                    <b>Views</b><span>${views}</span>
                </p>
                <p class="info-item" style='display: flex; flex-direction: column'>
                    <b>Comments</b><span>${comments}</span>
                </p>
                <p class="info-item" style='display: flex; flex-direction: column'>
                    <b>Downloads</b><span>${downloads}</span>
                </p>
            </div>
        </div>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', privet);
}
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  docClose: true,
});

console.log(lightbox);
