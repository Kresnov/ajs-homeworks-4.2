import findBy from '../js/findBy.js';

test('Поиск по нужному полю', () => {
  const array = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const found = findBy('name', 'маг');
  const expected = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  ];
  expect(array.filter(found)).toEqual(expected);
});

test('Ошибка поиска данных', () => {
  const array = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const found = findBy('surname', 'nukem');
  const expected = [];
  expect(array.filter(found)).toEqual(expected);
});
