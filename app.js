require("dotenv").config();
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//port
const port = process.env.PORT 
app.listen(port, () => {
    console.log("Server is up and running on port 3000");
});