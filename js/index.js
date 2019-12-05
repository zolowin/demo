let Draw = function () {
    this.canvas;
    this.context;
    this.width = 1200;
    this.height = 550;
    this.color = '#000000';
    this.lineWidth = 2;
    this.drawing = false;
    // this.savedMousPotision = { x: 0, y: 0 };
    this.id = 'mycanvas';
    this.process = [];

    
    let _this = this;

    this.setColor = function (color) {
        this.color = color;
    }

    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.id = this.id;

        document.body.appendChild(this.canvas);
    }

    this.drawWhiteBackground = function () {
        this.context.fillStyle = "#ffffff";
        this.context.fillRect(0, 0, this.width, this.height);
    }

    this.drawLine = function (starX, starY, endX, endY) {
        this.context.beginPath();
        this.context.moveTo(starX, starY);
        this.context.lineTo(endX, endY);
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.color;
        this.context.stroke();
        this.process.push(starX,starY,endX,endY);
    }

    this.getMousePotision = function (event) {
        let rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left, y: event.clientY - rect.top
        }
    }

    this.addMouseDown = function () {
        this.canvas.addEventListener('mousedown', function (event) {
            _this.proccessMouseDown(event);
        });
    }

    this.addMouseUp = function () {
        this.canvas.addEventListener('mouseup', function (event) {
            _this.proccessMouseUp(event);
        });
    }

    this.addMouseMove = function () {
        this.canvas.addEventListener('mousemove', function (event) {
            _this.proccessMouseMove(event);
        })
    }

    this.proccessMouseDown = function (event) {
        let potision = this.getMousePotision(event);
        this.x = potision.x;
        this.y = potision.y;
        this.drawing = true;
    }

    this.proccessMouseUp = function (event) {
        this.drawing = false;
    }

    this.proccessMouseMove = function (event) {
        if (this.drawing) {
            let newPos = this.getMousePotision(event);
            this.drawLine(this.x, this.y, newPos.x, newPos.y);
            // this.process.push((this.x, this.y, newPos.x, newPos.y));
            console.log(p.process);
            this.x = newPos.x;
            this.y = newPos.y;
        }
    }
}


function clearCanvas() {
    let canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setColor(color) {
    let colorCode = '#000000';
    switch (color) {
        case 'red':
            colorCode = '#FF0000';
            break;
        case 'black':
            colorCode = '#000000';
            break;
        case 'green':
            colorCode = '#00FF00';
            break;
        case 'blue':
            colorCode = '#0000FF';
            break;
        case 'white':
            colorCode = '#FFFFFF';
    }
    p.color = colorCode;
}

function setSizeLine(lineWidth) {
    let sizeLine = 2;
    switch (lineWidth) {
        case 'small':
            sizeLine = 1;
            break;
        case 'normal':
            sizeLine = 2;
            break;
        case 'large':
            sizeLine = 4;
            break;
        case 'huge':
            sizeLine = 8;
            break;
    }
    p.lineWidth = sizeLine;
}

let mirror = document.getElementById('mirror');
mirror.addEventListener('contextmenu', function (event) {
    let dataURL = p.canvas.toDataURL('imgae/png');
    mirror.src = dataURL;
});

let button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    let dataURL = p.canvas.toDataURL('image/png');
    button.href = dataURL;
});

function undo() {
    p.process.pop();
    console.log("TCL: undo ->  p.process.pop()",  p.process.pop())
}

let p = new Draw();
p.init();
p.drawWhiteBackground();
p.addMouseDown();
p.addMouseUp();
p.addMouseMove();




