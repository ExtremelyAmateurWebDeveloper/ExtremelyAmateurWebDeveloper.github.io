// JavaScript source code

console.log('Test')
let song = [{
    name: 'Kys Vol.1',
    artist: 'Thrashich',
    desc: 'disgusting',
    price: 'Free',
    image: './media/AlbumCovers/KysVol1.png',
    link: 'https://drive.google.com/uc?id=1ssgZwXqiFs885RFlvJ4fBU78aS9ZJNdC&export=download',
},
{
    name: 'REMIXES EP. 1',
    artist: 'Thrashich',
    desc: 'containing remixes of artists such as "Radiohead", "Hatari", "Sydän, Sydän" and "D1 Dani"',
    price: 'Free',
    image: './media/remixes1.png',
    link: 'https://drive.google.com/uc?id=1ssgZwXqiFs885RFlvJ4fBU78aS9ZJNdC&export=download'
},
{
    name: undefined,
    artist: undefined,
    desc: undefined,
    price: undefined,
    image: undefined,
    link: undefined
},
{
    name: undefined,
    artist: undefined,
    desc: undefined,
    price: undefined,
    image: undefined,
    link: undefined
},
{
    name: undefined,
    artist: undefined,
    desc: undefined,
    price: undefined,
    image: undefined,
    link: undefined
}];

let test = 'test';

let currentpage = 0;

currentpage = localStorage.getItem('pagenum')
