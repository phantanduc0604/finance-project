export const converNumberToCurrent: (amount: number, suffix?: string) => string = (
  amount: number,
  suffix = '₫',
) => {
  if (isNaN(amount)) return `0 ${suffix}`;

  const parts = Math.floor(amount).toString().split('');
  let result = '';

  for (let i = 0; i < parts.length; i++) {
    const reverseIndex = parts.length - i;
    result += parts[i];

    if (reverseIndex > 1 && reverseIndex % 3 === 1) {
      result += '.';
    }
  }

  return `${result} ${suffix}`;
};

export const isUndefined = (value?: string) => {
  return !value || value === 'undefined';
}