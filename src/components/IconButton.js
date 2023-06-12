import { Children } from 'react'
import DownloadIcon from '../asset/download.png'
import './IconButton.css'

export default function IconButton({text}){

    return (<button className='IconButton'><img src={DownloadIcon}/>{text}</button>)
}