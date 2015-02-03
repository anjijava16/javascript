var express = require('express');

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/multi', function(req, res){
    res.render('multi', {title: 'Multiple Options'});
});

app.get('/skills-search-result', function(req, res){
    var skills = req.query.skills;
    if(skills === undefined){
        res.send('please select skills');
    }
    else if(skills instanceof Array){
        console.log('Skills: ');
        skills.forEach(function(skill, i){
            console.log((i + 1) + '. ' + skill);
        });
        res.json(req.query.skills);
    }
    // only one skill is selected
    else{
        console.log('Skill: ' + skills);
        res.json(req.query.skills);
    }
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

