const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	images:Array,
})

module.exports = mongoose.model("Users",userSchema)