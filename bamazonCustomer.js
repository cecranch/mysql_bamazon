// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if 
// your store has enough of the product to meet the customer's request.


// If not, the app should log a phrase like Insufficient quantity!, 
// and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.


// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

const inquirer = require('inquirer');
const mysql = require('mysql');

// establish database connection first
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Christmas1',
    database: 'bamazon'
    });

connection.connect();
console.log("Connected");

var display = function() {
        connection.query("SELECT * FROM products", function (err) {
          if (err) throw err;
          console.log("Connect to Bamazon and start shopping!");
        })
    };

// var results = [];
for (var i = 0; i < res.length; i++) {
    results.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
}




// Prompt 1 - ask user the ID of the product they would like to buy.

var shop = function () {
    inquirer.prompt(
        {
            name: 'productID',
            type: 'input',
            message: 'Enter the ID of the product you would like to purchase:',
        })
        .then(function(answer1){
            var item = answer1.productID;
            connection.query("SELECT * FROM products WHERE item_ID=?", item, function(err, res){
                if (err) throw err;
                if (res.length === 0) {
                    console.log("Product does not exist. Please re-enter Product ID");
                }
        }) 
    })
};   
        
    
display();
shop();