import menu from '../img/menu/menu.svg'
import tea from '../img/menu/tea-cup.svg'
import info from '../img/menu/info.svg'
import delivery from '../img/menu/delivery.svg'
import cart from '../img/menu/trolley-cart.svg'

const navBarItems = [
  {
    navlink: '/catalog',
    name: 'Меню',
    src: menu,
    isOpen: false,
    id: 0
  },
  {
    navlink: '/teaCard',
    name: 'Чай',
    src: tea,
    isOpen: false,
    id: 1
  },
  {
    navlink: '/aboutUs',
    name: 'О Нас',
    src: info,
    isOpen: false,
    id: 2
  },
  {
    navlink: '/delivery',
    name: 'Доставка',
    src: delivery,
    isOpen: false,
    id: 3
  },
  {
    navlink: '/cart',
    name: 'Корзина',
    src: cart,
    isOpen: false,
    id: 4
  }
]

export default navBarItems