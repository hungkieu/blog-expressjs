import express from 'express';
const app = express();

app.get('/', (res, req) => res.send(`Hello World`));
app.get('/test', (res, req) => {
	console.log(process.env);
});

app.listen(3000, () => console.log(`Server is running in port 3000`));