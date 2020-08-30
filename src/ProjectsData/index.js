import {ugorskayaImages} from './Interior/Ugorskaya'
import {TibilisiImages} from './Interior/Tibilisi'
import {ForosImages} from './Interior/Foros'
import {kolobovichImages} from './Interior/Kolobovich'
import {kiparisImages} from './Interior/Kiparis'
import {dobrogradImages} from './Interior/Dobrograd'

export const projectsData = [
    {
        title: 'Апарт – отель Citadines City Centre Tbilisi. Грузия. 2020 г.',
        placement: 'Тбилиси, Грузия',
        type: 'Апарт - отель',
        area: '5 600 м',
        year: '2019',
        images: TibilisiImages,
        description: 'test'
    },
    {
        title: 'Гостиничный комплекс «Югорская долина» г. Ханты-Мансийск 2019-2020гг',
        placement: 'Ханты-Мансийск, Россия',
        type: 'Гостиничный комплекс',
        area: '7200',
        year: '2019',
        images: ugorskayaImages,
        description: 'test'
    },
    {
        title: 'Foros',
        placement: 'Ялта, Россия',
        type: 'Санаторий',
        area: '3760',
        year: '2020',
        images: ForosImages,
        description: 'test'
    },
    {
        title: 'Kolobovich',
        placement: 'Республика Беларусь',
        type: 'Туристический комплекс',
        area: '6200',
        year: '2018 -2020',
        images: kolobovichImages,
        description: 'test'
    },
    {
        title: 'Kiparis',
        placement: 'Гагра, Абхазия',
        type: 'Отель - вилла',
        area: '1500',
        year: '2019',
        images: kiparisImages,
        description: 'test'
    },
    {
        title: 'Dobrograd',
        placement: 'Доброград, Россия',
        type: 'Парк - отель',
        area: '4280',
        year: '2019',
        images: dobrogradImages,
        description: 'test'
    }

]

/* template
{
    title: '',
    placement: '',
    type: '',
    area: '',
    year: '',
    images: ,
    description: ''
},
*/