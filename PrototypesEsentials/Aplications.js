(function() {
  function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }

  App.prototype.isCCLicence = function() {
    if (this.licence == "CCLicence") {
      return true;
    }
    return false;
  };
  App.prototype.like = function() {
    this.stars++;
  };
  App.prototype.showStars = function() {
    return this.stars;
  };

  function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);

    this.url = url;
    this.technologies = technologies;
  }

  WebApp.prototype = Object.create(App.prototype);
  WebApp.prototype.constructor = WebApp;

  WebApp.prototype.getData = function() {
    return (
      this.name +
      " " +
      this.url +
      " " +
      this.technologies +
      " " +
      this.licence +
      " " +
      this.stars
    );
  };

  WebApp.prototype.reactBased = function() {
    for (var i = 0; i < this.technologies.length; i++) {
      if (this.technologies[i] == "React") {
        return true;
      }
      return false;
    }
  };

  function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);

    this.platforms = platforms;
  }

  MobileApp.prototype = Object.create(App.prototype);
  MobileApp.prototype.constructor = MobileApp;

  MobileApp.prototype.getData = function() {
    //   var appPrototype = Object.getPrototypeOf(Mobile.prototype);
    //   var nameLicencestars = appPrototype.getData.call(this);
    return (
      this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars
    );
  };

  MobileApp.prototype.forAndroid = function() {
    for (var i = 0; i < this.platforms.length; i++) {
      if (this.platforms[i] == "Android") {
        return true;
      }
      return false;
    }
  };

  var app1 = new App("trelo", "CCLicence", 4);

  var mobileApp1 = new MobileApp(
    "mobGame",
    ["ios", "android", "windows"],
    "GGLicence",
    3
  );

  var webApp1 = new WebApp(
    "webGame",
    "www.webApp.com",
    ["js", "React", "css"],
    "CCLicence",
    2
  );

  console.log(app1);
  console.log(mobileApp1.getData());
  console.log(webApp1.reactBased());
})();
