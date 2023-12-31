const COHORT = "2309-FTB-ET-WEB-FT";
const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/';

const state = {
  artists: [],
};

const artistList = document.querySelector("#artists");

const addArtistForm = document.querySelector("#addArtist");
addArtistForm.addEventListener("submit", addArtist);

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getArtists();
  renderArtists();
}
render();

/**
 * Update state with artists from API
 */
async function getArtists() {
    try {
        const response= await fetch(API_URL);
        const json= await response.json;
        state.artists=json.data;
    }
    catch (error){
        console.error(error)
    }
  // TODO
}

/**
 * Render artists from state
 */
function renderArtists() {
  // TODO
}

/**
 * Ask the API to create a new artist based on form data
 * @param {Event} event
 */
function addArtist(event) {
  event.preventDefault();
}
  // TODO