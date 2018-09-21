# shields-less

[English README](./README.md) | [中文README](./README.zh.md)

![Travis](https://img.shields.io/travis/wangduanduan/shields-less.svg)

![](https://img.shields.io/badge/code_style-standard-brightgreen.svg) [![](https://img.shields.io/badge/node-%3E%3D8.0.0-brightgreen.svg)]() ![npm](https://img.shields.io/npm/v/shields-less.svg) ![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)

![](./img/demo.jpg)

## 特点

[查看在线demo](https://wdd.js.org/shields-less/example/)

- 无依赖
- 非常小
- 支持中文，不会溢出
- 支持自定义颜色
- 支持Node和浏览器环境

## 安装

```
npm install shields-less
```

## 使用

```
var shieldsLess = require('shields-less')
var svgBadge = shieldsLess.svg({
    leftText: 'npm 黄河远上白云间',
    rightText: 'hello 世界'
})

var svgBadge2 = shieldsLess.svg({
    leftText: 'npm 黄河远上白云间',
    rightText: 'hello 世界',
    style: 'square'
})

var svgBadge2 = shieldsLess.svg({
    leftText: 'npm 黄河远上白云间',
    rightText: 'hello 世界',
    leftColor: '#e64a19',
    rightColor: '#448aff',
    style: 'square' // jest two style: square and plat(default)
})
```

**你会获得如下字符串**

```
<svg xmlns="http://www.w3.org/2000/svg" width="188" height="20">
    <rect width="188" height="20" fill="#555"/>
    <rect x="118" width="70" height="20" fill="#97CA00"/>
    <rect x="118" width="4" height="20" fill="#97CA00"/>
    <rect width="188" height="20" fill-opacity=".1"/>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="60" y="14">npm 黄河远上白云间</text>
        <text x="152" y="14">hello 世界</text>
    </g>
    </svg>
```