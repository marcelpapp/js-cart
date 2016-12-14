var amountClicked = 0;
var showAmount = function () {
  document.getElementById('shopping-cart-amount').innerHTML = 'Máš něco v košíku!' + ' (' + amountClicked + ')'
}
var addToCart = function () {
  amountClicked += 1;
  showAmount();
  document.getElementById('shopping-cart').className = 'shopping-cart show'
}
