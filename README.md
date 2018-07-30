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

# node 3.js as of 7/30/2018

```
after then: budgetId=48e5fa77-41fa-4c84-aa15-3ec343b48b4f
Account id: 9c071ba3-53ab-40f0-a5a6-2d7f045a8696 Name: Checking 1000
Account id: fcb1c436-4e51-42e4-9b61-a48f8a5702d4 Name: Savings 3000
Category id: de62383b-1055-4d2c-a3f5-0b44c6215ca1 Name: Savings
	Rainy Day	1000
	Big Trip	2000
Category id: 3ade7a53-99e9-449e-9e3a-e16ebe1f6760 Name: Internal Master Category
Category id: bd4ccd42-7b4a-472a-9ed1-a3def16b1628 Name: Credit Card Payments
Category id: 1bc548ca-16f7-4cf9-a7c1-eb01758d976a Name: Immediate Obligations
Category id: 66091fb2-3a5e-4a18-892f-313559f12190 Name: True Expenses
Category id: 61a7fcd8-f9db-4c99-a779-3a6add87d02a Name: Debt Payments
Category id: 4d761bf0-9396-4a6b-b340-4612db0a945f Name: Quality of Life Goals
Category id: c643dd8a-48eb-433f-a131-68a8abf892d5 Name: Just for Fun
Category id: bcfcd80e-ca54-462e-bcb6-e37162199c1f Name: Hidden Categories
```

