import { getUserLocale } from "get-user-locale";

const formatCurrency = (value) => {
  var formatter = new Intl.NumberFormat(getUserLocale(), {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return formatter.format(value);
};

export default formatCurrency;
