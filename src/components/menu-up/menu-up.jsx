import React from "react";
import PropTypes from "prop-types";
import menuType from "../../types/menu";
import { getMenuUpArray } from "../../store/selectors";
import { connect } from "react-redux";
import ActionCreator from "../../store/actions";

// 'places__options--opened' - для раскрытия меню

const MenuUp = ({ menuUpArray, onChange = () => { } }) => {

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
          {menuUpArray.map((el) => <li
            key={el.id}
            className={['places__option', el.class].join(' ')}
            tabIndex={el.id}
            onChange={onChange}>
            {el.title}
          </li>)}
        </ul>
      </form >
    </React.Fragment>
  );
};

MenuUp.propTypes = {
  menuUpArray: menuType,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  menuUpArray: getMenuUpArray(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(sort) {
    dispatch(ActionCreator.selectSort(sort));
  },
});

export { MenuUp };
export default connect(mapStateToProps, { onChange: ActionCreator.selectSort })(MenuUp);
