<template>
  <div>
    <header class="header-bar" :calss="titleAlign">
      <router-link to="/"><h1></h1></router-link>
      <nav>
          <router-link :to="item.to" v-for="item in titlelist" :key="item.title" :style='{color:item.color}'>{{item.title}}</router-link>
      </nav>
      <div class="right-icon-group">
        <a href="javascript:;" @click="showSearch($event)">
          <img src='../../assets/img/download.png'>
        </a>
      </div>
    </header>
    <div class="searchBox" v-show="searchFlag">
      <header>
        <a href="javascript:;" @click="showSearch($event)">关闭</a>
        <input name="query" type="search">
      </header>
      <div class="content">
        <section> </section>
        <div class="navBootom">
          <div class="nav-item">
            <a href="#" class="toReg">注册账号</a>
            <a href="#" class="toLogin">登陆账号</a>
          </div>
          <div class="nav-item">
            <a href="#" class="toPc">使用桌面版</a>
            <a href="#" class="toApp">使用豆瓣APP</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      titleAlign:{
        type:String,
        default:'center'
      }
    },
    data (){
      return{
          titlelist:[{ "title":"电影","color":"#2384E8",to:"/move"},
          {"title":"图书","color":"#9F7860",to:"/move"},
          {"title":"广播","color":"#E4A813",to:"/move"},
          {"title":"小组","color":"#2AB8CC",to:"squad"}
        ],
        searchFlag:false
      }
    },
    methods:{
      showSearch (e){
        this.searchFlag=!this.searchFlag;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .searchBox{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#fff;
    z-index:100;
    header{
      height:44px;
      background:#fff;
      left:0;
      top:0;
      width:100%;
      z-index:100;
      display:-webkit-box;
      -webkit-box-align:center;
      a{
        display:block;
        height:100%;
        padding:0 10px;
        line-height:44px;
        color:#42bd56;
      }
      input{
        display:block;
        -webkit-box-flex:1;
        height:30px;
        border:0;
        border-radius:3px;
        background:#ccc;
        margin:0 20px;
      }
      &:after{
        content:"";
        height: 0.01rem;
        background: #ccc;
        width: 200%;
        display:block;
        position: absolute;
        left: -50%;
        bottom: 0;
        transform: scale(0.5);
      }
    }
    .content{
      .navBootom{
        width: 100%;
        border-bottom: 1px solid #f3f3f3;
        .nav-item{
          height:40px;
          border-top:1px solid #f3f3f3;
          padding:13px 0;
          a:first-child {
            border-right: 1px solid #e5e5e5;
          }
          a{
            width: 50%;
            display: inline-block;
            box-sizing: border-box;
            float:left;
            text-align: center;
            margin: 0 auto;
            text-decoration: none;
            font-size: 15px;
            color: #42bd56;
          }
        }
      }
    }
  } 
  .header-bar{
    height: 44px;
    width:100%;
    display: -webkit-box;
    -webkit-box-align:center;
    position: fixed;
    top:0;
    background: #fff;
    z-index: 100;
    &:after{
      content:"";
      height: 0.01rem;
      background: #ccc;
      width: 200%;
      display:block;
      position: absolute;
      left: -50%;
      bottom: 0;
      transform: scale(0.5);
    }
    h1{
      margin:0 0.1rem;
        padding: 0;
        color: #00b600;
        font-size: 0;
        background: url("../../assets/img/logo.png") no-repeat;
        background-size: cover;
        height: 22px;
        width: 46px;
        display: inline-block;
    }
    nav{
      width: 70%;
      height: 44px;
      display: -webkit-box;
      -webkit-box-align:center;
      a{
        display: block;
        color: #000;
        margin: 0 10px;
      }
    }
    .right-icon-group{
      a{
        display: block;
        height: 44px;
        display: -webkit-box;
        -webkit-box-align:center;
        img{
          width: 30%;
          display: block;
        }
      }
      &.center{
        nav{
          -webkit-box-pack:center;
        }
      }
      &.left{
        nav{
          -webkit-box-pack:start;
        }
      }
      &.right{
        nav{
          -webkit-box-pack:end;
        }
      }
    }
    
  }
</style>
