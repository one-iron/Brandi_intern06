export default {
    data() {
        return {
            list: [],
            page: 1,
            total: 50+ Math.floor(Math.random()*1000),
            pageLen: 50,
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
                for (let i=0;i<this.pageLen;i++) {
                  new_list.push({
                    'no': i + 1,
                    'checked': false,
                    'paymentDate': '2020-10-31 01:12:22',
                    'orderCode': '20201029000014000',
                    'orderDetailCode': 'T202010290000E001',
                    'sellerName': '울트라패션',
                    'productName': '데니즈 세일러 카라 홈웨어 파자마 잠옷세트',
                    'option': '레드/XL',
                    'quantity': 10,
                    'ordererName': '홍길동',
                    'ordererTelno': '010-1111-2222',
                    'paymentPrice': 100000,
                    'orderStatus': '결제완료',
                  })
                }
                this.loading = false;
                this.list = new_list
                // this.total = 550;
            },1000)
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
    },
    watch: {
      pageLen(v) {
        this.changePage(1)
      }
    }
}
