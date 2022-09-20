import axios from 'axios';

// const response = axios
//   .get('https://pixabay.com/api/?key=30029348-12068a2fdca19007a6804d89e&q')
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(error => {
//     console.log(error);
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
//     const response = await fetch(
//       `${opt.ulr}?key=${opt.KEY}&q=${name}&${opt.type}&${opt.ornt}&${opt.ss}&${opt.pp}&page=1`
//     );
//     const newName = await response.json();
//     return newName;
//   } catch (err) {
//     console.log('error', err);
//   }
// };

async getGitData()
const response = axios
  .get('https://pixabay.com/api/?key=30029348-12068a2fdca19007a6804d89e&q')
  .then(res => {
    console.log(res.data);
  })
  .catch(error => {
    console.log(error);
  });