import axios, { Axios } from "axios";

export const fetchBtc = () => async () => {
  const prise = await axios
    .get("https://api.coincap.io/v2/assets/bitcoin")
    .then((res) => res.data.data.priceUsd);
};
