document.querySelector("#srch").addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest()
    const input=document.querySelector("#inpt").value;


    const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const values = JSON.parse(xhr.responseText)
            console.log(values);
            var output = ''
            for (let i = 0; i < values.length; i++) {
                output = `
            <div id="crd" class="card card border-dark mb-4 card-body text-dark ">
            <p class="id card-header"><b>ID:</b> ${values[input-1].id}</p>
            <p class="name"><b>NAME:</b> ${values[input-1].name}</p>
            <p class="username card-text"><b>USERNAME:</b> ${values[input-1].username}</p>
            <p class="email card-text"><b>PHONE:</b> ${values[input-1].phone}</p>
            <p class="email card-text"><b>EMAIL:</b> ${values[input-1].email}</p>
            <p class="email card-text"><b>ADDRESS:</b> ${values[input-1].address.suite} , ${values[input-1].address.street} , ${values[input-1].address.city} (${values[input-1].address.zipcode})</p>
            <p class="email card-text"><b>GEO:</b> Lat ${values[input-1].address.geo.lat} , Long ${values[input-1].address.geo.lng}</p>
            <p class="email card-text"><b>COMPANY:</b> ${values[input-1].company.name} , ${values[input-1].company.catchPhrase} , ${values[input-1].company.bs}</p>
            <p class="email card-text"><b>WEBSITE:</b> ${values[input-1].website}</p>
            

            </div>
            `
            }


            document.querySelector('#card').innerHTML = output
        }
    }


    xhr.send()
}
)