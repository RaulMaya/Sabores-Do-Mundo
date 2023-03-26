const Youtube = require("youtube-node");
const youtube = new Youtube();

class Youtube_tool {
  constructor(query) {
    this.key = "AIzaSyD7f5jpMFMEwzc0YtBojAMT6Eq-t7v51hc";
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
          // const videoLink = "https://www.youtube.com/watch?v=" + videoId;
          resolve(videoId);
        }
      });
    });
  }
}

module.exports = { Youtube_tool };
