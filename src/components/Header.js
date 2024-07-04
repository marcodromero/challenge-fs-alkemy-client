export const Header = ({title, children}) => {
    return(
        <div
            className="card text-center  mb-1 border-0 text-light"
            style={{ backgroundColor: "#4cbcbf" }}
        >   
        <h4 className="text-light card-title">{title}</h4>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}