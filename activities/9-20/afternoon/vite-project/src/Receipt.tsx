import Order from './Order'

interface Receipt {
    person: string,
    order: string[],
    paid: boolean
}

interface AppProps {
    receipt: Receipt
}

export default function App({ receipt }: AppProps) {

    return (
	<>
	    <h1> {receipt.person} </h1>
	<Order order={receipt.order} />
	<p> {receipt.paid ? "Paid" : "Not Paid"} </p>
	</>
    )
}
