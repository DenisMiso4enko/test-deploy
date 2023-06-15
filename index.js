import express from "express";
import dotenv from "dotenv";
const router = express.Router();
dotenv.config();

const app = express()
const PORT = process.env.PORT
app.use(router)

router.get("/", (req, res, next) => {
	res.send('Hello World!')
})

app.listen(PORT || 3333, () => {
	console.log(`port start ${PORT}`)
})

