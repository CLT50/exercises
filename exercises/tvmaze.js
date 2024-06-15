const genericImageUrl = "https://tinyurl.com/missing-tv";
const TtvMazeApiUrl = "http://api.tvmaze.com/";

const $showsList = $("#showsList");
const $episodesList = $("#episodesList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");


async function getShowsByTerm(term) {    //Given a search term, search for tv shows that match that query.
  const response = await axios({
    baseURL: tvMazeApyUrl,
    url: "search/shows",
    method: "GET",
    params: {
      q: term,
    },
  });

  return response.data.map(result => {   //Returns (promise) array of show objects: [show, show, ...].
    const show = result.show;            // Each show object should contain exactly: {id, name, summary, image}
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : MISSING_IMAGE_URL,  //if no image URL given by API, put in a default image URL
    };
  });
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();              //each show with id, image, name and summary will be added to empty showlist

  for (let show of shows) {
    const $show = $(`
        <div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
           <div class="media">
             <img src="${show.image}" alt="${show.name}" class="w-25 me-3">
             <div class="media-body">
               <h5 class="text-primary">${show.name}</h5>
               <div><small>${show.summary}</small></div>
               <button class="btn btn-outline-light btn-sm Show-getEpisodes">
                 Episodes
               </button>
             </div>
           </div>
        </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {   //searched show will be displayed
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();         //episode area stays hidden until show is searched and displayed             
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  const response = await axios({
    baseURL: tvMazeApiUrl,
    url: `shows/${id}/episodes`,
    method: "GET",
  });

  return response.data.map(epi => ({
    id: epi.id,
    name: epi.name,
    season: epi.season,
    number: epi.number,
  }));
}


/** Given list of episodes, create markup for each and to DOM */

function populateEpisodes(episodes) {      //loop episodes and each episode will be added to empty episode list showing name, season and number
  $episodesList.empty();

  for (let episode of episodes) {
    const $item = $(
      `<li>
         ${episode.name}
         (season ${episode.season}, episode ${episode.number})
       </li>
      `);

    $episodesList.append($item);
  }

  $episodesArea.show();
}


/** Handle click on episodes button: get episodes for show and display */

async function getEpisodesAndDisplay(evt) {
  
  const episodes = await getEpisodesOfShow(showId);
  populateEpisodes(episodes);
}

$showsList.on("click", ".Show-getEpisodes", getEpisodesAndDisplay