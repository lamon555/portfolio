const anime = [
     {
        genre : "horror" ,
        name : "Akame ga kill",
        ep :  12  ,
    },
  
  {
        genre : "Sloce of life  " ,
        name : " Dororo ",
        ep: 12 ,
  },
  {
        genre : "action " ,
        name :  "One piece",
        ep: 12 ,
  },
  {
        genre : "Romance" ,
        name :  "Horimiya",
        ep: 12 ,
  },
]
const data = anime 
    .map(
        (item) =>
        `<div class = "card" >
        <h3>${item.genre}</h3>
        <br/>
        <h3>${item.name}</h3>
        <br/>  <h3>${item.ep}</h3>
        <br/>`
    )
.join(""); 
document.getElementById("card").innerHTML = data