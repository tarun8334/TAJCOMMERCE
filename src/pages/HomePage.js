import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
import { tajproducts } from '../tajcommerce-products';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';

function HomePage() {

  const [products, setProducts] = useState([]);
const dispatch = useDispatch();
const {cartItems} = useSelector(state=>state.cartReducer);
const[loading,setLoading] = useState(false);
const [searchkey,setSearchkey] = useState('');
const[filterType,setFilterType] = useState('');
const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);

      const users = await getDocs(collection(fireDB, "products"))
      const productsArray = []
      users.forEach((doc) => {

        const obj = {
          id: doc.id,
          ...doc.data()
        }
        productsArray.push(obj)
        setLoading(false);

      });

      setProducts(productsArray)
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  }

  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
  }, [cartItems]);




    const addTocart=(product)=>{
      dispatch({type:"ADD_TO_CART",payload:product});
  };



  return (
    <Layout loading={loading}>

      <div className='container'>

<div className="d-flex w-50 align-items-center my-3 justify-content-center">
<input type = "text" 
value={searchkey}
onChange={(e) => {setSearchkey(e.target.value)}}
className="form-cotrol mx-2" placeholder = "search items"/>

<select className="form-control mt-3" value={filterType}
onChange={(e)=> {setFilterType(e.target.value)}}
>
<option value = "">All</option>
<option value = "appliances">Electronics</option>
<option value = "stationery">stationery</option>
<option value = "clothes">fashion</option>



</select>
</div>

        <div className='row'>
          {products.filter(obj=>obj.name.toLowerCase().includes(searchkey))
          .filter((obj)=>obj.category.toLowerCase().includes(filterType))
          .map((product) => {
            return <div className="col-md-4">
              <div className="m-2 p-1 product position-relative">
                <div className="product-content">
                  <p>{product.name}</p>
                  <div className="text-center">
                    <img src={product.imageURL} alt="" className='product-img' />
                  </div>
                </div>
                <div className='product-actions'>
                  <h2>{product.price} RS/-</h2>
                  <div className = "d-flex">
                    <button className = 'mx-2'onClick={()=>addTocart(product)}>ADD TO CART</button>
                    <button onClick ={()=>{
                    navigate(`/productinfo/${product.id}`)
                  }} >view</button>
                  
                    </div>
                    </div>

              </div>
            </div>
          })}
        </div>
      </div>
    </Layout >
  );
}

export default HomePage;


