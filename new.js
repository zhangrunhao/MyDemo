<!DOCTYPE html>
<html lang=en>

<head>
  <meta charset=UTF-8>
  <meta name=viewport content="width=device-width,initial-scale=1">
  <meta http-equiv=X-UA-Compatible content="ie=edge">
  <link rel=stylesheet href=https://unpkg.com/element-ui/lib/theme-chalk/index.css>
  <title>「快爽·每日追更」</title>
  <style type=text/css>
    @media screen and (min-width:320px) {
      html {
        font-size: 14px
      }
    }

    @media screen and (min-width:360px) {
      html {
        font-size: 16px
      }
    }

    @media screen and (min-width:400px) {
      html {
        font-size: 18px
      }
    }

    @media screen and (min-width:440px) {
      html {
        font-size: 20px
      }
    }

    @media screen and (min-width:480px) {
      html {
        font-size: 22px
      }
    }

    @media screen and (min-width:640px) {
      html {
        font-size: 28px
      }
    }

    @media screen and (min-width:720px) {
      html {
        font-size: 30px
      }
    }

    @media screen and (min-width:750px) {
      html {
        font-size: 32px
      }
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0)
    }

    .header-top {
      background-color: #feed51
    }

    .my-header {
      background-color: #feed51;
      width: 100%;
      height: 2.75rem;
      position: relative
    }

    .my-header .icon {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 1.25rem;
      height: 1.25rem
    }

    .my-header .icon img {
      width: 100%;
      height: 100%
    }

    .my-header .back {
      left: .625rem
    }

    .my-header .share {
      right: .78125rem
    }

    .my-header .title {
      width: 100%;
      height: 2.75rem;
      line-height: 2.75rem;
      text-align: center
    }

    .tab {
      width: 100%;
      height: 2.25rem
    }

    .tab .tab-outer {
      width: 100%;
      overflow: hidden;
      float: left;
      border-bottom: .03125rem #e9e9e9 solid
    }

    .tab .tab-outer .item {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: inline-block;
      width: 14.28571%;
      color: #333;
      font-size: .75rem;
      text-align: center;
      line-height: 2.25rem
    }

    .tab .tab-outer .item-active {
      color: #fe7b5d
    }

    .tab .tab-outer .item-nouse {
      color: #999
    }

    .content-outer {
      background: #f0f0f0
    }

    .content-outer .content {
      width: 100%;
      background: #fff;
      margin-bottom: .625rem
    }

    .content-outer .content .header {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      height: 3.4375rem;
      padding-left: .625rem;
      position: relative
    }

    .content-outer .content .header .title {
      color: #333;
      font-size: .9375rem;
      font-weight: 900;
      height: 2.1875rem;
      line-height: 2.1875rem;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
    }

    .content-outer .content .header .desc {
      color: #999;
      font-size: .75rem;
      font-weight: 300
    }

    .content-outer .content .header .all {
      position: absolute;
      top: 50%;
      right: .9375rem;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 2.1875rem;
      height: 1.09375rem;
      line-height: 1.09375rem;
      font-size: .75rem
    }

    .content-outer .content .header .all .icon {
      position: absolute;
      top: 50%;
      right: 0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: .53125rem;
      height: .53125rem;
      font-size: 0
    }

    .content-outer .content .header .all .icon img {
      width: 100%;
      height: 100%
    }

    .content-outer .content .corver {
      width: 100%;
      position: relative;
      padding: .15625rem 0 0 .625rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box
    }

    .content-outer .content .corver .image-outer {
      width: 15.78125rem;
      padding-left: .5625rem;
      background-color: #333;
      font-size: 0;
      border-radius: 0 10px 10px 0;
      -webkit-box-shadow: 5px 0 1px #d8d8d8;
      box-shadow: 5px 0 1px #d8d8d8
    }

    .content-outer .content .corver .image-outer img {
      border-radius: 0 10px 10px 0;
      width: 100%
    }

    .content-outer .content .corver .tags {
      position: absolute;
      bottom: .625rem;
      left: 1.8125rem
    }

    .content-outer .content .corver .tags .tag {
      background: #c9c9c9;
      border-radius: .5625rem;
      padding: 0 .375rem;
      height: 1.125rem;
      font-family: PingFangSC-Regular;
      font-size: .75rem;
      color: #5e5e5e;
      text-align: center;
      line-height: 1.125rem;
      float: left;
      margin-right: .625rem
    }

    .content-outer .content .author {
      width: 100%;
      height: 2.75rem;
      padding-left: .59375rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-bottom: .03125rem #f0f0f0 solid
    }

    .content-outer .content .author .left {
      display: inline-block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      height: 2.75rem;
      line-height: 2.75rem;
      padding-left: 2.625rem;
      color: #fe7b5d;
      font-size: .75rem
    }

    .content-outer .content .author .left .author-image {
      position: absolute;
      top: 50%;
      left: 0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 1.75rem;
      height: 1.75rem;
      font-size: 0
    }

    .content-outer .content .author .left .author-image .main {
      border-radius: 50%;
      width: 100%;
      height: 100%
    }

    .content-outer .content .author .right {
      float: right;
      height: 2.75rem;
      line-height: 2.75rem;
      font-size: .75rem;
      margin-right: .625rem;
      color: #333
    }

    .content-outer .content .footer {
      height: 2.75rem;
      overflow: hidden;
      margin: 0 .9375rem
    }

    .content-outer .content .footer .btn {
      position: relative;
      height: 2.75rem;
      float: left;
      width: 33.33333%
    }

    .content-outer .content .footer .btn .btn-inner {
      position: absolute;
      top: 50%;
      left: 47%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%)
    }

    .content-outer .content .footer .btn .btn-inner .icon {
      float: left;
      width: 1.25rem;
      height: 1.25rem;
      margin-right: .15625rem
    }

    .content-outer .content .footer .btn .btn-inner .icon img {
      width: 100%;
      height: 100%
    }

    .content-outer .content .footer .btn .btn-inner .msg {
      float: left;
      font-size: .625rem;
      line-height: 1.375rem;
      color: #999
    }
  </style>
</head>

<body>
  <div id=app>
    <app></app>
  </div>
  <script src=./split_module/hooked-trail/index.js?bd9455e6b37c0b794499></script>
</body>

</html>