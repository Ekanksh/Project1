const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
require("./models/db");

const logisticLoginController = require('./controllers/logisticLoginController');
const LoginVendorController = require('./controllers/LoginVendorController');
const LogisticRegController = require ('./controllers/logisticRegController');
const LoginVendorRegController = require('./controllers/LoginVendorRegController')
const DashboardController = require ('./controllers/DashboardController')
const DashboardSubmittedController = require ('./controllers/DashboardSubmittedController')
//const FinancePaidController = require ('./controllers/FinancePaidController')
const FinancePaidController = require('./controllers/FinancePaidController')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/login', logisticLoginController);
app.use('/loginVendor',LoginVendorController)

app.use('/reg', LogisticRegController);
app.use('/regVendor', LoginVendorRegController);

app.use('/Dashboard',DashboardController)

app.use('/DashboardSubmitted',DashboardSubmittedController)

app.use('/FinancePaid',FinancePaidController)
app.listen(port, () => {
    console.log(`Server is running at port no. : ${port}`);
});