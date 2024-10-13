import p1_image from '../assets/product_1.png';
import p2_image from '../assets/product_2.jpg';
import p3_image from '../assets/product_3.jpg';
import p4_image from '../assets/product_4.png';
import p5_image from '../assets/product_15.png';
import p6_image from '../assets/product_16.png'
import p7_image from '../assets/product_17.png';
import p8_image from '../assets/product_18.png';
import p9_image from '../assets/product_19.png';
import p10_image from '../assets/product_20.png';
import p11_image from '../assets/product_21.png';
import p12_image from '../assets/product_22.png';
import p13_image from '../assets/product_23.png';
import p14_image from '../assets/product_24.png';
import p15_image from '../assets/product_25.png';



const all_products = [
    {
        id: 1, 
        name: "Boys Orange Shirt",
        category: "kid",
        image: p1_image,
        new_price: 200.00,
        old_price: 250.00 
    },
    { 
        id: 2,
        name: "Girls Pink Dress", 
        category: "kid",
        image: p2_image,
        new_price: 300.00, 
        old_price: 350.00 
    },
    { 
        id: 3, 
        name: "Kids Blue Jeans", 
        category: "kid", 
        image:p3_image,
        new_price: 150.00, 
        old_price: 200.00 
    },

    { 
        id: 4, 
        name: "Boys Green T-Shirt", 
        category: "kid", 
        image:p4_image,
        new_price: 180.00, 
        old_price: 220.00 
    },
    { 
        id: 5, 
        name: "Girls Yellow Top", 
        category: "kid", 
        image:p5_image,
        new_price: 220.00, 
        old_price: 270.00 
    },
    { 
        id: 6, 
        name: "Boys Red Jacket", 
        category: "kid", 
        image:p6_image,
        new_price: 400.00, 
        old_price: 450.00 
    },
    { 
        
        id: 7, 
        name: "Kids Black Sneakers", 
        category: "kid", 
        image:p7_image,
        new_price: 250.00, 
        old_price: 300.00 
    },
    // { id: 8, name: "Girls Floral Skirt", category: "kid", new_price: 280.00, old_price: 320.00 },
    // { id: 9, name: "Boys Navy Shorts", category: "kid", new_price: 160.00, old_price: 210.00 },
    // { id: 10, name: "Kids White Sandals", category: "kid", new_price: 180.00, old_price: 230.00 },
    // { id: 11, name: "Girls Denim Jacket", category: "kid", new_price: 350.00, old_price: 400.00 },
    // { id: 12, name: "Boys Green Hoodie", category: "kid", new_price: 300.00, old_price: 350.00 },
    { 
        id: 8, 
        name: "Women's Red Dress", 
        category: "women", 
        image:p8_image,
        new_price: 500.00, 
        old_price: 600.00 
    },
    { 
        id: 9, 
        name: "Women's Blue Jeans", 
        category: "women", 
        image:p9_image,
        new_price: 350.00, 
        old_price: 400.00 
    },
    { 
        id: 10, 
        name: "Women's Black Heels", 
        category: "women", 
        image:p10_image,
        new_price: 450.00, 
        old_price: 500.00 
    },
    { 
        id: 11, 
        name: "Women's White Blouse", 
        category: "women", 
        image:p11_image,
        new_price: 320.00, 
        old_price: 370.00 
    },
    // { id: 17, name: "Women's Floral Skirt", category: "women", new_price: 380.00, old_price: 430.00 },
    // { id: 18, name: "Women's Leather Jacket", category: "women", new_price: 600.00, old_price: 700.00 },
    // { id: 19, name: "Women's Beige Handbag", category: "women", new_price: 450.00, old_price: 500.00 },
    // { id: 20, name: "Women's Black Sandals", category: "women", new_price: 300.00, old_price: 350.00 },
    // { id: 21, name: "Women's Grey Sweater", category: "women", new_price: 400.00, old_price: 450.00 },
    // { id: 22, name: "Women's Yellow Scarf", category: "women", new_price: 150.00, old_price: 200.00 },
    // { id: 23, name: "Women's Striped Pants", category: "women", new_price: 350.00, old_price: 400.00 },
    // { id: 24, name: "Women's Red Flats", category: "women", new_price: 280.00, old_price: 330.00 },
    { 
        id: 12, 
        name: "Men's White T-Shirt", 
        category: "men", 
        image:p12_image,
        new_price: 250.00, 
        old_price: 300.00 
    },
    {
        id: 13, 
        name: "Men's Black Jeans", 
        category: "men",
        image:p13_image, 
        new_price: 400.00, 
        old_price: 450.00 
    },
    {
        id: 14, 
        name: "Men's Leather Shoes", 
        image:p14_image,
        category: "men", 
        new_price: 600.00, 
        old_price: 700.00 
    },
    { 
        id: 15, 
        name: "Men's Navy Blazer", 
        category: "men", 
        image:p15_image,
        new_price: 700.00, 
        old_price: 800.00 
    },
    // { id: 29, name: "Men's Grey Sweatpants", category: "men", new_price: 350.00, old_price: 400.00 },
    // { id: 30, name: "Men's Black Watch", category: "men", new_price: 1200.00, old_price: 1300.00 },
    // { id: 31, name: "Men's Blue Polo Shirt", category: "men", new_price: 300.00, old_price: 350.00 },
    // { id: 32, name: "Men's Brown Belt", category: "men", new_price: 150.00, old_price: 200.00 },
    // { id: 33, name: "Men's Green Hoodie", category: "men", new_price: 400.00, old_price: 450.00 },
    // { id: 34, name: "Men's Red Sneakers", category: "men", new_price: 500.00, old_price: 550.00 },
    // { id: 35, name: "Men's White Cap", category: "men", new_price: 180.00, old_price: 230.00 },



];
export default all_products;