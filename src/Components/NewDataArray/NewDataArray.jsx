import {FaTrash} from 'react-icons/fa'
import './NewDataArray.css'

const NewDataArray = ({item, onDelete}) => {
    return(
      <div className="new-data">
       <div className='new-info'>
          <img src={item.url} alt='img' />
            <div>
              <h2>{item.title}</h2>
              <span>{item.price}$</span>
            </div>
       </div>
        <FaTrash className='delate__icon' onClick={() => onDelete(item.id)} />
      </div>
    )
}

export default NewDataArray;
