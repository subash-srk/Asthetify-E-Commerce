import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="container">
    <div className='shop-category'>
      {/* <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div> */}
      <div className="container">
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
            if(props.category === item.category){
              return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name}
                image={item.p1}
                new_price={item.new_price}
                old_price={item.old_price}
              />)
            }else{
              return null;
            }
        })}
      </div>
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
    </div>
  
  )
}

export default ShopCategory