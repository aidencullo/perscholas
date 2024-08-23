// DATA ABOUT BOB (in a server/database somewhere else):

//  name: 'Bob', 
//  lastName: 'Thompson'
//  occupation: 'Farmer'
//  salary: 300
//  country: 'USA' 
//  state: 'Florida' 


// REQUESTS WE CAN MAKE (how we interact with this data):
const personal = new Promise((resolve, reject) => setTimeout(() => resolve({ name: 'Bob', lastName: 'Thompson'}), 300))
const business = new Promise((resolve, reject) => setTimeout(() => resolve({ occupation: 'Farmer', salary: 300 }), 1000))
const residence = new Promise((resolve, reject) => setTimeout(() => resolve({ country: 'USA', state: 'Florida' }), 1000))


// WHAT WE WANT:
// print: [firstName] is a [occupation] from [state] [country]
Promise.all([personal, business, residence])
  .then((values) => {
    console.log(`${values[0].name} is a ${values[1].occupation} from ${values[2].state} ${values[2].country}`)
  })

// OBJECTIVE:
// Extract the data about bob that is currently wrapped in promises
// and piece together the string we want (above). Don't alter any of
// the code above and don't recreate the data yourself.

// CODE BELOW:
