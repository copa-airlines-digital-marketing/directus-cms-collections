export interface Currency {
  code: string; // 'USD'
  symbol: string; // '$'
  format: string; // '{symbol}{amount}'
  thousand_separator: string; //','
  decimal_separator: string; //'.'
}
