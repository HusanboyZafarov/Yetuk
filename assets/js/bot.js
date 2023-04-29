//https://api.telegram.org/bot6288541007:AAGQnVejhoyY5BJlucmxwwwvEeSV6aOtaVw/getUpdates
let hero_bot_sender = document.querySelector(".main-hero_bot_sender")
hero_bot_sender.addEventListener('click', (e) => {
    let course = document.querySelectorAll("#course .main-help_list .main-help_item")
    let service = document.querySelectorAll("#service .main-help_list .main-help_item")
    hero_fullname = document.querySelector(".hero_fullname").value
    hero_number = document.querySelector(".hero_number").value
    let kurslar_form = document.querySelectorAll(".kurslar_form label.selected")
    let xizmatlar_form = document.querySelectorAll(".xizmatlar_form label.selected")
    service_message = ""
    course_message = ""
    if (kurslar_form) {
        kurslar_form.forEach(element => {
            course_message += `%0A${element.nextElementSibling.value}`
        });
    } else if (kurslar_form.length == course.length) {
        course_message += `%0AHammasi`
    }

    if (xizmatlar_form) {
        xizmatlar_form.forEach(element => {
            service_message += `%0A${element.nextElementSibling.value}`
        });
    } else if (xizmatlar_form.length == service.length) {
        service_message += `%0AHammasi`
    }


    if (hero_fullname && hero_number) {
        const token = '6288541007:AAGQnVejhoyY5BJlucmxwwwvEeSV6aOtaVw';
        let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-1001786789171&text='
        let xhttp = new XMLHttpRequest();
        let message = `%0AToli'q ismi: ${hero_fullname}. %0A-----------------%0ATelefon Raqam: ${hero_number}. %0A-----------------%0AXizmatlar: ${service_message} %0A-----------------%0AKurslar: ${course_message}`
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