import { Router } from "express";
import Transaction from "../model/TransactionModel/Transaction.js";

const router = Router()

// to save new data to transaction
router.post('/', async (req, res)=> {
    const {amount, description, date} = req.body;

    const transaction = new Transaction({
        amount,
        description,
        date
    })
    await transaction.save();
    res.json({message: "Success"})
})


// to delete data from transaction
router.delete('/:id', async(req, res)=> {
    const IDs = req.params.id
    await Transaction.deleteOne({ _id: IDs})
        res.json({'message': 'Delete Operation successfull'})
})


// to fetch all data in transaction 
router.get('/', async(req, res)=> {
    const transaction = await Transaction.find({})
    // .sort({ createdAt : -1 })
    res.json({ data: transaction })
})


export default router