let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: {
            image: '../../assets/images/image_green.jpeg',
            alt: 'alt of the image',
            link: '/#somelink'
        },
        instock: false,
        onSale: true
    }
});