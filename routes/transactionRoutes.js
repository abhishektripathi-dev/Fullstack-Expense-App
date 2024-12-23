const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Routes
router.get('/', transactionController.getAllTransactions);
router.post('/', transactionController.createTransaction);
router.delete('/:id', transactionController.deleteTransaction);
router.delete('/', transactionController.clearAllTransactions);

module.exports = router;
