// part 1 & 2

const results = [["ID", "Name", "Occupation", "Age"],  ["42", "Bruce", "Knight", "41"],  ["57", "Bob", "Fry Cook", "19"],  ["63", "Blaine", "Quiz Master", "58"],  ["98", "Bill", "Doctor’s Assistant", "26"]]

const test = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const twoDArray = test.split("\n").map((el) => el.split(","));

// part 3

const test_input = [["ID", "Name", "Occupation", "Age"],  ["42", "Bruce", "Knight", "41"],  ["57", "Bob", "Fry Cook", "19"],  ["63", "Blaine", "Quiz Master", "58"],  ["98", "Bill", "Doctor’s Assistant", "26"]]
const test_output = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

const attrs = test_input.shift()

const result = test_input.map((el) => {
  const obj = {}
  attrs.forEach((attr, i) => {
    obj[attr.toLowerCase()] = el[i]
  })
  return obj
})

console.log(result)
