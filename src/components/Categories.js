import React from 'react'
import { memo } from 'react'
import { PropTypes } from 'prop-types'

const Categories = memo(function ({ activeCategory, items, onClickItemCategory }) {
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickItemCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickItemCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItemCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = { activeCategory: null, items: [] }

export default Categories
