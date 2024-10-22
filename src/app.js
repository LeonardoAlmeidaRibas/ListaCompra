import e from 'express';
import comprasRouter from './routes/compras-router.js';
const port = 7000

const app = e();

app.use(e.json());

app.use('/compras', comprasRouter);

app.listen(port, () => console.log('Server is running on port ' + port));