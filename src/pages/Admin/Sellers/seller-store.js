import store from '../../../vuex/store'
import AdminApiMixin from '../../../mixins/admin/admin-api'
import Message from '../../../utils/message'

export default {
    store: store,
    mixins: [AdminApiMixin],
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
            pageLen: 10,
            loading: false,
            filter: {},
            detailData: {}
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
        },
        // 셀러 리스트 / 수정
        listUrl() {
            return this.constants.apiDomain + '/master/management-seller'
        },
        offset() {
            return (this.page-1) * this.pageLen
        }
    },
    methods: {
        load() {
            this.loading = true
            let params = JSON.parse(JSON.stringify(this.filter))
            params['limit'] = this.pageLen
            params['offset'] = this.offset
            this.get(this.listUrl, {
               params: params
            })
                .then((res)=>{
                    if (res.data) {
                        res.data.seller_list.forEach((d)=> {
                            d.checked = false
                        })
                        let seller_list = res.data.seller_list
                        let total_count = res.data.total_count
                        this.total = total_count
                        this.list = seller_list
                    } else {
                        Message.error('통신 실패')
                    }
                }).catch((e)=>{
                    if (e.code === 'ECONNABORTED') {
                        Message.error('요청 시간을 초과 하였습니다. 다시 시도해주시기 바랍니다.')
                    } else {
                        Message.errors('처리 중 오류 발생')
                    }
                }).then((res)=> {
                    this.loading = false
                })
        },
        changeStatus(seller_id, button) {
            this.loading = true;
            let params = {
                seller_id: seller_id,
                button: button
            }
            this.put(this.listUrl, params)
                .then((res) => {
                    if (res.data && res.data.message == 'success') {
                        Message.success('셀러 상태 변경 성공')
                        this.load()
                    } else {
                        Message.success('통신 실패')
                    }
                })
                .catch((e)=>{
                    if (e.code === 'ECONNABORTED') {
                        Modal.error({
                          content: '요청 시간을 초과 하였습니다. 다시 시도해주시기 바랍니다.',
                        })
                    } else {
                        Modal.error({
                          content: '처리 중 오류 발생',
                        })
                    }
                }).then((res)=> {
                    this.loading = false
                })
        },
        getDetail(seller_id) {
            this.loading = true
            this.get(this.listUrl+'/'+seller_id)
                .then((res)=>{
                    if (res.data) {
                        this.detailData = res.data
                    } else {
                        Message.error('통신 실패')
                    }
                }).catch((e)=>{
                    if (e.code === 'ECONNABORTED') {
                        Message.error('요청 시간을 초과 하였습니다. 다시 시도해주시기 바랍니다.')
                    } else {
                        Message.error('처리 중 오류 발생')
                    }
                }).then((res)=> {
                    this.loading = false
                })
        },
        putDetail(seller_id, sellerData) {
            this.loading = true
            this.put(this.listUrl+'/'+seller_id, sellerData)
                .then((res)=>{
                    if (res.data && res.data.message == 'success') {
                        Message.success('셀러 수정 성공')
                    } else {
                      Message.error('통신 실패')
                    }
                }).catch((e)=>{
                    if (e.code === 'ECONNABORTED') {
                        Message.error('요청 시간을 초과 하였습니다. 다시 시도해주시기 바랍니다.')
                    } else {
                        Message.error('처리 중 오류 발생')
                    }
                }).then((res)=> {
                    this.loading = false
                })
        },
        changePage(page) {
            this.page = page
            this.load()
        },
        setFilter(filter) {
            this.filter = filter
        }
    },
    watch: {
      pageLen(v) {
        this.changePage(1)
      }
    }
}
