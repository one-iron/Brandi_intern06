export default {
    namespaced : true,
    state: {
      sellerSections: [
        {label: '쇼핑몰', value: 1},
        {label: '마켓', value: 2},
        {label: '로드샵', value: 3},

        {label: '디자이너브랜드', value: 4},
        {label: '제너럴브랜드', value: 5},
        {label: '내셔널브랜드', value: 6},

        {label: '뷰티', value: 7},
      ],
      saleTypes: [
        {label: '판매', value: 'Y'},
        {label: '미판매', value: 'N'},
      ],
      sellerStatus: [
        {label: '입점신청', value: 1},
        {label: '입점', value: 2},
        {label: '휴점', value: 3},
        {label: '퇴점대기', value: 4},
        {label: '퇴점', value: 5},
        {label: '입점거절', value: 6},
      ],
      sellerStatusActions: {
        1: [
          {label: '입점승인', value: 2, type: 'info'}
          , {label: '입점거절', value: 6, type: 'danger'}
        ],
        2: [
          {label: '휴점신청', value: 3, type: 'warning'}
          , {label: '퇴점신청', value: 4, type: 'danger'}
        ],
        3: [
          {label: '휴점해제', value: 2, type: 'success'}
          , {label: '퇴점신청', value: 4, type: 'danger'}
        ],
        4: [
          {label: '퇴점해제', value: 2, type: 'info'}
          , {label: '퇴점승인', value: 5, type: 'danger'}
        ]
      },
      exhibitTypes: [
        {label: '진열', value: 'Y'},
        {label: '미진열', value: 'N'},
      ],
      discountTypes: [
        {label: '할인', value: 'Y'},
        {label: '미할인', value: 'N'},
      ]
    },
    getters: {
    },
    mutations: {
    },
    actions: { /* 통신처리 */
    }
}
