const GlobalConfigs = {
  pageTitle: "Azino777",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://hloma.top",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://hloma.top"},
    {
      icon: 'list', text: 'Новости',
      url: "http://hloma.top", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://hloma.top"},
    {
      icon: 'info', text: 'О нас',
      url: "http://hloma.top"
    },
    {
      icon: 'mail', text: 'Задать вопрос',
      url: "http://hloma.top"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "deep-purple darken-2", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



