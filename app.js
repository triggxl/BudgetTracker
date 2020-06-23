//"vanilla/native javascript"
//inputs/text area
const budgetAmount = document.getElementById("budget-amount");
const expenseAmount = document.getElementById("expense-amount");
const expenseName = document.getElementById("expense-name");
//display area
const budgetTotal = document.getElementById("budget");
const itemTitle = document.getElementById("item-title")
const expenseValue = document.getElementById("expense-value");
const balanceTotal = document.getElementById("balance")
//calculations
const expenseTotal = document.getElementById("expenses");
//btn
const calcBudget = document.getElementById("calc-budget");
const calcExpenses = document.getElementById("calc-expenses");

let budget = 0;
let expenses = []; //arrays --> loops

function calculateBudget() {
  budget = budgetAmount.value;
  budgetTotal.innerHTML = budget;
  balanceTotal.innerHTML = parseInt(budgetTotal.innerHTML - expenseTotal.innerHTML); //type casting
  document.getElementById("budget-amount").value = ""; //clearing
  // currentBudget ++;
}

//adding expenses and displaying new total
function updateExpenses() {
  let nameAndValue = {}; //empty object to hold information
  nameAndValue[expenseName.value] = Number(expenseAmount.value);//creating key and set its value  expenseName.value : expenseValue.value
  console.log(nameAndValue);
  //push to array
  expenses.push(nameAndValue);
  //clear fields
  document.getElementById("expense-name").value = ""; 
  document.getElementById("expense-amount").value = ""; 
  //display amount in EXPENSE column
  let sum = 0;
  for(let i = 0; i < expenses.length; i++) {
    // Object.keys(expenses[i])[0]; //represents the key grabbing the first index
    sum += expenses[i][Object.keys(expenses[i])[0]]; 
    //expenses[i] represents the object Object.keys takes an object name
  }
  expenseTotal.innerHTML = sum;
  balanceTotal.innerHTML = budget - sum;
}

//initialize Git
//create new branch --> displaying every price and item to the DOM
//look at object and arrays by themselves
//then look at arrays of objects
//display each expense name and expense price loop through expenses array same gist as line 40
//update the DOM by knowing how to access our information

//learning to work in abstract know everything data type and what you can do put functionalities together to get what you want methods with arrays, objects and what you can do with them
  //dot passing by value, bracket passes by refrence
  
  // console.log(expenses);
   //displaying total on page
  // document.getElementById().value = "";


function updateBalance() {

}

  //text box --> .value
  //paragraphs --> inner.html



/*
Functionality/Features:
Add expense button click:
add to budget dynamically (multiple times increment to previous balance)
(x) create currentBudget variable to store current budget
use in calcBudget, addExpense functions
update expense display area
update balance (budget - expenses)
need an array to store item/expenses
display item name + cost under 'Expense title' area with 'edit' and 'delete' icons
create expense variable to store expenses
create items variable
create clearBoxes variable
array of objects how you store your data and use it
media queries max-width 600px
grid-template-area
"budgetAmount "
https://css-tricks.com/snippets/css/complete-guide-grid/
*/






// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event