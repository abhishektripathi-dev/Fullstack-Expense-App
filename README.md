# Expense Tracker

## Overview
The Expense Tracker is a web-based application designed to manage and track your income and expenses. It allows users to add income and expense entries, categorize expenses, view transaction history, and calculate total income, expenses, and balance. The app is fully responsive and supports CRUD operations using a backend API.

---

## Features
- Add income with descriptions and amounts.
- Add expenses with descriptions, categories, and amounts.
- View transaction history with descriptions, amounts, and types (Income/Expense).
- Calculate and display total income, expenses, and balance.
- Clear all transactions at once.
- Fully responsive UI for all device sizes.
- CRUD operations powered by Axios and a backend API.

---

## Tech Stack

### Frontend
- **HTML5**: Structure of the application.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Frontend logic and integration with the backend using Axios.

### Backend
- **Express.js**: Backend framework for handling API routes.
- **Sequelize**: ORM for managing MySQL database.
- **MySQL**: Database for storing transaction records.

---

## Installation

### Prerequisites
- Node.js and npm installed.
- MySQL database setup.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/abhishektripathi-dev/Fullstack-Expense-App.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a MySQL database.
   - Update the `config/database.js` file with your database credentials.

4. Run the application:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```
   http://localhost:5000
   ```

---

## API Endpoints

### Base URL
```
http://localhost:5000/api/transactions
```

### Endpoints
- **GET** `/`: Fetch all transactions.
- **POST** `/`: Add a new transaction.
- **DELETE** `/:id`: Delete a specific transaction by ID.
- **DELETE** `/`: Clear all transactions.

---

## Folder Structure
```
expense-tracker/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── models/
│   └── Transaction.js
├── routes/
│   └── transactionRoutes.js
├── controllers/
│   └── transactionController.js
├── config/
│   └── database.js
├── app.js
├── package.json
└── README.md
```

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---
## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

## Contributors

### Abhishek Tripathi
- **GitHub:** [github.com/abhishektripathi-dev](https://github.com/abhishektripathi-dev)
- **LinkedIn:** [linkedin.com/in/imabhishek-tripathi](https://www.linkedin.com/in/imabhishek-tripathi/)
- **LeetCode:** [leetcode.com/abhishektripathi-dev](https://leetcode.com/abhishektripathi-dev)

## License
This project is licensed under the MIT License. Created and maintained by Abhishek Tripathi. See the LICENSE file for more details.

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://axios-http.com/)

---

