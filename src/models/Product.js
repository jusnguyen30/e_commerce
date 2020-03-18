import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('product', productSchema);

export default Product;
