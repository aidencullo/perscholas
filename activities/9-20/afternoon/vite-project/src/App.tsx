import { useState } from 'react';
import Receipt from './Receipt.tsx';

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

function App() {
    const [receipts, setReceipts] = useState<ReceiptType[]>([
        {
            person: 'Karolin',
            order: {
                main: 'Burrito',
                protein: 'Organic Tofu',
                rice: 'Purple Rice',
                sauce: 'Green Crack',
                toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
                drink: 'Korchata',
                cost: 22,
            },
            paid: false,
        },
        {
            person: 'Mark',
            order: {
                main: 'Rice Bowl',
                protein: 'Ginger Soy Chix',
                rice: 'Sticky Rice',
                sauce: 'Korilla',
                toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
                drink: 'Korchata',
                cost: 19,
            },
            paid: false,
        },
        {
            person: 'Matt',
            order: {
                main: 'Salad Bowl',
                protein: 'Organic Tofu',
                rice: null,
                sauce: "K'lla",
                toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
                drink: 'Sparkling Blood Orange Soda',
                cost: 20,
            },
            paid: true,
        },
    ]);

    return (
        <>
            {receipts.map((receipt, index) => (
                <Receipt key={index} receipt={receipt} />
            ))}
        </>
    );
}

export default App;
