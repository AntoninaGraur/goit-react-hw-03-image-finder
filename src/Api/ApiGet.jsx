import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export const fetchImage = async (query, page) => {
  const images = await axios({
    params: {
      q: query,
      page,
      key: '36223855-9729aa23392660264fa235b58',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    },
  });

  return images.data;
};