(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{423:function(t,s,a){t.exports=a.p+"assets/img/image-20220129174647855.a7f00bc8.png"},442:function(t,s,a){"use strict";a.r(s);var _=a(65),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"头寸流程梳理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸流程梳理"}},[t._v("#")]),t._v(" 头寸流程梳理")]),t._v(" "),_("p",[_("img",{attrs:{src:a(423),alt:"img"}})]),t._v(" "),_("p",[t._v("[toc]")]),t._v(" "),_("h2",{attrs:{id:"一、头寸基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、头寸基础"}},[t._v("#")]),t._v(" 一、头寸基础")]),t._v(" "),_("h3",{attrs:{id:"专业名词"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#专业名词"}},[t._v("#")]),t._v(" 专业名词")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("头寸")])]),t._v(" "),_("li",[_("p",[t._v("敞口")]),t._v(" "),_("blockquote")]),t._v(" "),_("li",[_("p",[t._v("损益")])])]),t._v(" "),_("h3",{attrs:{id:"头寸品种"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸品种"}},[t._v("#")]),t._v(" 头寸品种")]),t._v(" "),_("p",[t._v("头寸品种：根据产品类型("),_("code",[t._v("instrument")]),t._v(")、货币对("),_("code",[t._v("pair")]),t._v(")、合约("),_("code",[t._v("contract")]),t._v(")来判定。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("大类")]),t._v(" "),_("th",[t._v("小类")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("外汇类")]),t._v(" "),_("td",[t._v("外汇")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("贵金属")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("积存金")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("品牌金")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("商品类")]),t._v(" "),_("td",[t._v("现货商品")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("期货商品")]),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"二、头寸业务流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、头寸业务流程"}},[t._v("#")]),t._v(" 二、头寸业务流程")]),t._v(" "),_("h3",{attrs:{id:"头寸接收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸接收"}},[t._v("#")]),t._v(" 头寸接收")]),t._v(" "),_("p",[_("code",[t._v("交易模块")]),t._v("发送拆分后的头寸数据，头寸接收数据后进行如下几步操作：")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("positionDealStep")]),t._v("➡️获取redis锁")]),t._v(" "),_("li",[_("code",[t._v("calculatePositionStep")]),t._v("➡️计算成本价、损益、敞口等")]),t._v(" "),_("li",[_("code",[t._v("cashFlowStep")]),t._v("➡️累计现金流")]),t._v(" "),_("li",[_("code",[t._v("makerPositionStep")]),t._v("➡️ 做市商头寸累计")]),t._v(" "),_("li",[_("code",[t._v("calculatePositionRedisStep")]),t._v("➡️头寸累计数据存Redis")]),t._v(" "),_("li",[_("code",[t._v("pushPositionStep")]),t._v("➡️推送客户端")]),t._v(" "),_("li",[_("code",[t._v("pushMakerPositionStep")]),t._v("➡️推送做市商客户端")]),t._v(" "),_("li",[_("code",[t._v("calculatePositionFailStep")]),t._v("➡️累计头寸和现金流失败后执行")]),t._v(" "),_("li",[_("code",[t._v("positionReturnStep")]),t._v("➡️交易返回交易模块处理")])]),t._v(" "),_("p",[_("code",[t._v("event")]),t._v("接收事件名称：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("positionDealEvent")]),t._v(" mq接收"),_("code",[t._v("Event")]),t._v("事件入口")])]),t._v(" "),_("p",[t._v("上送头寸类型：")]),t._v(" "),_("p",[t._v("相关枚举："),_("code",[t._v("ReceivePositionTypeEnum")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("上送头寸类型：\n1-普通上送 \n2-外资行头寸平盘 \n3-头寸转移 \n4-现金流平盘 \n5-贵金属USDCNY头寸平盘 \n6 手工补录 \n7-头寸转移撤销 \n8-头寸转移拒绝\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br")])]),_("h4",{attrs:{id:"头寸计算步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸计算步骤"}},[t._v("#")]),t._v(" 头寸计算步骤:")]),t._v(" "),_("ol",[_("li",[t._v("如果是转移头寸 "),_("code",[t._v("transfer_id")]),t._v(" 上下文中设置 "),_("code",[t._v("transfer_id")])]),t._v(" "),_("li",[t._v("遍历头寸数据 "),_("code",[t._v("List<PositionPojo>")]),t._v(" "),_("ol",[_("li",[t._v("拼接原交易流水号，返回交易模块")]),t._v(" "),_("li",[t._v("检查\n"),_("ol",[_("li",[t._v("检查组合")]),t._v(" "),_("li",[t._v("检查货币对")]),t._v(" "),_("li",[t._v("校验上送交易流水是否重复\n"),_("ol",[_("li",[t._v("重复：")]),t._v(" "),_("li",[t._v("不重复：数据库生成自增ID")])])])])])])])]),t._v(" "),_("h3",{attrs:{id:"头寸计算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸计算"}},[t._v("#")]),t._v(" 头寸计算")]),t._v(" "),_("p",[t._v("实时对每个头寸的净敞口、成本价、已实现损益等进行实时的计算和累计。")]),t._v(" "),_("p",[t._v("根据产品类型("),_("code",[t._v("instrument")]),t._v(")、货币对("),_("code",[t._v("pair")]),t._v(")、合约("),_("code",[t._v("contract")]),t._v(")来判定头寸品种.")]),t._v(" "),_("p",[t._v("需要计算出的"),_("code",[t._v("几个指标")]),t._v(":")]),t._v(" "),_("ul",[_("li",[t._v("成本价")]),t._v(" "),_("li",[t._v("货币一净敞口")]),t._v(" "),_("li",[t._v("货币二净敞口")]),t._v(" "),_("li",[t._v("浮动盈亏")]),t._v(" "),_("li",[t._v("已实现损益")])]),t._v(" "),_("h4",{attrs:{id:"外汇-贵金属-积存金产品规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#外汇-贵金属-积存金产品规则"}},[t._v("#")]),t._v(" 外汇/贵金属/积存金产品规则")]),t._v(" "),_("p",[t._v("外汇/贵金属/积存金产品计算规则如下：")]),t._v(" "),_("p",[t._v("1）敞口为"),_("code",[t._v("0")])]),t._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成交价计算")]),t._v("\n成本价\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t成交价\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//净敞口计算")]),t._v("\n货币一净敞口\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t货币一成交敞口\n货币二净敞口\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t货币二成交敞口\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浮动盈亏")]),t._v("\n浮动盈亏\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已实现损益")]),t._v("\n已实现损益\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br")])]),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("2）标的方向不变")]),t._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成本价计算")]),t._v("\n成本价\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t货币二敞口绝对值"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("货币一成交敞口绝对值\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//净敞口计算")]),t._v("\n货币一净敞口\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t货币一成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币一累计敞口\n货币二净敞口\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t货币二成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币二累计敞口\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浮动盈亏")]),t._v("\n浮动盈亏\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t（市价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("成本价）"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("货币一敞口绝对值\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已实现损益")]),t._v("\n已实现损益\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br")])]),_("p",[t._v("3）标的方向相反，但损益敞口方向不发生变化：")]),t._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成本价计算")]),t._v("\n成本价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("原成本价\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//净敞口计算")]),t._v("\n货币一净敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("货币一成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币一累计敞口\n货币二净敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("货币二成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币二累计敞口\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浮动盈亏")]),t._v("\n浮动盈亏"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("（市价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("成本价）"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 货币一敞口绝对值\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已实现损益")]),t._v("\n已实现损益"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("（成交价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("成本价）"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 货币一敞口绝对值\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br")])]),_("p",[t._v("4）标的方向相反，但损益敞口方向发生变化：")]),t._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成本价计算")]),t._v("\n成本价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("成交价\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//净敞口计算")]),t._v("\n货币一净敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("货币一成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币一累计敞口\n货币二净敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("货币二成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币二累计敞口\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浮动盈亏")]),t._v("\n浮动盈亏"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("（市价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("成本价）"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("货币一敞口绝对值"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已实现损益")]),t._v("\n已实现损益"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("（成交价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("原成本价）"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("原货币一敞口绝对值\n \n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br")])]),_("p",[t._v("5）某一货币敞口为0：")]),t._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成本价计算")]),t._v("\n成本价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//净敞口计算")]),t._v("\n货币一净敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("货币一成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币一累计敞口\n\n货币二净敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("货币二成交敞口"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("货币二累计敞口\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浮动盈亏")]),t._v("\n浮动盈亏"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已实现损益")]),t._v("\n已实现损益"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("（成交价"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("成本价）"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("敞口为"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("后的原货币敞口\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br")])]),_("p",[_("strong",[t._v("计算规则：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("字段条件")]),t._v(" "),_("th",[t._v("敞口为0")]),t._v(" "),_("th",[t._v("标的方向不变")]),t._v(" "),_("th",[t._v("标的方向相反，但损益敞口方向不发生变化")]),t._v(" "),_("th",[t._v("标的方向相反，但损益敞口方向发生变化")]),t._v(" "),_("th",[t._v("某一货币敞口为0")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("成本价")]),t._v(" "),_("td",[t._v("成交价")]),t._v(" "),_("td",[t._v("货币二敞口绝对值/货币一成交敞口绝对值")]),t._v(" "),_("td",[t._v("货币二敞口绝对值/货币一成交敞口绝对值")]),t._v(" "),_("td",[t._v("成交价")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("货币一净敞口")]),t._v(" "),_("td",[t._v("货币一成交敞口+货币一累计敞口")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("货币二净敞口")]),t._v(" "),_("td",[t._v("货币二成交敞口+货币二累计敞口")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("浮动盈亏")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("（市价-成本价）*货币一敞口绝对值")]),t._v(" "),_("td",[t._v("（市价-成本价）* 货币一敞口绝对值")]),t._v(" "),_("td",[t._v("（市价-成本价）/货币一敞口绝对值=0")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("已实现损益")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("（成交价-成本价）* 货币一敞口绝对值")]),t._v(" "),_("td",[t._v("（成交价-原成本价）*原货币一敞口绝对值")]),t._v(" "),_("td",[t._v("（成交价-成本价）*敞口为0后的原货币敞口")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}}),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("h4",{attrs:{id:"品牌金规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#品牌金规则"}},[t._v("#")]),t._v(" 品牌金规则")]),t._v(" "),_("p",[t._v("品牌金按照如下规则：")]),t._v(" "),_("h4",{attrs:{id:"现货和期货商品规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现货和期货商品规则"}},[t._v("#")]),t._v(" 现货和期货商品规则")]),t._v(" "),_("p",[t._v("现货和期货商品按照如下规则：")]),t._v(" "),_("h3",{attrs:{id:"头寸监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸监控"}},[t._v("#")]),t._v(" 头寸监控")]),t._v(" "),_("h3",{attrs:{id:"头寸快照"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸快照"}},[t._v("#")]),t._v(" 头寸快照")]),t._v(" "),_("p",[t._v("定时任务：每小时执行一次")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("批处理：")]),t._v(" "),_("code",[t._v("positionBatchSnapshotFTAServiceImpl")])]),t._v(" "),_("li",[t._v("判断是否重算中，如果正在重算则跳过")]),t._v(" "),_("li",[t._v("构建快照实体类，字段包含 快照年份、快照小时、快照实体FAT")]),t._v(" "),_("li",[t._v("构建快照"),_("code",[t._v("Event")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("businessType = DEFAULT")])]),t._v(" "),_("li",[_("code",[t._v("eventName = snapshotPositionEvent")])])])]),t._v(" "),_("li",[t._v("发送并执行"),_("code",[t._v("eventName")]),t._v(" : "),_("code",[t._v("snapshotPositionEvent")])]),t._v(" "),_("li",[t._v("执行切日")])]),t._v(" "),_("h4",{attrs:{id:"_1、头寸快照"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、头寸快照"}},[t._v("#")]),t._v(" 1、头寸快照")]),t._v(" "),_("p",[t._v("涉及表：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("// 头寸快照表\nfmut2_position_cash_flow_snapshot\n// 相关step\nsnapshotPositionStep\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br")])]),_("h4",{attrs:{id:"_2、现金流快照"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、现金流快照"}},[t._v("#")]),t._v(" 2、现金流快照")]),t._v(" "),_("p",[t._v("涉及表：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("// 头寸快照表\nfmut2_position_cash_flow_snapshot\n// 相关step\nsnapshotCashFlowStep\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br")])]),_("h3",{attrs:{id:"头寸快照重算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸快照重算"}},[t._v("#")]),t._v(" 头寸快照重算")]),t._v(" "),_("h4",{attrs:{id:"_1、相关表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、相关表"}},[t._v("#")]),t._v(" 1、相关表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("表名")]),t._v(" "),_("th",[t._v("释义")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("fmut2_position_cash_flow")])]),t._v(" "),_("td",[t._v("现金流汇总表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_cash_flow_recalculate_backups")])]),t._v(" "),_("td",[t._v("现金流重算汇总表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_cash_flow_snapshot")])]),t._v(" "),_("td",[t._v("现金流汇总快照表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_cash_flow_trade")])]),t._v(" "),_("td",[t._v("结售汇现金流平盘表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_margin")])]),t._v(" "),_("td",[t._v("外汇、贵金属类头寸表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_margin_fmqt")])]),t._v(" "),_("td",[t._v("量化头寸表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_margin_fmqt_snapshot")])]),t._v(" "),_("td",[t._v("量化头寸快照表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_margin_profit_snapshot")])]),t._v(" "),_("td",[t._v("损益快照表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_margin_recalculate_backups")])]),t._v(" "),_("td",[t._v("外汇、贵金属类头寸表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_margin_snapshot")])]),t._v(" "),_("td",[t._v("外汇、账户金类头寸快照表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_margin_transfer")])]),t._v(" "),_("td",[t._v("外汇、贵金属类转移明细")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_trade")])]),t._v(" "),_("td",[t._v("头寸平盘表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_trade_detail")])]),t._v(" "),_("td",[t._v("头寸平盘成交明细表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_trade_signal")])]),t._v(" "),_("td",[t._v("自动平盘-交易信号")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_trade_split_detail")])]),t._v(" "),_("td",[t._v("上送交易记录表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("fmut2_position_trade_split_detail_recalculate_backups")])]),t._v(" "),_("td",[t._v("上送交易记录表")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("FMUT2_BATCH_BUSINESS_DATE")])]),t._v(" "),_("td",[t._v("批量业务切日表")]),t._v(" "),_("td")])])]),t._v(" "),_("h4",{attrs:{id:"_2、重算流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、重算流程"}},[t._v("#")]),t._v(" 2、重算流程：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("判断交易是否重算成功")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("recalculateStatus = 1")]),t._v(" 表示交易重算成功")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("recalculatePrepositionHandleStep#execAndReturn()")]),t._v(" 进入头寸重算流程：")]),t._v(" "),_("ol",[_("li",[t._v("对"),_("code",[t._v("entity")]),t._v("加"),_("code",[t._v("redis")]),t._v("同步锁")]),t._v(" "),_("li",[t._v("重算前备份涉及表数据")]),t._v(" "),_("li",[t._v("获取可以"),_("code",[t._v("重算")]),t._v("的头寸数据\n"),_("ol",[_("li",[_("code",[t._v("entity")]),t._v("下头寸")]),t._v(" "),_("li",[t._v("头寸统计时间后的数据"),_("code",[t._v("positionCountDateTime")])]),t._v(" "),_("li",[_("code",[t._v("POSITION_COUNT_STATUS='2' and IS_SEND_POSITION='1'")]),t._v(" 或者"),_("code",[t._v("POSITION_COUNT_STATUS='5' and SEND_CASHFLOW_FLAG = '1'")])])])]),t._v(" "),_("li",[t._v("重算头寸数据")]),t._v(" "),_("li",[t._v("重算现金流数据")]),t._v(" "),_("li",[t._v("处理头寸重算过程中，头寸数据并返回快照集合")]),t._v(" "),_("li",[t._v("处理头寸重算过程中，量化头寸数据")]),t._v(" "),_("li",[t._v("处理头寸重算过程中，现金流数据")]),t._v(" "),_("li",[t._v("处理头寸重算过程中，日、月、年损益表数据")]),t._v(" "),_("li",[t._v("头寸和现金流累计")]),t._v(" "),_("li",[t._v("按照实体、业务品种：分类累计头寸和现金流")]),t._v(" "),_("li",[t._v("冻结金额重新赋值")]),t._v(" "),_("li",[t._v("现金流累计")]),t._v(" "),_("li",[t._v("现金流汇总")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("DelPositionRedisStep")])])])]),t._v(" "),_("h3",{attrs:{id:"头寸平盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸平盘"}},[t._v("#")]),t._v(" 头寸平盘")]),t._v(" "),_("p",[t._v("​\t"),_("strong",[t._v("平盘线程")])]),t._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[t._v("    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 平盘初始化线程池")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClosePositionMonitorThread")]),t._v("\n        \n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动平盘开关 默认true")]),t._v("\n    position"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoClose"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lockFlag"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 平盘任务线程")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClosePositionTask")]),t._v("\n        \n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 平盘开关")]),t._v("\n    closePositionSwitch"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    \n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br")])]),_("h3",{attrs:{id:"头寸转移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头寸转移"}},[t._v("#")]),t._v(" 头寸转移")]),t._v(" "),_("h3",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),_("p",[t._v("fmut2_position_cash_flow_snapshot")]),t._v(" "),_("h2",{attrs:{id:"三、问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、问题"}},[t._v("#")]),t._v(" 三、问题")]),t._v(" "),_("blockquote",[_("p",[t._v("问题")])]),t._v(" "),_("ol",[_("li",[t._v("如果现金流写入 原现金流表，会不会影响其他逻辑")])])])}),[],!1,null,null,null);s.default=e.exports}}]);