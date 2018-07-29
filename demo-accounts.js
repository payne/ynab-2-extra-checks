const ynab = require("ynab");
const token = require("./config-ynab");
console.log(token.accessToken);
const ynabAPI = new ynab.API(token.accessToken);
console.log(`ynabAPI=${JSON.stringify(ynabAPI)}`);
(async function() {
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
})().then(budgetId => {
  const ynabAPI = new ynab.API(token.accessToken);
  console.log(`ynabAPI=${JSON.stringify(ynabAPI)}`);
	const accountsResponse = ynabAPI.accounts.get_accounts(budgetId);
	const accounts = accountsResponse.data.accounts;
	for (let account of accounts) {
		console.log(`Account id: ${account.id} Name: ${account.name}`);
	}
});
