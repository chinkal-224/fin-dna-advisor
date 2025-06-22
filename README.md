# FinDNA Advisor - Smart Financial Planning

FinDNA Advisor is an AI-powered financial advisor platform that provides smart investment decisions and comprehensive financial planning solutions.

## Features

- 🤖 AI-powered chatbot for financial advice
- 📈 Stock prediction and analysis
- 💰 Investment recommendations
- 📊 Portfolio management insights
- 🛡️ Risk assessment and planning
- 💳 Financial planning tools

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Start the backend server:
```sh
cd backend
npm install
npm start
```

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI/ML**: Custom stock prediction models
- **Database**: MongoDB (for chat storage)

## Project Structure

```
├── src/                 # Frontend React application
├── backend/            # Backend Node.js server
│   ├── ai/            # AI models and stock prediction
│   ├── controllers/   # API controllers
│   ├── models/        # Database models
│   └── routes/        # API routes
├── public/            # Static assets
└── components/        # Reusable UI components
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
