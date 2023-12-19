import { useState } from 'react';
import Header from './Components/Header/Header';
import ProductsItems from './Components/PorductsItems/ProductsItems'
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories'
import ShowFullProduct from './Components/ShowFullPorduct/ShowFullProduct';
import './App.css';

const productDataArray = [
  {
    id: 1,
    price: 100,
    title: 'vodka',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbfG4Lu0nXFlmRN4LBCXa9KFfZd_d8uNwkQ&usqp=CAU'
  },
  {
    id: 2,
    price: 300,
    title: 'wisski',
    url: 'https://static.toiimg.com/photo/70994944.cms'
  },
  {
    id: 3,
    price: 400,
    title: 'beer',
    url: 'https://thekitchencommunity.org/wp-content/uploads/2022/01/upscale-drinks.jpg'
  },
  {
    id: 4,
    price: 200,
    title: 'jucy',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yJpdHLusqZhTMSUm2LfMFbpFNJacmZ-oFg&usqp=CAU'
  },
  {
    id: 5,
    price: 500,
    title: 'coctel',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDNjwURfiAUwhAXy1AcF_wdNXDCKpweQHqw&usqp=CAU'
  },
  {
    id: 6,
    price: 200,
    title: 'fresh',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6ibOAFCx1zQGhk8DVeapwoEjUcb5p1YoKQ&usqp=CAU'
  }
];

function App() {
  
  const [newDataArray, setnewDataArray] = useState([]);
  const [filterDataArrey, setFilterDataArray] = useState([...productDataArray]);
  const [fullProduct, setFullProduct] = useState(false)
  const [runItem, setRunItem] = useState([])
 
  const onAdd = (product) => {
    let isArray = false;
    newDataArray.forEach((el) => {
      if(el.id === product.id) {
        isArray = true;
      }
    })
    if(!isArray) setnewDataArray([...newDataArray, product])
  }

  const onDelete = (id) => {
    setnewDataArray(newDataArray.filter(el => el.id !== id))
  }

  const chooseCategory = (category) => {
    if(category === "all") {
      setFilterDataArray(productDataArray)
      return
    }
    setFilterDataArray(productDataArray.filter((el) => el.title === category))
  }

  const fullItem = (product) => {
    setRunItem(product)
    setFullProduct(!fullProduct)
  }

  return (
    <div className="App">
        <Header newDataArray={newDataArray} onDelete={onDelete} />
        <Categories chooseCategory={chooseCategory} />
        <ProductsItems productDataitems={filterDataArrey} onAdd={onAdd} fullItem={fullItem} /> 
        {fullProduct && <ShowFullProduct fullProduct={runItem} onAdd={onAdd} fullItem={fullItem}  />}
        <Footer />
    </div>
  );
}

export default App;
