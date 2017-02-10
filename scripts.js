/*
Convert all text to uppercase
*/
function toUpper() {
  var textarea=document.getElementById("formtext");
  textarea.value=textarea.value.toLocaleUpperCase();
}

/*
Convert all text to lowercase
*/
function toLower() {
  var textarea=document.getElementById("formtext");
  textarea.value=textarea.value.toLocaleLowerCase();
}


/*
Capitalize the first letter of each sentence
*/
function capFirstOfSentence() {
  var textarea=document.getElementById("formtext");
  var words = textarea.value.split();
  for (var i = 0; i < words.length; i++){

  }
}


function wordFreq(){
  var freq = {};
  var textarea=document.getElementById("formtext");
  var words = textarea.value.toLocaleLowerCase().split(" ");
  for (var i=0; i<words.length;i++) {
      words[i]=words[i].replace(/[!?\.,;:]/,'');
      if (freq[words[i]]) {
         freq[words[i]]++;
      } else {
         freq[words[i]] = 1;
      }
  }
  document.getElementById("tablehead").innerHTML= "<tr><th>Word</th><th>Count</th></tr>";
  resultString="";
  Object.keys(freq).forEach(function(key) {
    resultString+="<tr>";
    resultString+="<td>"+key+"</td>";
    resultString+="<td>"+freq[key]+"</td>";
    resultString+="</tr>";
  });

  document.getElementById("tablebody").innerHTML=resultString;
  $("#freqtable").tablesorter();
}


function letterFreq(){
  var freq = {};
  var textarea=document.getElementById("formtext");
  var text = textarea.value.toLocaleLowerCase();
  for (var i=0; i<text.length;i++) {
      var character = text.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }
  document.getElementById("tablehead").innerHTML= "<tr><th>Letter</th><th>Count</th></tr>";
  resultString = "";
  Object.keys(freq).forEach(function(key) {
    resultString+="<tr>";
    resultString+="<td>"+key+"</td>";
    resultString+="<td>"+freq[key]+"</td>";
    resultString+="</tr>";
  });
  document.getElementById("tablebody").innerHTML=resultString;
  $("#freqtable").tablesorter();
}

function isEndPunct(character){
  var endpunct = ['!','.','?'];
  for (var i = 0; i<endpunct.length; i++){
    if (endpunct[i]==character) {
      return true;
    }
  }
  return false;
}

function singleSentences(){
  var textarea=document.getElementById("formtext");
  var text = textarea.value;
  var startPos=0;
  result="";
  for (var i = 0; i < text.length; i++){
    if (isEndPunct(text.charAt(i))) {
      while (i < text.length && isEndPunct(text.charAt(i))) {
        i++;
      }
      result+=text.substring(startPos,i+1)+"\n";
      startPos=i+1;
    }
  }
  textarea.value = result;
}

function removePunctuation() {
  var textarea=document.getElementById("formtext");
  var text = textarea.value;
  textarea.value = text.replace(/[!\.,]/,'');

}


function uselessFunction() {

}
