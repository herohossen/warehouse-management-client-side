import { useEffect, useState } from "react";

const useItemDetails = (ItemId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:8888/item/${ItemId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [ItemId]);

  return [item];
};

export default useItemDetails;
