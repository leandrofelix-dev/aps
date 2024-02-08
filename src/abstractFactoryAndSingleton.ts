interface TexturaRenderer {
    renderizarTextura(): void;
}

interface SombraRenderer {
    renderizarSombra(): void;
}

interface ModeloRenderer {
    renderizarModelo(): void;
}

abstract class RenderFactory {
    abstract criarTexturaRenderer(): TexturaRenderer;
    abstract criarSombraRenderer(): SombraRenderer;
    abstract criarModeloRenderer(): ModeloRenderer;
}

class OpenGLFactory extends RenderFactory {
    private static instance: OpenGLFactory;

    private constructor() {
        super();
    }

    static getInstance(): OpenGLFactory {
        if (!this.instance) {
            this.instance = new OpenGLFactory();
        }
        return this.instance;
    }

    criarTexturaRenderer(): TexturaRenderer {
        return new OpenGLTexturaRenderer();
    }

    criarSombraRenderer(): SombraRenderer {
        return new OpenGLSombraRenderer();
    }

    criarModeloRenderer(): ModeloRenderer {
        return new OpenGLModeloRenderer();
    }
}

class DirectXFactory extends RenderFactory {
    private static instance: DirectXFactory;

    private constructor() {
        super();
    }

    static getInstance(): DirectXFactory {
        if (!this.instance) {
            this.instance = new DirectXFactory();
        }
        return this.instance;
    }

    criarTexturaRenderer(): TexturaRenderer {
        return new DirectXTexturaRenderer();
    }

    criarSombraRenderer(): SombraRenderer {
        return new DirectXSombraRenderer();
    }

    criarModeloRenderer(): ModeloRenderer {
        return new DirectXModeloRenderer();
    }
}

class OpenGLTexturaRenderer implements TexturaRenderer {
    renderizarTextura(): void {
        console.log("Renderizando Textura com OpenGL");
    }
}

class OpenGLSombraRenderer implements SombraRenderer {
    renderizarSombra(): void {
        console.log("Renderizando Sombra com OpenGL");
    }
}

class OpenGLModeloRenderer implements ModeloRenderer {
    renderizarModelo(): void {
        console.log("Renderizando Modelo com OpenGL");
    }
}

class DirectXTexturaRenderer implements TexturaRenderer {
    renderizarTextura(): void {
        console.log("Renderizando Textura com DirectX");
    }
}

class DirectXSombraRenderer implements SombraRenderer {
    renderizarSombra(): void {
        console.log("Renderizando Sombra com DirectX");
    }
}

class DirectXModeloRenderer implements ModeloRenderer {
    renderizarModelo(): void {
        console.log("Renderizando Modelo com DirectX");
    }
}

const cliente = (tipo: "OpenGL" | "DirectX") => {
    const factory = tipo === "OpenGL" ? OpenGLFactory.getInstance() : DirectXFactory.getInstance();
    const texturaRenderer = factory.criarTexturaRenderer();
    const sombraRenderer = factory.criarSombraRenderer();
    const modeloRenderer = factory.criarModeloRenderer();

    texturaRenderer.renderizarTextura();
    sombraRenderer.renderizarSombra();
    modeloRenderer.renderizarModelo();
}

cliente("OpenGL");

cliente("DirectX");
