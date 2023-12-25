const http = require("http");
const app = require("./app")

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);


// const jsonData = pm.response.json();if (jsonData.status) {    pm.environment.set("token", jsonData.token);    }