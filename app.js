let v = new Sprite('./src/models/starwars/xwing.png', 960, 700);
let tie = new Sprite('./src/models/starwars/tiefighter.png', 100, 100)
let laser = new Sprite('./src/models/starwars/laser.png', 200, 100)
laser.display = 'none'

// DEPLACEMENTS

document.onkeydown = function(event){
    // console.log(event.keyCode);
    if(event.keyCode == 90){ // déplacement vers le haut ZQSD
        v.top -= 10;
    }
    else if(event.keyCode == 38){ // déplacement vers le haut Flèches directionnelles
        v.top -= 10;
    }
    else if(event.keyCode == 104){ // déplacement vers le haut Pavé Numérique
        v.top -= 10;
    }
    else if(event.keyCode == 81){ // déplacement vers la gauche ZQSD
        v.left -= 10;
    }
    else if(event.keyCode == 37){ // déplacement vers la gauche Flèches directionnelles
        v.left -= 10;
    }
    else if(event.keyCode == 100){ // déplacement vers la gauche Pavé Numérique
        v.left -= 10;
    }
    else if(event.keyCode == 83){ // déplacement vers le bas ZQSD
        v.top += 10;
    }
    else if(event.keyCode == 40){ // déplacement vers le bas Flèches directionnelles
        v.top += 10;
    }
    else if(event.keyCode == 98){ // déplacement vers le bas Pavé Numérique
        v.top += 10;
    }
    else if(event.keyCode == 68){ // déplacement vers la droite ZQSD
        v.left += 10;
    }
    else if(event.keyCode == 39){ // déplacement vers la droite Flèches directionnelles
        v.left += 10;
    }
    else if(event.keyCode == 102){ // déplacement vers la droite Pavé Numérique
        v.left += 10;
    }

    if(v.left < 0){ // Evite le dépassement de l'écran à gauche
        v.left = 0;
    }
    if(v.left > document.body.clientWidth - v._node.width){ // Evite le dépassement de l'écran à droite
        v.left = document.body.clientWidth - v._node.width;
    }
}

// FIN DEPLACEMENTS

function Sprite(filename, left, top){
    this._node = document.createElement('img'); // "this" = la fonction ('Sprite' dans ce cas-ci)
    this._node.src = filename;
    this._node.style.position = 'absolute';
    document.body.appendChild(this._node);

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