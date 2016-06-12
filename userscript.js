var postsNumbers = document.getElementsByClassName("roweven");
var postsURL = [];
var posts = [];
for(var i = 0; i < postsNumbers.length; i++){
  postsURL.push("https://scratch.mit.edu/discuss/posts/" + postsNumbers[i].id.substring(1) + "/source");
}
for(var i = 0; i < postsURL.length; i++){
  var x = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.readyState == 4 && x.status == 200){
      posts.push(x.responseText);
    }
  }
  x.open(postsURL[i]);
  x.send();
}

