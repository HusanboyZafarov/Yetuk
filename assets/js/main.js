let header_navigatiom_burger = document.querySelector(".main-header_navigatiom_burger"),
    lines = document.querySelectorAll(".main-header_navigatiom_burger span"),
    header_bg_helper = document.querySelector(".header_bg_helper"),
    header_navigation_list = document.querySelector(".main-header_navigation_list"),
    header_navigation_item = document.querySelectorAll(".main-header_navigation_item"),
    header_navigation_item_lang = document.querySelector(".main-header_navigation_item.lang"),
    canvas = document.querySelector("canvas"),
    particles_js = document.querySelector("#particles-js"),
    hero_form = document.querySelector(".main-hero_form"),
    form_opener = document.querySelectorAll(".form_opener"),
    my_swiper = document.querySelector(".swiper"),
    swiper_slide = document.querySelectorAll(".main-cusaboutus_info_wrapper"),
    achievement_heading = document.querySelector(".main-achievement_heading"),
    achievement_heading_before = document.querySelector(".main-achievement_heading::before"),
    achievement_heading_after = document.querySelector(".main-achievement_heading::after")
let swiper_achievement = document.querySelector(".swiper-achievement"),
    swiper_achievement_slides = document.querySelectorAll(".swiper-achievement .swiper-slide img")
let swiper_achievement_second = document.querySelector(".swiper-achievement_second"),
    swiper_achievement_second_slides = document.querySelectorAll(".swiper-achievement_second .swiper-slide img")
let swiper_achievement_third = document.querySelector(".swiper-achievement_third"),
    swiper_achievement_third_slides = document.querySelectorAll(".swiper-achievement_third .swiper-slide img")
achievement_swiper_buttons = document.querySelector(".main-achivement_carousel_first .main-achievement_swiper_button-next")
achievement_swiper_buttons_second = document.querySelector(".main-achivement_carousel_second .main-achievement_swiper_button-next")
achievement_swiper_buttons_third = document.querySelector(".main-achivement_carousel_third .main-achievement_swiper_button-next")
main_solution = document.querySelector(".main-solution")
let header_dropdown = document.querySelector(".main-header_dropdown"),
    header_navigation_item_service = document.querySelector(".main-header_navigation_item.service p")

contact_section = document.querySelector(".main-contact")

let header = document.querySelector("header"),
    hero_up = document.querySelector(".main-hero_up"),
    preloader = document.querySelector(".preloader")
window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("invisible")
        setTimeout(() => {
            preloader.classList.add("closed")
        }, 500)
    }, 500)
})

window.addEventListener("scroll", () => {
    canvas.getBoundingClientRect().height = particles_js.getBoundingClientRect().height
    nums = []
    swiper_slide.forEach(element => {
        nums.push(element.getBoundingClientRect().height)
    });
    max = Math.max.apply(null, nums)
    my_swiper.style.height = `${max + 50}px`
    header.classList.toggle("scrolled", window.scrollY > 10)
})

window.addEventListener("scroll", () => {
    html = document.querySelector("html")
    hero_up.classList.toggle("scrolled", window.scrollY > 400)
    first_button_top = html.scrollHeight - achievement_swiper_buttons.getBoundingClientRect().top
    first_button_bottom = html.scrollHeight - achievement_swiper_buttons.getBoundingClientRect().bottom
    second_button_top = html.scrollHeight - achievement_swiper_buttons_second.getBoundingClientRect().top
    second_button_bottom = html.scrollHeight - achievement_swiper_buttons_second.getBoundingClientRect().bottom
    third_button_top = html.scrollHeight - achievement_swiper_buttons_third.getBoundingClientRect().top
    third_button_bottom = html.scrollHeight - achievement_swiper_buttons_third.getBoundingClientRect().bottom
    contact_section_top = html.scrollHeight - contact_section.getBoundingClientRect().top
    contact_section_bottom = html.scrollHeight - contact_section.getBoundingClientRect().bottom
    arrow_bottom = html.scrollHeight - hero_up.getBoundingClientRect().bottom
    arrow_top = html.scrollHeight - hero_up.getBoundingClientRect().top
    main_solution_top = html.scrollHeight - main_solution.getBoundingClientRect().top
    main_solution_bottom = html.scrollHeight - main_solution.getBoundingClientRect().bottom
    if (first_button_top >= arrow_bottom && first_button_bottom <= arrow_top ||
        second_button_top >= arrow_bottom && second_button_bottom <= arrow_top ||
        third_button_top >= arrow_bottom && third_button_bottom <= arrow_top ||
        contact_section_top >= arrow_bottom && contact_section_bottom <= arrow_top ||
        main_solution_top >= arrow_bottom && main_solution_bottom <= arrow_top
    ) {
        hero_up.classList.add("changed")
    } else {
        hero_up.classList.remove("changed")
    }
})

window.addEventListener("scroll", () => {
    nums = []
    swiper_achievement_slides.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_achievement.style.height = `${max + 100}px`
})

window.addEventListener("scroll", () => {
    nums = []
    swiper_achievement_third_slides.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_achievement_third.style.height = `${max + 100}px`
})

window.addEventListener("scroll", () => {
    nums = []
    swiper_achievement_second_slides.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_achievement_second.style.height = `${max + 100}px`
})


header_navigatiom_burger.addEventListener("click", () => {
    lines.forEach((item) => {
        item.classList.toggle("opened")
    })
    header_bg_helper.classList.toggle("opened")
    header_navigation_list.classList.toggle("opened")
})

header_bg_helper.addEventListener("click", () => {
    lines.forEach((item) => {
        item.classList.remove("opened")
    })
    header_bg_helper.classList.remove("opened")
    header_navigation_list.classList.remove("opened")
})

