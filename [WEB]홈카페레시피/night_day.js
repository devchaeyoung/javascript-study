var links = {setColor:function(color){
     var alist[i]=document.querySelectorAll("#contents a");
     var i = 0;
     while (i<alist.length){
          alist[i].atyle.color = color;
          i = i+1;
     }
}
var body = {
     setColor: function(color){
          document.querySelector("body").style.color = color;
     },
     setBackgroundColor:function(color){
          document.querySelector("boby").style.backgroundColor=color;
     },
};
 function nightdayHandler(self){
     var target = document.querySelector("body");
     if(self.value === "night"){
          body.setBackgroundColor("black");
          body.setColor("white");
          self.value = "day";
          links.setColor("ivory");
      
          links.setColor("powderblue");
        } else {
          body.setBackgroundColor("white");
          body.setColor("black");
          self.value = "night";
          links.setColor("black");
        }
      }
     }

     //if(self.value === 'night'){
     //    target.style.backgroundColor = 'black';
     //     target.style.color = 'white'; document.querySelector('.night_day').value = 'day';
     //     document.querySelector('.title').style.color='rgb(231, 198, 125)';
     //     document.querySelector('#contents a').style.color='white'; }
     //     else {
     //     target.style.backgroundColor = 'white';
     //     target.style.color = 'black';
     //     document.querySelector('.night_day').value = 'night';
     //     document.querySelector('.title').style.color='black';
     //     document.querySelectorAll('#contents a').style.color='black'; }"
