You'll be rendering some sample receipts:

const receipts = [ 
	{ 
		person: 'Karolin', 
		order: { 
			main: 'Burrito', 
			protein: 'Organic Tofu', 
			rice: 'Purple Rice', 
			sauce: 'Green Crack', 
			toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], 
			drink: 'Korchata', 
			cost: 22 
		}, 
		paid: false 
	}, 
	{ 
		person: 'Mark', 
		order: { 
			main: 'Rice Bowl', 
			protein: 'Ginger Soy Chix', 
			rice: 'Sticky Rice', 
			sauce: 'Korilla', 
			toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], 
			drink: 'Korchata', 
			cost: 19 
		}, 
		paid: false 
	}, 
	{ 
		person: 'Matt', 
		order: { 
			main: 'Salad Bowl', 
			protein: 'Organic Tofu', 
			rice: 'none', 
			sauce: "K'lla", 
			toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], 
			drink: 'Sparkling Blood Orange Soda', 
			cost: 20 
		}, 
		paid: true 
	} 
] 

Add receipts to the state of the app:

function App() {
  let [receipts, setReceipts] = useState(receipts)

Make a Receipt component that renders the receipt's:
	person, order, main, protein, rice, sauce, drink, cost, AND toppings 

Right now, all the receipts are not paid ( paid: false ).
Set up a ternary operator to display the receipt if it has not been paid.
Then go into the receipt data and change the value to true and check that the receipt will not display

(STRETCH)

Add a click event on the receipt that changes the value of paid from false to true. 
Once clicked the receipt should immediately disappear from the browser view