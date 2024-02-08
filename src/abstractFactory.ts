interface ComponenteUI {
    desenhar(): void;
}

interface IAbstractFactory {
    createBotao(): ComponenteUI;
    createJanela(): ComponenteUI;
    createCursor(): ComponenteUI;
    createSelect(): ComponenteUI;
    createInput(): ComponenteUI;
}

class WindowsFactory implements IAbstractFactory {
    createBotao(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Botão Windows") };
    }
    createJanela(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Janela Windows") };
    }
    createCursor(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Cursor Windows") };
    }
    createSelect(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Select Windows") };
    }
    createInput(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Input Windows") };
    }

}

class MacFactory implements IAbstractFactory {
    createJanela(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Janela Mac") };
    }
    createCursor(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Cursor Mac") };
    }
    createSelect(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Select Mac") };
    }
    createInput(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Input Mac") };
    }
    createBotao(): ComponenteUI {
        return { desenhar: () => console.log("Renderizar Botão Mac") };
    }
}

class AplicacaoUI {
    constructor(private factory: IAbstractFactory) {}

    criarUI() {
        this.factory.createBotao().desenhar();
        this.factory.createCursor().desenhar();
        this.factory.createInput().desenhar();
        this.factory.createJanela().desenhar();
        this.factory.createSelect().desenhar();
    }
}

const cliente = new AplicacaoUI(new MacFactory());

cliente.criarUI();
