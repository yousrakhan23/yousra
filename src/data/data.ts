// import p1_img from './product_1.png';
// import p2_img from './product_2.jpg';
// import p3_img from './product_3.jpg';
// import p4_img from './product_4.png';
import p1_img from '../assets/product_1.png';
import p2_img from '../assets/product_2_resize.jpg';
import p3_img from '../assets/product_3_resize.jpg';
import p4_img from '../assets/product_4.png';

// interface Product{
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     new_price:number;
//     old_price:number;
// }
let data_product=[
    {
        id:1,
        name:"T-shirts",
        img:p1_img,
        new_price:200.00,
        old_price:250.00,
    },
   
    {
        id:2,
        name:"Long Macees",
        img:p2_img,
        new_price:200.00,
        old_price:250.00,
    },
   
    {
        id:3,
        name:"Shirts",
        img:p3_img,
        new_price:200.00,
        old_price:250.00,
    },
   
    {
        id:4,
        name:"paints",
        img:p4_img,
        new_price:200.00,
        old_price:250.00,
    },
   
   
];
export default data_product;