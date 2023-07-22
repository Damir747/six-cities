import React from "react";
import { menuUpArray } from "../mock-data";
// 'places__options--opened' - для раскрытия меню

const MenuUp = () => {

  return (
    <>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom">
          {menuUpArray.map(el => <li className="places__option {el.class}" key={el.key} tabIndex="{el.key}">{el.title}</li>)}
        </ul>
      </form>
    </>
  );
};

export default MenuUp;
