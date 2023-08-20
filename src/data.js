export const logos = {
  "Cleveland Browns":
    "https://cdn.freebiesupply.com/images/large/2x/cleveland-browns-logo-transparent.png",

  "Philadelphia Eagles":
    "https://cdn.freebiesupply.com/images/large/2x/philadelphia-eagles-logo-transparent.png",

  "Carolina Panthers":
    "https://cdn.freebiesupply.com/images/large/2x/carolina-panthers-logo-transparent.png",

  "New York Giants":
    "https://cdn.freebiesupply.com/images/large/2x/new-york-giants-logo-transparent.png",

  "Cincinnati Bengals":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/1024px-Cincinnati_Bengals_logo.svg.png",

  "Atlanta Falcons":
    "https://cdn.freebiesupply.com/images/large/2x/atlanta-falcons-logo-transparent.png",

  "Jacksonville Jaguars":
    "https://logos-world.net/wp-content/uploads/2020/05/Jacksonville-Jaguars-logo.png",

  "Detroit Lions":
    "https://cdn.freebiesupply.com/images/large/2x/detroit-lions-logo-transparent.png",

  "Miami Dolphins":
    "https://cdn.freebiesupply.com/images/large/2x/miami-dolphins-logo-transparent.png",

  "Houston Texans":
    "https://cdn.freebiesupply.com/images/large/2x/houston-texans-logo-transparent.png",
  "Buffalo Bills":
    "https://cdn.freebiesupply.com/images/large/2x/buffalo-bills-logo-transparent.png",

  "Pittsburgh Steelers":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/768px-Pittsburgh_Steelers_logo.svg.png",

  "Chicago Bears":
    "https://cdn.freebiesupply.com/images/large/2x/chicago-bears-logo-transparent.png",

  "Tampa Bay Buccaneers":
    "https://cdn.freebiesupply.com/images/large/2x/tampa-bay-buccaneers-logo-transparent.png",

  "New York Jets":
    "https://1000logos.net/wp-content/uploads/2017/03/New-York-Jets-Logo.png",

  "Tennessee Titans":
    "https://cdn.freebiesupply.com/images/large/2x/tennessee-titans-logo-transparent.png",

  "Minnesota Vikings":
    "https://1000logos.net/wp-content/uploads/2017/06/Minnesota-Vikings-Logo.png",

  "Kansas City Chiefs":
    "https://cdn.freebiesupply.com/images/large/2x/kansas-city-chiefs-logo-transparent.png",

  "Arizona Cardinals":
    "https://cdn.freebiesupply.com/images/large/2x/arizona-cardinals-logo-transparent.png",

  "New England Patriots":
    "https://assets.stickpng.com/images/580b585b2edbce24c47b2b3b.png",

  "Denver Broncos":
    "https://cdn.freebiesupply.com/images/large/2x/denver-broncos-logo-transparent.png",

  "Green Bay Packers":
    "https://cdn.freebiesupply.com/images/large/2x/green-bay-packers-logo-transparent.png",

  "San Francisco 49ers":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/460px-San_Francisco_49ers_logo.svg.png",

  "Las Vegas Raiders":
    "https://logodownload.org/wp-content/uploads/2020/09/las-vegas-raiders-logo-0.png",

  "Los Angeles Rams":
    "https://assets.stickpng.com/images/608968b9d598a5000448eaa2.png",

  "Dallas Cowboys":
    "https://www.freepnglogos.com/uploads/dallas-cowboys-logo-22.png",

  "Seattle Seahawks":
    "https://cdn.freebiesupply.com/images/large/2x/seattle-seahawks-logo-transparent.png",

  "New Orleans Saints":
    "https://cdn.freebiesupply.com/images/large/2x/new-orleans-saints-football-logo.png",

  "Los Angeles Chargers":
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Los_Angeles_Chargers_logo.svg/1280px-Los_Angeles_Chargers_logo.svg.png",

  "Baltimore Ravens":
    "https://cdn.freebiesupply.com/images/large/2x/baltimore-ravens-logo-transparent.png",
};

export const options = {
  method: "GET",
  url: "https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl_preseason/scores?daysFrom=3",
  // params: { daysFrom: "3" },
  headers: {
    "X-RapidAPI-Key": "f166cab252msh535a2b173fdd120p1a1e66jsn9e3264e6fe1c",
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};
