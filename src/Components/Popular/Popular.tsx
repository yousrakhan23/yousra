import './Popular.css';
import data_product from '../../data/data.ts';
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
                {data_product.map((item ,i) =>{
                    return <Items 
                    key ={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.img} 
                    new_price={item.new_price} 
                    old_price={item.old_price} />
                })}
            </div>


        </div>
       
    )
}

export default Popular;