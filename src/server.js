import express from 'express';

const app = express();
const port = 3000;

require('./config/bootstrap')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
