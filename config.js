// This is the configuration file for Kanji startpage. Basic settings are here.

var data = {

    // -------------------------------------------------
    // Greetings config. Change greetings from here

    g1: "お や す み な さ い", // From 23:00 to 5:00
    g2: "お は よ う ご ざ い ま す", // Until 12:00
    g3: "こ ん に ち は", // Until 17:00
    g4: "こ ん ば ん わ", // Rest of the time

    // Font size of the greeting
    greeting_fontsize: "40px",
    // Foreground color of the greeting
    greeting_fgcolor: "#c849c3",

    // -------------------------------------------------
    // Clock config

    // Enable/disable clock
    clock: false,
    // Foreground color of the clock
    clock_fgcolor: "#79acf3",
    // Font size of the clock
    clock_fontsize: "20px",

    // -------------------------------------------------
    // Change image proprieties from here

    // Border radius: set it to 50% to create a circle
    image_radius: "0px",
    // Border for the image
    image_border: "2px",
    // Color of the border
    image_bordercolor: "#af1416",
    // Filters for the image.
    image_filter: "grayscale(20%) brightness(85%)",
    // Width/height for the image
    image_width: "300px",
    // Image source: you can use local files, or a link
    // Ex.: image_source: "/img/kanji.jpg"
    image_source: "https://raw.githubusercontent.com/Lavuan/startpage/main/img/nerv_outrun.jpg",

    // -------------------------------------------------
    // Enable/disable site icons
    enable_icons: false,
    links_hover: true,

    // -------------------------------------------------
    // Page title
    title: "NERV",

    // -------------------------------------------------
    // Change search bar proprietis from here
    // Search bar placeholder
    search_placeholder: "Looking for something?",
    // Search engine
    // Possible choices: (case sensitive)
    // google
    // duckduckgo
    // qwant
    // startpage
    // ecosia
    // youtube
    search_engine: "duckduckgo",

}
