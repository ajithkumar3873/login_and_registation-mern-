import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Group1() {

  function err(){
    alert("Access Denied...")
  }
 
  return (
    <div>
      <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
      <Link to="/group1"><li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li></Link>
        <Link to="/about"><li class="nav-item"><a href="#" class="nav-link">About</a></li></Link>
        <li class="nav-item"><a href="#" class="nav-link" onClick={err}>Contact</a></li>
        <li class="nav-item"><a href="#" class="nav-link" onClick={err}>Feedback</a></li>
      </ul>
    </header>
    
  </div>
  <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Categories of The Month</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="https://themewagon.github.io/zay-shop/assets/img/category_img_01.jpg" class="rounded-circle img-fluid border"/></a>
                <h5 class="text-center mt-3 mb-3">Watches</h5>
                <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="https://themewagon.github.io/zay-shop/assets/img/category_img_02.jpg" class="rounded-circle img-fluid border"/></a>
                <h2 class="h5 text-center mt-3 mb-3">Shoes</h2>
                <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="https://themewagon.github.io/zay-shop/assets/img/category_img_03.jpg" class="rounded-circle img-fluid border"/></a>
                <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
                <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Group1
