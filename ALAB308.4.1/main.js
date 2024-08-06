// part 1 & 2

const results = [["ID", "Name", "Occupation", "Age"],  ["42", "Bruce", "Knight", "41"],  ["57", "Bob", "Fry Cook", "19"],  ["63", "Blaine", "Quiz Master", "58"],  ["98", "Bill", "Doctor’s Assistant", "26"]]

const test = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const twoDArray = test.split("\n").map((el) => el.split(","));
console.log(twoDArray);
