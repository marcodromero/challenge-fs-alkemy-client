export const Select = ({defaultTitle, defaultValue, handle, dataArray}) => {
  return (
        <select
            className="form-select form-select-sm"
            defaultValue= {defaultValue}
            onChange={handle}
        >   
            <option value=""> {defaultTitle} </option>
            {dataArray?.map((data, index) => (
            <option value={data.id} key={index}>
                {data.name}
            </option>
            ))}
        </select>
  )
}