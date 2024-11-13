document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os botões
    const botoes = document.querySelectorAll(".seletor a");
    
    // Seleciona o container que envolve o bloco
    const blocoContainer = document.querySelector(".wrapper .bloco");
  
    // Define um objeto que mapeia os botões para os conteúdos
    const conteudos = {
      "Relatório de tempo": `
        <h3 class="h3-melhore">Melhore a produtividade e a felicidade da equipe sem a microgestão</h3>
        <h4 class="h4-Acompanhe">Acompanhe as horas de trabalho dos funcionários, gere relatórios de quadro de horários e equilibre as cargas de trabalho de recursos para evitar que a equipe trabalhe demais ou se esgote.</h4>
        <a href="#" class="a-mais">Mais sobre o controle de tempo do projeto > ></a>
      `,
      "Acompanhamento de projetos": `
        <h3 class="h3-melhore">Saiba exatamente quanto tempo sua equipe gasta em tarefas</h3>
        <h4 class="h4-Acompanhe">Diga adeus às planilhas de horários semanais imprecisas e controle as horas exatas faturáveis e não faturáveis da sua equipe..</h4>
        <a href="#" class="a-mais">Mais sobre relatórios de tempo ></a>
      `,
      "Carga de trabalho da equipe": `
        <h3 class="h3-melhore">Para contadores e equipes financeiras</h3>
        <h4 class="h4-Acompanhe">
Aproveite ao máximo sua força de trabalho limitada. Gere relatórios de tempo de projeto para equilibrar a demanda de recursos e a carga de trabalho da equipe.</h4>
        <a href="#" class="a-mais">Mais sobre carga de trabalho ></a>
      `
    };
  
    // Função para alterar o conteúdo do bloco
    function atualizarConteudo(conteudo) {
      blocoContainer.classList.add("fade-out"); // Adiciona uma classe para o efeito de fade-out
  
      setTimeout(() => {
        blocoContainer.querySelector(".textos").innerHTML = conteudo; // Atualiza o conteúdo
        blocoContainer.classList.remove("fade-out");
        blocoContainer.classList.add("fade-in"); // Adiciona uma classe para o efeito de fade-in
  
        setTimeout(() => {
          blocoContainer.classList.remove("fade-in");
        }, 500); // Duração do fade-in
      }, 500); // Duração do fade-out
    }
  
    // Adiciona eventos de clique para os botões
    botoes.forEach((botao) => {
      botao.addEventListener("click", function(e) {
        e.preventDefault();
        const textoBotao = botao.textContent.trim();
        if (conteudos[textoBotao]) {
          atualizarConteudo(conteudos[textoBotao]);
        }
      });
    });
  });
  document.querySelectorAll('.seletor a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Obtém os valores dos atributos data-*
        const imgSrc = this.getAttribute('data-img');
        const novoTitulo = this.getAttribute('data-title');
        const novaDescricao = this.getAttribute('data-text');
        const novoLinkTexto = this.getAttribute('data-link');

        // Seleciona os elementos que serão alterados
        const imagemAlvo = document.getElementById('imagem-alvo');
        const titulo = document.getElementById('titulo');
        const descricao = document.getElementById('descricao');
        const link = document.getElementById('link');

        // Troca o conteúdo diretamente sem transição
        imagemAlvo.src = imgSrc; // Troca a imagem
        titulo.textContent = novoTitulo; // Troca o título
        descricao.textContent = novaDescricao; // Troca a descrição
        link.textContent = novoLinkTexto; // Troca o texto do link
    });
});

  
