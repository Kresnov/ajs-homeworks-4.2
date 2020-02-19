import array from './array.js';

const findBy = (property, value) => (data) => {
  if (data[property] !== undefined && data[property].includes(value)) {
    return true;
  }
  return false;
};

const found = findBy('type', 'help');
array.filter(found);

export default findBy;
