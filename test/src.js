import { dispatchEvent } from '../';
document.body.addEventListener('bla', e=>{
    console.log('totally blad');
});

dispatchEvent(document.body, 'bla');
