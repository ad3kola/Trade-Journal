import { Coin } from "./typings";

const fetchCryptos = async () => {
  const allCoins = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );

  const data = await allCoins.json();

  const coins = data.map((coin: Coin) => ({
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    logo: coin.image,
    currentPrice: coin.current_price,
  }));

  return coins;
};

export default fetchCryptos;
