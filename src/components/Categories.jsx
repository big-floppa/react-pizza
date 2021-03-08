import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ categories, activeCategory, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories?.map((item, idx) => {
          return (
            <li
              key={`${item}_${item.id}`}
              className={activeCategory === idx ? 'active' : null}
              onClick={() => {
                onClickCategory(idx);
              }}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.number.isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  categories: [],
  activeCategory: 0,
};

export default Categories;
