# desafio teia-frontend - documentação
Aplicação frontend Framework Angular que consume uma API especificado abaixo:
api: https://jsonplaceholder.typicode.com/photos


A interface interativa e dinâmica que será apresentada é desenvolvida utilizando a linguagem Angular. Esta interface é voltada para consulta de dados por meio de uma API, exibindo duas tabelas distintas. A primeira tabela lista todos os itens ordenados por albumid, enquanto a segunda tabela apresenta um agrupamento dos albumid, com uma funcionalidade adicional de adicionar os itens ao carrinho de forma incremental.

Tecnologias Utilizadas:

Angular: Um framework de desenvolvimento front-end baseado em TypeScript.
HTML/CSS/Bootstrap: Linguagens de marcação e estilo para estruturar e estilizar a interface.
TypeScript: Uma linguagem de programação baseada em JavaScript, utilizada no desenvolvimento Angular.
API de Dados: Utilizada para fornecer os dados exibidos na interface.
Componentes da Interface:

Tabela de Itens por albumid:

Esta tabela exibe todos os itens obtidos da API, ordenados por albumid.
Cada linha representa um item, exibindo informações relevantes como album, cod da foto, título, url da imagem e tamanho da imagem
Os dados são obtidos através de requisições HTTP à API.

Tabela de Agrupamento por albumid:

Nesta tabela, os albumid são agrupados, exibindo apenas uma entrada por albumid.
Esta tabela também permite adicionar os itens númerico ao carrinho de forma incremental.

Funcionalidade de Adicionar ao Carrinho:

Ao lado de cada item na tabela de agrupamento, há um botão "Adicionar ao Carrinho".
Ao clicar neste botão, o item correspondente é adicionado ao carrinho de compras.

Fluxo de Funcionamento:

Inicialização da Interface:

Ao carregar a página, a interface faz uma solicitação à API para obter os dados necessários.
Os dados são recebidos e exibidos nas tabelas correspondentes.
Interatividade com a Tabela de Agrupamento:

Adição ao Carrinho:
Ao clicar no botão "Adicionar ao Carrinho" ao lado de um item, esse item é incremento um valor ao carrinho de compras.

Considerações Finais:

Esta interface oferece uma experiência interativa e dinâmica para os usuários, permitindo-lhes visualizar e interagir com os dados de uma forma eficiente e intuitiva. O uso do Angular facilita o desenvolvimento e manutenção da aplicação, garantindo uma interface responsiva e de fácil utilização.