import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'


const arrowStyle ={height:'fit-content',border:'none',outline:'none',color:'white',cursor:'pointer'}

export const LeftArrow = () => {
    return (
        <FontAwesomeIcon icon={faLessThan} style={arrowStyle}/>
    )
}

export const RightArrow = () => {
    return (
        <FontAwesomeIcon icon={faGreaterThan} style={arrowStyle}/>
    )
}