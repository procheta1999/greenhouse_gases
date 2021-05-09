import React from 'react';
function getPath(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      country: searchParams.get("country") || "",
      category:searchParams.get("category") || "",
    };
  }
  export default getPath