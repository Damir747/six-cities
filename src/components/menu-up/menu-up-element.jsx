import React from 'react';
import PropTypes from 'prop-types';
import menuElementType from '../../types/menu-element';
import { classname } from "../../utils/utils";

const MenuUpElement = ({ element, onClick, onMouseEnter, onMouseLeave, idActiveMenuItem }) => {
  return (
    <li
      key={element.id}
      className={classname('places__option', element.id === idActiveMenuItem ? `places__option--active` : ``)}
      tabIndex={element.id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {element.title}
    </li>
  );
};

MenuUpElement.propTypes = {
  element: menuElementType,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  idActiveMenuItem: PropTypes.number,
};

export default MenuUpElement;
