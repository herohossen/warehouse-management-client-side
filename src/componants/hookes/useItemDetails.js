import { useEffect, useState } from "react";

const useItemDetails = (itemId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://inventory-management-p11.herokuapp.com/item/${itemId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);

  return [item, setItem];
};


export default useItemDetails;
