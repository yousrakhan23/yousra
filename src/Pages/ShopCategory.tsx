
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../assets/dropdown_icon.png';
// import Item from '../assets/pintester_icon.png'
import Items from "../Components/Items/Items";

interface ShopCategoryProps{
  category: string;
  banner:string;
}
const ShopCategory=(props:ShopCategoryProps)=>{
  const context=useContext(ShopContext);
  if(!context){
    throw new Error( "ShopContext not found" );
  }
  const {all_products}=context;
   return (
    <div className="shop-category">
      <img src={props.banner} alt="" />

      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 30 products
        </p>
        <div className="shopcategory-sort">Sort by <img src={dropdown_icon} />
        </div>
         </div>
         <div className="shopcategory-products">
          {all_products.map((item,i)=>{
            
            if(props.category===item.category){
              return <Items  
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              />
             }
            else{
              return null;
            }
          })}
         </div>
      </div>
  );
}
export default ShopCategory;