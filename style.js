const hexvalue = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];
 const getcolor = () => {
      const randomnum = Math.floor(Math.random() * 16777215);
     const randomcode = "#"+randomnum.toString(16);
     console.log(randomnum, randomcode);
     document.body.style.backgroundColor=randomcode;
      document.getElementById('content').innerText=randomcode;
 }
// const getcolor = () => {
//     const randomnum = Math.floor(Math.random() * 16777215);
//     const randomcode = "#"+randomnum.toString(16);
//    document.body.style.backgroundColor=randomcode;
//    document.getElementById('content');
// }
document.getElementById('btn').addEventListener('click', getcolor);