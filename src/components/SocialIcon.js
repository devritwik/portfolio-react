import './SocialIcon.css'
export default function SocialIcon({src, link}){
    return <a  href={link} target="_blank"><div className='SocialIcon'><img src={src}/></div></a>
}