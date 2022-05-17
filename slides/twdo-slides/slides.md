---
highlighter: shiki
lineNumbers: false
aspectRatio: "16/10"
---

# twdo

---

## Minimundo

O twdo é um organizador pessoal de tarefas minimalista, pensado em ser um ambiente simples e livre de distrações, de maneira que o usuário possa focar no que realmente precisa ser feito. Ele faz isso através de uma interface limpa, fácil de entender e agradável de utilizar. Ele permite que o usuário crie uma conta (utilizando e-mail pessoal ou conta existente no GitHub) e já comece a criar suas tarefas. As tarefas podem ser agrupadas em projetos e arrastadas ao longo da tela para ordená-las. Dependendo da direção que o usuário arraste a tarefa, ela pode ser adicionada para um projeto ou iniciar um timer pomodoro para a realização da tarefa. O aplicativo também conta com uma área reservada para as tarefas do dia atual (que possui também informações relacionadas à temperatura), de maneira que o usuário possa configurar um envio automático de e-mail para avisá-lo das tarefas que ele organizou para aquele dia. As tarefas também ser agendadas para serem realizadas em um determinado dia, com uma área dedicada do aplicativo para listar essas tarefas.

---

## Requisitos Funcionais<span> ></span> <h3>Projetos e Tarefas</h3>

| RF   | Descrição                                                                             |
| ---- | ------------------------------------------------------------------------------------- |
| RF2  | O sistema deve permitir que o usuário crie uma Tarefa                                 |
| RF3  | O sistema deve permitir que o usuário liste as Tarefas dele agendadas para aquele dia |
| RF4  | O sitema deve permitir que o usuário liste as Tarefas agendadas para dias futuros     |
| RF5  | O sitema deve permitir que o usuário marque uma Tarefa como feita                     |
| RF6  | O sitema deve permitir que o usuário edite a descrição e as datas de uma Tarefa       |
| RF7  | O sistema deve permitir que o usuário agrupe Tarefas em um Projeto                    |
| RF8  | O sistema deve permitir que o usuário veja seus Projetos atuais                       |
| RF9  | O sistema deve permitir que o usuário edite as Tarefas de seus Projetos               |
| RF10 | O sistema deve permitir que o usuário edite o nome de seus Projetos                   |

---

## Requisitos Funcionais<span> ></span> <h3>Conta e Autenticação</h3>

| RF   | Descrição                                                                                                                                                      |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF1  | O sitema deve permitir autenticação com Github                                                                                                                 |
| RF11 | O sistema deve permitir que o usuário crie uma conta utilizando email ou através de oAuth com conta do Github                                                  |
| RF12 | O sistema deve exigir que o usuário esteja logado no sistema para acessar quaisquer funcionalidades relacionadas à Tarefas, Projetos ou Configurações de Conta |
| RF13 | O sistema deve permitir que o usuário se autentique fornecendo um endereço de email e senha ou utilizando uma conta do Github                                  |
| RF14 | O sistema deve permitir que o usuário delete sua própria conta                                                                                                 |
| RF15 | O sistema deve permitir que o usuário altere o email da sua própria conta                                                                                      |

---

## Requisitos Funcionais<span> ></span> <h3>Features e Armazenamento</h3>

| RF   | Descrição                                                                                                                               |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| RF16 | O sistema deve permitir que o usuário configure um envio de email automático para lembrá-lo das suas Tarefas agendadas para o dia atual |
| RF17 | O sistema deve armazenar os registros de Usuários, Tarefas e Projetos em banco de dados próprio                                         |
| RF18 | O sistema deve permitir que o usuário escolha entre tema claro ou escuro                                                                |
| RF19 | O sistema deve permitir que o usuário utilize um timer pomodoro                                                                         |
