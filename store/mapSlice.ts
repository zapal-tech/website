import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'types/locations';

import { RootState } from 'store';

type State = {
  locations: Location[];
  currentLocationIndex: number;
};

const initialState: State = {
  locations: [
    {
      name: 'Kyiv, Ukraine',
      address: { label: 'Kyiv, Ukraine, Mechnykova street,', link: 'https://goo.gl/maps/8YZ1CDQC31ChoSjQ9' },
      coordinates: {
        lat: 50.43774939,
        lng: 30.52727746,
      },
      contact: {
        title: 'Client Manager',
        fullName: 'Olena Makovets',
        email: { label: 'hello@zapal.tech', link: 'mailto:ivan.salata@zapal.tech' },
        phone: { label: '+380 50 453 23 23', link: 'tel:+380505000050' },
      },
      timeZone: 'Europe/Kyiv',
    },
    {
      name: 'Warsaw, Poland',
      address: { label: 'Warsaw, Poland, bober` street, 5', link: 'https://goo.gl/maps/8YZ1CDQC31ChoSjQ9' },
      coordinates: {
        lat: 52.228471799,
        lng: 21.007912203,
      },
      contact: {
        title: 'Manager',
        fullName: 'Artem Orinchuk',
        email: { label: 'hello@zapal.tech', link: 'mailto:sasha777@ukr.net' },
        phone: { label: '+380 50 453 23 23', link: 'tel:+380505000050' },
      },
      timeZone: 'Europe/Warsaw',
    },

    {
      name: 'Quebec, Canada',
      address: { label: 'Quebec, Canada, 3205 R. France-Prime', link: 'https://goo.gl/maps/8YZ1CDQC31ChoSjQ9' },
      coordinates: {
        lat: 46.763134181448834,
        lng: -71.30615487664099,
      },
      contact: {
        title: 'Country Manager',
        fullName: 'Viktor Dmytrenko',
        email: { label: 'hello@zapal.tech', link: 'mailto:hello@zapal.tech' },
        phone: { label: '+380 50 453 23 23', link: 'tel:+380505000050' },
      },
      timeZone: 'America/Toronto',
    },
  ],
  currentLocationIndex: 0,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCurrentLocationIndex: (state, action: PayloadAction<number>) => {
      state.currentLocationIndex = action.payload;
    },
  },
});

export const { setCurrentLocationIndex } = mapSlice.actions;

export const selectLocations = ({ map }: RootState) => map.locations;
export const selectCurrentLocationIndex = ({ map }: RootState) => map.currentLocationIndex;
export const selectCurrentLocation = createSelector(
  [selectLocations, selectCurrentLocationIndex],
  (locations, index) => locations[index],
);

export default mapSlice.reducer;
