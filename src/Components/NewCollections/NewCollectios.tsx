
// import '../../assets/new_collection_dress.jpg';
// import new_collection from '../../assets/new_collection_dress.jpg'
// import Items from '../Items/Items';


// const NewCollection =() => {


//   return (
//     <div className='new-collections'>
//       <h1>NEW COLLECTIONS</h1>
//       <hr />
//       <div className="collections">
//        {new_collection.map((item: { id: any; name: any; img: any; new_price: any; old_price: any; }, i: any) => {
//           return <Items
//             key={i}
//             id={item.id}
//             name={item.name}
//             image={item.img}
//             new_price={item.new_price}
//             old_price={item.old_price}
//           />

//         })}
//       </div>


//     </div>
//   )
// }

// export default NewCollection;

import './NewCollections.css';
import outfit1 from '../../assets/product_32.png';
import outfit2 from '../../assets/product_6.png';
import outfit3 from '../../assets/product_9.png';
import outfit4 from '../../assets/product_15.png';
import outfit5 from '../../assets/product_25.png';
import outfit6 from '../../assets/product_35.png';
import Items from '../Items/Items';


const new_collection = [
  { id: 1, name: 'Dress 1', img: outfit1, new_price: 50, old_price: 100 },
  { id: 2, name: 'Dress 2', img: outfit2, new_price: 100, old_price: 200 },
  { id: 3, name: 'Dress 3', img: outfit3, new_price: 100, old_price: 200 },
  { id: 4, name: 'Dress 4', img: outfit4, new_price: 100, old_price: 200 },
  { id: 5, name: 'Dress 5', img: outfit5, new_price: 100, old_price: 200 },
  { id: 6, name: 'Dress 6', img: outfit6, new_price: 100, old_price: 200 },
];

const NewCollection = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.img}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
