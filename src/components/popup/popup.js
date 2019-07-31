class PopUp {
    constructor(submit) {
        this.submit = document.querySelector(submit);
        this.closePopUpBtn = document.querySelector(".close__btn");
        this.popUpModal = document.querySelector(".popup");
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    init() {
        this.submit.addEventListener('click', (e) => this.openModal(e));
        this.closePopUpBtn.addEventListener('click', (e) => this.closeModal(e));
        this.popUpModal.addEventListener('click', (e) => this.closeModal(e));
    }
    
    openModal(clicked) {
        if (this.popUpModal.classList.contains('active')) {
            return;
        } else {
            this.popUpModal.classList.add('active');
        }
    }

    closeModal() {
        if (this.popUpModal.classList.contains('active')) {
            this.popUpModal.classList.remove('active');
        } 
    }
}

export default PopUp;
