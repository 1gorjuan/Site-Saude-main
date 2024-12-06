document.getElementById('pesquisar').addEventListener('click', () => {
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const especialidade = document.getElementById('especialidade').value;
  
    // Validação simples para verificar se os campos obrigatórios estão preenchidos
    if (!estado || !cidade || !especialidade) {
      alert('Por favor, preencha todos os campos antes de pesquisar.');
      return;
    }
  
    // Se os campos estiverem preenchidos, exibe a seção de resultados
    document.getElementById('results').style.display = 'block';
    });
  
  // Exibir o pop-up de agendamento ao clicar no botão "Agendar"
  document.querySelectorAll('.agendamento').forEach((button) => {
    button.addEventListener('click', () => {
      document.getElementById('popup-agendamento').style.display = 'flex';
    });
  });
  
  // Confirmar agendamento
  document.getElementById('confirmar-agendamento').addEventListener('click', () => {
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
  
    if (!data || !hora) {
      alert('Por favor, selecione uma data e um horário.');
      return;
    }
  
    // Fecha o pop-up de agendamento e abre o pop-up de sucesso
    document.getElementById('popup-agendamento').style.display = 'none';
    document.getElementById('popup-confirmar').style.display = 'flex';
  });
  
  // Cancelar agendamento (fechar o pop-up de agendamento)
  document.getElementById('fechar-popup').addEventListener('click', () => {
    document.getElementById('popup-agendamento').style.display = 'none';
  });
  
  // Fechar pop-up de confirmação
  document.getElementById('fechar-confirmar').addEventListener('click', () => {
    document.getElementById('popup-confirmar').style.display = 'none';
  });
  // Garantir que o DOM esteja carregado antes de registrar os eventos
  document.addEventListener('DOMContentLoaded', () => {
    // Exibir resultados ao clicar no botão "Pesquisar"
    document.getElementById('pesquisar').addEventListener('click', () => {
      const estado = document.getElementById('estado').value;
      const cidade = document.getElementById('cidade').value;
      const especialidade = document.getElementById('especialidade').value;
  
      // Validação simples para verificar se os campos obrigatórios estão preenchidos
      if (!estado || !cidade || !especialidade) {
        alert('Por favor, preencha todos os campos antes de pesquisar.');
        return;
      }
  
      // Se os campos estiverem preenchidos, exibe a seção de resultados
      document.getElementById('results').style.display = 'block';
    });
  
    // Exibir o pop-up de agendamento ao clicar no botão "Agendar"
    document.querySelectorAll('.agendamento').forEach((button) => {
      button.addEventListener('click', () => {
        const popupAgendamento = document.getElementById('popup-agendamento');
        if (popupAgendamento) {
          popupAgendamento.style.display = 'flex';
        } else {
          console.error('Pop-up de agendamento não encontrado.');
        }
      });
    });
  
    // Confirmar agendamento
    document.getElementById('confirmar-agendamento').addEventListener('click', () => {
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
  
      if (!data || !hora) {
        alert('Por favor, selecione uma data e um horário.');
        return;
      }
  
      // Fecha o pop-up de agendamento e abre o pop-up de sucesso
      const popupAgendamento = document.getElementById('popup-agendamento');
      const popupConfirmar = document.getElementById('popup-confirmar');
  
      if (popupAgendamento && popupConfirmar) {
        popupAgendamento.style.display = 'none';
        popupConfirmar.style.display = 'flex';
      } else {
        console.error('Pop-up de agendamento ou confirmação não encontrado.');
      }
    });
  
    // Cancelar agendamento (fechar o pop-up de agendamento)
    document.getElementById('fechar-popup').addEventListener('click', () => {
      const popupAgendamento = document.getElementById('popup-agendamento');
      if (popupAgendamento) {
        popupAgendamento.style.display = 'none';
      } else {
        console.error('Pop-up de agendamento não encontrado.');
      }
    });
  
    // Fechar pop-up de confirmação
    document.getElementById('fechar-confirmar').addEventListener('click', () => {
      const popupConfirmar = document.getElementById('popup-confirmar');
      if (popupConfirmar) {
        popupConfirmar.style.display = 'none';
      } else {
        console.error('Pop-up de confirmação não encontrado.');
      }
      });
    });