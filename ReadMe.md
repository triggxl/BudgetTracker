
1. 
on click of calc-expense button,

(x) transfer input from 'expense-name' (text field) and 'expense-amount' into 'expense-value' section

transfer the 'expense-amount' to the 'expenses' row
& update the balance 
(x) clear fields
+ (append icons)

2. Upon click of 'edit' icon, 'expense-name' and 'expense-amount' are placed back in their original text fields ('expense-amount' and 'expense-value')

3. Upon click of 'delete' icon, 'expense-name' and 'expense-amount' are cleared from 'expenses' and 'balance' rows











(x) Background color: light gray

(x) Header --> Budget App (Title)
(x) button --> calculate

div1 --> Please enter budget (green outer border)
div2 --> Please enter expense/amount (red outer border)
button --> Add Expense

div -->   Budget             Expense           Balance
        ${amount}           ${amount}         ${amount}
        Expense Title    Expense Value 
        expense item          cost         icons (edit delete)
(appears to be absolute to div1)

Notes:
Background color vs background vs color?
color is referring to the text color in that element.

background-color refers to the background color

background is shorthand to combine many background tags into one line.

background: #ffffff url("img_tree.png") no-repeat right top;
Combines color, image and background image properties in the one line instead of typing our each style individually.