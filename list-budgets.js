const ynab = require("ynab");
const token = require("./config-ynab");
console.log(token.accessToken);
const ynabAPI = new ynab.API(token.accessToken);

(async function() {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  for(let budget of budgets) {
    console.log(`Budget id: ${budget.id} Name: ${budget.name}`);
  }
})();
