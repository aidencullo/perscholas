const outer = {
  otherProp: "I'm not a method",
  outerregularMethod: function() {
    console.log(this); // 'this' refers to the obj
  },
  outerarrowMethod: () => {
    console.log(this);
  },
  obj: {
    name: "Aiden",
    regularMethod: function() {
      console.log(this); // 'this' refers to the obj
    },
    arrowMethod: () => {
      console.log(this);
    }
  }  
};

outer.obj.regularMethod();
outer.outerregularMethod();
outer.obj.arrowMethod();
outer.outerarrowMethod();
