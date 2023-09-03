import React from 'react';
import PropTypes from 'prop-types';
import menuElementType from '../../types/menu-element';
import { classname } from "../../utils/utils";

const MenuUpElement = ({ element, onClick, handleMouseEnter, handleMouseLeave, idActiveMenuItem }) => {
  return (
    <li
      key={element.id}
      className={classname('places__option', element.id === idActiveMenuItem ? `places__option--active` : ``)}
      tabIndex={element.id}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {element.title}
    </li>
  );
};

MenuUpElement.propTypes = {
  element: menuElementType,
  onClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  idActiveMenuItem: PropTypes.number,
};

export default MenuUpElement;
