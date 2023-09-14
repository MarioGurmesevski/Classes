const { informSubscribersOfNewSongs } = require("./songs.service");
const { sendEmail } = require("./email.service");
const { log } = require("./logger.service");

jest.mock("./email.service", () => ({
  sendEmail: jest.fn(),
}));

jest.mock("./songs.service", () => ({
  informSubscribersOfNewSongs: jest.fn(),
}));

jest.mock("./logger.service", () => ({
  log: jest.fn(),
}));

describe("METHOD informSubscribersOfNewSongs", () => {
  it("should throw an error when there are no song or subscribers", () => {
    expect(() => informSubscribersOfNewSongs([{}])).toThrow(Error);
    expect(() =>
      informSubscribersOfNewSongs(undefined, [{}, {}])
    ).toThrow(Error);
  });

  it("should log when there are no rap songs", () => {
    const popSong = {
      id: 1,
      genre: "pop",
    };
    const subscriberToPop = {
      id: 1,
      name: "John",
      genres: ["pop"],
    };

    informSubscribersOfNewSongs([popSong], [subscriberToPop]);

    expect(log).toHaveBeenCalledTimes(2);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("should notify rap subscribers", () => {
    const rapSong = {
      id: 1,
      genre: "rap",
    };
    const folkSong = {
      id: 1,
      genre: "folk",
    };

    const mike = {
      id: 1,
      genres: ["rap"],
    };

    const jack = {
      id: 2,
      genres: ["rap", "folk"],
    };

    const jane = {
      id: 2,
      genres: ["rock"],
    };

    informSubscribersOfNewSongs(
      [rapSong, folkSong],
      [mike, jack, jane]
    );

    expect(log).not.toHaveBeenCalled();
    expect(sendEmail).toHaveBeenCalledTimes(2);
  });
});
