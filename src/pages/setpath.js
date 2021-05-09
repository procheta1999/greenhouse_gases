import React from 'react';
function setPath({ country,category }) {
    const searchPath = new URLSearchParams(); 
    searchPath.set("country", country || ""); //sets the value of the parameter 'query'
    searchPath.set("category", category || "");
    return searchPath.toString();
  }
  export default setPath
  