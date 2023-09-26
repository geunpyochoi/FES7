import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sale, soldOut } from '../modules/stockCounter';

export default function StockCounter() {
  const { message } = useSelector((state) => {
        return {
            message: state.stockReducer.message,
        }
    });
  const { stock} = useSelector((state) => {
        return {
            stock: state.goodsReducer.stock,
        }
    });
    const dispatch = useDispatch();

    // 디스패치 함수에 액션을 인자로 전달하여 실행합니다.

    useEffect(()=>{
      if(stock<=0){
        dispatch(soldOut());
      } else {
        dispatch(sale());;
      }
    },[stock])
    
  return (
    <p>
      {message}
    </p>
  )
}
