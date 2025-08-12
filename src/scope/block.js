function fruits() {
  if (true){
    var fruit1 = "Apple"; // Function scope
    let fruit2 = "Banana"; // Block scope
    const fruit3 = "Cherry"; // Block scope
  }

  console.log(fruit1); // Apple
  // console.log(fruit2); // ReferenceError: fruit2 is not defined
  // console.log(fruit3); // ReferenceError: fruit3 is not defined
}


fruits();