import { ShopContext } from "@/Context/ShopContext"
import { useContext } from "react"
import React from "react"
import { useParams } from "react-router-dom";


const Product = () => {
  const context = useContext(ShopContext);
  const {productId} =useParams();
  if (!context){
    throw new Error( "ShopContext not found");
  }
  const {all_products} = context
  
  const product = all_products.find((e: { id:any; })=>e.id === productId)
  return (
    <div>

    </div>
  )
}

export default Product;