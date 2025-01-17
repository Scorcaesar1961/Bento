// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Caesar",
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Gomorron!",
  greetingAfternoon: "Go'eftermiddag,",
  greetingEvening: "Gokväll,",
  greetingNight: "Gå å lägg dig!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "3330a1c39ae0abfc4d4cde41f2a29984", // Write here your API Key
  weatherIcons: "Nord", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi
  weatherLatitude: "56.877",
  weatherLongitude: "14.831",

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "56.877",
  defaultLongitude: "14.831",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: "20:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Letterboxd",
      icon: "clapperboard",
      link: "https://letterboxd.com/cpizzignacco/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "send",
      link: "https://mail.proton.me/u/0/inbox",
    },
    {
      id: "3",
      name: "Youtube",
      icon: "youtube",
      link: "https://www.youtube.com/feed/subscriptions",
    },
    {
      id: "4",
      name: "Reddit",
      icon: "glasses",
      link: "https://www.reddit.com/",
    },
    {
      id: "5",
      name: "Twitch",
      icon: "twitch",
      link: "https://www.twitch.tv/directory/following",
    },
    {
      id: "6",
      name: "MoS",
      icon: "home",
      link: "https://mickiofsweden.com/sv/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "cat",
      id: "1",
      links: [
        {
          name: "Anilist",
          link: "https://anilist.co/user/Scorcaesar/",
        },
        {
          name: "Kenmei",
          link: "https://www.kenmei.co/dashboard",
        },
        {
          name: "Mangafire",
          link: "https://mangafire.to/home",
        },
        {
          name: "Animix",
          link: "https://animixplay.to/",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Mailchimp",
          link: "https://us14.admin.mailchimp.com/campaigns/#f_assigned:unassigned;f_list:480041;t:campaigns-list",
        },
        {
          name: "B2B",
          link: "https://b2b.micki.se/products/start",
        },
        {
          name: "Buffer",
          link: "https://publish.buffer.com/profile/603f7afa36df5c1cb9721125/tab/queue",
        },
        {
          name: "Contentor",
          link: "https://app.contentor.com/a/contentor/default.aspx?x=&y=1",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com",
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila",
        },
      ],
    },
  ],
};
