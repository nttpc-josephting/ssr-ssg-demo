import { useEffect, useState } from "react";
import getData from "../data";

export default function Csr() {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((r) => setTimeout(r, 2000)).then(() => {
      setData(getData());
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (<></>) : (<>{ new Date(data).toLocaleString('ja-JP') }</>);
};
