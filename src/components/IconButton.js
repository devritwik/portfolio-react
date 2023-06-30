import DownloadIcon from '../asset/download.png'
import './IconButton.css'

export default function IconButton({text}){

    return (<a href="https://drive.google.com/file/d/1iUkkv_B9n2LWFmf4CtAZYopoqNiwV7z_/view?usp=sharing" className='IconButton' target="_blank"><img src={DownloadIcon}/>{text}</a>)
}
