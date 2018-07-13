import { Component } from '@angular/core';
declare function require(path: string);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = ''
  message = ''
  imageSrc = require('../assets/reddit.png');


valid_checking(address: string){
		if(address.length < 1 || address.length == 7)
		{
			alert("Please follow the instruction");
		}
		if(address.includes("www.reddit.com/r/") == false)
		{
			alert("please type the subreddit url")
		}
		

		if(address.includes("https://www.reddit.com/r/") == true)
		{
			if(address.substring(address.length-1) == "/")
			{
    
     			address = address.slice(25,-1);
     		}
     		else{
     			address = address.slice(25)

     		}
     		// goWeb(address);
		}
		if(address.includes("http://www.reddit.com/r/") ==true)
		{
			if(address.substring(address.length-1) == "/")
			{
    
     			address = address.slice(24,-1);
     		}
     		else{
     			address = address.slice(24)

     		}
     		// goWeb(address);
		}
		if(address.includes("www.reddit.com/r/") == true)
		{
			if(address.substring(address.length-1) == "/")
			{
    
     			address = address.slice(17,-1);
     		}
     		else{
     			address = address.slice(17);
     		}
     	}
     		// goWeb(address);
			address = "https://www.reddit.com/r/" + address +"/new.json?sort=new"
			// console.log(webpage);
			var req = new XMLHttpRequest();  
			req.open('GET', address, false);   
			req.send();
			var myJSON = JSON.parse(req.responseText);
			console.log(myJSON);
			this.title = (myJSON.data.children["0"].data.title);


			// var result1 = document.getElementById('tit');
			// var result2 = document.getElementById('tex');

			// result1.innerHTML = title;

			if (myJSON.data.children["0"].data.selftext == "")
			{
				var text = (myJSON.data.children["0"].data.url);
				// result2.innerHTML ="opened new window due to url" + text;
				// new_window(text);
				this.message = "opened new window due to url" + text;
    			window.open(text, "_blank");
			
			}
			else
			{
				var text = (myJSON.data.children["0"].data.selftext);

				// result2.innerHTML = text;
				this.message = text;

			}	
			}


}
