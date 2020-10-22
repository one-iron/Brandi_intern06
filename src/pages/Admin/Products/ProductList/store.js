export default {
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
            pageLen: 10,
            loading: false,
            loadUri: 'http:/aaaa.com/notice/list',
        }
    },
    created() {
        this.load();
    },
    computed: {
        maxPage() {
            return Math.ceil(this.total / this.pageLen);
        }
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(()=>{
                let new_list = []
                for (let i=0;i<10;i++)
                    new_list.push({
                        'checked': false,
                        'type': '등록상태',
                        'registDate': '2020-10-31 01:12:22',
                        'imgUrl': 'https://image.brandi.me/cproduct/2020/10/22/17893030_1603361920_image1_S.jpg',
                        'productName': '데니즈 세일러 카라 홈웨어 파자마 잠옷세트',
                        'productCode': 'SB000000000009044804',
                        'productNo': '17893030',
                        'sellerType': '쇼핑몰',
                        'sellerName': '울트라패션',

                        'salePrice': '10000',
                        'discountPrice': '9000',
                        'saleYn': '판매여부',
                        'exhibitYn': '진열여부',
                        'discountYn': '할인여부',
                    })
                this.loading = false;
                this.list = new_list
                this.total = 100;
            },300)
            // this.getPHP('/api/notice', {page:this.page}).
            //     then((res)=>{
            //         this.loading = false;
            //         this.list = res.data.list;
            //         this.total = res.data.total;
            // })
        },
        changePage(page) {
            this.page = page;
            this.load();
        }
    }
}
