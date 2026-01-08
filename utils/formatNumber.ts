export const formatNumber = (value: string) => {
  const parts = value.split('.');
  if (parts[0]) {
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return parts.join('.');
};


export function separateNumber(num: string) {
    const numValue = parseFloat(num);
    const fixed = numValue.toFixed(2);
  
    const [whole, decimal] = fixed.split('.');
  
    return {
      whole: whole,
      decimal: '.' + decimal,
    };
  }
  