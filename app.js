var myArray = ["rock", "paper", "scissors"];

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  // console.log(arr[idx]);
  return arr[idx]; //returns index for values and suit
}
var computer = pick(myArray);
var user = pick(myArray);
var play = function () {
  if (computer === user) {
    return "It's a Tie";
  } else if (computer === "paper" && user === "rock") {
    return "Computer wins";
  } else if (computer === "paper" && user === "scissors") {
    return "User wins";
  } else if (computer === "rock" && user === "paper") {
    return "User wins";
  } else if (computer === "rock" && user === "scissors") {
    return "Computer wins";
  } else if (computer === "scissors" && user === "rock") {
    return "User wins";
  } else if (computer === "scissors" && user === "paper") {
    return " Computer wins";
  }
};
console.log("Computer chois: ", computer);
console.log("User choice: ", user);
console.log(play());
