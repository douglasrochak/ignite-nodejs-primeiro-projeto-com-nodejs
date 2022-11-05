const express = require("express");
const { v4:uuidv4 } = require("uuid");

const app = express();

app.use(express.json())

const customers = []

app.get('/', (request, response) => {
  
  return response.json('Alo');
})

app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf )

  if(customerAlreadyExists){
    return response.status(400).json({error: 'Customer already exists'});
  }

  customers.push({
    id: uuidv4(),
    name,
    cpf,
    statement: []
  })
  
  return response.status(201).send();
})

app.listen(3333);