header_navigation_item.forEach((item) => {
    item.addEventListener("click", () => {
        lines.forEach((item) => {
            item.classList.remove("opened")
        })
        header_bg_helper.classList.remove("opened")
        header_navigation_list.classList.remove("opened")
    })
})

service = document.querySelector(".service")

header_navigation_item_lang.addEventListener("click", () => {
    lines.forEach((item) => {
        item.classList.add("opened")
    })
    header_bg_helper.classList.add("opened")
    header_navigation_list.classList.add("opened")
})
index = 0
service.addEventListener("click", () => {

    index += 1
    if (index % 2 !== 0) {
        lines.forEach((item) => {
            item.classList.add("opened")
        })
        header_bg_helper.classList.add("opened")
        header_navigation_list.classList.add("opened")
    } else {
        lines.forEach((item) => {
            item.classList.remove("opened")
        })
        header_bg_helper.classList.add("opened")
        header_navigation_list.classList.remove("opened")
    }
})

let header_dropdown_item = document.querySelectorAll(".main-header_dropdown_item")
let help_modal = document.querySelector(".main-help_modal")
let help_card = document.querySelectorAll(".main-help_card")
let help_modal_btn_wrapper = document.querySelector(".main-help_modal_btn_wrapper")

help_card_item_link = document.querySelectorAll(".main-help_card_item_link")
help_card_item_link.forEach((el) => {
    el.firstElementChild.addEventListener("click", () => {
        children = el.parentElement.children
        help_modal_child = help_modal.children

        arrayed_children = Array.from(children)
        for (var i = 0; i < arrayed_children.length; i++) {
            help_modal_child[i].innerHTML = arrayed_children[i].innerHTML
        }
        help_modal_btn_wrapper.removeChild(
            help_modal_btn_wrapper.firstElementChild
        )

        help_modal.classList.add("opened")

        content = header_navigation_item_service.nextElementSibling

        content.style.maxHeight = null
        content.style.maxHeight = 0

        header_bg_helper.classList.add("opened")
    })
})

header_dropdown_item.forEach((element) => {
    element.addEventListener("click", () => {
        let card = document.querySelector(`.main-help_card.${element.className.replace("main-header_dropdown_item ", "")}`)
        children = card.children
        help_modal_child = help_modal.children
        arrayed_children = Array.from(children)
        for (var i = 0; i < arrayed_children.length; i++) {
            help_modal_child[i].innerHTML = arrayed_children[i].innerHTML
        }
        help_modal_btn_wrapper.removeChild(
            help_modal_btn_wrapper.firstElementChild
        )

        help_modal.classList.add("opened")

        content = header_navigation_item_service.nextElementSibling

        content.style.maxHeight = null
        content.style.maxHeight = 0

        header_bg_helper.classList.add("opened")
        lines.forEach((item) => {
            item.classList.remove("opened")
        })


        header_navigation_list.classList.remove("opened")
    })
});

header_navigation_item_service.addEventListener("click", () => {
    content = header_navigation_item_service.nextElementSibling
    if (content.getBoundingClientRect().height) {
        content.style.maxHeight = null
        content.style.maxHeight = 0
        content.style.marginBottom = "0px"
    } else {
        content.style.maxHeight = content.scrollHeight + "px"
        content.style.marginBottom = "30px"
    }
    header_bg_helper.classList.add("opened")
})

form_opener.forEach((element) => {
    element.addEventListener("click", () => {
        hero_form.classList.add("opened")
        header_bg_helper.classList.add("opened")
        help_modal.classList.remove("opened")
    })
});

header_bg_helper.addEventListener("click", () => {
    hero_form.classList.remove("opened")
    header_bg_helper.classList.remove("opened")
    content_2 = header_navigation_item_service.nextElementSibling
    content_2.style.maxHeight = null
    content_2.style.maxHeight = 0
    help_modal.classList.remove("opened")
})

let help_modal_btn_wrapper_btns = document.querySelector(".main-help_modal_btn_wrapper")
help_modal_btn_wrapper_btns.addEventListener("click", () => {
    help_modal.classList.remove("opened")
    setTimeout(() => {
        hero_form.classList.add("opened")
        header_bg_helper.classList.add("opened")
    }, 500)
})


window.addEventListener("DOMContentLoaded", () => {
    console.log();
})

let hero_form_label = document.querySelectorAll(".main-hero_form_label")

hero_form_label.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("selected")
    })
});

let hero_form_wrapper_p = document.querySelector(".main-hero_form_wrapper p")
let hero_form_wrapper_input = document.querySelector(".main-hero_form_wrapper input")


window.addEventListener("resize", () => {
    hero_form_wrapper_input.style.height = `${hero_form_wrapper_p.getBoundingClientRect().height}px`
})

window.addEventListener("scroll", () => {
    hero_form_wrapper_input.style.height = `${hero_form_wrapper_p.getBoundingClientRect().height}px`
})

window.addEventListener("load", () => {
    hero_form_wrapper_input.style.height = `${hero_form_wrapper_p.getBoundingClientRect().height}px`
})
let hero_list_first = document.querySelector(".main-hero_list.first")
let hero_list_second = document.querySelector(".main-hero_list.second")
window.addEventListener("load", () => {
    hero_list_first.style.height = `${hero_list_second.getBoundingClientRect().height}px`
})

window.addEventListener("resize", () => {
    hero_list_first.style.height = `${hero_list_second.getBoundingClientRect().height + 10}px`
})

window.addEventListener("scroll", () => {
    hero_list_first.style.height = `${hero_list_second.getBoundingClientRect().height}px`
})