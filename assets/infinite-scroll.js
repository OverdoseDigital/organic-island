// Collection pagination
class pagination extends HTMLElement {
    constructor() {
        super();
        this.loadMoreButton = this.querySelector('.load-more.button, .load-more.button.load-ajax');
        this.loadMoreButton.addEventListener('click', this.onloadMoreButtonClick.bind(this));

        //window.onscroll = this.myScroll.bind(this);

        document.querySelector('.current_count').innerHTML = document.querySelector("#product-grid").getElementsByTagName("li").length - 1;

        const currentShowCount = document.querySelector("#product-grid").getElementsByTagName("li").length - 1;
        const totalCount = document.getElementById('ProductCountDesktop').getAttribute('collection_total_product');

        console.log('currentShowCount = '+currentShowCount+' totalCount = '+totalCount);

        console.log((currentShowCount / totalCount)*100+'%');
        document.querySelector(".skillBarValue").style.width = (currentShowCount / totalCount)*100+'%';


    }

    // myScroll() {
    //     let lastScrollTop = 0;
    //     var currentScrollTop = window.scrollY;
    //     var loadMorePos = document.querySelector('.load-more').offsetTop + 50;
    //     console.log("window.scrollY + window.height  =" + window.scrollY + " + " + document.documentElement.clientHeight + " > loadMorePos = " + loadMorePos);
    //     console.log("currentScrollTop = " + currentScrollTop);
    //     console.log("lastScrollTop" + lastScrollTop);
    //     if (window.scrollY + document.documentElement.clientHeight > loadMorePos && currentScrollTop > lastScrollTop) {
    //         console.log(window.scrollY);
    //         document.querySelector('.load-more').click();
    //     } else {
    //         console.log('else');
    //     }
    //     lastScrollTop = currentScrollTop;
    // }


    onloadMoreButtonClick(evt) {
        evt.preventDefault();
        this.renderProducts();
    }

    renderProducts() {
        var url = this.loadMoreButton.getAttribute('next-page-url');
        var totalPage = document.querySelector('.load-more.button').getAttribute('total-page');
        var sourceMainItemWrapDiv = document.querySelector('#product-grid');
        var sourceLoadMoreButton = this.loadMoreButton;
        // Making our request 
        fetch(url, { method: 'GET' })
            .then((response) => response.text())
            .then(html => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, 'text/html');
                // Find the div you want to remove
                const divToRemove = doc.querySelector('.grid__item.text-image-grid-item');    
                if (divToRemove) {
                    divToRemove.remove();
                  }
                const nextPageContent = doc.querySelector('.product-grid').innerHTML;

                var dataCurrentPage = doc.querySelector('.load-more.button').getAttribute('data-current-page');
                var nextPageurlCheck = doc.querySelector('.load-more.button').getAttribute('next-page-url');

                sourceMainItemWrapDiv.innerHTML += nextPageContent;
                sourceLoadMoreButton.setAttribute('next-page-url', nextPageurlCheck);
                sourceLoadMoreButton.setAttribute('data-current-page', dataCurrentPage);
                // (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/UvEGuUcwhYjpOn2CinYsqChDXFz177IXV5vKclvM/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();

                // console.log(yotpo);
                // if (typeof yotpo !== 'undefined' && typeof yotpo.refreshWidgets === 'function') {  }
                    // yotpo.refreshWidgets();
                
              
                

                console.log(nextPageurlCheck);
                console.log("totalPage = " + document.querySelector("#product-grid").getElementsByTagName("li").length );
                console.log("dataCurrentPage = " + dataCurrentPage);

                if (nextPageurlCheck == 'empty') {
                    this.classList.add('hide');
                }
                document.querySelector('.current_count').innerHTML = document.querySelector("#product-grid").getElementsByTagName("li").length - 1;
                

            })
            .catch(errorMsg => { console.log(errorMsg); });
    }
}

customElements.define('paginate-section', pagination);