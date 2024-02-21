import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment, reset } from './redux/reducer/counter'

function App() {
  const value = useSelector((state) => state.counter.countValue)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className='text-center mt-32'>
     <h1 className='text-5xl'>{value}</h1>
     <button onClick={handleIncrement} className='bg-purple-600 text-white text-center px-10 py-5 mt-5'>Increment</button>
     <button onClick={handleDecrement} className='bg-sky-400 text-white text-center px-10 py-5 ml-5'>Decrement</button>
     <button onClick={handleReset} className='bg-lime-400 text-white text-center px-10 py-5 ml-5'>Reset</button>
    </div>
    // this is our main page
  )
}

export default App