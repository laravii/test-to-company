const creatingNewIcon = () => {
  const iconsList = document.querySelector('.header__networks-list')
  const icon =
    '<a href="https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ" target="_blank"><i class="icon icon-youtube-header icon--small icon--hover-youtube"></i></a>'
  iconsList.innerHTML += icon
}
const closeModal = () => {
  document.getElementById(
    'header-conversion-form-whatsapp-modal',
  ).className = document
    .getElementById('header-conversion-form-whatsapp-modal')
    .className.replace('is-open', ' ')
}
const redirectToWhatsApp = () => {
  $('.header-mobile__whatsapp-link').on('click', (e) => {
    e.preventDefault()
    closeModal()
    const phone = $(e.target).text()
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}`
    location.assign(whatsappLink)
  })
}
const load = () => {
  document.querySelector('.header-conversion-form-whatsapp-modal').innerHTML = `
    <div class="header-conversion-form-whatsapp-modal">
    <div class="modal micromodal-slide is-open" id="header-conversion-form-whatsapp-modal" aria-hidden="false"
        novalidate="true">
        <div class="modal__overlay" tabindex="-1" data-micromodal-close="true">
            <div class="position-relative">
            <i style="color:white;" class="modal__close modal__overlay-close--form icon icon-close"
                    data-micromodal-close="true" onclick="closeModal()"></i>
              <div>
                <header class="form-modal__header"></header>
                    <div class="form-modal__body">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    `
}

function firstStepTest() {
  creatingNewIcon()
  redirectToWhatsApp()
  window.load = load()
}
firstStepTest()
const secundStepTest = () => {
  document.querySelector('.form-conversion__body').children[0].innerHTML += `
            <div 
            style="display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <select style="width:100%;height:3rem;color:gray;padding: 3px;border-radius:5px;">
            <option>SUV</option>
            <option>Senda</option>
            <option>Hatch</option>
            <option>Pickup</option>
            </select>
            <textarea 
            placeholder="Mensagem" 
            style="width:100%;height:7rem;color:gray;padding: 3px;margin:10px;border-radius:5px;"></textarea>
            </div>
            `
}
secundStepTest()
