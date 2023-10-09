
; /* Start:"a:4:{s:4:"full";s:86:"/local/templates/interguest/components/bitrix/news.list/rooms/script.js?16699842142953";s:6:"source";s:71:"/local/templates/interguest/components/bitrix/news.list/rooms/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
class JSRoomElement {
    constructor(params)
    {
        this.siteDir = params.SITE_DIR;
        this.ajaxURL = this.siteDir + 'ajax/popup-detail.php';
        this.detailButtonClass = params.SHOW_DETAIL_BUTTON_CLASS;
        this.bookingRoomButtonClass = params.BOOKING_ROOM_BUTTON_CLASS;
        this.detailPopupContainerId = params.SHOW_DETAIL_POPUP_CONTAINER_ID;
        
        this.detailButton = document.querySelectorAll(this.detailButtonClass);
        this.bookingButton = document.querySelectorAll(this.bookingRoomButtonClass);
        
        this.init();
    }
    
    init()
    {
        this.setEvents();
    }
    
    setEvents()
    {
        for (let el of this.detailButton) {
            let elementId = el.getAttribute('data-id');
            
            el.addEventListener('click', (e) => {
                e.preventDefault();
                if (!(e.target.hasAttribute("data-modal-btn"))){
                    this.openRoomDetail(elementId);   
                 }
            });
        }
        
        for (let el of this.bookingButton) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.openBookingWidget();
            });
        }
    }
    
    openRoomDetail(id)
    {   let bodyLock = document.querySelector('body')
        let detailPopupContainer = document.getElementById(this.detailPopupContainerId);
        let params = new URLSearchParams(); 
        params.set('room_id', id);

        fetch(
            this.ajaxURL,
            {
            method: 'POST',
            body : params
        })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            detailPopupContainer.insertAdjacentHTML('beforeend', data);
            new Swiper('.go-js-gallery-slider-popup-1', {
                slidesPerView: 1,
                spaceBetween: 20,

                thumbs: {
                    swiper: {
                        el: '.go-js-gallery-slider-popup-2',
                        slidesPerView: 2,
                        spaceBetween: 15,
                        navigation: {
                           nextEl: '.gallery-preview__btn--next',
                           prevEl: '.gallery-preview__btn--prev',
                         },
                        breakpoints: {
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            },
                        }
                    }
                }
            });
            bodyLock.classList.add("lock");
            detailPopupContainer.classList.add('body__popup--active');

        });
    }
    
    openBookingWidget()
    {
        let iframe = document.getElementsByTagName('iframe')[0];
        let widgetButton = iframe.contentWindow.document.querySelector('.openReceptionButton');
        widgetButton.click();
    }
}
/* End */
;; /* /local/templates/interguest/components/bitrix/news.list/rooms/script.js?16699842142953*/
