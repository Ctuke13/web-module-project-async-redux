export const logos = {
  "Cleveland Browns":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2003-2007_Browns_Script.PNG/640px-2003-2007_Browns_Script.PNG",

  "Indianapolis Colts":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/640px-Indianapolis_Colts_logo.svg.png",

  "Philadelphia Eagles":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Philadelphia_Eagles_wordmark.svg/640px-Philadelphia_Eagles_wordmark.svg.png",

  "Carolina Panthers":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Carolina_Panthers_wordmark.svg/640px-Carolina_Panthers_wordmark.svg.png",

  "Washington Commanders":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Washington_Football_Team_logo.png/640px-Washington_Football_Team_logo.png",

  "New York Giants":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/193px-New_York_Giants_logo.svg.png?20170830032113",

  "Cincinnati Bengals":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/1024px-Cincinnati_Bengals_logo.svg.png",

  "Atlanta Falcons":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/UBX_Atlanta_Falcons.png/640px-UBX_Atlanta_Falcons.png",

  "Jacksonville Jaguars":
    "https://logos-world.net/wp-content/uploads/2020/05/Jacksonville-Jaguars-logo.png",

  "Detroit Lions":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Detroit_Lions_old_wordmark.png/640px-Detroit_Lions_old_wordmark.png",

  "Miami Dolphins":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Miami_Dolphins_first_1997_wordmark.png/640px-Miami_Dolphins_first_1997_wordmark.png",

  "Houston Texans":
    "https://logos-world.net/wp-content/uploads/2020/05/Houston-Texans-emblem.jpg",
  "Buffalo Bills":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Buffalo_Bills_classic_logo.svg/640px-Buffalo_Bills_classic_logo.svg.png",

  "Pittsburgh Steelers":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/768px-Pittsburgh_Steelers_logo.svg.png",

  "Chicago Bears":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicago_Bears_logo.svg/640px-Chicago_Bears_logo.svg.png",

  "Tampa Bay Buccaneers":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Buccaneers_wordmark_2014.png/640px-Buccaneers_wordmark_2014.png",

  "New York Jets":
    "https://1000logos.net/wp-content/uploads/2017/03/New-York-Jets-Logo.png",

  "Tennessee Titans":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Tennessee_Titans_wordmark%2C_2018.svg/640px-Tennessee_Titans_wordmark%2C_2018.svg.png",

  "Minnesota Vikings":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Minnesota_Vikings_wordmark.svg/640px-Minnesota_Vikings_wordmark.svg.png",

  "Kansas City Chiefs":
    "https://upload.wikimedia.org/wikipedia/sr/thumb/e/e1/Kansas_City_Chiefs_logo.svg/1200px-Kansas_City_Chiefs_logo.svg.png",

  "Arizona Cardinals":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Arizona_Cardinals_wordmark.svg/640px-Arizona_Cardinals_wordmark.svg.png",

  "New England Patriots":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/New_England_Patriots_NE_logo.png/640px-New_England_Patriots_NE_logo.png",

  "Denver Broncos":
    "https://www.nicepng.com/png/detail/890-8905195_denver-broncos-clipart-png-denver-broncos.png",

  "Green Bay Packers":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/640px-Green_Bay_Packers_logo.svg.png",

  "San Francisco 49ers":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/460px-San_Francisco_49ers_logo.svg.png",

  "Las Vegas Raiders":
    "https://logodownload.org/wp-content/uploads/2020/09/las-vegas-raiders-logo-0.png",

  "Los Angeles Rams":
    "https://1000logos.net/wp-content/uploads/2018/07/logo-Los-Angeles-Rams.png",

  "Dallas Cowboys":
    "https://www.freepnglogos.com/uploads/dallas-cowboys-logo-22.png",

  "Seattle Seahawks":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/UBX_Seattle_Seahawks.png/640px-UBX_Seattle_Seahawks.png",

  "New Orleans Saints":
    "https://logos-world.net/wp-content/uploads/2020/05/New-Orleans-Saints-Logo-2002-2011.png",

  "Los Angeles Chargers":
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Los_Angeles_Chargers_logo.svg/1280px-Los_Angeles_Chargers_logo.svg.png",

  "Baltimore Ravens":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Baltimore_Ravens_B.png/640px-Baltimore_Ravens_B.png",
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
