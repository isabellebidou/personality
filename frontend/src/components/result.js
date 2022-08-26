import React from "react";
const Result = ({ score, message }) => {
    return (
      <div>
        <div className="content">
        <p>
        {message.message}
        </p>
          
        </div>
      </div>
    );
  };
  
  export default Result;