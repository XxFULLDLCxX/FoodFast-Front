# FastFood-Front

Este é o front-end do FastFood, um aplicativo de comidas rápidas que permite uma seleção rápida de produtos. O aplicativo possui três rotas principais:

+ `/orders` - Responsável pela visualização e seleção de produtos.
   - `/orders/payments` - Responsável pelo processamento dos pagamentos.
+ `/kitchen` - Responsável por exibir à cozinha os pedidos a serem preparados.
+ `/retirada` - Responsável por mostrar ao cliente o status do seu pedido.

## Como executar localmente:

1. Clone o repositório.
2. Instale as dependências com o comando:
```bash
npm i
```
3. Preencha o arquivo `.env.development` com base no `.env.example`. O `VITE_API_URL` deve ser a URL base da API (FastFood-Back).
  
4. Execute o back-end e o front-end em modo de desenvolvimento com o comando:
```bash
npm run dev
```
