import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import menuType from "../../types/menu";
import { getMenuUpArray, getSort } from "../../store/selectors";
import { connect } from "react-redux";
import ActionCreator from "../../store/actions";
import MenuUpElement from "./menu-up-element";

// 'places__options--opened' - для раскрытия меню

const MenuUp = ({ menuUpArray, sort, onClick = () => { } }) => {
  const [idActiveMenuItem, setMenuItem] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setMenuItem(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
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
          {menuUpArray.map((el) => <MenuUpElement
            key={el.id}
            element={el}
            onClick={() => onClick(el.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            idActiveMenuItem={idActiveMenuItem}
          />
          )}
        </ul>
      </form >
    </React.Fragment>
  );
};

MenuUp.propTypes = {
  menuUpArray: menuType,
  sort: PropTypes.number,
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  menuUpArray: getMenuUpArray(state),
  sort: getSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(sort) {
    dispatch(ActionCreator.selectSort(sort));
  },
});

export { MenuUp };
export default connect(mapStateToProps, mapDispatchToProps)(MenuUp);
