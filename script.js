console.log('hello2');

console.log(window.opener);

const input = document.querySelector('input').addEventListener('input', e => {
  window.opener.postMessage(e.target.value, '*');
});
const btn = document.querySelector('button').addEventListener('click', e => {
  window.opener.postMessage('foo', '*');
});
