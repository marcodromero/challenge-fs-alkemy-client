export const COLSIZE_VARIANTS = {
    SIZE2: 'colsize2',
    SIZE3: 'colsize3',
    SIZE6: 'colsize6',
    FULLSIZE: 'fullsize'
}

export const CardColumn = ({variant, children, customClass}) => {
    const getSizeColumn = (variant)=>{
    switch(variant){
      case 'colsize2':
        return `d-flex align-items-center justify-content-center col-12 col-md-2 `
      case 'colsize3':
        return `d-flex align-items-center justify-content-center d-flex align-items-center col-12 col-md-3`
      case 'colsize6':
        return `d-flex align-items-center justify-content-center d-flex align-items-center col-12 col-md-6`
      case 'fullsize':
        return `d-flex align-items-center justify-content-center d-flex align-items-center col-12`
     default:
        return `d-flex align-items-center justify-content-center d-flex align-items-center col-12 col-md-2`
    }
  }
    return(
        <div className={getSizeColumn(variant)}>
              {children}
        </div>
    );
}