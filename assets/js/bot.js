//https://api.telegram.org/bot6288541007:AAGQnVejhoyY5BJlucmxwwwvEeSV6aOtaVw/getUpdates
let hero_bot_sender = document.querySelector(".main-hero_bot_sender")
hero_bot_sender.addEventListener('click', (e) => {
    // e.preventDefault()

    hero_fullname = document.querySelector(".hero_fullname").value
    hero_number = document.querySelector(".hero_number").value
    let services = document.querySelectorAll(".main-hero_form_label.selected")
    service_message = ``


    services.forEach(element => {
        service_message += `${element.nextElementSibling.value} %0A`
    });
    console.log(hero_fullname);
    console.log(hero_number);

    if (services.length == 6) {
        service_message = "Hammasi"
    }


    if (hero_fullname && hero_number) {
        const token = '6288541007:AAGQnVejhoyY5BJlucmxwwwvEeSV6aOtaVw';
        let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-1001786789171&text='
        let xhttp = new XMLHttpRequest();
        let message = `%0AFirst Name: ${hero_fullname}. %0ATelefon Raqam: ${hero_number}.%0AXizmatlar: ${service_message}`
        xhttp.open("GET", url + message, true);
        xhttp.send();
    }

})


let contact_form_button = document.querySelector(".main-contact_form button")
contact_form_button.addEventListener('click', (e) => {
    hero_fullname = document.querySelector("#main-contact_fullname").value
    hero_number = document.querySelector("#main-contact_number").value
    hero_comment = document.querySelector("#main-contact_comment").value

    const token = '6288541007:AAGQnVejhoyY5BJlucmxwwwvEeSV6aOtaVw';
    let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-1001786789171&text='
    let xhttp = new XMLHttpRequest();
    let message = `%0AFirst Name: ${hero_fullname}. %0ATelefon Raqam: ${hero_number}. %0AIzoh:${hero_comment}`
    xhttp.open("GET", url + message, true);
    xhttp.send();
})