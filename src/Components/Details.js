import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Style/ButtonStyle";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h5>{title}</h5>
                </div>
              </div>
              {/*end of title */}
              {/*total info */}
              <div className="row">
                {/** product img */}
                <div className="col-10 mx-auto col-md-6 my-3 text capitalize">
                  <div>
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                </div>
                {/** end of product img */}
                {/** product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text capitalize">
                  {/** product model */}
                  <h2>Model: {title}</h2>
                  {/** product company */}
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  {/** product price */}
                  <h4 className="text-blue">
                    <strong>
                      Price: <span>$</span> {price}
                    </strong>
                  </h4>
                  {/** product details info */}
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some info about the product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                      <Link to="/">
                          <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer 
                      cart
                      disabled={inCart? true: false}
                      onClick={()=>{
                          value.addToCart(id);
                          value.openModal(id);
                      }}>
                          {inCart? "in cart": "add to cart"}
                      </ButtonContainer>
                  </div>
                </div>
                {/** end of product text */}
              </div>
              {/*end of total info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
