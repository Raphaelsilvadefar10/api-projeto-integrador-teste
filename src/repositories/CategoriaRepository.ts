import db from "../database/database"
import { Categorias } from "../models/Categorias"

export class CategoriaRepository {
    salvar(Categorias: Categorias): Categorias {
        const resultado = db
            .prepare('INSERT INTO Categorias (nome) VALUES (?, ?) ')
            .run (Categorias.nome_categoria);

        return {...Categorias, id: resultado.lastInsertRowid as number };
    }

    listar(): Categorias[] {
        return db.prepare('SELECT * FROM Categorias').all() as Categorias[];
    }

    buscarPorId(id: number): Categorias | null {
        return db.prepare('SELECT * FROM Categorias WHERE id = ?').get(id) as Categorias | null;
    }

    buscarPorNome(nome: string): Categorias | null {
        return db.prepare ('SELECT * FROM categorias WHERE nome = ?').get('%${nome}%') as Categorias | null;
    }
}