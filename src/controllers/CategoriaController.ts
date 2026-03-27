import { app } from "../server";
import { CategoriaRepository } from "../repositories/CategoriaRepository"
import { response } from "express";

export function CategoriaController() {
    const repository = new CategoriaRepository();

    app.get("/Categorias", (requisite, response) => {
        const { nome } = requisite.query;

        if (nome)   {
            const Categorias = repository.buscarPorNome(nome as string);
            if (!Categorias) return response.status(404).json({ erro: "Categorias não encontradas"});
            return response.json(Categorias);
        }  
    
    response.json(repository.listar());

});

app.post("/Categorias", (requisite, response) => {
    try {
        const { nome_categoria } = requisite.body;
    
        if (! nome_categoria || nome_categoria.trim().length === 0) throw new Error ("Nome da Categoria é obrigatório");


        const Categorias = repository.salvar({ nome_categoria });
        response.status(201).json(Categorias);
    }  catch (err) {
        const mensagem = err instanceof Error ? err.message : "Erro interno";
        response.status(400).json({ erro: mensagem });
    }
})
}
