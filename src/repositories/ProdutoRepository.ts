import db from "../database/database";
import { produto } from "../models/produto";

export class ProdutoRepository {
  salvar(produto: produto): produto {
    const resultado = db
      .prepare("INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)")
      .run(produto.nome, produto.preco, produto.estoque);

    return { id: Number(resultado.lastInsertRowid), nome: produto.nome, preco: produto.preco, estoque: produto.estoque, descricao: produto.descricao, categoria: produto.categoria };
  }

  listar(): produto[] {
    return db.prepare("SELECT * FROM produtos").all() as produto[];
  }

  buscarPorId(id: number): produto | null {
    return (db.prepare("SELECT * FROM produtos WHERE id = ?").get(id) as produto) ?? null;
  }

  buscarPorNome(nome: string): produto | null {
    return (db.prepare("SELECT * FROM produtos WHERE nome LIKE ?").get(`%${nome}%`) as produto) ?? null;
  }

  atualizarEstoque(id: number, estoque: number): void {
    db.prepare("UPDATE produtos SET estoque = ? WHERE id = ?").run(estoque, id);
  }
}