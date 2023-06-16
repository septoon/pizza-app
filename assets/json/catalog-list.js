// import pepperoni from '../img/pepperoni.png'

const catalogList = [
  {
    'title': 'Пицца с тунцом',
    'image': 'https://user36270.clients-cdnnow.ru/1661934256270-350x234.jpeg',
    'prices': [ '400', '700', '900', ],
    'composition': 'тунец, сыр пармезан, соус, оливки, помидоры',
    'isChange': false, 
    'id': 0
  },
  {
    'title': 'Пицца "Маргарита"',
    'image': 'https://user36270.clients-cdnnow.ru/1661937087841-350x234.jpeg',
    'prices': [ '340', '420', '560', ],
    'composition': 'сыр, соус, помидор, зелень',
    'isChange': false, 
    'id': 1
  },
  {
    'title': 'Пицца Вегетарианская',
    'image': 'https://user36270.clients-cdnnow.ru/1661932739340-350x234.jpeg',
    'prices': [ '340', '480', '690', ],
    'composition': 'сыр, соус, помидор, кукуруза, болгарский перец, грибы, брокколи, маслины',
    'isChange': false, 
    'id': 2
  },
  {
    'title': 'Пицца 4 сыра',
    'image': 'https://user36270.clients-cdnnow.ru/1661937087841-350x234.jpeg',
    'prices': [ '440', '680', '800', ],
    'composition': 'пармезан, моцарелла, гауда, эдам, соус',
    'isChange': false, 
    'id': 3
  },
  {
    'title': 'Пицца "Грибная"',
    'image': 'https://user36270.clients-cdnnow.ru/1661931941469-350x234.jpeg',
    'prices': [ '355', '520', '680', ],
    'composition': 'сыр, соус, помидор, шампиньоны, зелень, болгарский перец',
    'isChange': false, 
    'id': 4
  },
  {
    'title': 'Пицца "Антонио"',
    'image': 'https://user36270.clients-cdnnow.ru/1661936875290-350x234.jpeg',
    'prices': [ '365', '520', '730', ],
    'composition': 'сыр, соус, салями, грибы, болгарский перец, кукуруза, зелень',
    'isChange': false, 
    'id': 5
  },
  {
    'title': 'Пицца Классика',
    'image': 'https://user36270.clients-cdnnow.ru/1661940214245-350x234.jpeg',
    'prices': [ '380', '510', '650', ],
    'composition': 'сыр, соус, салями, ветчина, грибы, помидор, сыр',
    'isChange': false, 
    'id': 6
  },
  {
    'title': 'Пицца Пикассо',
    'image': 'https://user36270.clients-cdnnow.ru/1661945560562-350x234.jpeg',
    'prices': [ '360', '520', '665', ],
    'composition': 'сыр, соус, салями, буженина, помидоры, кукуруза',
    'isChange': false, 
    'id': 7
  },
  {
    'title': 'Пицца "Прошуто"',
    'image': 'https://user36270.clients-cdnnow.ru/1661879507650-350x234.jpeg',
    'prices': [ '365', '520', '730', ],
    'composition': 'сыр, соус, помидор, ветчина, грибы',
    'isChange': false, 
    'id': 8
  },
  {
    'title': 'Пицца "Курица с грибами"',
    'image': 'https://user36270.clients-cdnnow.ru/1661937087841-350x234.jpeg',
    'prices': [ '380', '580', '700', ],
    'composition': 'сыр, соус, курица, грибы, зелень по желанию',
    'isChange': false, 
    'id': 9
  },
  {
    'title': 'Пицца "Гавайская"',
    'image': 'https://user36270.clients-cdnnow.ru/1661936580489-350x234.jpeg',
    'prices': [ '350', '580', '690', ],
    'composition': 'сыр, соус, курица или ветчина, ананас',
    'isChange': false, 
    'id': 10
  },
  {
    'title': 'Пицца "Морская"',
    'image': 'https://user36270.clients-cdnnow.ru/1661882904843-350x234.jpeg',
    'prices': [ '470', '750', '900', ],
    'composition': 'мидии, осьминоги, креветки, кальмары, сыр, соус, зелень',
    'isChange': false, 
    'id': 11
  },
  {
    'title': 'Пицца "Микс"',
    'image': 'https://user36270.clients-cdnnow.ru/1661931479571-350x234.jpeg',
    'prices': [ '490', '680', '900', ],
    'composition': 'сыр, соус, салями, ветчина, буженина, курица, грибы, сладкий перец',
    'isChange': false, 
    'id': 12
  },
  {
    'title': 'Пицца "Салями"',
    'image': 'https://user36270.clients-cdnnow.ru/1661880597216-350x234.jpeg',
    'prices': [ '350', '510', '650', ],
    'composition': 'сыр, соус, салями, маслины',
    'isChange': false, 
    'id': 13
  },
  {
    'title': 'Пицца "С сёмгой"',
    'image': 'https://user36270.clients-cdnnow.ru/1661942937560-350x234.jpeg',
    'prices': [ '460', '740', '900', ],
    'composition': 'сыр, соус, оливки, сёмга, креветки',
    'isChange': false, 
    'id': 14
  },
  {
    'title': 'Пицца "Пеперони"',
    'image': 'https://user36270.clients-cdnnow.ru/1661934254754-350x234.jpeg',
    'prices': [ '340', '490', '650', ],
    'composition': 'сыр, соус, перерони, болгарский перец',
    'isChange': false, 
    'id': 15
  },
  {
    'title': 'Пицца "Vivat"',
    'image': 'https://user36270.clients-cdnnow.ru/1661939954985-350x234.jpeg',
    'prices': [ '440', '620', '800', ],
    'composition': 'сыр, соус, свинина, буженина, пеперони, грибы, зелень',
    'isChange': false, 
    'id': 16
  },
  {
    'title': 'Пицца "Пармезан"',
    'image': 'https://user36270.clients-cdnnow.ru/1661947356685-350x234.jpeg',
    'prices': [ '400', '500', '800', ],
    'composition': 'сыр, соус, свинина, помидор',
    'isChange': false, 
    'id': 17
  }
]

export default catalogList
