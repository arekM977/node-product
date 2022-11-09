import mongoose from 'mongoose'
import ProductMessage from '../models/productMessage.js'


export const createProduct = async (request, response) =>
{
    const product = request.body
    const newProduct = new ProductMessage(product)
    try
    {
        await newProduct.save()
        response.status(201).json(newProduct)
    }
    catch(error)
    {
        response.status(409).json({message: error.message})
    }
}


export const getProducts = async (request,response) => 
{
    try
    {
        const productMessages = await ProductMessage.find()
        response.status(200).json(productMessages)
    }
    catch(error)
    {
        response.status(404).json({message:error.message})
    }
}


export const getProduct = async (request,response) =>
{   
    const {id} = request.params
    try
    {
        const foundProduct = await ProductMessage.findById(id)
        response.status(200).json(foundProduct)
    }
    catch(error)
    {
        response.status(404).json({message:error.message})
    }
}


export const deleteProduct = async (request,response) =>
{
    const{id} = request.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return response.status(404).send('Not product with that id')
    }

    //delete logic
    await ProductMessage.findByIdAndRemove(id);
    response.json({message: 'Product deleted sucessfully'})
}


export const updateProduct = async (request,response)=>
{
    const{id} = request.params
    const product = request.body

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return response.status(404).send('Not product with that id')
    }
    const updateProduct = await ProductMessage.findByIdAndUpdate(id, product, {new:true})

    response.json({updateProduct})
}

