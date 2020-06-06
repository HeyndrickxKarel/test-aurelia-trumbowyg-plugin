export class App {
  public content: string = "<h1>Hi!</h1>";
  public editorConfig: any = {
    btns: [
      ["undo", "redo"],
      ["h1", "h2", "h3", "h4", "h5", "p"],
      ["bold", "italic", "underline"],
      ["mention"],
      ["fullscreen"],
    ],
    // plugins: {
    //   mention: {
    //     source: [
    //       {
    //         login: "jdoe",
    //         name: "John Doe (The Jean-Claude Van Damme's intern)",
    //       },
    //       { login: "lgaga", name: "Lady Gaga" },
    //       { login: "jcvd", name: "Jean-Claude Van Damme" },
    //       { login: "nminaj", name: "Nicki Minaj" },
    //       { login: "mshinoda", name: "Mike Shinoda" },
    //       { login: "epiaf", name: "Edith Piaf" },
    //       { login: "kwest", name: "Kanye West" },
    //       { login: "jbalasko", name: "Josiane Balasko" },
    //       { login: "jcesar", name: "Julius Cesarius" },
    //       { login: "mlisa", name: "Mona Lisa" },
    //       { login: "mjackson", name: "Mickael Jackson" },
    //       { login: "fflament", name: "Flavie Flament" },
    //     ],
    //     formatDropdownItem: function (item) {
    //       return item.name + " (@" + item.login + ")";
    //     },
    //   },
    // },
  };
}
