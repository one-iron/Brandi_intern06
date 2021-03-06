import AdminApiMixin from '../../../../mixins/admin/admin-api'
import CommonMixin from '../../../../mixins/admin/common-mixin'
import errors from '../../../../errors/errors'
let ExpireTokenException = errors.ExpireTokenException

export default {
    mixins: [AdminApiMixin, CommonMixin],
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
            pageLen: 10,
            loading: false,
            filter: {}
        }
    },
    props: {
        router: {
            default () {
                return null
            }
        }
    },
    created() {
        // this.load();
    },
    computed: {
        maxPage() {
           return Math.ceil(this.total / this.pageLen);
        },
        // 셀러 리스트 / 수정
        listUrl() {
            return this.constants.apiDomain + '/product/management'
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

            return new Promise((resolve, reject) => {
                // 아래는 테스트 코드
                // new Promise((_resolve, _reject)=>{
                //     setTimeout(()=>{
                //         _reject(tokenExpireMockup())
                //     }, 300)
                // })
                // new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         resolve(listMockup())
                //     }, 300)
                // })
                // 실제 연동은 아래
                this.get(this.listUrl, {
                    params: params
                })
                .then((res)=>{
                    if (res.data && res.data.total_count !== undefined) {
                        res.data.product_list.forEach((d)=> {
                            d.checked = false
                        })
                        let product_list = res.data.product_list
                        let total_count = res.data.total_count
                        this.total = total_count
                        this.list = product_list
                        resolve()
                    } else {
                        reject('통신 실패')
                    }
                }).catch((e)=>{
                    // TODO 타임아웃 처리를 공통으로 할 수 있을까?
                    if (e.code === 'ECONNABORTED') {
                        reject('요청 시간을 초과 하였습니다. 다시 시도해주시기 바랍니다.')
                    } else if (e.response && e.response.data.message == 'INVALID TOKEN') {
                        reject(new ExpireTokenException('로그인이 만료 되었습니다. 다시 로그인 해주세요.'))
                    } else {
                        reject('처리 중 오류 발생')
                    }
                }).then((res)=> {
                    this.loading = false
                })
            })
        },
        changePage(page) {
            this.page = page;
            this.load();
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

function tokenExpireMockup() {
    return {response: {data: {message: 'INVALID TOKEN'}}}
}
function listMockup() {
    return {data:{
        "product_list": [
            {
                "brand_name_korean": "파인애플",
                "code_number": "1300",
                "created_at": "2020-10-26 14:49:20",
                "discount_price": 69900,
                "discount_rate": 0,
                "is_discount": 0,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/02/13/13802153_1581635777_image1_L.jpg",
                "name": "에밀리 체크 레이어드 원피스",
                "price": 69900,
                "product_id": 13,
                "product_number": 13,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "1400",
                "created_at": "2020-10-26 15:06:38",
                "discount_price": 54740,
                "discount_rate": 30,
                "is_discount": 1,
                "is_display": 1,
                "is_sell": 0,
                "main_image": "https://image.brandi.me/cproduct/2020/07/02/17901241_1593663445_image1_L.jpg",
                "name": "나이키 브러시트 클럽 맨투맨",
                "price": 78200,
                "product_id": 14,
                "product_number": 14,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "1600",
                "created_at": "2020-10-26 15:24:34",
                "discount_price": 44900,
                "discount_rate": 0,
                "is_discount": 0,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/06/16/17444363_1592283816_image1_L.jpg",
                "name": "백라벨 슬릿 데님 와이드 청바지",
                "price": 44900,
                "product_id": 16,
                "product_number": 16,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "1700",
                "created_at": "2020-10-26 15:29:24",
                "discount_price": 37620,
                "discount_rate": 62,
                "is_discount": 1,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/08/28/19262991_1598599687_image1_L.jpg",
                "name": "헤비 양털 오버 후드 집업",
                "price": 99000,
                "product_id": 17,
                "product_number": 17,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "1800",
                "created_at": "2020-10-26 15:32:46",
                "discount_price": 7480,
                "discount_rate": 42,
                "is_discount": 1,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/02/18/13895278_1582014433_image1_L.jpg",
                "name": "슈펜 베이직 스니커즈",
                "price": 12900,
                "product_id": 18,
                "product_number": 18,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "1900",
                "created_at": "2020-10-26 15:35:06",
                "discount_price": 2970,
                "discount_rate": 77,
                "is_discount": 1,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/09/15/16080554_1600151328_image1_L.jpg",
                "name": "지젤 미니 크로스백",
                "price": 12900,
                "product_id": 19,
                "product_number": 19,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "2000",
                "created_at": "2020-10-26 15:37:02",
                "discount_price": 12260,
                "discount_rate": 5,
                "is_discount": 1,
                "is_display": 0,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/08/27/19241459_1598551603_image1_L.jpg",
                "name": "시티 애쉬 사이드 레이스업 롱 스커트",
                "price": 12900,
                "product_id": 20,
                "product_number": 20,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "2100",
                "created_at": "2020-10-26 15:39:18",
                "discount_price": 29900,
                "discount_rate": 50,
                "is_discount": 1,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/09/02/19435261_1599036576_image1_L.jpg",
                "name": "스트로베리 조거 팬츠",
                "price": 59800,
                "product_id": 21,
                "product_number": 21,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "2200",
                "created_at": "2020-10-26 15:41:09",
                "discount_price": 29500,
                "discount_rate": 50,
                "is_discount": 1,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/08/10/18872952_1597055111_image1_L.jpg",
                "name": "아디다스 레깅스 AJ8081",
                "price": 59000,
                "product_id": 22,
                "product_number": 22,
                "seller_property_id": 1
            },
            {
                "brand_name_korean": "파인애플",
                "code_number": "2300",
                "created_at": "2020-10-26 15:44:13",
                "discount_price": 29940,
                "discount_rate": 40,
                "is_discount": 1,
                "is_display": 1,
                "is_sell": 1,
                "main_image": "https://image.brandi.me/cproduct/2020/10/19/20224873_1603079412_image1_L.jpg",
                "name": "애쉬 스트레이트핏 재킷 셋업 슬랙스",
                "price": 49900,
                "product_id": 23,
                "product_number": 23,
                "seller_property_id": 1
            }
        ],
        "total_count": 20
    }}
}
