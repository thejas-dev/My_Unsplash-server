

const User = require('../models/userModel');

module.exports.create = async(req,res,next) =>{
	try{
		const {images} = req.body
		const id =req.params.id
		console.log(images)
		const user = User.findByIdAndUpdate(id,{
			images
		},{new:true},(err,docs)=>{
			return res.json({docs})	
		})		
	}catch(ex){
		next(ex)
	}
}

module.exports.fetch = async(req,res,next) =>{
	try{
		const data = User.find( { _id:{$eq:req.params.id} } ,(err,data)=>{
			return res.json(data)
		}).select([
			"images"
		])
	}catch(ex){
		next(ex);
	}
}