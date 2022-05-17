class campeon {
    constructor(nombre, vida, mana, ataque,habilidades,tipo,fuerteContra1,fuerteContra2){
        this.nombre = nombre;
        this.vida= vida;
        this.mana=mana;
        this.ataque=ataque;
        this.habilidades=habilidades;
        this.tipo=tipo;
        this.fuerteContra1=fuerteContra1;
        this.fuerteContra2=fuerteContra2;
    }

    presentarse(){
        console.log("Hola, soy "+ this.nombre + " y soy del tipo " + this.tipo);
        console.log("Mis habilidades son: " + this.habilidades);
    }

    comparar(campeon){

        if(campeon.tipo==this.tipo){
            console.log("Son iguales, será un combate justo");
        } 
        else if(campeon.tipo == this.fuerteContra1 || campeon.tipo == this.fuerteContra2){
            console.log("Ganarías");
        }else{
            console.log("Perderías");
        }
    }
}

class tirador extends campeon{
    constructor(nombre,vida,mana,ataque,habilidades,tipo,distancia,fuerteContra1,fuerteContra2){
        super(nombre,vida,mana,ataque,habilidades,tipo,fuerteContra1,fuerteContra2)
        this.distancia=distancia;
        fuerteContra1=tanque;
        fuerteContra2=luchador;
        vida=+vida*.24;
    }
}
class asesino extends campeon{
    constructor(nombre,vida,mana,ataque,habilidades,tipo,fuerteContra1,fuerteContra2){
        super(nombre,vida,mana,ataque,habilidades,tipo,fuerteContra1,fuerteContra2)
        fuerteContra1=mago;
        fuerteContra2=tirador;
        vida=+vida*.15;
    }
}

class mago extends campeon{
    constructor(nombre,vida,mana,ataque,habilidades,tipo,distancia,fuerteContra1,fuerteContra2){
        super(nombre,vida,mana,ataque,habilidades,tipo,distancia,fuerteContra1,fuerteContra2)
        this.distancia=distancia;
        fuerteContra1=tirador;
        fuerteContra2=luchador;
        ataque=+ataque*.24;
    }
}

class tanque extends campeon{
    constructor(nombre,vida,mana,ataque,habilidades,tipo,armadura,fuerteContra1,fuerteContra2){
        super(nombre,vida,mana,ataque,habilidades,tipo,armadura,fuerteContra1,fuerteContra2)
        this.armadura=armadura;
        fuerteContra1=mago;
        fuerteContra2=asesino;
        mana=+mana*.24;
    }
}

class luchador extends campeon{
    constructor(nombre,vida,mana,ataque,habilidades,tipo,movilidad,fuerteContra1,fuerteContra2){
        super(nombre,vida,mana,ataque,habilidades,tipo,movilidad,fuerteContra1,fuerteContra2)
        this.movilidad=movilidad;
        fuerteContra1=asesino;
        fuerteContra2=tanque;
        ataque=+ataque*.30;
        vida=-vida*.5;
    }
}

const Aranza = new tirador('Aranza',100,100,100, 'comer, leer', 'tirador',100,'tanque','luchador');
const Ilse = new asesino('Ilse',100,100,200,'programar, cantar','asesino','mago','tirador');
const Mónica = new mago('Mónica',123,140,444,'leer,curar','mago',210,'tirador','luchador');
const Santiago = new tanque('Santiago',320,120,320,'jugar,estudiar','tanque',200,'mago','asesino');
const Diego = new luchador('Diego',87,56,23,'leer, estudiar','luchador',78,'asesino','tanque');
