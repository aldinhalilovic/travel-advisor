import axios from 'axios';

export const getPlaceData = async (props: string) => {
  try {
    const data = axios.get(
      `https://travel-advisor.p.rapidapi.com/${props}/list-by-latlng`,
      {
        params: {
          latitude: '48.856613',
          longitude: '2.352222',
          limit: '30',
          distance: '10',
          lunit: 'km',
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key':
            '4f0338cc68mshdb53cc86cfb2e35p19f053jsn63ffee5719a2',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );
    return (await data)?.data?.data;
  } catch (error) {
    return null;
  }
};
