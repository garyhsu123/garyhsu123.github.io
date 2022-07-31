---
title: Points and Pixels
date: 2021-04-27T19:49:45+08:00
lastmod: 2021-04-27T19:49:45+08:00
author: YC
# avatar: /img/author.jpg
# authorlink: https://author.site
cover: /img/cover.jpg
categories:
  - Programming Language
tags:
  - iOS
  - Swift
# nolastmod: true

---

在開發iOS時，常常會需要在Inspector上設定view的大小，例如有一個view的大小 `Width是300`、`Height是400`，那麼這個300和400的單位是什麼呢？🧐


## What is `Point` 
---
`Point`是Apple自訂的衡量單位，就上述的例子來說，300和400的單位就是`Point`，我們知道`Pixel`是顯示器上顯示的最小單位，那底`Point`和`Pixel`有什麼不一樣呢？

<br>


## What is `DPI`, `PPI` ?
---
在講`Point`前我們必須先提到`DPI`，`DPI`是（Dots Per Inch)的縮寫，而PPI是（Pixel per Inch)的縮寫，意思相同，都代表一英吋的長度(2.54cm)所含的pixel數目。  
<br>
如果你是蘋果的用戶，那你對`Retina`這個字一定不陌生，他是頻果公司高解析度顯示器的一個系列，既然說是高解析度，那究竟是多高呢？`Retina`的螢幕DPI是`326`，而在`Retina`被推出來之前，蘋果公司的顯示器DPI才`163`，而在DPI為`163`的device上，正好1個Point的大小相等於一個Pixel的大小，那麼你大概可以知道1個Point大概多大了吧
!

`一個Point的邊長 = 2.54 cm / 163 ≈ 0.16 cm`

<br>

## Point and Pixel

![]( https://blog.fluidui.com/content/images/2015/09/pixel-comparison.png)

**最左邊為163 DPI，中間是326 DPI，最右邊則為401 DPI**





## Reference
- [Mobile design 101: pixels, points and resolutions](https://blog.fluidui.com/designing-for-mobile-101-pixels-points-and-resolutions/#:~:text=On%20the%20iPhone%2C%201%20point,down%2C%20or%204%20total%20pixels.)
<!--more-->


