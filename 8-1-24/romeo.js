// bonus

romeo = 10
cost = 4
change = romeo - cost
quarters = 0
while (change > 0){
  quarters++
  change -= 0.25
}
console.log(quarters)





// write while loop for...
evens = []
odds = []
for (let i = 1; i <= 10; i++){
  if (i % 2 === 0){
    evens.push(i * 10)
  } else {
    odds.push(i * 10)
  }
}
console.log(odds.join(', '))
console.log(evens.join(', '))

for (let i = 500; i <= 800; i++){
  if (i % 4 === 0){
    console.log(i)
  }
}





// count down to 0 from 1000 by 100s
for (let i = 1000; i >= 0; i -= 100){
  console.log(i)
}
for (let i = 1; i < 35; i++){
  if (i % 3 === 0){
    console.log(i)
  }
}
for (let i = 1; i < 100; i++){
  if (i % 5 === 0){
    console.log(i)
  }
}

