import DownloadIcon from '../asset/download.png'
import './IconButton.css'

export default function IconButton({text}){

    return (<a href="https://drive.google.com/file/d/1Q3PBIUQn1YDXP2BFBTrymfuKUERDpd1t/view?usp=sharing" className='IconButton' target="_blank"><img src={DownloadIcon}/>{text}</a>)
}
