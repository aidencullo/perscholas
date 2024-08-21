function outerFunction() {
  function innerFunction() {
    console.log(this); // 'this' refers to the outer function's 'this'
  };
  innerFunction();
}

outerFunction(); // Logs: 'Aiden'
