type Theme = "light" | "dark"
type Language = "pt-br" | "en-us"

class Configuracao {
    private static instance: Configuracao;

    private constructor() { }

    public theme: Theme = "dark"
    public fontSize: number = 12
    public language: Language = "pt-br"

    public static getInstance(): Configuracao {
        if (!Configuracao.instance) {
            Configuracao.instance = new Configuracao()
        }

        return Configuracao.instance
    }

    public configure() {
    
    }
}

function clientCode() {

    // fontSize da instancia
    const instance = Configuracao.getInstance()
    console.log(instance.fontSize)

    // fontSize de outra variável, mas a mesma instância
    const instanceAgain = Configuracao.getInstance()
    console.log(instanceAgain.fontSize)
}

clientCode();