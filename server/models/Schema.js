import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  fname: String,
  lname: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

var Schema = mongoose.model('Schema', postSchema);

export default Schema;