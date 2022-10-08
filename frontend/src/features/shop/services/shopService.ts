import axios from "axios"
import { ShopItem } from "../redux/shopSlice";
import PEOPLE from '../../../assets/images/people.png';

const loadProducts = async () => {
    // await axios.get('');
    return [{
        id: 0,
        price: 100,
        description: 'Описание.Описание.Описание. Описание',
        title: 'Товар',
        imgPath: PEOPLE
    },
    {
        id: 2,
        price: 100,
        description: 'Описание.Описание.Описание. Описание',
        title: 'Товар',
        imgPath: PEOPLE
    },
    {
        id: 3,
        price: 100,
        description: 'Описание.Описание.Описание. Описание',
        title: 'Товар',
        imgPath: PEOPLE
    }
]
}

const shopService = {
    loadProducts
}

export default shopService;
