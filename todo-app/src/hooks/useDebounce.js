import React, { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return search;
};

export default useDebounce;
