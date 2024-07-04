export const BUTTON_VARIANTS = {
    NEW: 'new',
    UPDATE: 'update',
    DELETE: 'delete',
    PRIMARY: 'primary'
}

export const Button = ({ text, variant, size, handle, ...props }) => {
    let  buttonSize;
    const getButtonStyle = (option)=>{ 
    switch (option) {
        case 'new': 
            return {backgroundColor: '#84c9cc', color: '#202426'}
        case 'update': 
            return {backgroundColor: '#ffd764', color: '#202426'}
        case 'delete': 
            return {backgroundColor: '#f76c73', color: '#202426'}
        case 'primary':
            return {backgroundColor: '#4cbcbf', color: '#202426'} 
        default:
            return {backgroundColor: '#0d6efd', color: '#FFFFFF'} 
    }}

    switch (size){
        case 'small':
            buttonSize = "m-2 btn btn-sm"
            break;
        case 'normal':
            buttonSize = "m-2 btn"
            break
        default :
            buttonSize = "m-2 btn"
    }

return(
    <button 
      className= { buttonSize }
      style={ getButtonStyle(variant) }
      onClick = {handle}
      { ...props }
    >
      { text }
    </button>
);
}