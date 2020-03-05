import { Router } from 'express';

const app = Router();

app.get('/', (req, res) => {
   console.log("ge")
});

app.post('/', (req, res) => {
    const {task} = req.body;
    console.log(task)
    return res.status(200).send()
});

export default Router().use(app);