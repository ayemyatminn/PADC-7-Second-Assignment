
    /*
      *
    * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
    * and array methods join()
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    */

    const name = "AlbERt eINstEiN";

    function nameFormatter(oldName) {  
      var str = 'AlbERt eINstEiN';

      var word1 = str.split(' ');
      var one = word1[0];
      var two = word1[1];

      var a = one.slice(0,-5).toUpperCase();
      var alast= one.slice(-5).toLowerCase();
      var res1 = a.concat(alast);


      var e = two.slice(0,-7).toUpperCase();
      var elast = two.slice(-7).toLowerCase();
      var res2 = e.concat(elast);
      var oldName = [res1,res2];
      console.log(oldName.join(' '));    
      /* 
        Split the string by space
        Slice the first character and make it uppercase
        Slice the reset of the characters and make it lowercase
        Join the splitted array with space to get the final result
        Final result should be "Albert Einstein"                
        */
        return oldName;
    }
    console.log(nameFormatter(name));