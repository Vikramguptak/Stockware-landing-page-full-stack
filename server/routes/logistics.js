const express = require('express');
const router = express.Router();
const invoiceService = require('../services/invoiceService');

// ... other routes ...

router.post('/invoices/generate', async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have authentication middleware
    const invoice = await invoiceService.generateInvoice(userId);
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate invoice' });
  }
});

module.exports = router;