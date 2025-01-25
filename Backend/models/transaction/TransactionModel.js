import transactionModel from "./TransactionSchema.js"

export const createTransaction = (tObj)=>{
    return transactionModel(tObj).save();
}

