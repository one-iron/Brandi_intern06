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
                    // let productCount = Math.floor(Math.random()*1000)
                    let sellerStatus = Math.floor(Math.random()*4)
                    let nowStatus = this.constants.sellerStatus[sellerStatus]

                    new_list.push({
                        'id': i + 1,
                        'checked': false,
                        'account': 'id'+(i+1),
                        'brand_name_english': 'interwoncheo'+(i+1),
                        'brand_name_korean': '인턴원철',
                        'seller_property_id': '쇼핑몰',
                        'name': '이원철',
                        'seller_status_name': nowStatus.label,
                        'seller_status_id': nowStatus.value,
                        'phone_number': '000-1111-2222',
                        'email': 'ewc@naver.com',
                        // 'productCount': productCount,
                        // 'shopUrl': 'https://www.ewc.com',
                        'created_at': '2020-10-31 01:12:22'
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
