        var score=10
        var num=(Math.floor(Math.random()*10+1))
        console.log(num)
        function check() {
            var guesstag=document.getElementById("guess")
            var guessval=guesstag.value
            var resulttag=document.getElementById("result")
            if(num==Number(guessval)){                           
                 resulttag.textContent="you won at score:"+score
                 var body=document.getElementById("body")
                 body.style.backgroundColor="green"
                 alert("you won!!!")
                 return
                 
            }
            if(score==0)
               {
                      alert("game over!!!")
                        var body=document.getElementById("body")
                        body.style.backgroundColor="red"
                      resulttag.textContent="Game Over!!! thanks for playing"
                      return
               }
            else{
            
                score=score-1
                resulttag.textContent="score"+score
                var body=document.getElementById("body")
                body.style.backgroundColor="yellow"
            }

        }
