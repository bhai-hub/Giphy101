const form = document.querySelector(".frm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const keyWord = document.querySelector("#srch").value;
  

  const api =
    "https://api.giphy.com/v1/stickers/search?api_key=Q7qiUrK68v1HdkX0wr8NDjC2hb0mRcbo&q=" +
    keyWord +
    "&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Can't access");
      }

      return response.json();
    })
    .then((data) => {
      var appendDiv = document.querySelector('.results')
      appendDiv.innerHTML = ''
      for (let index = 0; index < data.data.length; index++) {

        var card = document.createElement("div");
        card.classList.add("card");


        if(!data.data[index].user){
            console.log("not found")
            card.innerHTML=`<img
        src="`+data.data[index].images.fixed_width_downsampled.url+`"
        alt="" class="gifs"/>
      <div class="userInfo">
        <img
          src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
          alt="" class="profileImg"/>
        <span>NaN</span>
      </div>`
        }
        else{
            card.innerHTML=`<img
        src="`+data.data[index].images.fixed_width_downsampled.url+`"
        alt="" class="gifs"/>
      <div class="userInfo">
        <img
          src="`+data.data[index].user.avatar_url+`"
          alt="" class="profileImg"/>
        <span ><a href="`+data.data[index].user.profile_url+`" class+"uName">`+data.data[index].username+`</a></span>
      </div>`
        }
        
        

        appendDiv.appendChild(card)
        
      }


    })
    .catch((error) => {
      console.error(error);
    });


    

        
});
