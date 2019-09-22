import express from 'express';

const app = express();

app.get('/', (res) => res.send(`Hello World`));
app.get('/test', () => {
  console.log(process.env);
});

app.listen(3000, () => console.log(`Server is running in port 3000`));
