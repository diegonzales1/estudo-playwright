# Projeto Playwright - QAzando

Esta branch contém exemplos práticos aprendidos durante o curso de Playwright da QAzando. O objetivo é reunir scripts, comandos e estruturas utilizadas nas aulas para facilitar o estudo e revisão dos principais conceitos.

## Estrutura do Projeto

- **tests/**: Pasta com os arquivos de testes automatizados, cada arquivo cobre um tema ou funcionalidade específica do Playwright.
- **playwright.config.js**: Arquivo de configuração do Playwright, onde são definidos browsers, diretórios de relatórios, timeout, etc.
- **playwright-report/**: Relatórios gerados após a execução dos testes.
- **screenshot/**: Imagens capturadas durante os testes.
- **test-results/**: Resultados detalhados das execuções, incluindo erros e contexto.

## Exemplos de Comandos Aprendidos

### Executar todos os testes
```bash
npx playwright test
```

### Executar um teste específico
```bash
npx playwright test tests/example.spec.js
```

### Executar testes em um navegador específico
```bash
npx playwright test --project=firefox
```

### Gerar relatório dos testes
```bash
npx playwright show-report
```

### Tirar screenshot de um elemento
```js
await page.screenshot({ path: 'screenshot/element.png', fullPage: false });
```

### Configurar diferentes resoluções
```js
// No arquivo de teste
await page.setViewportSize({ width: 1280, height: 720 });
```

## Temas Abordados nas Aulas
- Antes e depois dos testes (hooks)
- Testes com diferentes resoluções
- Geolocalização
- Screenshots simples e de elementos
- Scroll para elementos
- Tags nos testes

## Como começar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute os testes:
   ```bash
   npx playwright test
   ```
3. Veja o relatório:
   ```bash
   npx playwright show-report
   ```

---

Este projeto é apenas para fins de estudo e prática dos conceitos do Playwright conforme ensinados no curso da QAzando.