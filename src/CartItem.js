import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
          <div className="cart-item">
              <div className="left-block">
                  <img style={ styles.image } />
              </div>
              
              <div className="right-block">
                  <div style={ { fontSize: 17 , fontFamily: "sans-serif" } }>Phone</div>
                  <div style={ { fontSize: 12 , fontFamily: "sans-serif" } }>₹ 999</div>
                  <div style={ { fontSize: 12 , fontFamily: "sans-serif"} }>Qty: 1</div>
                  <div className="cart-item-actions">
                      { /* Buttons */ }
                  </div>
              </div>
          </div>  
        );
    }
}


const styles = {
    image:{
      height:110,
      width:110,
      borderRadius: 3,
      backgroundColor: "#ccc"
    }
}

export default CartItem;