import { useSelector } from 'react-redux'
import { commentsErrorSelector } from '../../ducks/comments/selectors'

import './styles.css'

const Preloader = () => {
  const commentsError = useSelector(commentsErrorSelector)

  const message = commentsError

  return !!message && <div className="error">{message}</div>
}

export default Preloader
