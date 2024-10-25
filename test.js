// Your code here

import Employee from "./employee.js";

const employee = new Employee("John Wick", "Dog Lover");

setTimeout(employee.sayName.bind(employee), 2000);

setTimeout(employee.sayOccupation.bind(employee), 3000);
