import Trello from './Trello';

const topic = ['TODO', 'IN PROGRESS', 'DONE'];

const example = [
  ['Почистить зубы', 'Поесть'],
  ['Чищу зубы', 'Ем'],
  ['Зубы чистые', 'Я сыт'],
];

const divTrello = document.querySelector('.trello');

const jsTrello = new Trello(divTrello, topic);

jsTrello.init(example);

jsTrello.display();
