const vueButton = document.getElementById('load-vue') as HTMLButtonElement;
const reactButton = document.getElementById('load-react') as HTMLButtonElement;

vueButton.addEventListener('click', () => {
  window.location.href = '/html/vue.html';
});

reactButton.addEventListener('click', () => {
  window.location.href = '/html/react.html';
});

window.addEventListener('popstate', () => {
  window.location.reload();
});
