async function getBudgetId(ynabAPI) {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  let budgetId;
  for(let budget of budgets) {
		if ('Demo' === budget.name) {
      console.log(`Budget id: ${budget.id} Name: ${budget.name}`);
			budgetId=budget.id;
		}
  }
	console.log(`budgetId=${budgetId}`);
	return budgetId;
};

async function getAccounts(ynabAPI, budget_id) {
	console.log(JSON.stringify(ynabAPI));
	console.log("******************");
	const response = ynabAPI.accounts.getAccounts(budget_id)
	response.then(data => {
		console.log(`data=${JSON.stringify(data)}`);
  	const accounts = data.data.accounts;
		console.log(`accounts=${accounts}`);
		for (let account of accounts) {
		  console.log(`Account id: ${account.id} Name: ${account.name}`);
	  }
	});
};

console.log('starting...');
const ynab = require("ynab");
const token = require("./config-ynab");
console.log(token.accessToken);
const ynabAPI = new ynab.API(token.accessToken);
const response = getBudgetId(ynabAPI);
response.then(budgetId => {
  console.log(`after then: budgetId=${budgetId}`);
  getAccounts(ynabAPI, budgetId);
});

