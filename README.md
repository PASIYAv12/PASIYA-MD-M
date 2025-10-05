pasiya-md-translator/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  ├─ auth.controller.js
│  │  │  ├─ translate.controller.js
│  │  │  └─ payments.controller.js
│  │  ├─ services/
│  │  │  ├─ asr.service.js        # speech->text
│  │  │  ├─ translate.service.js  # translate
│  │  │  ├─ tts.service.js        # text->speech
│  │  │  └─ payments.service.js
│  │  ├─ models/
│  │  │  ├─ User.js
│  │  │  ├─ Usage.js
│  │  │  └─ Payment.js
│  │  ├─ routes/
│  │  │  ├─ api.js
│  │  │  └─ admin.js
│  │  ├─ bot/
│  │  │  └─ telegramBot.js
│  │  └─ app.js
│  ├─ package.json
│  └─ Procfile
├─ frontend/   # optional simple dashboard (React)
└─ README.md
