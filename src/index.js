import axios from 'axios';

axios
  .get('https://pixabay.com/api/', {
    params: {
      q: '',
      orientation: 'horizontal',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
    headers: {
      key: '30029348-12068a2fdca19007a6804d89e',
    },
  })
  .then(res => {
    console.log(res.data);
  })
  .catch(error => {
    console.log(error.toJSON());
  });

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//   userId: 1,
//   title: 'My title omg',
//   body: 'My omg body',
// });

// axios({
//   method: 'POST',
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   data: {
//     userId: 1,
//     title: 'My title omg',
//     body: 'My omg body',
//   },
// })
//   .then(resp => {
//     console.log(resp.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
