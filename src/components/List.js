export const List = ({title, children}) => {
    return(
        <div className="card">
            <h6 className="text-center mt-4">{title}</h6>
            <ul className="list-group list-group-flush">
               {children}
            </ul>
        </div>
    );
}