//function to bind events to elements
function bindEvent(elem,event_name,event_handler){
    if(elem.addEventListener){
      elem.addEventListener(event_name, event_handler, false);
    } else if(elem.attachEvent) {
      elem.attachEvent('on' + event_name, event_handler);
    }
  }
  function close_popup(){
    var popup_box = document.getElementsByClassName('popup-wrapper')[0]; 
    //hide temporarily
    popup_box.className = 'popup-wrapper fake-hide';
    //after sometime, set display to none
    setTimeout(real_hide,250);
    function real_hide(){
      popup_box.className = 'popup-wrapper hide';
    }
  }
  function open_popup(){
    var popup_box = document.getElementsByClassName('popup-wrapper')[0]; 
    var first = document.getElementsByClassName('popup-text')[0];
    popup_box.className = 'popup-wrapper show';
    first.className = 'popup-text show'
  }
  function calls(){
    var close_btn = document.getElementsByClassName('close-btn')[0];
    var btn = document.querySelector('.open-btn');

    bindEvent(close_btn,'click',function(){
      close_popup();
    });
  
    bindEvent(btn,'click',function(){
      open_popup();
    });
    
  }

  calls();