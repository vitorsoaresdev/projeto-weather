/* eslint-disable linebreak-style */
const KEY = '1c658fd691ee4718a8b235419220408';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
