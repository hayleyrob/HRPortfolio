const { model, Schema } = require('mongoose')

const ItemSchema = new Schema ({
  title: String,
  source: String,
  url: String,
  description: String,
  gitrepo: String,
  itemId: String

})

module.exports = model('Item', ItemSchema)