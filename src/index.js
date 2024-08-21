/**
 * @name human-readable-number
 * @description Your task is to implement function toReadable that converts given number, to readable string.
 * toReadable(1);  // Will return 'one'
 * toReadable(993); // Will return 'nine hundred ninty seven'
 * @param {*} n
 * @returns
*/

module.exports = function toReadable (n) {
  let result = ''

  const tenArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const decArray = [undefined, undefined, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const unitArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  const unit = n % 10
  const dec = Math.floor(n % 100/10)
  const h = Math.floor(n / 100)

  const hundred = () => h > 0 ? unitArray[h] + ' ' + 'hundred' : ''

  const getDecimal = () => dec > 1 
    ? decArray[dec] 
    : dec == 1 ? tenArray[unit]
    : ' '.trim()

  const getUnit = () => 
    (dec === 0 && h === 0) 
      ? unitArray[unit]
      : (dec === 1 || unit === 0)
      ? ' '
      : unitArray[unit]

  result = hundred() + ' ' + getDecimal() + ' ' + getUnit()

  return result.replace(/\s+/g, ' ').trim()
  

}