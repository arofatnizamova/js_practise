const btnModal = document.querySelectorAll('.open-modal-btn');
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelectorAll('.close-button')

function openModal(modalElement) {
    modal.forEach((item) => {
        if (modalElement === item.id) {
            item.classList.remove('hide');
            item.classList.add('show');
            overlay.classList.remove('hide')
            overlay.classList.add('show')
        }
    })
}

function closeModal() {
    modal.forEach((item) => {
        if (item.classList.contains('show')) {
            item.classList.remove('show');
            item.classList.add('hide');
            overlay.classList.remove('show')
            overlay.classList.add('hide')
        }
    })
}
btnModal.forEach((btn) => {
    btn.addEventListener('click', () => {
        const modalElement = btn.getAttribute('data-target');
        openModal(modalElement);
    })
})
btnClose.forEach((btn) => {
    btn.addEventListener('click', closeModal)
})
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        closeModal()
    };
});