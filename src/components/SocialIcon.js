import './SocialIcon.css'
export default function SocialIcon({src, link}){
    return <a  href={link}><div className='SocialIcon'><img src={src}/></div></a>
}