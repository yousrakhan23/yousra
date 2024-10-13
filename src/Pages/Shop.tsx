import Hero from "../Components/Hero/Hero";
import NewCollection from "../Components/NewCollections/NewCollectios";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";


const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    
     
    </div>
  )
}

export default Shop;