Trying to learn the YNAB API.  The script 2.js "works"; run it like this: `node 2.js`



# Create a `config-ynab.js` file that looks like this:
```
module.exports={
  accessToken:  'your-secret-access-token-from-ynab.'
}
```
Note, that config-ynab.js is in `.gitignore` so it's not accidentidly committed.


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


# Output of 3.js

```
node 3.js
after then: budgetId=e093c128-740c-42a5-8760-7677198b36d1
Account id: 793a4f3f-2615-455c-a3a8-e58a6a61825d Name: Checking 208
Account id: 1f73e01c-00de-4fbb-9c2d-8bb8c34f8ead Name: Savings 300
Category id: 1e5cafd5-2da6-4aaa-aee5-5c29b36fa7e5 Name: Dreams
	Lots of treats	100
	Dog Trip	100
	Dog Camp	100
Category id: dae95fd9-29c6-4570-866d-11f07a55119e Name: Internal Master Category
Category id: ef032dec-c7d2-4dda-a786-24fcbbe04cd0 Name: Credit Card Payments
Category id: 8d1a040f-3538-4bc6-a621-c9de00e4d614 Name: Immediate Obligations
Category id: 4eb6e81c-2674-48c2-97a3-d9b28edcbdc5 Name: True Expenses
Category id: b9b9dc0c-fbe0-4335-905d-defdc91f3ee5 Name: Debt Payments
Category id: 6847fa02-0512-414f-b621-50689667ca9d Name: Quality of Life Goals
Category id: b3e7cc41-b68d-4cc5-aee0-8b69cb90a2fa Name: Just for Fun
Category id: 5a6b41af-336c-46e1-86a1-b3d0d4ecc30e Name: Hidden Categories
```

