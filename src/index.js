import axios from 'axios';

axios
  .get('https://pixabay.com/api/?key=30029348-12068a2fdca19007a6804d89e&q')
  .then(res => {
    console.log(res.data);
  })
  .catch(error => {
    console.log(error.toJSON());
  });
//
axios
  .get('https://pixabay.com/api/?key=30029348-12068a2fdca19007a6804d89e&q')
  .then(res => {
    console.log(res.data);
  })
  .catch(error => {
    console.log(error.toJSON());
  });
