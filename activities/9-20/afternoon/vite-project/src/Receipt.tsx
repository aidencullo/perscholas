import Order from './Order';

interface Order {
    main: string;
    protein: string;
    rice: string | null;
    sauce: string;
    toppings: string[];
    drink: string;
    cost: number;
}

interface ReceiptType {
    person: string;
    order: Order;
    paid: boolean;
}

interface AppProps {
    receipt: ReceiptType;
    updateReceipts: (receipt: ReceiptType) => void;
}

export default function App({ receipt, updateReceipts }: AppProps) {
    
    return (
        <>
        {!receipt.paid && (
            <>
                <h1>{receipt.person}</h1>
            <Order order={receipt.order} />
            <p>{receipt.paid ? "Paid" : "Not Paid"}</p>
	    <button onClick={() => updateReceipts({ ...receipt, paid: true })}>Pay</button>
            </>
        )}
        </>
    );
}
