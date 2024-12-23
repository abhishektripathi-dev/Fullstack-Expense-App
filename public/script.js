// Base URL for backend API
const BASE_URL = 'http://localhost:5000/api/transactions';

// DOM Elements
const incomeDescription = document.getElementById('income-description');
const incomeAmount = document.getElementById('income-amount');
const expenseDescription = document.getElementById('expense-description');
const expenseCategory = document.getElementById('expense-category');
const expenseAmount = document.getElementById('expense-amount');
const transactionHistory = document.getElementById('transaction-history');
const totalIncomeElem = document.getElementById('total-income');
const totalExpensesElem = document.getElementById('total-expenses');
const balanceElem = document.getElementById('balance');

// State Variables
let totalIncome = 0;
let totalExpenses = 0;
let transactions = [];

// Fetch and render all transactions from the backend
async function fetchTransactions() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    transactions = response.data;
    renderTransactions();
    updateSummary();
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
}

// Render transactions in the table
function renderTransactions() {
  transactionHistory.innerHTML = '';
  transactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${transaction.description}</td>
      <td>${transaction.category || '-'}</td>
      <td>₹${transaction.amount}</td>
      <td>${transaction.type}</td>
      <td><button onclick="deleteTransaction(${transaction.id})">Delete</button></td>
    `;
    transactionHistory.appendChild(row);
  });
}

// Add income
async function addIncome() {
  const description = incomeDescription.value.trim();
  const amount = parseFloat(incomeAmount.value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert('Please provide a valid description and amount.');
    return;
  }

  try {
    const response = await axios.post(`${BASE_URL}/`, {
      description,
      amount,
      type: 'Income'
    });
    transactions.push(response.data);
    renderTransactions();
    updateSummary();
    incomeDescription.value = '';
    incomeAmount.value = '';
  } catch (error) {
    console.error('Error adding income:', error);
  }
}

// Add expense
async function addExpense() {
  const description = expenseDescription.value.trim();
  const category = expenseCategory.value;
  const amount = parseFloat(expenseAmount.value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert('Please provide a valid description and amount.');
    return;
  }

  try {
    const response = await axios.post(`${BASE_URL}/`, {
      description,
      category,
      amount,
      type: 'Expense'
    });
    transactions.push(response.data);
    renderTransactions();
    updateSummary();
    expenseDescription.value = '';
    expenseAmount.value = '';
  } catch (error) {
    console.error('Error adding expense:', error);
  }
}

// Delete transaction
async function deleteTransaction(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    transactions = transactions.filter(transaction => transaction.id !== id);
    renderTransactions();
    updateSummary();
  } catch (error) {
    console.error('Error deleting transaction:', error);
  }
}

// Clear all transactions
async function clearAll() {
  try {
    await axios.delete(`${BASE_URL}/`);
    transactions = [];
    renderTransactions();
    updateSummary();
  } catch (error) {
    console.error('Error clearing transactions:', error);
  }
}

// Update budget summary
function updateSummary() {
  totalIncome = transactions
    .filter(transaction => transaction.type === 'Income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  totalExpenses = transactions
    .filter(transaction => transaction.type === 'Expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  totalIncomeElem.textContent = totalIncome;
  totalExpensesElem.textContent = totalExpenses;
  balanceElem.textContent = balance;
}

// Initialize the app
fetchTransactions();
