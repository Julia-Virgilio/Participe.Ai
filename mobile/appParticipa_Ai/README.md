# appParticipa_Ai

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta para facilitar o desenvolvimento, build, e deploy de apps com React Native.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript
- **Node.JS**: Ambiente de execução de JavaScript no servidor.

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento e rodar o aplicativo localmente.

### Pré-requisitos

- Node.js e npm instalados. Você pode baixá-los [aqui](https://nodejs.org/).
- Expo CLI instalada globalmente:



### Instalar o Expo Go

- Baixe o aplicativo Expo Go na [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779) ou [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent).
- Abra o aplicativo e permita que ele acesse sua localização.


## Clonar o repositorio: 
```
 git clone https://github.com/herculesoliveira40/appParticipa_Ai.git
```

## Instalar dependecias pacotes Node:
```
 npm install
```

## Executando o Aplicativo:
```
 npx expo start
```

### Conectar ao Wi-Fi

- Certifique-se de que seu dispositivo móvel e seu computador estão conectados à mesma rede Wi-Fi.

### Escanear o QR Code no Mesmo Wi-Fi

- Abra o aplicativo Expo Go no seu dispositivo móvel.
- No terminal do seu computador, você verá um QR code. Escaneie esse QR code com o aplicativo Expo Go.
- O aplicativo será carregado no seu dispositivo móvel e você poderá ver as mudanças em tempo real enquanto desenvolve.


### Login e senha já estão preenchidos:
```
 Email: email@test.com 
 Senha: 1234
```



### Descrição dos Diretórios

```bash
root
├── global
│   └── themes.tsx       # Definições de temas globais
├── src
│   ├── assets           # Recursos estáticos como imagens, fontes, etc.
│   ├── components       # Componentes reutilizáveis do aplicativo
│   ├── pages ou screens # Telas do aplicativo
│   ├── routes           # Configuração das rotas
│   ├── @types           # Definições de tipos TypeScript
│   ├── routes           # Configuração da navegação
├── App.tsx              # Componente principal do aplicativo
├── app.json             # Configuração do Expo
├── package.json         # Dependências e scripts do npm
├── tsconfig.json        # Configurações do TypeScript

