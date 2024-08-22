const arrow = () => {
  console.log(this);
};

arrow();


const obj = {};
const obj1 = Object.create(obj)
console.log(obj1);
