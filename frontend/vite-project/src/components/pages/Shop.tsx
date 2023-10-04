import React from 'react';

const listaCarrinho(idProd:number,tamProd:string,precoProd:number) => useState([] as any[]);
const l = 0
function AdicionarNaLista(){
  const novoProduto(idProdNovo:number,tamProdNovo:string,PrecoProdNovo:number) => (listaCarrinho = listaCarrinho + novoProduto);
function botãoAdicionarCarrinho(listaCarrinho,idProdNovo:number,TamProdNovo:string,PrecoProdNovo:number,l){
   l = l+1
  function AdicionarNaLista(){
    const novoProduto(idProdNovo:number,TamProdNovo:string,PrecoProdNovo:number) => (listaCarrinho = listaCarrinho + novoProduto);

  }
}
  if l = l +1{
    AdicionarNaLista()
  }
};
   function calcularTotal(){
      listaCarrinho(precoProd = 0) => (precoProd =  precoProd + novoProduto(PrecoProdNovo));
  }


import React, { useState } from 'react';

const Loja: React.FC = () => {
  const [carrinho, setCarrinho] = useState<any[]>([]);
  let l = 0;

  const adicionarAoCarrinho = (idProduto: number, tamanho: string, precoProduto: number) => {
    const novoProduto = { id: idProduto, tamanho, preco: precoProduto };
    setCarrinho([...carrinho, novoProduto]);
    l++;
  };
  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
  };
  return (
    <div>
      {/* TypeScript = Estudar Amanhã */}
      <button onClick={() => adicionarAoCarrinho(1, 'M', 10)}>Adicionar ao Carrinho</button>
      <p>Total de itens no carrinho: {l}</p>
      <ul>
        {carrinho.map((produto, index) => (
          <li key={index}>Produto {produto.id} - Tamanho: {produto.tamanho} - R$ {produto.preco}</li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;