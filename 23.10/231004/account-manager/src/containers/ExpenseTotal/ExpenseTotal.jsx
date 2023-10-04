import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseTotal() {
  const income = useSelector((store) => store.expense.income);
  console.log(income);
  const expenseList = useSelector((store) => store.expense.expenseList);
  const totalExpense = expenseList.reduce((a,item)=>{
    return a+item.price
  },0)
  return (
    <>
      <div>
        <span>총 지출 : </span>
        <span>{totalExpense}원</span>
      </div>
      <div>
        <span>잔액 : </span>
        <span>{income-totalExpense}원</span>
      </div>
    </>
  )
}
