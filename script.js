console.log('hello2');

console.log(window.opener);

const input = document.querySelector('input').addEventListener('input', e => {
  window.opener.postMessage(e.target.value, '*');
});
