<template>
    <div class="profile">
        <p class="profile__title">个人简介</p>
        <img class="profile__photo" src="../../../assets/profile.jpg" />
        <div class="profile__info">
            <div>苏智慧,</div>
            <div>18年毕业于<a href="https://www.uestc.edu.cn/">北京理工大学，</a></div>
            <div></div>
            <div>wisdon.su@163.com</div>
            <a class="profile__github" target="_black" href="https://github.com/suzhihui">同性交友账号suzhihui</a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.profile
    padding 20px
    border-radius 5px
    border 1px solid transparent
    box-shadow: 0px 1px 3px #888
    .profile__title
        font-size 20px
        display none
    .profile__photo
        width 90px
        height 110px
        float left
        border 1px solid #eee
        border-radius 5px
        margin-right 10px
     a
         color: #34495e
.profile:after
    content ''
    display block
    clear both
.profile__info
    font-size 0.9em
    line-height 1.5
.profile__github
    color: #34495e
@media (max-width: 960px)
    .profile
        margin-top 45px
        box-shadow none
        .profile__title
            display block
</style>
