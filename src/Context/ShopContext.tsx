
// import { createContext } from "react";

// interface ShopContextType{
//     all_products: typeof all_products;
// }


// export const ShopContext = createContext({});
// export const ShopContextProvider = (props: any) => {
//     const contextValue = {all_products};
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// }


import all_products from "../data/all_products";
import { createContext, ReactNode } from "react";


interface ShopContextType {
  all_products: typeof all_products; 
}


export const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopContextProvider = (props: { children: ReactNode }) => {
  const contextValue = { all_products };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
