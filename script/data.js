var LEVEL_PROFICIENT = 'proficient'
var LEVEL_FAMILIAR = 'familiar'
var LEVEL_BPROFICIENT = 'beyond_proficient'



var recentWork = [
    {
        id:"NEWSBOT",
        href:"",
        forward:"HACKATHON / NLP / ML",
        timestamp:"FALL 2015",
        title:"Newsbot",
        description:"News scraping for charity orgs. American Express Case Winner",
        img:'images/newsbot.gif'
    },
    {
        id:"MONEY",
        href:"https://moneypls.herokuapp.com/",
        forward:"HACKATHON / DJANGO / DATABASE APP / FRONT-END DESIGN",
        timestamp:"SPRING 2015",
        title:"MONEY PLS",
        description:"Crowdfunding made easy! Microsoft Best Use of Azure"
    },
    {
        id:"APT",
        href:"http://predictivetechnologies.com",
        forward:"INTERNSHIP / RELATIONAL DATABASE / SQL",
        timestamp:"SUMMER 2015",
        title:"Applied Predictive Technologies",
        description:"SQL all day long + maps!",
        img:'images/apt.gif',
        invert: true
    },
    {
        id:"CHESS",
        href:"http://chesscademy.com/",
        forward:"ICON DESIGN / VECTOR ART",
        timestamp:"2014-2015",
        title:"Chesscademy Icons",
        description:"Check out these rad icons!"
    },
    {
        id:"PIZZA",
        href:"http://pizzaplz.net46.net",
        forward:"HACKATHON / JAVASCRIPT / PHP",
        timestamp:"FALL 2014",
        title:"Pizza PLZ",
        description:"Order pizza at the click of a button (a HackCMU honorable mention)",
        img:'images/pizza.gif',
        invert: true
    },
    {
        id:"NECLABS",
        href:"http://optdemo.nec-labs.com",
        forward:"INTERNSHIP / SPECTROSCOPY / C",
        timestamp:"SUMMER 2014",
        title:"NEC Labs America",
        description:"Real-time gas sensing using mid-infrared lasers",
        img:'images/nec.gif',
        invert:true
    },
    {
        id:"SPACE",
        href:"https://www.youtube.com/watch?v=11A2CCgzYOg",
        forward:"COMPUTER SCIENCE / TERM PROJECT / PYTHON / PYGAME",
        timestamp:"FALL 2013",
        title:"Space Invaders",
        description:"Real Time Strategy game with realistic physics and lots of laserbeams and spaceships",
        img:'images/space.gif',
        invert:true
    },
];

var skills = [
    {
        id:'C',
        title:'C',
        group:'tb',
        level:LEVEL_PROFICIENT
    },
    {
        id:'PYTHON',
        title:'Python',
        group:'tb',
        level:LEVEL_PROFICIENT 
    },
    {
        id:'C#',
        title:'C#/.NET Framework',
        group:'tb',
        level:LEVEL_FAMILIAR
    },
    {
        id:'SQL',
        title:'MySQL/SQLServer',
        group:'tb',
        level:LEVEL_FAMILIAR
    },
    {
        id:'HTML',
        title:'HTML/CSS/JavaScript',
        group:'tb',
        level:LEVEL_FAMILIAR   
    },
    {
        id:'PHOTO',
        title:'Adobe Photoshop',
        group:'ds',
        level:LEVEL_PROFICIENT 
    },
    {
        id:'ILLUSTRATOR',
        title:'Adobe Illustrator',
        group:'ds',
        level:LEVEL_PROFICIENT   
    },
    {
        id:'STYLE',
        title:'Impeccable Style',
        group:'ds',
        level:LEVEL_BPROFICIENT 
    },
]

function skillLevelToTitle(level){
    switch(level){
        case LEVEL_FAMILIAR:
            return 'Familiar with';
        case LEVEL_PROFICIENT:
            return 'Proficient';
        case LEVEL_BPROFICIENT:
            return 'BEYOND PROFICIENT!!';
        default:
            return 'Unrecognized level ID: ' + level;
    }
}
