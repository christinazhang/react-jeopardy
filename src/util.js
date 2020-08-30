export const formatMoney = (value) => {
  const sign = value >= 0 ? "" : "−";
  const formattedValue = Math.abs(value).toLocaleString();
  return sign + "$" + formattedValue;
};
