## 0.前言
---
以前学习的时候，偶尔也有整理自己知识体系的时候，然而经过一系列面试后，感觉自己的前端知识体系不完整，许多本应该简单的就能实现的效果自己却弄的很麻烦，或者设计模式上出了一些问题，导致代码块臃肿、难以添加新feature并且难以维护。因此在杨子航的推荐下，决定用Github Pages搭建一个自己的博客，记录自己学习中遇到的问题。希望在将来的学习中，遇到的问题可以总结下来，方便自己查阅。
## 1.使用Github Pages
***
首先创建一个仓库，用来存放自己的博客项目，根据github官方文档的描述
>You can configure GitHub Pages to publish your site's source files from **master**, **gh-pages**, or a **/docs** folder on your **master** branch for Project Pages and other Pages sites that meet certain criteria.
>
它给出了两种配置你网页的方式
1. 在你**master**或者**gh-pages**分支的项目里，读取根目录的index.html文件，将其渲染出来<br>
官方给出的说法是
>To select master or gh-pages as your publishing source, you must have the branch present in your repository
>
2. 将你**master**分支上**docs**文件夹里的静态文件全部渲染出来
<style>
blockquote{
    padding: 0 1.5rem;
    color: #4e4e4e;
    font-size: 1rem;
    border-left: 0.4rem solid #ddd;
    line-height: 1.5;
    font-family: "Inter","-apple-system,BlinkMacSystemFont","Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}