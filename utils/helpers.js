const Youtube = require("youtube-node");
const youtube = new Youtube();
require('dotenv').config();
class Youtube_tool {
  constructor(query) {
    this.key = process.env.YTK;
    this.query = query;
  }

  async Video() {
    youtube.setKey(this.key);

    return new Promise((resolve, reject) => {
      youtube.search(this.query, 1, (error, result) => {
        if (error) {
          reject(error);
        } else {
          const videoId = result.items[0].id.videoId;
          resolve(videoId);
        }
      });
    });
  }
}

const nationalities = (country) => {
  switch (country) {
    case "Italy":
      return "Italian";

    case "Greece":
      return "Greek";
    case "Mexico":
      return "Mexican";
    case "France":
      return "French";
    case "Peru":
      return "Peruvian";
    case "Denmark":
      return "Danish";
    default:
      return;
  }
};

const fourOFourHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(404).render("404");
};

const compare = (a, b, options) => {
  console.log(a, b)
  if (a == b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

module.exports = { Youtube_tool, nationalities, fourOFourHandler, compare };
