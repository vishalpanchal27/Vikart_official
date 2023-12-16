import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/slices/HomeApiSlice'
import { useNavigate } from 'react-router-dom'


const Category = ({ title, categoryCode }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCategory = () => {
    dispatch(setCategory(categoryCode))
    navigate('/vikart_official')
  }
  return (
    <div className=''>
      <div className=''>
        {/* <button className='border-4 w-[200px]' onClick={() => dispatch(setCategory(categoryCode))}>
          {title}
        </button> */}
        <ul className='flex flex-wrap '>
          <li className=' text-sm hover:text-blue-600 cursor-pointer' onClick={() => handleCategory(categoryCode)}>{title}</li>
        </ul>
      </div>
    </div>
  )
}

export default Category
