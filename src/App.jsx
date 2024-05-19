import React, { useState } from 'react';

function App() {

  var inputElement = document.getElementById('meuInput');
  var [nomeCompleto, setNomeCompleto] = useState(' ');

  function Enter() {
    setNomeCompleto(inputElement.value);
  }

  var nomeLimpo = formatarNome(nomeCompleto);
  var [emailPronto, setEmailPronto] = useState([]);


  // Função para remover acentos
  function removerAcentos(texto) {
    const semAcentos = texto.replace(/\p{Mn}/gu, "");
    return semAcentos;
  }

  // Função para remover preposições e formatar nome
  function formatarNome(nomeCompleto) {
    // Remove acentos
    nomeCompleto = removerAcentos(nomeCompleto);

    // Separa nome em partes
    var partesNome = nomeCompleto.split(" ");

    // Remove preposições
    var nomeSemPreposicao = partesNome.filter(function (parte) {
      return parte.toLowerCase() !== "de" &&
        parte.toLowerCase() !== "da" &&
        parte.toLowerCase() !== "do" &&
        parte.toLowerCase() !== "dos" &&
        parte.toLowerCase() !== "das";
    });

    // Junta nome formatado
    nomeSemPreposicao = nomeSemPreposicao.join(" ");

    nomeSemPreposicao = nomeSemPreposicao.toLowerCase();

    // Separa nome em partes
    var partesNome = nomeSemPreposicao.split(" ");

    return partesNome;
  }

  
 

  function criarEmail() {

    if ((nomeLimpo[0] + "." + nomeLimpo.pop() + "@constoso.com") != emailPronto) {

      setEmailPronto([...nomeLimpo[0] + "." + nomeLimpo.pop() + "@constoso.com"]);

    } else if ((nomeLimpo[0] + "." + nomeLimpo[1] + "@constoso.com") != emailPronto) {

      setEmailPronto([...nomeLimpo[0] + "." + nomeLimpo[1] + "@constoso.com"]);

    } else if ((nomeLimpo.pop() + "." + nomeLimpo[0] + "@constoso.com") != emailPronto) {

      setEmailPronto([...nomeLimpo.pop() + "." + nomeLimpo[0] + "@constoso.com"]);

    } else {

      for (var numero = 1; (nomeLimpo[0] + "." + nomeLimpo.pop() + numero + "@constoso.com") == emailPronto; numero++) {
        setEmailPronto([...nomeLimpo[0] + "." + nomeLimpo.pop() + numeri + "@constoso.com"]);
      }

    }

  }


  var listaEmail = emailPronto.map((item) => {
    return <p key={item}>{item}</p>;
  });


  return (
    <main className='flex flex-col w-screen h-screen bg-blue-300'>
      <section className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center w-4/5'>
          <input className='w-[400px] mt-5' type="text" placeholder='Escreva seu nome' id='meuInput' onClick={Enter()} defaultValue={"celta"} />
          <div>
            <p>{listaEmail}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App;
