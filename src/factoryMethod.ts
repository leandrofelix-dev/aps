type LogEscolhido = "arquivo" | "console" | "bancodedados"

interface ILog {
    registrar(msg: string): string
}

abstract class Log implements ILog {
    registrar(msg) {
        return msg
    }
}

class LogArquivo extends Log {
    mensagem = this.registrar("Registrando Arquivo")
}

class LogConsole extends Log {
    mensagem = this.registrar("Registrando Console")
}

class LogBancoDeDados extends Log {
    mensagem = this.registrar("Registrando BancoDeDados")
}


let logEscolhido: LogEscolhido = "bancodedados"

let log: LogArquivo | LogConsole | LogBancoDeDados

switch (logEscolhido) {
    case "arquivo":
        log = new LogArquivo()
        break;

    case "console":
        log = new LogConsole()
        break;
        
    default:
        log = new LogBancoDeDados()
        break;
}

console.log(log.mensagem)