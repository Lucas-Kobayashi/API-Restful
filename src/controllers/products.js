const ProductsModel = require('../models/products')

async function get(req, res) {
    const {id} = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'Produto cadastrado'
    })
}

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, { new: true})

    res.send({
        message: 'success',
        product
    })

//      Método que não traz como resposta o item modificado
/*      const product = await ProductsModel.findOne({_id: id})

     await product.updateOne(req.body)

     res.send({
         message: 'Produto alterado'
     }) */
}

async function remove(req, res) {
    const { id } = req.params
  
    const remove = await ProductsModel.deleteOne({ _id: id })
    
    const message = remove.deletedCount = 1 ? 'success' : 'error'

    res.send({
      message,
    })
  }
  
  module.exports = {
    get,
    post,
    put,
    remove,
  }