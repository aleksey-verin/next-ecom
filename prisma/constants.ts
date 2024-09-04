export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
]

export const _ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl: '/images/01.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl: '/images/02.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: '/images/03.png',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl: '/images/04.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: '/images/05.png',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: '/images/06.png',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: '/images/07.png',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: '/images/08.png',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: '/images/09.png',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: '/images/10.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/images/11.png',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: '/images/12.png',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: '/images/13.png',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl: '/images/14.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: '/images/15.png',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: '/images/16.png',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl: '/images/17.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl: '/images/18.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет с пепперони',
    imageUrl: '/images/19.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/images/20.webp',
    categoryId: 2,
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imageUrl: '/images/21.webp',
    categoryId: 3,
  },
  {
    name: 'Куриные наггетсы',
    imageUrl: '/images/22.webp',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи с соусом 🌱',
    imageUrl: '/images/23.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: '/images/24.webp',
    categoryId: 3,
  },
  {
    name: 'Острый Додстер 🌶️🌶️',
    imageUrl: '/images/25.webp',
    categoryId: 3,
  },
  {
    name: 'Банановый молочный коктейль',
    imageUrl: '/images/26.webp',
    categoryId: 4,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imageUrl: '/images/27.webp',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl: '/images/28.webp',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль 👶',
    imageUrl: '/images/29.webp',
    categoryId: 4,
  },
  {
    name: 'Ирландский Капучино',
    imageUrl: '/images/30.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Карамельный капучино',
    imageUrl: '/images/31.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl: '/images/32.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Американо',
    imageUrl: '/images/33.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/images/34.webp',
    categoryId: 5,
  },
]
