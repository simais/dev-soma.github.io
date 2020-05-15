   var ul=document.getElementById('ul');
   var btn=document.getElementById('buttonNext');
   var ShowCorrect=document.getElementById('buttonShowCorrect');
   var ShowExplanation=document.getElementById('buttonShowExplanation');
   var explanation=document.getElementById('explanation');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');

  var app={
          questions:[
              {q:'Mi az anyagmennyiség jele?', options:['n','m','v','M'],answer:1,explanation:"Az anyagmennyiség jele a kicsi n betű, mértékegysége a mól. (v = sebesség, m = tömeg, M = moláris tömeg)"},

              {q:'Melyik biztos nem kémiai rekció ?',options:['Ami halmazállaot változással jár','Ami leírható egyenlettel','Amelyben elektronszerkezet nem változik','Amiben új anyag jön létre'],answer:3,explanation:"Mert az elektronszerkezete megváltozik, mivel a kémiai reakciókban új anyag jön létre."},

              {q:'Melyik szükséges az aktivált komplex eléréséhez?:',options:['termékek','megfelelő E','Új anyag létrejötte',''],answer:2,explanation:"A megfelelő aktiválási energia miatt tud aktivált komplex állapotba kerülni, ahol a kötések felszakadnak, majd új kötések jönnek létre."}
              ],

                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                        btn.innerHTML="Következő"
                        op1.style.display="block";
                        op2.style.display="block";
                        op3.style.display="block";
                        op4.style.display="block";
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                        explanation.style.display="none";
                        ShowExplanation.style.display="none";
                        ShowCorrect.style.display="block";
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Vége a quiznek! "
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.innerHTML="Újra!";
                        explanation.style.display="none";
                        ShowExplanation.style.display="none";
                        ShowCorrect.style.display="none"
                        this.index = 0-1
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                    ShowExplanation.style.display="none";

                 },

                 showExplanation:function(){
                    explanation.style.display="block";
                    explanation.innerHTML=this.questions[this.index].explanation
                    ShowExplanation.style.display="none"
                 },

                 hideExplanation:function(){
                    explanation.style.display="none";
                 },

                 showExplanationButton:function(){
                  ShowExplanation.style.display="block";

                 },

                 showCorrect:function(){
                      switch (this.questions[this.index].answer) {
                          case 1:
                              op1.className="correct";
                              break;
                          case 2:
                              op2.className="correct";
                              break;
                          case 3:
                              op3.className="correct";
                              break;
                          case 4:
                              op4.className="correct";
                              break;
                   }
                   ShowCorrect.style.display="none"
                   ShowExplanation.style.display="block";


                 },

                check:function(ele){

                         var id=ele.id.split('');

                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Helyes!";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";

                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }

           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
                 app.showExplanationButton()
           }

         function  next(){
              app.next();
              app.clickAble();
              app.hideExplanation();

         }

         function  showCorrect(){
              app.showCorrect();
              app.notClickAble();
              app.showExplanationButton()

         }

         function  showExplanation(){
           app.showExplanation();

         }
