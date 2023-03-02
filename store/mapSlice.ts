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
      address: { label: 'Mechnykova St, 2, Kyiv, 01023', link: 'https://goo.gl/maps/8YZ1CDQC31ChoSjQ9' },
      coordinates: {
        latitude: 50.43774939,
        longitude: 30.52727746,
      },
      contact: {
        title: 'Country Manager',
        fullName: 'Olena Makovets',
        email: { label: 'front-office@zapal.tech', link: 'mailto:front-office@zapal.tech' },
        phone: { label: '+380 50 453 23 23', link: 'tel:+380505000050' },
      },
      timeZone: 'Europe/Kyiv',
    },
    {
      name: 'Warsaw, Poland',
      address: { label: 'Polna 11, 00-633 Warsaw, Poland', link: 'https://goo.gl/maps/UZVnn8D3BBEnwbjeA' },
      coordinates: {
        latitude: 52.2159212,
        longitude: 21.0007791,
      },
      contact: {
        title: 'Country Manager',
        fullName: 'Artem Orinchuk',
        email: { label: 'front-office@zapal.tech', link: 'mailto:front-office@zapal.tech' },
        phone: { label: '+380 50 453 23 23', link: 'tel:+380505000050' },
      },
      timeZone: 'Europe/Warsaw',
    },

    {
      name: 'Quebec, Canada',
      address: {
        label: '5025 Bd Cousineau, Longueuil, QC J3Y 3K7, Canada',
        link: 'https://goo.gl/maps/SDXRCSZcADLnpMif6',
      },
      coordinates: {
        latitude: 45.5051872,
        longitude: -73.4367196,
      },
      contact: {
        title: 'Country Manager',
        fullName: 'Viktor Dmytrenko',
        email: { label: 'front-office@zapal.tech', link: 'mailto:front-office@zapal.tech' },
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
