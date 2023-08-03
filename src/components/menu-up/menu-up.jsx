import React from "react";
import menuType from "../../types/menu";
// 'places__options--opened' - для раскрытия меню

const MenuUp = ({ menuUpArray }) => {

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
        <ul className="places__options places__options--custom">
          {menuUpArray.map((el) => <li className={['places__option', el.class].join(' ')} key={el.id} tabIndex={el.id} > {el.title}</li>)}
        </ul>
      </form >
    </React.Fragment>
  );
};

MenuUp.propTypes = {
  menuUpArray: menuType,
};

export default MenuUp;
