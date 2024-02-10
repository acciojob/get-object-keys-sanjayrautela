// Create the student object with a name property
const student = {
  name: "John"
};

// Add a method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the method
console.log(student.getKeys()); // Output: ["name"]
