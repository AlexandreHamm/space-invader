let tie = new Sprite('./src/models/starwars/tiefighter.png', 100, 20)
let tie1 = new Sprite('./src/models/starwars/tiefighter.png', 300, 20)
let tie2 = new Sprite('./src/models/starwars/tiefighter.png', 500, 20)
let tie3 = new Sprite('./src/models/starwars/tiefighter.png', 700, 20)
let tie4 = new Sprite('./src/models/starwars/tiefighter.png', 200, 120)
let tie5 = new Sprite('./src/models/starwars/tiefighter.png', 400, 120)
let tie6 = new Sprite('./src/models/starwars/tiefighter.png', 600, 120)
let tie7 = new Sprite('./src/models/starwars/tiefighter.png', 800, 120)
let tie8 = new Sprite('./src/models/starwars/tiefighter.png', 100, 220)
let tie9 = new Sprite('./src/models/starwars/tiefighter.png', 300, 220)
let tie10 = new Sprite('./src/models/starwars/tiefighter.png', 500, 220)
let tie11 = new Sprite('./src/models/starwars/tiefighter.png', 700, 220)
let laser = new Sprite('./src/models/starwars/laser.png', 200, 100)
laser.display = 'none'
let v = new Sprite('./src/models/starwars/xwing.png', 960, 700);

// DEPLACEMENTS

document.onkeydown = function(event){
    // console.log(event.keyCode);
    if(event.keyCode == 90 || event.keyCode == 38 || event.keyCode == 104){ // déplacement vers le haut ZQSD // Flèches Directionnelles // Pavé Numérique
        v.top -= 10;
    }
    else if(event.keyCode == 81 || event.keyCode == 37 || event.keyCode == 100){ // déplacement vers la gauche ZQSD
        v.left -= 10;
    }
    else if(event.keyCode == 83 || event.keyCode == 40 || event.keyCode == 98){ // déplacement vers le bas ZQSD
        v.top += 10;
    }
    else if(event.keyCode == 68 || event.keyCode == 39 || event.keyCode == 102){ // déplacement vers la droite ZQSD
        v.left += 10;
    }

    if(v.left < 0){ // Evite le dépassement de l'écran à gauche
        v.left = 0;
    }
    if(v.left > document.body.clientWidth - v._node.width){ // Evite le dépassement de l'écran à droite
        v.left = document.body.clientWidth - v._node.width;
    }
    if(v.top < 0){ // Evite le dépassement de l'écran en haut
        v.top = 0;
    }
    if(v.top > document.body.clientHeight - v._node.height){ // Evite le dépassement de l'écran en bas
        v.top = document.body.clientHeight - v._node.height;
    }

    // LASERS
    if(event.keyCode == 32 || event.keyCode == 101){
        laser.display = 'block'
        laser.left = v.left + (v._node.width - laser._node.width) / 2; // centrage horizontal du laser / missile
    }
    if(event.keyCode == 32 || event.keyCode == 101){
        laser.display = 'block';
        laser.left = v.left + (v._node.width - laser._node.width) / 2; // centrage horizontal du laser / missile
        laser.top = v.top;
        laser.startAnimation(moveLaser, 10 ); // fréquence en ms
    }
};

// FIN DEPLACEMENTS

// Création d'objet Sprite = élément graphique
    // je vais donner 3 paramètres à la fonction :
    // 1) le chemin d'accès au fichier
    // 2) la position par rapport à la gauche de l'écran => left
    // 3) la position par rapport au haut de l'écran => top
function Sprite(filename, left, top){
    // je crée une image
    this._node = document.createElement('img'); // "this" = la fonction ('Sprite' dans ce cas-ci)
    // j'attribue à src le chemin d'accès
    this._node.src = filename;
    // j'applique la position absolue à l'élément
    this._node.style.position = 'absolute';
    // je fabrique l'élement dans l'HTML
    document.body.appendChild(this._node);

    // on cherche à contrôler le positionnement de l'élément en cours 'this'
    Object.defineProperty(this, 'left', {  // Défini 'left' à 'Sprite', puis une valeur ('value') afin de déplacer le sprite du vaisseau
        get: function(){  // get = lecture ('return' permettra de lire la valeur de l'élément)
            return this._left;
        },
        set: function(value){ // set = écriture ('permettra de définir une valeur au sprite')
            this._left = value;
            this._node.style.left = value + 'px';
        }
    });

    Object.defineProperty(this, 'top', {  // Défini 'top' à 'Sprite', puis une valeur ('value') afin de déplacer le sprite du vaisseau
        get: function(){  // get = lecture ('return' permettra de lire la valeur de l'élément)
            return this._top;
        },
        set: function(value){ // set = écriture ('permettra de définir une valeur au sprite')
            this._top = value;
            this._node.style.top = value + 'px';
        }
    });

    Object.defineProperty(this, 'width',{
        get: function(){
            return this._node.style.width;
        },
        set: function(value){
            this._node.style.width = value + 'px';
        }
    })
    Object.defineProperty(this, 'height',{
        get: function(){
            return this._node.style.height;
        },
        set: function(value){
            this._node.style.height = value + 'px';
        }
    })

    Object.defineProperty(this, 'display',{
        get: function(){
            return this._node.style.display;
        },
        set: function(value){
            this._node.style.display = value;
        }
    });

    this.left = left;
    this.top = top;
}

// ANIMATION MISSILE // ALIENS (TIE FIGHTERS)

Sprite.prototype.startAnimation = function(fct, interval){
    if(this._clock)window.clearInterval(this._clock);
    let _this = this; // on crée une variable '_this' pour pouvoir répêter 'this' dans la fonction du dessus (si on utilisait directement 'this', elle serait liée à la fonction dont elle fait partie, au lieu d'être liée à la fonction 'Sprite')
    this._clock=window.setInterval(function(){
        fct(_this);
    }, interval);
};

Sprite.prototype.stopAnimation = function(){
    window.clearInterval(this._clock);
};

function moveLaser(laser){
    laser.top -=10;
    if(laser.top < -100) laser.stopAnimation();
    for(let i=1; i<=15; i++){
        // let laser = window["tie"+1];
        if(tie.display == "none") continue;
        if(laser.checkCollision(tie)){
            laser.stopAnimation();
            laser.display = "none";
            tie.stopAnimation();  
            tie.display = "none";
        }
    }
}

function moveTieToRight(tie){
    tie.left += 10;

    if(tie.left > document.body.clientWidth - tie._node.width){
        tie.top += 50;
        tie.startAnimation(moveTieToLeft, 10);
    }
}

function moveTieToLeft(tie){
    tie.left -= 10;

    if(tie.left < 0){
        tie.top += 50;
        tie.startAnimation(moveTieToRight, 10);
    }
}

tie.startAnimation(moveTieToRight, 15)

// for(let i=1; i<=11; i++){
//     window['tie'+i].startAnimation(moveTieToRight, 10);
// }

Sprite.prototype.checkCollision = function (other){

    return ! (  (this.top + this._node.height < other.top) ||
                this.top > (other.top + other._node.height) ||
                (this.left + this._node.width < other.left) ||
                this.left > (other.left + other._node.width) );
}