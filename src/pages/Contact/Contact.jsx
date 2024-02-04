import { useParams } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  const { title } = useParams();

  return (
    <div className='contact'>
      <h2>{title}</h2>
    </div>
  )
}

export default Contact