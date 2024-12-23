const Transaction = require('../models/Transaction');

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

// Create a transaction
exports.createTransaction = async (req, res) => {
  const { description, category, amount, type } = req.body;
  try {
    const transaction = await Transaction.create({
      description,
      category: type === 'Expense' ? category : null,
      amount,
      type,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Transaction.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: 'Transaction deleted successfully' });
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};

// Clear all transactions
exports.clearAllTransactions = async (req, res) => {
  try {
    await Transaction.destroy({ where: {} });
    res.status(200).json({ message: 'All transactions cleared successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear transactions' });
  }
};
