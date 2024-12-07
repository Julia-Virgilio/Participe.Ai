import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  questions = [
    {
      title: 'COMO FAÇO PARA ENTRAR EM CONTATO?',
      content:
        'Você pode entrar em contato com a Embasa pelo WhatsApp no número (xx) xxxxx-xxxx, onde é possível consultar faturas, solicitar segunda via, relatar problemas e obter outros serviços. Outra opção é o SAC pelo telefone xxxx xxx xxxx, que oferece suporte ao consumidor para dúvidas e reclamações.',
      open: true,
    },
    {
      title: 'QUAIS SÃO OS TIPOS DE SUPORTE OFERECIDO?',
      content: 'Descrição dos tipos de suporte oferecidos...',
      open: false,
    },
    {
      title: 'QUAL O TEMPO MÉDIO DE RESPOSTA?',
      content: 'O tempo médio de resposta é...',
      open: false,
    },
    {
      title: 'EXISTEM PACOTES OU PLANOS?',
      content: 'Sim, existem diversos pacotes disponíveis...',
      open: false,
    },
  ];

  formData = {
    type: '',
    name: '',
    email: '',
    message: '',
  };

  toggleAccordion(question: any) {
    question.open = !question.open;
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Implementar lógica de envio
  }
}
