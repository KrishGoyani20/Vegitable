// import axios from 'axios';
// import { setFruitsData } from '../../Redux/Slice/CounterSlice';
// // import FruitsData from './Fruits'; // ✅ static data import

// export const fetchDatatoApi = (userId) => async (dispatch) => {
//     try {
//         console.log('Fatch from API......', response);
//         const response = await axios.get(`https://schema.getpostman.com/json/collection/v2.1.0/collection.json`);
//         console.log('Fatch from API......', response);

//         dispatch(setFruitsData(response.data)); // ✅ API se mila data store karna
//     } catch (error) {
//         console.error('API fetch error:', error);

//         // 🛠️ API fail ho gaya, fallback se static data bhejna
//         // dispatch(setFruitsData(FruitsData));
//     }
// };





import Images from "../../Image/Index"

const FruitsData =
    [
        { id: 1, name: 'Apple', image: Images.Apple, price: 120, off: 10, oldPrice: 130, kg: 2, bgColor: '#FFE0E3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Popular', },
        { id: 2, name: 'Onion', image: Images.Onion, price: 120, off: 20, oldPrice: 130, kg: 3, bgColor: '#FFDDE9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Most Recent', },
        { id: 3, name: 'Beat', image: Images.BeatRoot, price: 120, off: 10, oldPrice: 130, kg: 6, bgColor: '#FEE3E8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price High', },
        { id: 4, name: 'Orange', image: Images.Orange, price: 120, off: 12, oldPrice: 130, kg: 5, bgColor: '#FFE0DF', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price Low', },
        { id: 5, name: 'Lettuce', image: Images.Lettuce, price: 120, off: 10, oldPrice: 130, kg: 4, bgColor: '#E9FDC7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Popular', },
        { id: 6, name: 'Nescafe', image: Images.Nescafe, price: 120, off: 20, oldPrice: 130, kg: 2, bgColor: '#FFEDE7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Most Recent', },
        { id: 7, name: 'Arabic', image: Images.ArabicGinger, price: 120, off: 10, oldPrice: 130, kg: 3, bgColor: '#FFF1D6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price High', },
        { id: 8, name: 'Baroccoli', image: Images.Baroccoli, price: 120, off: 12, oldPrice: 130, kg: 6, bgColor: '#F0FFE4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price Low', },
        { id: 9, name: 'BellRed', image: Images.BellPaperRed, price: 120, off: 10, oldPrice: 130, kg: 5, bgColor: '#FFE2D9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Popular', },
        { id: 10, name: 'Pineapple', image: Images.Pineapple, price: 120, off: 100, oldPrice: 130, kg: 4, bgColor: '#FFF7D6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Most Recent', },
        { id: 11, name: 'Carrot', image: Images.Carrot, price: 120, off: 10, oldPrice: 130, kg: 2, bgColor: '#FFE7E7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price High', },
        { id: 12, name: 'Butternut', image: Images.Butternut, price: 120, off: 12, oldPrice: 130, kg: 3, bgColor: '#EFE2CB', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price Low', },
        { id: 13, name: 'Potato', image: Images.PuffsChips, price: 120, off: 10, oldPrice: 130, kg: 6, bgColor: '#FFF2D9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Popular', },
        { id: 9, name: 'BellRed', image: Images.BellPaperRed, price: 120, off: 20, oldPrice: 130, kg: 2, bgColor: '#FFE2D9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Most Recent', },
        { id: 8, name: 'Baroccoli', image: Images.Baroccoli, price: 120, off: 10, oldPrice: 130, kg: 3, bgColor: '#F0FFE4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price High', },
        { id: 3, name: 'Beat', image: Images.BeatRoot, price: 120, off: 20, oldPrice: 130, kg: 6, bgColor: '#FEE3E8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Price Low', },
        { id: 4, name: 'Orange', image: Images.Orange, price: 120, off: 10, oldPrice: 130, kg: 5, bgColor: '#FFE0DF', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Most Recent', },
        { id: 5, name: 'Lettuce', image: Images.Lettuce, price: 120, off: 12, oldPrice: 130, kg: 4, bgColor: '#E9FDC7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', sold: '9,742', rate: 4.7, review: '4,739', shortBy: 'Most Recent', },
    ];

export default FruitsData;




