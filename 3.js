async function getBudgetId(ynabAPI) {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  let budgetId;
  for(let budget of budgets) {
		if ('Demo' === budget.name) {
			budgetId=budget.id;
		}
  }
	return budgetId;
};

async function getCategories(ynabAPI, budget_id) {
	const response = ynabAPI.categories.getCategories(budget_id)
	response.then(data => {
		// console.log(JSON.stringify(data));
  	const categories = data.data.category_groups;
		for (let category of categories) {
		  console.log(`Category id: ${category.id} Name: ${category.name}`);
			if ('Savings' === category.name) {
				cats = category.categories;
				for (let c of cats) {
					// Why divide by 1000???
					console.log(`\t${c.name}\t${c.balance / 1000.0}`); 
				}
			}
	  }
	});
};

async function getAccounts(ynabAPI, budget_id) {
	const response = ynabAPI.accounts.getAccounts(budget_id)
	response.then(data => {
  	const accounts = data.data.accounts;
		for (let account of accounts) {
		  console.log(`Account id: ${account.id} Name: ${account.name} ${account.balance / 1000.0}`);
	  }
	});
};

const ynab = require("ynab");
const token = require("./config-ynab");
const ynabAPI = new ynab.API(token.accessToken);
const response = getBudgetId(ynabAPI);
response.then(budgetId => {
  console.log(`after then: budgetId=${budgetId}`);
  getAccounts(ynabAPI, budgetId);
	getCategories(ynabAPI, budgetId);
});

