import image from './assets/image.png';
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks';

const text = `Приложение на чистом JavaScript без использования библиотек`;

export const model = [
    new TitleBlock('Конструктор сайтов на JavaScript', {
        tag:'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem',
        } 
    }), 
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '700px',
            height: 'auto',
            'border-radius': '3px'
        },
        alt: 'Это картинка'
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }), 
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure magni suscipit similique molestiae aperiam voluptates aut veniam reiciendis deleniti.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure magni suscipit similique molestiae aperiam voluptates aut veniam reiciendis deleniti.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure magni suscipit similique molestiae aperiam voluptates aut veniam reiciendis deleniti.',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    

];
console.log(model);