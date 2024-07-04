import React, { useEffect, useState } from "react";

export const Alert = ({ message, isError = false}) => {
  const [list, setList] = useState("");
  const [style, setStyle] = useState("");

  const setupAlert = ()=>{
    if(message.errors){
      const layoutList = message.errors.map((error, index) => (
        <li key={index}>{error.msg}</li>
      ));
      setList(layoutList);
    }else{
      setList(<p>{message}</p>);
    }  

    isError
    ? setStyle("alert alert-danger mt-4")
    : setStyle("alert alert-success mt-4");
  }
 
  useEffect(() => {
    setupAlert();
  }, [message])
  
  return (
    <div className={style} role="alert" id="notif2">
      {list} 
    </div>
  );
};
