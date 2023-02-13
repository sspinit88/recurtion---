/*

Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Напишите функцию printList(list), которая выводит элементы списка по одному.

*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let res = list.value;

  // console.log(list.value);

  if (!!list.next) {
    res = printList(list.next);
  }

  return res;
}

console.log('USUAL:', printList(list));

//// Вывод односвязного списка в обратном порядке

function printReverseList(list) {
  return list.next ? list.value : printReverseList(list.next);
}

console.log('REVERSE:', printReverseList(list));
