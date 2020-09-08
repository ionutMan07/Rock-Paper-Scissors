var myArray = ["Rock", "Paper", "Scissors"];

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  // console.log(arr[idx]);
  return arr[idx]; //returns index from myArray
}
var computer = pick(myArray);
var user = pick(myArray);
var play = function () {
  if (computer === user) {
    return "It's a Tie";
  } else if (
    (computer === "{Paper" && user === "Rock") ||
    (computer === "Rock" && user === "Scissors") ||
    (computer === "Scissors" && user === "Paper")
  ) {
    return "Computer wins";
  } else {
    return "User wins";
  }
};
console.log("Computer choice: ", computer);
console.log("User choice: ", user);
console.log(play());
