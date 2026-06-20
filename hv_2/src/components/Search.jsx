import React, { useState } from "react";
 
const Search = () => {
  const [text, setText] = useState("");
 
  const handleSubmit = (e) => { };
   
  return (
    <div>
      <input
        type="text"
        className="border"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
      />
    </div>
  );
};
 
export default Search;