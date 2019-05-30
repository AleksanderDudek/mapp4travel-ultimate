import Vue from 'vue';
import Vuex from 'vuex';
import wakanda from '@/assets/wakanda.json';

Vue.use(Vuex);

const capitalize = (s) => {
  if (typeof s !== 'string') { return ''; }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default new Vuex.Store({
  state: {
    countries: [],
    isCountriesLoaded: false,
    visitedCountries: [],
    wantToVisitCountries: [],
  },
  mutations: {
    addNoteToWantToVisit(state, countryWithNote) {
      const i = state.wantToVisitCountries.findIndex((elem) => elem.name === countryWithNote.name);
      state.wantToVisitCountries[i].note = countryWithNote.note;
    },
    addNoteToVisited(state, countryWithNote) {
      const i = state.visitedCountries.findIndex((elem) => elem.name === countryWithNote.name);
      state.visitedCountries[i].note = countryWithNote.note;
    },
    changeIsLoaded(state, flag) {
      state.isCountriesLoaded = flag;
    },
    loadCountries(state, data) {
      data.forEach((item) => state.countries.push(item));
      state.countries.push(wakanda);
      state.wantToVisitCountries.push(wakanda);
    },
    addWantToVisit(state, country) {
      if (state.wantToVisitCountries.filter((item) => item.name === country.name).length > 0) { return; }
      state.wantToVisitCountries.push(country);
    },
    addVisited(state, country) {
      if (state.visitedCountries.filter((item) => item.name === country.name).length > 0) { return; }

      state.visitedCountries.push(country);
    },
  },
  getters: {
    getCountryByName: (state) => (name) => state.countries.filter((country) => country.name === name),
    getVisitedByName: (state) => (name) => {
      const temp = state.visitedCountries.filter((country) => country.name === name);
      return temp || [];
    },
    getWantToVisitByName: (state) => (name) => {
      const temp = state.wantToVisitCountries.filter((country) => country.name === name);
      return temp || [];
    },
    getCountries: (state) => (filterType = '', filterString = '') => {
      const capitalized = capitalize(filterString);
      if (filterType.length === 0 && filterString.length === 0) {
        return state.countries;
      }
      const filteredCountries = state.countries.filter((item) => item[filterType.toLowerCase()].startsWith(capitalized));
      return filteredCountries;
    },
  },
});
