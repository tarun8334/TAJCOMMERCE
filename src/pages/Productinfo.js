import React, {useEffect,useState} from 'react';
import Layout from '../components/Layout';
import { getDoc,doc } from "firebase/firestore";
import fireDB from '../fireConfig';
import {useParams} from "react-router";
function Productinfo() {
  const [product, setProduct] = useState();
  const[loading,setLoading] = useState(false);

   const params = useParams();
  useEffect(() => {
    getData();
  }, []);


  async function getData() {
    try {
      setLoading(true);

      const producttemp = await getDoc(doc(fireDB,"products",params.productid));

      setProduct(producttemp.data());
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  }




  return (
<Layout loading = {loading}>       
<div className="container">


<div className="row justify-content-center">
  <div className="col-md-6">

  {product && ( <div>
<p><b>{product.name}</b></p>
<img src={product.imageURL} className = "product-info-img" />
<hr/>
<p>{product.description}</p>
<div className="d-flex justify-content-end my-3">
  <button>ADD TO CART</button>
</div>
     </div>

     )}
  </div>
  </div>

  </div>
    
    </Layout>
  );
}

export default Productinfo;
