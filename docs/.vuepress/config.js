const path = require('path')
const rootPath = path.dirname(__dirname)
// const sidebarConfig =  require("./sidebarConfig");
//导入生成侧边栏的工具类
const { sideBarTool } = require(path.join(__dirname, './utils/index.js'))
console.log(rootPath)
// 需要排除的一些目录
let unDirIncludes = ['node_modules', 'assets', 'public','.vuepress','about','other','plantUML','xmind']
// 只需要处理后缀的文件类型
let SuffixIncludes = ['md']
    //使用方法生生成侧边栏
// 侧边栏
let sidebar = sideBarTool.genSideBarGroup(rootPath, unDirIncludes, SuffixIncludes, {})

module.exports = {
  title: "亦枫禾木",
  description: '文档记录 存档回归',
  base:'/docs/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  port : 1234,
  markdown : {
  	lineNumbers : true
  },
  themeConfig : {
        logo: '/logo.png',
        nav : [ // 添加导航栏
         	  { text: '产品1.0', link: '/main/产品1.0/' },
            {
                text: '导航栏',
                items: [
                    { text: '文档', link: '/main/typora/' },
                    // { text: 'typora', link: '/' }
                ]
            },
            { text: '关于', link: '/about/' },
        ],
        // 添加侧边栏
        sidebar:sidebar,
        // sidebar: {
        //     '/main/typora/': [
        //         {
        //           "title":"首页",
        //           "children":[
        //             ["",""],
        //             ["Window下快捷键","Window下快捷键"],
        //             ["document","document"],
        //             ["未命名","未命名"],
        //             ["订单改造","订单改造"]
        //           ]
        //       },
        //         {
        //             "title": "快捷键",  //组名
        //             "children": [
        //               ["",""],
        //               ["Window下快捷键","Window下快捷键"] // [0] 文件名 [1] 展示名称
        //             ],   //该分组下要显示的文件的目录
        //         },
        //         {
        //             title: '订单改造',
        //             children: [
        //               ['订单改造','订单改造'],
        //               ['未命名','语法'],
        //               ['document','常用的文档站搭建框架']
        //             ],
        //         },
        //     ],

        //     // '/': [
        //     //     ['','设置的主题'],

        //     // ],
        //     '/main/产品1.0/': [
        //       {
        //           title: '外汇交易中心',  //组名
        //           children: [
        //             ['外汇交易和外汇市场','外汇交易和外汇市场'] // [0] 文件名 [1] 展示名称
        //           ],
        //       },
        //       {
        //           title: '头寸',  //组名
        //           children: [
        //             ['头寸流程/头寸计算','头寸计算'],// [0] 文件名 [1] 展示名称
        //             ['头寸流程/头寸流程梳理','头寸流程梳理'] // [0] 文件名 [1] 展示名称
        //           ],
        //       },
        //       {
        //           title: '其他',  //组名
        //           children: [
        //             ['other/内部交易-对账流程','内部交易-对账流程'],// [0] 文件名 [1] 展示名称
        //           ],
        //       }
        //     ]
        //     // 关于我
        //     // '/about/': [
        //     //   ['','关于']
        //     // ],
        //     // '/':[
        //     //   ['','首页']
        //     // ],

        // },
        sidebarDepth: 4
   },

}
