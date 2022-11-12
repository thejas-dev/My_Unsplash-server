const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require("./routes/userRoutes")
// const cors = require('cors')
// require('dotenv').config();s
const app = express();

// app.use(cors())
app.use(express.json())
app.use('/api/auth',userRoutes)

app.get('/',(req,res)=>{
	res.send(`
		<h1>Hello World</h1>
	`)
})

mongoose.connect(process.env.MONGO_ID,{
	useNewUrlParser:true,
	useUnifiedTopology:true,
}).then(()=>{
	console.log("db connected successfully")
}).catch((err)=>{
	console.log(err.message)
})

let port = process.env.PORT || 3333 

app.listen(port,()=>{
	console.log(`app is listening on PORT ${port}`)
})


