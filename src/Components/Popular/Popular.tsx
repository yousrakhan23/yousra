import '/Popular.css';
import data_product from './data.js';
import Items from '../Items/Items';

interface data_product {
    id: number;
    name: string;
    image: string;
    new_price: number;
    old_price: number;
  }


const Popular = () => {
    return (
        <div className='popular'>
            <h1>Popular In Women</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item: { id: any; name: any; image: any; new_price: any; old_price: any; },i: any) =>{
                    return <Items key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>


        </div>
       
    )
}

export default Popular;