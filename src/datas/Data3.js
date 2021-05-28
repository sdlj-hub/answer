let listData=[
    {title:"数据分析法是以任务为导向性的用户研究方法，通过任务的设置，对用户的行为进行观察和记录，从而对产品的可用性进行评估。（）",answer:1},
{title:"人机交互主要是指人与计算机屏幕进行信息交换，当用户通过界面向计算机输入信息进行操作时，计算机则通过交互的界面向用户提供反馈的信息。（ ）",answer:1},
{title:"观察法是一种收集需求创意的方法，通常需要有不同专业背景的人参与。()",answer:1},
{title:"触点管理就是对用户接触的关键时刻点进行规划和设计，使这些与用户接触的关键时刻变为用户满意的点，触点包括视觉、触觉、味觉、嗅觉、听觉、味觉以及心理上所接触的点。（ ）",answer:0},
{title:"可用性测试法是数据分析中使用较多的分析方法，它能够科学有效地反应出用户的行为状态，以及从起点到终点的转化率。（）",answer:1},
{title:"活动中的用户互动情况可以从活动本身与用户之间的互动，以及参与活动的用户之间的互动这两个角度来看效果。",answer:0},
{title:"麻溜儿的!XX原生态特产，吃得健康，今晚直播间8点买一送一!”介绍，属于特点+利益点+促销点的介绍。",answer:0},
{title:"拍摄人物在海边的近景镜头，通过镜头不 断后退，出现全景甚至远景，这种效果是“拉”镜头的拍摄技巧，营造温馨氛围，带给观众对美好的向往。",answer:0},
{title:"根据社会时事热点撰写品牌借势营销文案，以及为一个电影海报撰写推广软文，都是新媒体文案工作内容。",answer:0},
{title:"数字媒体可以把文字、图片、音频、视频融为一体，比传统媒体的形式更多样化，能够让信息更好地跨越时间和空间的限制进行讨论与传播，因此可以取代传统媒体。",answer:1},
{title:"导航设计就是为了让用户清楚的明白自己身处系统中的何处，明白下一步怎么走。",answer:0},
{title:"用户通常喜欢微信读书淡蓝色的颜色风格，这属于用户体验的架构层。",answer:1},
{title:"产品结构的稳固与否，代表着在增加和减少功能模块时的难易度",answer:0},
{title:"产品经理不会画原型是正常的。",answer:1},
{title:"用户体验是结果。",answer:1},
{title:".高保真阶段是确定界面元素。",answer:1},
{title:"屏幕密度越大，画面显示的细节就越丰富。",answer:0},
{title:"UML用例图的参与者是具体的人。",answer:1},
{title:"AB测试只能用于比较两个方案的好坏",answer:1},
{title:"用户体验的五度量化有吸引度、完成度、满意度、忠诚度和推荐度",answer:0},
{title:"Nielsen认为可用性有五个指标,分别是易学性、易错性、容错性、交互效率和用户满意度 ",answer:1},
{title:"在KANO模型中期望型需求属于必备需求",answer:1},
{title:"iPhone应用的基本结构分：状态栏、导航栏、标签栏",answer:0},
{title:"Photoshop中，图像大小的更改可以通过执行“图像”→“图像大小”命令来实现。",answer:0},
{title:"图片合成是一种创作，是创作者用于表达一定思想和愿望的方式。",answer:0},
{title:"复合通道可以被单独隐藏。",answer:1},
{title:"“色彩模式组”包含滤色。",answer:1},
{title:"移动端界面设计中采用高亮屏，锁屏打开。只要向左滑动就行，不再需要原始的从右下角往上滑动。",answer:1},
{title:"大多数的IOS应用使用了来自UIKit的部件，这是一个定义了基本界面元素的编程框架。这个框架让各种应用在视觉上达到一致的同时还提供了高度的个性化。",answer:0},
{title:"图标设计等同于UI设计，属于交互设计范畴。",answer:1},
{title:"双色调模式是指由两种颜色构成图像的颜色模式。",answer:1},
{title:"选择混合命令可以对整个图形、部分路径或控制点进行混合。",answer:0},
{title:"GUI包含手机界面设计、网页界面设计和游戏界面设计。",answer:1},
{title:"设计低保真原型图的目的是检验产品的功能与用户体验流程，以便发现基本的问题。",answer:0},
{title:"为了保证网站中图片的清晰度，要把所用图片的分辨率设为300dpi。",answer:1},
{title:".F式布局是一种很科学的布局方法，是依据大量网页浏览眼动研究成果得出的方法。",answer:0},
{title:"网站定位对于网站界面设计起决定性作用。",answer:0},
{title:"用户的浏览习惯是从右到左，从上到下。",answer:1},
{title:"手机界面更多的以文字表现而不是图形表现。",answer:1},
{title:"手机触屏操作比网页鼠标精确度高。",answer:1},
{title:"在墨刀中，同一个页面的不同状态之间的元素可以不一样，即不同状态之间可以删减元素。",answer:1},
{title:"在墨刀的设计页面中，可以通过“置顶”功能将某个组件/元素放到最顶层。",answer:0},
{title:"墨刀的内置素材库提供了包括图片、地图、表格、轮播图等组件。",answer:0},
{title:"在流程图中，一般用矩形表示执行或事物处理。",answer:0},
{title:"可以使用Visio软件描述算法。",answer:0},
{title:"Xmind是App原型设计工具，而墨刀是思维导图制作工具。",answer:1},
{title:"思维导图可以帮助产品设计者理清思路。",answer:0},
{title:"用户需求不属于App产品的核心设计要素。",answer:1},
{title:"Visio中可以直接插入CAD绘图",answer:1},
{title:"墨刀的素材库包括内置素材和素材广场（其他用户分享的素材）",answer:0},

]
export{
    listData
}