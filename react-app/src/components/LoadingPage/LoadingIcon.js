import loadingIcon from '../../media/banter-icon-spin.gif'
import "./LoadingIcon.css"

const LoadingIcon = ({ visibility }) => {

    return (
            <img src={loadingIcon} alt="loading..." className='loading-icon' />
    )
}

export default LoadingIcon