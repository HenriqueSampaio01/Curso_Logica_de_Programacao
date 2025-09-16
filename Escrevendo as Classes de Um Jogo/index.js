class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if(this.tipo === "mago") {
            ataque = "magia"
        }else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if(this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }

        console.log(`${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi1 = new heroi("Arthur", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new heroi("Arthuro", 25, "ninja");
heroi2.atacar();

const heroi3 = new heroi("Arthura", 20, "monge");
heroi3.atacar();

const heroi4 = new heroi("Arthure", 35, "mago");
heroi4.atacar();