//? видео 5.3 разбор 6:20

const SortType = {
  POPULAR: 'Popular',

};
const SortTypes = Object.values(SortType);

const menuUpArray = [
  {
    id: 0,
    class: 'places__option--active',
    title: 'Popular',
  },
  {
    id: 1,
    class: '',
    title: 'Price: low to high',
  },
  {
    id: 2,
    class: '',
    title: 'Price: high to low',
  },
  {
    id: 3,
    class: '',
    title: 'Top rated first',
  }];

export default menuUpArray;
