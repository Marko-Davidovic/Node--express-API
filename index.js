import express from "express";
import bodyParser from "body-parser";

import usersRouters from "./routes/users.js";


const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/', usersRouters )

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send("Hello from Homepage.");
});

app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`))

