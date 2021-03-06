describe('Becoming Awesome', function(){
        it('should start out not very awesome', function(){
                var awesomeStatus = element(by.id('awesomeStatus'));
                expect(awesomeStatus.getText()).toContain('I am not awesome');
        });
        it('should become awesome', function(){
                element(by.id('becomeAwesome')).click();
        });
        it('should be awesome', function(){
                var awesomeStatus = element(by.id('awesomeStatus'));
                expect(awesomeStatus.getText()).toContain('I am awesome');
        });
});

/* Your app's CSS, go crazy, make it your own */

/******************
  * CONTENTS
    1. Card Swipe
    2. Flex Vertical Center
    3. ionic-checkbox-custom
    4. Modal Custom - Centered
    5. Global Classes
    6. Request Classes
    7. Splash Classes
*******************/

  /* 1. Card Swipe */
    .ionic-logo {
      display: block;
      margin: 15px auto;
      width: 96px;
      height: 96px;
    }

    .pane {
/*      background-color: #333;*/
    }

    .bar.bar-transparent {
      background-color: transparent;
      background-image: none;
      border: none;
    }

    .bar .title {
      color: #eee;
    }

    .swipe-cards {
      position: fixed;
    }

    swipe-card {
      display: none;
      position: fixed;
      -webkit-transform: scale(1,1);
/*      left: 50%;*/
      left: 50%;
/*      top: 50%;*/
      width: 300px;
      height: 300px;
      margin-left: -150px;
      margin-top: 35%;
/*      margin-top: -150px;*/
      box-sizing: border-box;
      background-color: #CCC;
      border-radius: 4px;
      overflow: hidden;
      -webkit-animation-fill-mode: forwards;
    }

    swipe-card .title {
      height: 40px;
      padding: 5px;
      line-height: 30px;
      color: #444;
    }
    swipe-card .image {
      overflow: hidden;
      max-height: 210px;
    }
    swipe-card .button {
      border: none;
    }
    swipe-card .image img {
      width: 100%;
      border-radius: 0px 0px 4px 4px;
    }

    #start-card {
      color: #fff;
      background-color: #30BD8A;
      line-height: 300px;
      word-wrap: break-word;
      border: 6px solid #4CD68E;
      text-align: center;
    }
    #start-card span {
      display: inline-block;
      line-height: 40px;
      width: 200px;
      font-size: 30px;
      vertical-align: middle;
    }

    #footer .button {
      color: #fff;
    }

    @-webkit-keyframes bounceIn {
      0% {
        -webkit-transform: scale(0,0);
      }
      70% {
        -webkit-transform: scale(1.2,1.2);
      }
      100% {
        -webkit-transform: scale(1,1);
      }
    }

    swipe-card.pop-in-start {
      -webkit-transform: scale(0,0);
    }
    swipe-card.pop-in {
      -webkit-animation: bounceIn 0.4s ease-out;
    }


  /* 2. Flex Vertical Center */
    .center {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-direction: normal;
      -moz-box-direction: normal;
      -webkit-box-orient: horizontal;
      -moz-box-orient: horizontal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
      align-content: stretch;
      -webkit-box-align: center;
      -moz-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

  /* 3. item-checkbox-custom */
    .item-checkbox-custom {
      padding-left: 0px;
    }
    .item-checkbox-custom.active {
      box-shadow: none;
    }
    .item-checkbox-custom .checkbox {
      position: absolute;
      top: 50%;
      right: 8px;
      left: 8px;
      z-index: 3;
      margin-top: -21px;
    }

    .item-checkbox-custom .text {
      margin-left: 45px;
    }

    .item-checkbox-custom.item-checkbox-right {
      padding-right: 60px;
      padding-left: 16px;
    }

    .item-checkbox-right .checkbox input, .item-checkbox-right .checkbox-icon {
      float: right; }

  /* 4. Modal Custom - Centered */
    .ion-modal-custom {
      width: 90%;
      height: 90%;
      top: 25%;
      left: 5%;
      right: 5%;
      bottom: 5%;
      border-radius: 10px;
      background-color:transparent;
    }

    .ion-modal-custom .ion-modal-content-custom {
      width: 100%;
      height: 50%;
      background-color: #333;
    }

    /* Fix modal backdrop for smaller devices */
    @media (max-width: 679px) {
      .active .modal-backdrop-bg {
        opacity: .5;
      }
      .modal-backdrop-bg {
        -webkit-transition: opacity 300ms ease-in-out;
        transition: opacity 300ms ease-in-out;
        background-color: #000;
        opacity: 0;
      }
    }

  /* 5. Global Classes */
    .border-radius-5 {
      border-radius: 5px;
    }

    .border-radius-top-5 {
      border-radius: 5px 5px 0 0;
    }

    .border-radius-bottom-5 {
      border-radius: 0 0 5px 5px;
    }

  /* 6. Request Classes */
    .request-box .col {
      margin: 5px;
      text-align: center;
      border: 1px solid black;
      border-radius: 5px;
    }

  /* 7. Splash Classes */
    .slider {
      height: 100%;
    }
    .slider-slide {
      padding-top: 80px;
      color: #000;
      background-color: #fff;
      text-align: center;

      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-weight: 300;
    }

    #logo {
      margin: 30px 0px;
    }

    #list {
      width: 170px;
      margin: 30px auto;
      font-size: 20px;
    }
    #list ol {
      margin-top: 30px;
    }
    #list ol li {
      text-align: left;
      list-style: decimal;
      margin: 10px 0px;
    }