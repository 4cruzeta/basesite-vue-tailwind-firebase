# Visão Geral do Projeto

Este é um projeto front-end construído com Vue.js e TypeScript, usando Vite como servidor de desenvolvimento e ferramenta de compilação. O objetivo é criar uma aplicação rápida, responsiva e escalável, aproveitando a Composition API do Vue e o ambiente de desenvolvimento rápido do Vite.

# Funcionalidades e Design

*   **Página Inicial Única:** Uma página de aterrissagem visualmente atraente que apresenta os serviços oferecidos.
*   **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela, de dispositivos móveis a desktops.
*   **Estilização com Tailwind CSS:** Utiliza um design moderno com componentes estilizados através de classes de utilitário.

# Plano Atual

O plano atual é implementar a internacionalização (i18n) na aplicação para suportar múltiplos idiomas.

## Passos

1.  **Instalar `vue-i18n`**: Adicionar a biblioteca de i18n ao projeto. (Concluído)
2.  **Criar Arquivos de Tradução**: Criar arquivos JSON (`en.json`, `pt.json`) para armazenar os textos dos idiomas.
3.  **Configurar o `vue-i18n`**: Criar um arquivo de configuração para inicializar a biblioteca com os idiomas.
4.  **Integrar com a Aplicação Vue**: Registrar a instância do i18n no ponto de entrada principal do Vue (`main.ts`).
5.  **Adicionar Seletor de Idioma**: Implementar botões na interface para permitir que o usuário alterne entre os idiomas.
6.  **Abstrair Textos para Tradução**: Substituir os textos fixos no código por chaves de tradução que o `vue-i18n` possa utilizar.
