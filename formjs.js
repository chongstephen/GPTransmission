const scriptURL = 'https://script.google.com/macros/s/AKfycbxCCWIStt8wdrnJ0fc5mnuseT8cldyZ7mi5hjb06hAmO_wcYfY-75SwKQ/exec'
const form = document.forms['GP Transmission']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})