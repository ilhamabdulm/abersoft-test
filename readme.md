# Abersoft Test

#### Tech used
Frontend : [React Native](https://reactnative.dev) and [Expo](https://expo.io)
Backend : NodeJs (ExpressJs), MySQL (Sequelize)

## SERVER
- Open Config file at > server/config/config.json
- Change username and password with your configuration
- Change env-template.txt into .env file and fill the env.

Run Program
```bash
cd server
sudo npm sequelize-cli -g ##if you dont have sequelize cli on your device
npm install
npm run migrate
npm run dev
```

## CLIENT
- Open Config Server file at > client/src/config/server
- Change BASE_URL into your local ip url

Run Program
```bash
cd client
npm install
expo start
```

### Screenshot

![Image1](https://github.com/ilhamabdulm/abersoft-test/blob/master/screenshot/ss-1-welcome.jpeg)
![Image2](https://github.com/ilhamabdulm/abersoft-test/blob/master/screenshot/ss-2-register.jpeg)
![Image3](https://github.com/ilhamabdulm/abersoft-test/blob/master/screenshot/ss-3-login.jpeg)
![Image4](https://github.com/ilhamabdulm/abersoft-test/blob/master/screenshot/ss-4-main.jpeg)