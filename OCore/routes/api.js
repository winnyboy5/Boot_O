// Dependencies
var express = require('express');
var router = express.Router();
// const { spawn } = require('child_process');

const child_process = require('child_process');

// Routes
router.get('/init', function (req, res) {
    var spawn = require('child_process').spawnSync,
        py = spawn('python', ['./shell/init.py',
            req.query.style,
            req.query.prefix,
            req.query.routing]),
        value = null,
        dataString = '';
    console.log(req.query.style);
    console.log(req.query.prefix);
    console.log(req.query.routing);

    var obj = {
        init: true
    };
    res.send(obj);
});

router.get('/requirements', function (req, res) {
    let result = child_process.spawnSync('node', ['--version'], {
        shell: true
    });

    let result2 = child_process.spawnSync('python -c "import platform; print(platform.python_version())"', [], {
        shell: true
    });

    let result3 = child_process.spawnSync('npm -v', [], {
        shell: true
    });

    var obj = {
        python: false,
        nodejs: false,
        npm: false
    };
    
    if(parseFloat(result.stdout.toString().replace("v", "").substring(0, 3)) > 8.0){
        obj.nodejs = true;
    }

    if(parseFloat(result2.stdout.toString().substring(0, 3)) > 2.5){
        obj.python = true;
    }

    if(parseFloat(result3.stdout.toString().substring(0, 3)) > 5.0){
        obj.npm = true;
    }

    res.send(obj);
});

// Return router
module.exports = router;