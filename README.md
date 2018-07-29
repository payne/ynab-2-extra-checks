Trying to learn the YNAB API.  The script 2.js "works"; run it like this: `node 2.js`

Example output:
```
starting...
87d6137976d1f0991812ae7e376005664f9fa945ba5c04f067f3d1f9066a9735
Budget id: e093c128-740c-42a5-8760-7677198b36d1 Name: Demo
budgetId=e093c128-740c-42a5-8760-7677198b36d1
after then: budgetId=e093c128-740c-42a5-8760-7677198b36d1
{"_configuration":{"apiKey":"Bearer 87d6137976d1f0991812ae7e376005664f9fa945ba5c04f067f3d1f9066a9735","basePath":"https://api.youneedabudget.com/v1"},"_budgets":{"configuration":{"apiKey":"Bearer 87d6137976d1f0991812ae7e376005664f9fa945ba5c04f067f3d1f9066a9735","basePath":"https://api.youneedabudget.com/v1"}}}
******************
data={"data":{"accounts":[{"id":"793a4f3f-2615-455c-a3a8-e58a6a61825d","name":"Checking","type":"checking","on_budget":true,"closed":false,"note":null,"balance":208000,"cleared_balance":333000,"uncleared_balance":-125000,"deleted":false},{"id":"1f73e01c-00de-4fbb-9c2d-8bb8c34f8ead","name":"Savings","type":"creditCard","on_budget":true,"closed":false,"note":null,"balance":300000,"cleared_balance":0,"uncleared_balance":300000,"deleted":false}]}}
accounts=[object Object],[object Object]
Account id: 793a4f3f-2615-455c-a3a8-e58a6a61825d Name: Checking
Account id: 1f73e01c-00de-4fbb-9c2d-8bb8c34f8ead Name: Savings
```
