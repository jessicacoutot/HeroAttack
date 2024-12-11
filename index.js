class heroPropeties {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {

        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;

            case "guerreiro":
                ataque = "usou espada";
                break;

            case "monge":
                ataque = "usou artes marciais";
                break;

            case "ninja":
                ataque = "usou shuriken"
                break;

            default:
                ataque = "golpe desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let mySuperHero = new heroPropeties("Caio", 10, "mago");
mySuperHero.attack();

let myHero = new heroPropeties("Gão", 26, "ninja");
myHero.attack();