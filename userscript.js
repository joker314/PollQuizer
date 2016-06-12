var postsNumbers = document.getElementsByClassName("roweven");
var postsURL = [];
var posts = [];
for(var i = 0; i < postsNumbers.length; i++){
  postsURL.push("https://scratch.mit.edu/discuss/post/" + postsNumbers[i].id.substring(1) + "/source");
}
var x = [];
var ready = [];
for(var i = 0; i < postsURL.length; i++){
  var x.push = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.readyState == 4 && x.status == 200){
      posts.push(x.responseText);
    }
  }
  x.open("GET", postsURL[i]);
  x.send();
}
console.log(posts);

