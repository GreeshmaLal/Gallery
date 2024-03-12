import React, { useEffect, useState } from 'react';
import { category } from '../../Constant';

const CategoryTree=({ data,setCategoryFilter })=> {
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedItems, setExpandedItems] = useState({});

  const handleCheckboxChange = (categoryId, isChecked) => {
    setCheckedItems({
      ...checkedItems,
      [categoryId]: isChecked
    });
  };

  const handleCategoryClick = (categoryId) => {
    setExpandedItems({
      ...expandedItems,
      [categoryId]: !expandedItems[categoryId]
    });
  };
  useEffect(()=>{
    setCategoryFilter(Object.keys(checkedItems).filter(id => checkedItems[id]))
},[checkedItems])

  const renderCategory = (category) => {
    const isChecked = checkedItems[category.id] || false;
    const isExpanded = expandedItems[category.id] || false;

    return (
      <div key={category.id} >
        <div className='filter'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => handleCheckboxChange(category.id, e.target.checked)}
          />
          <label className='white' onClick={() => handleCategoryClick(category.id)} style={{ cursor: 'pointer' }}>{category.name}</label>
         </div>
           {isExpanded && category.subcategories && (
          <div style={{ marginLeft: '20px' }}>
            {category.subcategories.map(subcategory => renderCategory(subcategory))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {data.map(category => renderCategory(category))}
    </div>
  );
}

const Filter=({setCategoryFilter})=> {

  return (
    <div className='category'>
      <CategoryTree data={category} setCategoryFilter={setCategoryFilter}/>
    </div>
  );
}

export default Filter;
