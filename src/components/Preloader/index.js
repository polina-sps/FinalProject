import { useSelector } from 'react-redux'
import { isLoadingSelector } from '../../ducks/comments/selectors'

import './styles.css'

const Preloader = () => {
  const isCommentsLoading = useSelector(isLoadingSelector)

  const isLoading = isCommentsLoading

  return !!isLoading && <div className="loading">LOADING</div>
}

export default Preloader
