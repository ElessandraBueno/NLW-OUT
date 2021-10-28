/*Todas as variáveis precisam ser definidas como let (quando o conteúdo/valor pode ser alterado) ou const (quando o conteúdo/valor é fixo e não pode ser alterado)*/

/*let user = {
        name: 'Elessandra Bueno',
        phone: 123456789,
        accept: true
      }

      user.name = 'Nazaré R.' /*Muda o valor da variável/*

      alert(user.name)
      alert(user.phone)*/

/*Formas  de declarar um objeto ou variável:
      -camelCase: Todas as palavras juntas, sem espaço, sendo que a primeira palavra é toda minúscula e as demais com a primeira letra em maiúscula;
      -PascalCase: Todas as palavras juntas, sem espaço e com a primeira letra de todas as palavras em maiúscula;
      -snake_case: Todas as palavras são separadas por underline e todas são escritas em letras minúsculas (nenhuma palavra em letra maiúscula.
     */
const LinksSocialMedia = {
  github: 'ElessandraBueno',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'ele.bueno_',
  twitter: 'jakelinytec'
}
/* Explicação sobre a função abaixo:
          document é o comando para acessar o DOM.
          .get é o comando para pegar alguma informação do DOM;
          ElementById é o comando para especificar de onde iremos pegar esse elemento/info, no caso do ID.
          ('UserName') é o comando onde especificamos qual informações dos Ids desse arquivo estamos buscando*/
/*textContent é o comando para alterar o conteúdo do elemento especificado acima. E pode ser usado também da seguinte forma:
          UsraName.textContent = "Olivia"*/
/*O comando let li of SocialLinks.children, também pode ser escrito:
        let li of SocialLinks.textContent*/
/*Para chamar o conteúdo da li, utilizamos li.children[0].href, onde 0 é aposição do filho que deseja-se atrelar. Obs: O computador conta a partir de 0, não se 1.
        O comando .href, é para informar ao sistema que queremos buscar/modificar aquele atributo dentro do filho [0].
        Como queremos alterar o link dos ícones no site, na frente de href põe-se = 'endereço do link', porém se for feito apenas assim, o link inserido anteriormente, será aplicado a todos os filhos de todas as li. 
        Para alterar o endereço do link de acorodo com uma informação/dado específico, usa-se o temp-late String (conteúdo entre crase) ao invés de apóstrofe e o conteúdo a ser alterado é identificado por ${LOCAL DO DADO}:
        `https://${social}.com/${LinksSocialMedia[social]}`
        */

function ChangeLinksSocialMedia() {
  document.getElementById('UserName').textContent = 'Elessandra Bueno'

  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}
ChangeLinksSocialMedia()

/*A função fetch, acessa o link informado e pega as informações e guarda. Para ter acesso a essas informações, utiliza-se as Promise, que no caso é o .then()*/

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  
}

GetGitHubProfileInfos()
