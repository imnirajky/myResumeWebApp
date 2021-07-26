import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super() ;
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 1,
            img: ''
        }
    }
    increaseQty = () =>{
        this.state.qty++;
        console.log(this.state);
    }
    decreaseQty = () =>{
        if(this.state.qty>0){
        this.state.qty--;
        }
        console.log(this.state);
    }
    render(){
        const {title, price, qty} = this.state;
        return (
          <div className="cart-item">
              <div className="left-block">
                  <img style={ styles.image } alt="product" src="https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70"/>
              </div>
              
              <div className="right-block">
                  <div style={ { fontSize: 17 , fontFamily: "sans-serif" } }>{title}</div>
                  <div style={ { fontSize: 11 , fontFamily: "sans-serif" } }>₹ {price}</div>
                  <div style={ { fontSize: 11 , fontFamily: "sans-serif"} }>Qty: {qty}</div>
                  <div className="cart-item-actions">
                      <img onClick={this.increaseQty}
                       src="https://img-premium.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1627203038~hmac=fc00135dff5cc960976ba03ef95f4de9" className="action-icons" alt="inc" />
                      <img onClick={this.decreaseQty}
                       src="https://img-premium.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1627203121~hmac=f85eeae42ac9ec82edb6183dc596ae55" className="action-icons" alt="dec" />
                      <img
                       src="https://image.flaticon.com/icons/png/512/3096/3096673.png" className="action-icons" alt="del" />
                  </div>
              </div>
          </div>  
        );
    }
}


const styles = {
    image:{
      height:110,
      width:85,
      borderRadius: 3,
      backgroundColor: "#ccc"
    }
}

export default CartItem;