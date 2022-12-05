import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import { useState } from "react";
import "./Home.css";
//import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  const {  user } = useSelector((state) => state.user);
  const [rec,setRec]=useState("");
  const [tog,setTog]=useState(null);

  const url="http://localhost:8000/api/v1/recommend"
  const getinfo = async () => {

    console.log(user._id)
    const response = await fetch(`${url}/${user._id}`, {
      method: 'POST',
      headers: {
        
      }
    });
    const json=await response.json();
    console.log(json);
    const str=JSON.stringify(json);
    const ans=JSON.parse(str);
    setTog(1)
    setRec(ans.data.recommended)
    console.log(ans.data.recommended);
  }
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
          
            <h1>Jai Jawan Jai Kisaan</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <div className="xyz">
          {user?.role==="user" &&<button className="homeHeading submitReview" onClick={getinfo}>Recommended seeds / crop</button>}
           {tog && <h2>The recommended seed is {rec}</h2>}
           </div>

          {/*<div className="container" id="container">
            {products && user?.role==="user" &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
              </div>*/}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
