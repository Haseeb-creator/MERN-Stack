const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require('./models/Users')
const cors = require('cors')


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://mdhaseeb:RfKXbReZPrrICYzf@mernproject.kf8hmsi.mongodb.net/mern?retryWrites=true&w=majority ")



//writing a frontend api to call data from data
app.get("/getUsers", async (req, res) => {
	const allUsers = await UserModel.find()
	res.send({
		status: 'Success',
		data: allUsers,
	})
})

app.post("/createUser", async (req, res) => {
	const user = req.body
	const newUser = new UserModel(user)
	await newUser.save()
	res.send({
		status: 'Success',
		data: user,
	})
})


// server in runing in 3001 port 
app.listen(3001, () => {
	console.log("server is running!");
})