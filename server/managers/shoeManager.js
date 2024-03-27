const Shoe = require('../models/Shoe.js');

exports.getAll = async (qs) => {
    let query = Shoe.find()
    if (qs.where) {

        let [fieldName, ownerId] = qs.where.split('=')

        ownerId = ownerId.replaceAll('"', '')
        query = query.find({ _ownerId: ownerId })
        //query = query.where('_onwerId').eq(ownerId)
    }
    const result = await query

    return result

}
exports.getOne = (shoeId) => Shoe.findById(shoeId)
exports.create = (shoeData) => Shoe.create(shoeData)
exports.update = (shoeId, shoeData) => Shoe.findByIdAndUpdate(shoeId, shoeData)
exports.delete = (shoeId) => Shoe.findByIdAndDelete(shoeId)

exports.getAllForPagination = async (queryData) => {
    const { page = 1, limit = 12 } = queryData
    let query = {}

    if (queryData.search) {
        query.brand = new RegExp(queryData.search, 'i');
    }

    const shoes = await Shoe.find(query).limit(limit * 1).skip((page - 1) * limit).sort({ created_at: -1 })
    const count = await Shoe.countDocuments(query)

    const result = {
        shoes,
        totalPages: Math.ceil(count / limit),
        count, limit,
        currentPage: page
    }
    return result
}
exports.cart = async (data) => {


}