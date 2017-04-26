// Convert 12-hour time to military time (representated by strings)
function toMilitary (time) {
  // Parse the time
  const regexp = /([0-9]{1,2}):([0-9]{2})(am|pm)*/ig;
  [, hours, minutes, half] = regexp.exec(time);
  // Add 12 hours for PM
  if (half && hours === '12' && half.toLowerCase() === 'pm') {
    hours = '12';
  } else if (half && half.toLowerCase() === 'pm') {
    hours = String(Number(hours) + 12);
  }
  if (half && hours === '12' && half.toLowerCase() === 'am') {
    hours = '00';
  }
  // Add zero padding
  if(hours.length < 2) { hours = '0' + hours; }
  return `${hours}:${minutes}`;
}
