import mutu1 from './mutual friends/mutual-1.jpg'
import mutu2 from './mutual friends/mutual-2.jpg'
import mutu3 from './mutual friends/mutual-3.jpg'
import mutu4 from './mutual friends/mutual-4.jpg'
import mutu5 from './mutual friends/mutual-5.jpg'
import mutu6 from './mutual friends/mutual-6.jpg'
import mutu7 from './mutual friends/mutual-7.jpg'

import proPic1 from './mutual friends/propic1.jpg'
import proPic2 from './mutual friends/propic2.jpg'
import proPic3 from './mutual friends/propic3.jpg'
import proPic4 from './mutual friends/propic4.jpg'


const friendRequest = [
    {
        imgUrl: proPic1,
        name : 'Shane waner',
        mutualImg1: mutu1,
        mutualImg2: mutu2,
        mutualAmount:10,
        days:1
    },
    {
        imgUrl:proPic2 ,
        name : 'Kane Starak',
        mutualImg1:mutu5 ,
        mutualImg2: mutu7,
        mutualAmount:305,
        days:3
    },
    {
        imgUrl:proPic3 ,
        name : 'Mitchel wills',
        mutualImg1:mutu4 ,
        mutualImg2: mutu6,
        mutualAmount:76,
        days:9
    },
    {
        imgUrl: proPic4,
        name : 'Henry Gayle',
        mutualImg1: mutu3,
        mutualImg2: mutu7,
        mutualAmount:101,
        days:11
    }
]
export default friendRequest;