# Frontend Vue App Build Setup

Firstly clone or download repo and install all npm dependencies with:
``` bash
npm install
```

Now serve the app with hot reload at `localhost:8080` with:
``` bash
npm run dev
```

If you want to change the port open `config/index.js` and change port value withing dev object.

All requests within the app that start with `/api` are redirected to the `http://localhost:3000` which should be the backend API.
You can change proxy setting by opening the `config/index.js` and changing proxyTable object values.

### Backend App Repo Link - https://github.com/gregos919/backend-app