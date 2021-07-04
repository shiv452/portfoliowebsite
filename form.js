document.querySelector("sec").addEventListener("submit Now!", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let form = document.getElementById('sec');
  let formData = new FormData(form)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}