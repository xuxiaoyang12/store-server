// const sidebarConfig =  require("./sidebarConfig");
module.exports = {
  title: '亦枫禾木',
  description: '文档记录 存档回归',
  port : 1234,
  markdown : {
  	lineNumbers : true
  },
  themeConfig : {
        nav : [ // 添加导航栏
         	  { text: '产品1.0', link: '/main/产品1.0/' },
            {
                text: '导航栏',
                items: [
                    { text: '文档', link: '/main/typora/' },
                    { text: 'typora', link: '/' }
                ]
            }
        ],
        // 添加侧边栏
        sidebar: {
            '/main/typora/': [
                {
                    title: '快捷键',  //组名
                    children: [
                      ['Window下快捷键','Window下快捷键'] // [0] 文件名 [1] 展示名称
                    ],   //该分组下要显示的文件的目录
                },
                {
                    title: '订单改造',
                    children: [
                      ['订单改造','订单改造'],
                      ['未命名','语法']
                    ],
                },
            ],
 
            // '/': [
            //     ['','设置的主题'],

            // ],
            '/main/产品1.0/': [
              {
                  title: '外汇交易中心',  //组名
                  children: [
                    ['外汇交易和外汇市场','外汇交易和外汇市场'] // [0] 文件名 [1] 展示名称
                  ],
              },
              {
                  title: '订单改造',  //组名
                  children: [
                    ['Window下快捷键','Window下快捷键'] // [0] 文件名 [1] 展示名称
                  ],
              },
              {
                  title: '头寸',  //组名
                  children: [
                    ['头寸流程/头寸计算','头寸计算'],// [0] 文件名 [1] 展示名称
                    ['头寸流程/头寸流程梳理','头寸流程梳理'] // [0] 文件名 [1] 展示名称
                  ],
              }
            ]
 
        },
        sidebarDepth: 4
   },
  
}

