
  const projects = [
    {
      num:"Pitchy", year:"2026", tags:"App · UI/UX Designer & Scrum Master",
      title:"Pitchy",
      p1:"Pitchy é um aplicativo desenvolvido para ajudar pessoas a praticarem e aprimorarem suas habilidades de apresentação. O app permite treinar diferentes tipos de pitch, gravar apresentações, acompanhar slides e receber feedback personalizado por inteligência artificial.",
      p2html:'Atuei como UI/UX Designer e Scrum Master, trabalhando na experiência e nas interfaces do aplicativo em parceria com <a href="https://www.linkedin.com/search/results/all/?keywords=Alice%20Lob%C3%A3o" target="_blank" rel="noopener">Alice Lobão</a> (UI/UX), <a href="https://www.linkedin.com/search/results/all/?keywords=Giovanna%20Castro" target="_blank" rel="noopener">Giovanna Castro</a> e <a href="https://www.linkedin.com/search/results/all/?keywords=Yuri%20Alc%C3%A2ntara" target="_blank" rel="noopener">Yuri Alcântara</a> (Desenvolvimento), com foco em usabilidade e acessibilidade, incluindo suporte ao VoiceOver e aos modos Dark e Light.',
      link:'<a href="https://lnkd.in/dDt4FqGr" target="_blank" rel="noopener">Disponível na App Store →</a>',
      img:"pitchy"
    },
    {
      num:"Higly", year:"2026", tags:"App · UI/UX Designer & Product Owner",
      title:"Higly",
      p1:"Higly é um aplicativo criado para facilitar o aprendizado e a aplicação das Human Interface Guidelines (HIG) no desenvolvimento de interfaces para o ecossistema Apple. A experiência combina conteúdo teórico com uma dinâmica prática e gamificada, permitindo que o usuário aprenda e coloque seus conhecimentos em prática de forma interativa.",
      p2html:'Atuei como UI/UX Designer e Product Owner, sendo a única designer do projeto e responsável pela experiência e interfaces do aplicativo, além da organização e direcionamento do produto. O projeto foi desenvolvido em parceria com <a href="https://www.linkedin.com/search/results/all/?keywords=Gustavo%20Monteiro" target="_blank" rel="noopener">Gustavo Monteiro</a>, <a href="https://www.linkedin.com/search/results/all/?keywords=Bernardo%20Souza" target="_blank" rel="noopener">Bernardo Souza</a> e <a href="https://www.linkedin.com/search/results/all/?keywords=Ana%20Soares" target="_blank" rel="noopener">Ana Soares</a> (Desenvolvimento). Desenvolvido durante um challenge da Apple Developer Academy do IFCE, atualmente disponível em TestFlight, em fase de testes antes do lançamento na App Store.',
      link:'',
      img:"higly"
    },
    {
      num:"Modoke", year:"2024", tags:"Plataforma · Líder de equipe & UI/UX Designer",
      title:"Modoke",
      p1:"Plataforma educacional voltada à acessibilidade na web, desenvolvida para capacitar programadores sobre conceitos de acessibilidade e sua aplicação prática no código. O projeto foi realizado durante a disciplina de Projeto Integrado I, com foco em tornar o aprendizado mais acessível, claro e aplicável.",
      p2html:'Atuei como líder de equipe e UI/UX Designer, em parceria com <a href="https://www.linkedin.com/search/results/all/?keywords=Let%C3%ADcia%20Rodrigues" target="_blank" rel="noopener">Letícia Rodrigues</a> e <a href="https://www.linkedin.com/search/results/all/?keywords=Ana%20Let%C3%ADcia%20Costa" target="_blank" rel="noopener">Ana Letícia Costa</a> (Design), <a href="https://www.linkedin.com/search/results/all/?keywords=Jo%C3%A3o%20Marcos" target="_blank" rel="noopener">João Marcos</a> (Desenvolvimento) e <a href="https://www.linkedin.com/search/results/all/?keywords=Mateus%20Pinheiro" target="_blank" rel="noopener">Mateus Pinheiro</a> (Audiovisual).',
      link:'<a href="https://drive.google.com/drive/folders/1FWb5YSMH3FDK7EWMc5qwRzA9XnOL5Gyt" target="_blank" rel="noopener">Vídeos →</a> &nbsp;·&nbsp; <a href="https://www.figma.com/design/dJkaCCcQBxpmwbF09qX7yn/Prot%C3%B3tipos?node-id=0-1" target="_blank" rel="noopener">Protótipos no Figma →</a>',
      img:"modoke"
    }
  ];

  const imgSrc = {
    pitchy: document.querySelector('[data-project="0"] .thumb img').src,
    higly: document.querySelector('[data-project="1"] .thumb img').src,
    modoke: document.querySelector('[data-project="2"] .thumb img').src
  };

  const overlay = document.getElementById('modal-overlay');
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalTags = document.getElementById('modal-tags');
  const modalP1 = document.getElementById('modal-p1');
  const modalP2 = document.getElementById('modal-p2');
  const modalLink = document.getElementById('modal-link');

  function openModal(index){
    const p = projects[index];
    modalImg.src = imgSrc[p.img];
    modalImg.alt = p.title;
    modalBadge.textContent = p.year;
    modalTitle.textContent = p.title;
    modalTags.textContent = p.tags;
    modalP1.textContent = p.p1;
    modalP2.innerHTML = p.p2html;
    modalLink.innerHTML = p.link;
    overlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeModal(){
    overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('click', ()=> openModal(parseInt(card.dataset.project)));
  });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e=>{ if(e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeModal(); });
