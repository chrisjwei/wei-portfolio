// DATA //
var recentWork = [
    {
        id:"NEWSBOT",
        href:"",
        forward:"HACKATHON / NLP / ML",
        timestamp:"FALL 2015",
        title:"Newsbot",
        description:"News scraping for charity orgs. American Express Case Winner"
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
        description:"SQL all day long + maps!"
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
        description:"Order pizza at the click of a button (a HackCMU honorable mention)"
    },
    {
        id:"NECLABS",
        href:"http://optdemo.nec-labs.com",
        forward:"INTERNSHIP / SPECTROSCOPY / C",
        timestamp:"SUMMER 2014",
        title:"NEC Labs America",
        description:"Real-time gas sensing using mid-infrared lasers"
    },
    {
        id:"SPACE",
        href:"https://www.youtube.com/watch?v=11A2CCgzYOg",
        forward:"COMPUTER SCIENCE / TERM PROJECT / PYTHON / PYGAME",
        timestamp:"FALL 2013",
        title:"Space Invaders",
        description:"Real Time Strategy game with realistic physics and lots of laserbeams and spaceships"
    },
];

var skills = [
    {
        id:'C',
        title:'C/C++',
        group:'tb',
        level:'proficient'
    },
    {
        id:'PYTHON',
        title:'Python',
        group:'tb',
        level:'proficient'   
    },
    {
        id:'C#',
        title:'C#/.NET Framework',
        group:'tb',
        level:'familiar' 
    },
    {
        id:'SQL',
        title:'MySQL/SQLServer',
        group:'tb',
        level:'familiar'    
    },
    {
        id:'HTML',
        title:'HTML/CSS/JavaScript',
        group:'tb',
        level:'familiar'    
    },
    {
        id:'PHOTO',
        title:'Adobe Photoshop',
        group:'ds',
        level:'proficient'    
    },
    {
        id:'ILLUSTRATOR',
        title:'Adobe Illustrator',
        group:'ds',
        level:'proficient'    
    },
    {
        id:'STYLE',
        title:'Impeccable Style',
        group:'ds',
        level:'beyond_proficient'    
    },
]


function drawRect(c,x0,y0,x1,y1){
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x0,y0,x1-x0,y1-y0);
}

function newTerrain(data,xi,yi,w){
    return
}

function drawBackdrop(c){
    var ctx = c.getContext("2d");
    ctx.clearRect (0,0,c.width,c.height);
    ctx.fillStyle = "#0f0f0f";
    ctx.fillRect(0,0,c.width,c.height);
}

function canvasUpdateAll(c,data){
    var currentTime = (new Date()).getTime();
    var dt = currentTime-data.lastTime;
    data.lastTime = currentTime;
    data.objArray.forEach(function(obj){
        obj.update(dt);
    });
    
}

function canvasDrawAll(c,data){
    drawBackdrop(c);
    data.objArray.forEach(function(obj){
        obj.draw(c);
    });
}

function canvasTimerFired(c,data){
    setTimeout(function() {

        canvasUpdateAll(c,data);
        canvasDrawAll(c,data);
        canvasTimerFired(c,data);
    }, 17);
}

function canvasInit(c,data){
    c.width = window.innerWidth-17;
    c.height = Math.max(window.innerHeight-128,600);
    data.canvasWidth = c.width;
    data.canvasHeight = c.height;
    data.lastTime = (new Date()).getTime();
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,c.width,c.height);
}

function fillSkills(){
    skills.forEach(function(skill){
        var skillUL = '#skill-' + skill.group + ' ul';
        var barUL = '#skill-bar-' + skill.group + ' ul';
        $(skillUL).append('<div class="skill_title">' + skill.title + '</div><br>');
        $(barUL).append('<div class="skill_meter level_' + skill.level + '" id="skill_'+ skill.id +'">&nbsp;</div><br>')
    });
}

function fillRecentWork(){
    recentWork.forEach(function(work){
        var template = '<a href="' + work.href + '" id="ptfo_' + work.id + '">' +
            '<div class="portfolio_piece">' +
                '<div class ="portfolio_forward">' + work.forward + '</div>' + 
                '<div class ="portfolio_timestamp">' + work.timestamp + '</div>' +
                '<div class ="portfolio_title">' + work.title + '</div>' +
                '<div class ="portfolio_description">' + work.description + '</div>' +
                '<hr>' +
            '</div>' +
            '</a>';
        $("#recent_work_ul").append(template)
    });
}


function initGraphics(){
    $('#ptfo_APT').hover(function(){
        $( "#ptfo_APT > .portfolio_piece" ).css('backgroundImage','url(images/foo.gif)');
        $( "#ptfo_APT > .portfolio_piece" ).css('color','white');
        $( "#ptfo_APT > .portfolio_piece" ).css('borderColor','black');
    },function(){
        $( "#ptfo_APT > .portfolio_piece" ).css('backgroundImage','');
        $( "#ptfo_APT > .portfolio_piece" ).css('color','black');
    });
    $('#ptfo_PIZZA').hover(function(){
        $( "#ptfo_PIZZA > .portfolio_piece" ).css('backgroundImage','url(images/pizzagif.gif)');
        $( "#ptfo_PIZZA > .portfolio_piece" ).css('color','white');
        $( "#ptfo_PIZZA > .portfolio_piece > .portfolio_title" ).css({ textShadow: 'black -1px -1px, black 1px 1px, black 2px 2px, black 3px 3px, black 4px 4px' })
        $( "#ptfo_PIZZA > .portfolio_piece" ).css('borderColor','black');
    },function(){
        $( "#ptfo_PIZZA > .portfolio_piece" ).css('backgroundImage','');
        $( "#ptfo_PIZZA > .portfolio_piece" ).css('box-shadow','');
        $( "#ptfo_PIZZA > .portfolio_piece" ).css('color','black');
        $( "#ptfo_PIZZA > .portfolio_piece > .portfolio_title" ).css({ textShadow: ''})
    });
    $('#ptfo_SPACE').hover(function(){
        $( "#ptfo_SPACE > .portfolio_piece" ).css('backgroundImage','url(images/spaceinvaders.gif)');
        $( "#ptfo_SPACE > .portfolio_piece" ).css('color','white');
        $( "#ptfo_SPACE > .portfolio_piece > .portfolio_title" ).css({ textShadow: 'black -1px -1px, black 1px 1px, black 2px 2px, black 3px 3px, black 4px 4px' })
        $( "#ptfo_SPACE > .portfolio_piece" ).css('borderColor','black');
    },function(){
        $( "#ptfo_SPACE > .portfolio_piece" ).css('backgroundImage','');
        $( "#ptfo_SPACE > .portfolio_piece" ).css('box-shadow','');
        $( "#ptfo_SPACE > .portfolio_piece" ).css('color','black');
        $( "#ptfo_SPACE > .portfolio_piece > .portfolio_title" ).css({ textShadow: ''})
    });
}


$( document ).ready(function(){
    var c = document.getElementById("main");
    var data = {objArray:[],canvasWidth:0,canvasHeight:0,lastTime:0};
    canvasInit(c,data);
    drawBackdrop(c);
    fillRecentWork();
    fillSkills();
});