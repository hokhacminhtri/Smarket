require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

/* ============== Import Middleware =============== */
const passVariableToClientMiddleware = require('./middleware/pass-variable.middleware');
const unlessRouteMiddleware = require('./middleware/unless-route.middleware');

/* ============== Import route =============== */
const adminRoute = require('./routes/admin');
const shipperRoute = require('./routes/shipper.route');
const authRoute = require('./routes/auth.route');

/* ============== Config =============== */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: process.env.SESSION_SECRET || 'secret',
		resave: false,
		saveUninitialized: true,
	}),
);
app.use(cookieParser(process.env.SIGNED_COOKIE || 'signed_cookie'));

// set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// set logging
app.use(morgan('tiny'));

/* ============== Global Middleware =============== */
app.use(unlessRouteMiddleware([], passVariableToClientMiddleware));

/* ============== Routes =============== */
app.use('/admin', adminRoute);
app.use('/shipper', shipperRoute);
app.use('/auth', authRoute);

// 404 Not found redirect
app.use((req, res) => res.status(404).render('404.pug'));

/* ============== Listening =============== */
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
