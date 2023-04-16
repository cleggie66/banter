import lightGif from '../../media/banter-logo-gif-light.gif'
// import darkGif from '../../media/banter-logo-gif-dark.gif'
import "./LoadingPage.css"


const LoadingPage = ({ visibility }) => {

    return (
        <div className={`loading-page ${ visibility }`}>
            <img src={lightGif} alt="loading..." className='loading-gif'/>
        </div>
    )
}

export default LoadingPage