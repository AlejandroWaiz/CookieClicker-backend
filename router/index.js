const routes = require('express').Router();

const appRoutes = (api) => {
    api.use("/", routes);

    // Middleware Not Found
    api.use((req, res, next) => res.status(404).send("Resources Not Found"));
};

module.exports = appRoutes;