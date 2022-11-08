const fetch = require("node-fetch");

const movieReviewsContoller = async (req, response) => {
  const { id } = await req.params;
  const url = `https://yts.torrentbay.to/api/v2/movie_suggestions.json?movie_id=${id}`;
  if (id) {
    get_data(url, response);
  } else {
    response.send({
      message: 'No id provided'
    })
  }
};

const get_data = async (url, res) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (json.status != "ok") return;
    res.send({
      message: json.status_message,
      data: json.data,
    });
  } catch (error) {
    res.send({
      message: error.message
    })
  }
};

module.exports = movieReviewsContoller;
