CREATE TABLE IF NOT EXISTS cliente (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  nome  TEXT    NOT NULL,
  email TEXT    NOT NULL UNIQUE
  senha TEXT    NOT NULL,
  cpf   NUMBER  NOT NULL UNIQUE,
  dataNascimento NOT NULL
);

CREATE TABLE IF NOT EXISTS produto (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  nome    TEXT    NOT NULL,
  preco   REAL    NOT NULL,
  estoque INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS venda (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  cliente_id INTEGER NOT NULL,
  total      REAL    NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE IF NOT EXISTS vendaItem (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  venda_id        INTEGER NOT NULL,
  produto_id      INTEGER NOT NULL,
  quantidade      INTEGER NOT NULL,
  preco_unitario  REAL    NOT NULL,
  subtotal        REAL    NOT NULL,
  FOREIGN KEY (venda_id)   REFERENCES vendas(id),
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

CREATE TABLE IF NOT EXISTS Categorias (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_categoria  VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS fornecedores (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    nome  VARCHAR NOT NULL,
    nome_produto TEXT NOT NULL,
    cnpj TEXT NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS pedidos (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    id_cliente  INTEGER NOT NULL,
    data_pedido DATE NOT NULL,
    status TEXT NOT NULL,
    valor_total DECIMAL (100, 2) NOT NULL,
    tipo_entrega TEXT NOT NULL
  );