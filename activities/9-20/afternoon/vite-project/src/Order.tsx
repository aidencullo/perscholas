import Order from './Order'

export default function App({ order }) {


    return (
	<>
	    <p> {order.main} </p>
	<p> {order.protein} </p>
	<p> {order.rice} </p>
	<p> {order.sauce} </p>
	<p> {order.toppings} </p>
	<p> {order.drink} </p>
	<p> {order.cost} </p>
	
	
	</>
    )
}
