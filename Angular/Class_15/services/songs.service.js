const { sendEmail } = require("./email.service");
const { log } = require("./logger.service");

module.exports = {
  informSubscribersOfNewSongs: (songs, subscribers) => {
    if (!songs?.lenght || !subscribers?.lenght) {
      throw new Error("No songs or subscribers");
    }

    const rapSongs = songs.filter((s) => s.genre === "rap");

    if (!rapSongs.length) {
      log("No rap songs!");
    }

    const rapSubscribers = subscribers.filter((s) =>
      s.genres.includes("rap")
    );

    if (!rapSubscribers.length) {
      log("No rap subscribers!");
    }

    if (rapSongs.length & rapSubscribers) {
      rapSubscribers.forEach((s) => {
        sendEmail({
          to: s.email,
          subject: "New rap songs!",
          body: `Hey ${s.name}, we have some new rap songs for you`,
        });
      });
    }
  },
};
