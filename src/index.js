import axios from 'axios';
// const axios = require('axios');
const axios = require('axios').default;

const refs = {
  btn: document.querySelector('.btn'),
  img: document.querySelector('.img'),
  url: 'http://aws.random.cat//meow',
};

refs.btn.addEventListener('click', () => {
  fetchHandler();
});

async function fetchHandler() {
  try {
    const resp = await axios.get(refs.url);
    // const data = await resp.json();
    console.log(resp);
    refs.img.src = resp.data.file;
  } catch (err) {
    console.log(err);
  }
}
fetchHandler();
