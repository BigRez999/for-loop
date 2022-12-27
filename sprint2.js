function isGreaterThan10(number) {

    if (number>10) {
        return true
    }
   return false
    }

    function isLessThan30(number) {

       if (number<30){
        return true
       }
       return false
       }

       function isEqualTo10(number) {

        if (number===10) {
            return true
        }
        return false
         }

         function isGreaterOrEqualTo15(number) { 
            if (number>=15) {
                return true
            }
                return false
            
            }

            function isLessOrEqualTo8(num1) { 

                if (num1<=8){
                    return true}
                    return false;
                
                }

                function isLessThan(num1, num2) {

                    if (num1<num2){
                        return true;}
                        return false;
                    }
                    
                    function isOldEnoughToDrive(age) {

                        if (age <= 18){
                          return  false;}
                            return true;
                        }

                        function isValidPassword(password) {

                            if(password.length >= 8) {
                                return true
                            }
                               return false
                           
                            }

                            function longerString(string1, string2) {
                                if (string1.length<string2.length){
                                    return string2}
                                if (string2.length< string1.length){
                                    return string1;}
                                return "both";}

                                function opposite(boolean) {

                                    if (boolean===true){
                                        return false;}
                                    return true}

                                    function rectAreaGreaterThan50(length, width) {

                                        if(length*width>=50){
                                            return true;}
                                        return false;
                                    
                                     } 

                                     function budgetStatus(number) { 
            
                                            if(number >= 250 ){
                                                return "over budget";}
                                            return "under budget";}

                                     
                                            function capitalize(food){
                                                return food[0].toUpperCase() + food.slice(1)
                                            }

                                            function greaterThan5(num1, num2) {
                                                if (num1>5 || num2>5){
                                             return (true)}
                                             else {return (false)}
 
                                             function largerThan5AndLessThan20(number) {
                                                if (number>5 && number<20) {
                                                    return true}
                                                  return false
                                              }  

                                              function not6AndLessThan10(number) {
                                                if (number!==6 && number<10) {
                                                    return true}
                                                  return false
                                              }  

                                              function largerThan3AndLessThan18(num1, num2, num3) {
                                                if (num1>3 && num1<18)
                                                if (num2>3 && num2<18)
                                                if (num3>3 && num3<18){
                                                 return true}
                                                 return false

                                                 function cloudyAndRainy(string1, string2) {
                                                    if((string1==='cloudy') && (string2==='rainy')){
                                                        return true } 
                                                     return false
                                                 }

                                                 function weatherActivities(weather) {
                                                    if (weather==='rainy') {
                                                        return "hot chocolate"}
                                                     else if (weather==='sunny'){
                                                         return 'going to the beach'}
                                                     else if (weather==='cold'){
                                                         return 'sleep'}
                                                     else return 'jogging'
                                                 }  

                                                 function evenAndGreaterThan7(number) {
                                                    if (number %2===0 && number>7){
                                                        return true}
                                                     return false
                                                 }  

                                                 function findMaxLengthOfThreeWords(string1, string2, string3) {
                                                    if(string1.length>=string2.length && string1.length>=string3.length) {
                                                        return string1.length}
                                                        else if(string2.length>=string1.length && string2.length>=string3.length){
                                                            return string2.length}
                                                     else if (string3.length>=string1.length && string3.length>=string2.length){
                                                         return string3.length}
                                                     return string3.length
                                                     
                                                 }  

                                                 function findMinLengthOfThreeWords(string1, string2, string3) {
                                                    if(string1.length<=string2.length && string1.length<=string3.length) {
                                                        return string1.length}
                                                        else if(string2.length<=string1.length && string2.length<=string3.length){
                                                            return string2.length}
                                                     else if (string3.length<=string1.length && string3.length<=string2.length){
                                                         return string3.length}
                                                     return string3.length
                                                     
                                                 }  function or(statement1, statement2) {
                                                    if (statement1===false && statement2===false){
                                                        return false}
                                                    else if (statement1===true && statement1===true){
                                                        return true}
                                                     else if (statement1===true && statement2===false)
                                                     {return (true)}
                                                     else if (statement1===false && statement2===true)
                                                     {return true}
                                                 }  

                                                 function mathRandom (num) {
                                           
                                                    return Math.floor(Math.random(0)*6)
                                                                                              return "good"
                                                                                              return 'not good'
                                           }

                                           function mathRandom (num) {
                                           
                                            console.log(Math.floor(Math.random(0)*6))
                                                if(num<=5 && num>=0){ 
                                                                                      return "good"}
                                                                                      else return 'not good'
                                   }

                                   function counter(){
                                    return x=x+1
                                }

                                function guessMyNumber(n) { 
                                    if (n > upperBound) { 
                                    console.log ('Out of bounds! Please try a number between 0 and 5.')
                                        console.log(upperBound); 
                                    } else if (n ===upperBound) { 
                                    return 'You guessed my number!'; 
                                    } 
                                   console.log('Nope! That wasn\'t it! ')
                                       console.log(upperBound); 
                                    } 
                                    function randInt(n) { 
                                    return Math.floor(Math.random() * (n + 1)) 
                                    }

                                    var counter = 0
 var x = 20
function resetCounter () {
    counter = 0;
}
function count () {
    counter++
    return counter
}
//version 0.1
function guessMyNumber (n) {
    count(); // count everytime i call the function
      var temp = counter
    if (n>x) {
        return 'out of bounds try a number between 0 and  ' + x
    }
    else if (n=== correctAnswer) {
        // insde the if condtion
        if(counter === 1) {
            resetCounter()
            return "Congrats you guessed the number from the first try"
        }
        else {
            resetCounter()
            return "You guessed the number in " + temp + " tries"
        }
        // insde the if condtion
    }
    else {
        return "keep trying ..."
    }
}
// version 0.2
function guessMyNumber (n) {
  var temp = counter;
    if (n>x) {
        return 'out of bounds try a number between 0 and  ' + x
    }
else {
    count(); // count everytime i call the function
    if (n=== correctAnswer) {
        // insde the if condtion
        if(counter === 1) {
            resetCounter()
            return "Congrats you guessed the number from the first try"
        }
        else {
            resetCounter()
            return "You guessed the number in " + temp + " tries"
        }
        // insde the if condtion
    }
    else {
        return "keep trying ..."
    }
}
}function randInt(n) { 
    return Math.floor(Math.random() * (n + 1))
   }

   
   function repeatString(string, num) {
    var result = ""
     while (num>0) {
         result = result+string
         num=num-1
     }
     return result
 }  
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
 function countMinMax(min, max) {
    var result=0
    
    while (min<max){
        console.log(result);
            
                result=result+1
            
            
            min=min+1
        }
    return result
}
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function sumMinToMax(num1, num2) {
    var result = 0
    while (num1<num2)
        {
        result=result+num1
            num1++
        }
    return result
}
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function productMinToMax(num1, num2) {
    var result = 1
    while (num1<num2)
        {
        result=result*num1
            num1++
        }
    return result
}
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function multiplyBy10NTimes(num, n) {
    var result = num
    while (n>0)
        {
        result=result*10
            n--
        }
    return result
}
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function countCharAtIndex(str1, i, str2) {
    var result=""
    var c=0
    var rep=0
    while(c<str2.length){
if(str1.charAt(i)===str2.charAt(c)){rep++}

        c++
    }
    return rep
}


