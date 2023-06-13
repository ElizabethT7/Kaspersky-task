export function numberFormat(value, locale = 'en-GB', currency = 'EUR') {
    return value.toLocaleString(locale, { style: 'currency', currency: currency, minimumFractionDigits: 2 }) || '';
  }