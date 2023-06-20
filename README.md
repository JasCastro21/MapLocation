# Teste-de-Seletiva-Vantech-Front

Bem-vindo(a) ao MapLocation! Este arquivo apresenta uma página web chamada "MapLocation". Nesta aplicação, após realizar o cadastro e o login, você será redirecionado(a) para uma página onde poderá visualizar um mapa interativo.

Nessa página, você terá a opção de inserir dois endereços diferentes para traçar a rota entre eles. Ao traçar a rota, a aplicação irá exibir informações importantes, como a duração da viagem e a distância a ser percorrida.

Além disso, você terá a possibilidade de baixar um arquivo CSV contendo essas informações. Esse arquivo poderá ser utilizado para armazenar ou analisar os dados da rota.

Em resumo, o MapLocation é um site que oferece uma experiência interativa de visualização de rotas, permitindo que você obtenha informações relevantes sobre a viagem e ainda tenha a opção de exportar esses dados em um arquivo CSV.

-------------------------------------------------------------------------------------------------------------------------------------------

# Instruções:

1. Após baixar o arquivo, abra o terminal do VS Code e navegue até a pasta "maplocation" digitando o comando: `cd maplocation`.

2. Execute o servidor local (localhost) utilizando o seguinte comando: `json-server --watch src/db.json --port 3002`. Certifique-se de estar na mesma pasta onde se encontra o arquivo "db.json".

3. Abra um novo terminal para visualizar a página web. Navegue novamente até a pasta "maplocation" digitando o comando: `cd maplocation`. Em seguida, execute o comando `yarn start` ou `npm start`, dependendo da sua preferência, para iniciar a aplicação. 

Essas instruções irão garantir que você esteja no diretório correto, inicie o servidor local e execute a aplicação web para que possa visualizar a página do MapLocation. Certifique-se de ter as dependências corretamente instaladas antes de executar os comandos.

-------------------------------------------------------------------------------------------------------------------------------------------

# Como usar o site

Fique à vontade para explorar o site. Você também pode minimizar a tela, pois o site é responsivo e se ajustará ao tamanho do dispositivo.

1. Para visualizar o mapa, clique no botão "Login" na barra de navegação. Em seguida, clique em "Cadastre-se" e preencha o formulário para se cadastrar. Isso permitirá que você tenha um cadastro no sistema. Após o cadastro, faça o login utilizando os dados fornecidos durante o registro. Os usuários cadastrados são armazenados no arquivo "db.json". Ao fazer o login, você será redirecionado para o mapa.

2. No mapa, digite o "Endereço Inicial" e o "Endereço Final" nos campos correspondentes. Em seguida, clique no botão "Traçar Rota". Será exibida a rota entre os dois endereços, bem como a quilometragem e a duração da viagem. Após traçar a rota, você poderá baixar o arquivo CSV clicando no botão "Baixar CSV".

Aproveite todas as funcionalidades do site e tenha uma ótima experiência de navegação!

-------------------------------------------------------------------------------------------------------------------------------------------




