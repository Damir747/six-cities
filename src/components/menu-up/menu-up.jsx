import React, { useState, useCallback } from 'react';
import { selectSort } from '../../store/sort-data/actions';
import { useDispatch, useSelector } from 'react-redux';
import MenuUpElement from './menu-up-element';
import { getMenuUpArray } from '../../store/init-data/selectors';
import { getSort } from '../../store/sort-data/selectors';

// 'places__options--opened' - для раскрытия меню

const MenuUp = () => {

  const menuUpArray = useSelector(getMenuUpArray);
  const sort = useSelector(getSort);
  const dispatch = useDispatch();
  const onClick = (sortt) => {
    dispatch(selectSort(sortt));
  };
  // ? сделать нормальную сортировку
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
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
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
