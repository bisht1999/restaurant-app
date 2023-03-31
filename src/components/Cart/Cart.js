import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) =>{

    const cartItems=[{id:'c1',name:'shusi',amount:2,price:12.99}
].map((item)=><li>{item.name}</li>)
return  <Modal onClose={props.onClose}>
    {cartItems}
    <div className={classes.total}>
        <span>Toatal Amount</span>
        <span>35.62</span>
    </div>
    <div className={classes.button}>
        <button className={classes['button--alt']} onClick={props.onClose}>close</button>
        <button className={classes.action}>Order</button>
    </div>

</Modal>
    
}

export default Cart;