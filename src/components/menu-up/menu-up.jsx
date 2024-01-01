import React, { useState, useCallback } from 'react';
import { selectSort } from '../../store/sort-data/actions';
import { useDispatch, useSelector } from 'react-redux';
import MenuUpElement from './menu-up-element';
import { menuUpArray } from '../../mock/mock-menu';
import { getSort } from '../../store/sort-data/selectors';
import { classname } from '../../utils/utils';
// ? скрывать меню при смене фильтра

const MenuUp = () => {
  // текущая сортировка
  const activeSort = menuUpArray[useSelector(getSort)].title;

  // раскрытие меню
  const [openMenu, setOpenMenu] = useState('');
  const handleOpenMenu = () => {
    if (openMenu === '') {
      setOpenMenu('places__options--opened');
    } else {
      setOpenMenu('');
    }
  };

  const dispatch = useDispatch();
  const onClick = (sortt) => {
    // выбор сортировки
    dispatch(selectSort(sortt));
    // скрыть меню
    handleOpenMenu();
  };

  // текущий пункт меню
  const [idActiveMenuItem, setMenuItem] = useState(null);
  const onMouseEnter = useCallback((item) => {
    setMenuItem(item);
  }, []);
  const onMouseLeave = useCallback(() => {
    setMenuItem(null);
  }, []);

  return (
    <React.Fragment>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={useSelector(getSort)} onClick={handleOpenMenu}>
          {activeSort}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={classname('places__options', 'places__options--custom', openMenu)}>
          {menuUpArray.map((el) =>
            <MenuUpElement
              key={el.id}
              element={el}
              onClick={() => onClick(el.id)}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              idActiveMenuItem={idActiveMenuItem}
            />
          )}
        </ul>
      </form >
    </React.Fragment>
  );
};

export default MenuUp;
