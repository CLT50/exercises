const $gifCanvas = $("#gif-canvas");  //canvas where added gifs will show
const $searchInput = $("#search");    //search box where you can search keyword related gif.

/* use ajax result to add a gif */

function addGif(res) {                //function to add gif into canvas
  let results = res.data.length;      
  if (results) {
    let randomIdx = Math.floor(Math.random() * results);   //random index from search list
    let $newDiv = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newDiv.append($newGif);
    $gifCanvas.append($newDiv);      //random gif will be chosen and will append to div and that div will be appended to gif canvas
  }
}

/* handle form submission: clear search box & make ajax call */

$("form").on("submit", async function(e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();   
  $searchInput.val("");                //empty input box after each search

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"   //return gif based on the input keyword from giphy API
    }
  });
  addGif(response.data);
});

/* remove gif */

$("#remove").on("click", function() {
  $gifCanvas.remove();
});
​

