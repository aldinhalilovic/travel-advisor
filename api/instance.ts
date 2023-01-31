import axios from 'axios';
import { IGetPlaceData } from '../utils/utils';

export const getPlaceData = async (choice: IGetPlaceData) => {
  try {
    const data = axios.get(
      `https://travel-advisor.p.rapidapi.com/${choice.place}/list-by-latlng`,
      {
        params: {
          latitude: choice.lat,
          longitude: choice.long,
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
