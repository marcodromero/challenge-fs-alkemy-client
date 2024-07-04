export const Form = ({id, children}) => {
    return(
        <form className="d-flex flex-column" id={id}>
            {children}
        </form>
    );
}