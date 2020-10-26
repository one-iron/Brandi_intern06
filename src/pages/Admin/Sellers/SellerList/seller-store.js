import store from '../../../../vuex/store'

export default {
    store: store,
    data() {
        return {
            list: [],
            page: 1,
            total: 50+ Math.floor(Math.random()*1000),
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
        },
        constants() {
            return this.$store.state.const;
        }
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(()=>{
                let new_list = []
                for (let i=0;i<this.pageLen;i++) {
                    let productCount = Math.floor(Math.random()*1000)
                    let sellerStatus = Math.floor(Math.random()*4)
                    let nowStatus = this.constants.sellerStatus[sellerStatus]

                    new_list.push({
                        'sellerNo': i + 1,
                        'checked': false,
                        'sellerId': 'id'+(i+1),
                        'sellerEnName': 'interwoncheo'+(i+1),
                        'sellerName': '인턴원철',
                        'sellerType': '쇼핑몰',
                        'managerName': '이원철',
                        'sellerStatus': nowStatus.label,
                        'sellerStatusNo': nowStatus.value,
                        'managerPhoneNo': '000-1111-2222',
                        'managerEmail': 'ewc@naver.com',
                        'productCount': productCount,
                        'shopUrl': 'https://www.ewc.com',
                        'registDate': '2020-10-31 01:12:22'
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
