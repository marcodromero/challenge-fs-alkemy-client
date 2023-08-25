import React, { useEffect, useState } from "react";

export const Alert = ({ message, error }) => {
  const [list, setList] = useState("");
  const [style, setStyle] = useState("");

  const layoutAlert = () => {
    if (error) {
      const layoutList = message.errors.map((error, index) => (
        <li key={index}>{error.msg}</li>
      ));
      setStyle("alert alert-danger mt-4");
      setList(layoutList);
    } else {
      setStyle("alert alert-success mt-4");
    }
  };

  useEffect(() => {
    layoutAlert();
  }, [message]);

  return (
    <div className={style} role="alert" id="notif2">
      {error ? list : message}
    </div>
  );
};
