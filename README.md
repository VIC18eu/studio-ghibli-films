# 🎬 Studio Ghibli Films App

## 📝 Descrição
Aplicação em **React + Tailwind CSS** que consome a **Studio Ghibli API** e exibe informações sobre os filmes do estúdio de forma simples, moderna e interativa.

Funcionalidades principais:
- 📜 Listagem de todos os filmes da Studio Ghibli  
- 🔍 Pesquisa por título, diretor ou ano de lançamento  
- 🎞️ Visualização de detalhes de cada filme num **modal elegante**  
- ⚠️ Tratamento de erros e carregamento dinâmico  

---

## 🌐 API Utilizada
**API:** [Studio Ghibli API](https://ghibliapi.vercel.app/)  
**Endpoint:** `https://ghibliapi.vercel.app/films`  

**Campos utilizados:**
- `title` → Título  
- `description` → Descrição  
- `director` → Diretor  
- `producer` → Produtor  
- `release_date` → Ano de lançamento  
- `movie_banner` / `image` → Imagem do filme  

A API é **gratuita**, **sem autenticação** e **sem restrições de CORS**.

---

## 🛠️ Tecnologias
- **React.js (Vite)**  
- **Tailwind CSS**  
- **Componentes personalizados:** `Card`, `Modal`, `SearchBar`

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/VIC18eu/studio-ghibli-films.git
cd studio-ghibli-films
