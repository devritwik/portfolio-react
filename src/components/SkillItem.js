import './SkillItem.css'


export default function SkillItem({text, src}){
    return(
        <div className='SkillItem'>
            <div>
            <img src={src}/>
            
            </div>
            <h4>{text}</h4>
        </div>
    )
}