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
        var skillTitle = skillLevelToTitle(skill.level);
        $(skillUL).append('<div class="skill_title">' + skill.title + '</div><br>');
        $(barUL).append('<div class="skill_meter level_' + skill.level +
            ' tooltip" id="skill_'+ skill.id +'" title="' + skillTitle +
            '">&nbsp;</div><br>');
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
        if (work.img){
            $('#ptfo_' + work.id).hover(
            function(){
                $('#ptfo_' + work.id + ' > .portfolio_piece').css('backgroundImage', 'url('+ work.img +')');
                if (work.invert){
                    $('#ptfo_' + work.id + ' > .portfolio_piece').css('color', 'white');
                    $('#ptfo_' + work.id + ' > .portfolio_piece').css('borderColor', 'black');
                    $('#ptfo_' + work.id + ' > .portfolio_piece > .portfolio_title').css({ textShadow: 'black 1px 1px, black 2px 2px, black 3px 3px, black 4px 4px' });
                }
            },
            function(){
                $('#ptfo_' + work.id + ' > .portfolio_piece').css('backgroundImage', '');
                if (work.invert){
                    $('#ptfo_' + work.id + ' > .portfolio_piece').css('color', 'black');
                    $('#ptfo_' + work.id + ' > .portfolio_piece > .portfolio_title').css({ textShadow: '' });
                }
            });
        }
    });
}

$( document ).ready(function(){
    var c = document.getElementById("main");
    var data = {objArray:[],canvasWidth:0,canvasHeight:0,lastTime:0};
    canvasInit(c,data);
    drawBackdrop(c);
    fillRecentWork();
    fillSkills();
    $('.tooltip').tooltipster({
        position:'right'
    });
});