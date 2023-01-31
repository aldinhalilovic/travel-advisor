import { useQuery } from '@tanstack/react-query';
import { IGetPlaceData } from '../utils/utils';
import { getPlaceData } from './instance';

export const useQueryData = (choice: IGetPlaceData) => {
  return useQuery(['placeData', choice.place, choice.long], () =>
    getPlaceData(choice)
  );
};
