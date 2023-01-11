const form = document.getElementById('form');



form.addEventListener('submit',(e) => {
    e.preventDefault();

    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload)
    console.log([...payload])
   //const jsonData = JSON.stringify(Object.fromEntries(formData))

    fetch('https://jsonplaceholder.typicode.com/users/',{
    method:"POST",
    // headers:{
    //     'Content-Type': 'application/json'
    // },
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})



