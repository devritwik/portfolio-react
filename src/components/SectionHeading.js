import './SectionHeading.css'

export default function SectionHeading({text}){
    return(
        <>
        <h3 className="SectionHeading">
            {text}
        </h3>
        <div className="Underline"></div>
        </>
    )
}