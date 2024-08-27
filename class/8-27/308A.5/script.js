import {
  name1,
  name2,
} from './modules/magicModule.js'

// raise TypeError: Assignment to constant variable.
name1 = 'new name';


console.log(name1);
