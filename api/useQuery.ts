import { useQuery } from '@tanstack/react-query';
import { getPlaceData } from './instance';

export const useQueryData = (choice: string) => {
  return useQuery(['placeData'], () => getPlaceData(choice), {
    enabled: false,
    cacheTime: 0,
  });
};
