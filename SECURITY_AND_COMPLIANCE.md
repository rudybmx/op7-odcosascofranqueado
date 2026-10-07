# Segurança e Conformidade (Security & Compliance) - LP OdontoCompany Franqueados

Este documento detalha as medidas de segurança de dados, privacidade (LGPD) e conformidade ética e profissional (CFO) implementadas na Landing Page Modelo para os Franqueados da OdontoCompany.

---

## 1. Proteção de Dados e Privacidade (LGPD)

O projeto foi construído sob o princípio de *Privacy by Design* (privacidade desde a concepção), tratando dados pessoais de potenciais pacientes com o mais alto nível de rigor e segurança.

### 1.1 Coleta Mínima de Dados (*Data Minimization*)
* **Escopo:** O formulário de pré-agendamento captura apenas dados estritamente necessários para o contato inicial e qualificação do lead: **Nome Completo**, **Número de WhatsApp (Telefone)** e **Tratamento de Interesse**.
* **Finalidade:** O tratamento desses dados tem como base legal o **consentimento** do usuário (para iniciar a conversa de agendamento) e procedimentos preliminares para a execução de um contrato de prestação de serviços odontológicos.

### 1.2 Redirecionamento Direto via WhatsApp
* Para evitar o armazenamento local desnecessário de dados altamente sensíveis em bancos de dados não autorizados pelos franqueados, os dados preenchidos no formulário são convertidos diretamente em uma string de consulta e enviados via protocolo seguro HTTPS para a API oficial do WhatsApp (`https://api.whatsapp.com`).
* Nenhum dado de lead é armazenado localmente em arquivos temporários ou localStorage do navegador do usuário.

### 1.3 Cookies e Rastreamento
* O projeto foi estruturado de forma a aceitar ferramentas externas de analítica de forma passiva. 
* Recomendamos a instalação de um Banner de Consentimento de Cookies (Cookie Consent) caso scripts de pixel (Meta Pixel, Google Analytics, etc.) sejam adicionados para rastreamento de conversão em campanhas pagas, permitindo que o usuário dê opt-in/opt-out.

---

## 2. Conformidade com o Conselho Federal de Odontologia (CFO)

A publicidade odontológica no Brasil é regulada pelo **Código de Ética Odontológica (Resolução CFO-118/2012)**. Esta Landing Page segue estritamente todas as diretrizes éticas obrigatórias:

### 2.1 Identificação do Responsável Técnico (Obrigatório)
* O rodapé de todas as variações de unidade exibe de forma clara e visível o **Nome do Diretor Clínico (Responsável Técnico)** e seu respectivo número de registro no **Conselho Regional de Odontologia (CRO)**.
* Exibição clara da razão social ou nome fantasia da unidade juntamente com o **CNPJ**.

### 2.2 Transparência nas Fotos e Imagens
* Todas as fotos utilizadas para ilustrar tratamentos, estrutura e dentistas são imagens ilustrativas licenciadas ou fotos autorizadas de profissionais reais da rede.
* O design **evita o uso de imagens de "Antes e Depois" de tratamentos**, prática restrita pelo CFO, a fim de evitar promessas infundadas de resultado e garantir uma publicidade puramente informativa e preventiva.

### 2.3 Proibição de Promoções Abusivas
* A copy e os textos da página focam na promoção de saúde, prevenção, tecnologia e credibilidade da rede.
* O conteúdo não divulga preços de tratamentos, gratuidades, sorteios ou qualquer artifício comercial que caracterize a mercantilização da odontologia, em total conformidade com as regras do conselho de classe.

---

## 3. Segurança Técnica da Interface

* **Protocolo de Comunicação:** Todo o tráfego do site deve ser servido sob **HTTPS** utilizando criptografia TLS moderna.
* **Política de Segurança de Conteúdo (CSP):** Recomendamos a configuração de cabeçalhos HTTP CSP no servidor de hospedagem para evitar ataques de injeção de scripts (XSS).
* **Sanitização de Inputs:** O input de telefone/WhatsApp é filtrado via expressão regular (`\D`) para garantir que apenas caracteres numéricos válidos sejam utilizados, mitigando possíveis falhas de injeção.
