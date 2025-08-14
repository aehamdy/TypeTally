# TypeTally

A modern, intuitive character counting application built with React, TypeScript, and Tailwind CSS. TypeTally helps writers, developers, and content creators track their text length with real-time feedback and advanced features.

## ✨ Features

- **Real-time Character Counting**: Instant feedback as you type
- **Flexible Limits**: Choose from preset limits (250, 400 characters) or set custom values
- **Visual Feedback**: Color-coded remaining character count (red when exceeded)
- **Text Highlighting**: Visual distinction between text within and beyond limits
- **Copy to Clipboard**: One-click text copying with visual confirmation
- **Clear Text**: Quick text clearing functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aehamdy/TypeTally.git
cd TypeTally
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.1.2
- **Code Quality**: ESLint with TypeScript support

## 📁 Project Structure

```
type-tally/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── DropdownSelector.tsx    # Character limit selection dropdown
│   │   ├── Header.tsx              # Application header
│   │   ├── Logo.tsx                # TypeTally logo component
│   │   ├── MainContent.tsx         # Main application layout
│   │   └── TextArea.tsx            # Enhanced textarea with features
│   ├── App.tsx                     # Root application component
│   ├── App.css                     # Application styles
│   ├── index.css                   # Global styles
│   └── main.tsx                    # Application entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite configuration
```

## 🎯 How to Use

1. **Select Character Limit**: Choose from preset options (250, 400 characters) or select "Enter Custom Value" to set your own limit
2. **Enter Custom Limit**: If you selected custom, enter your desired character count in the input field
3. **Start Typing**: Begin typing in the text area to see real-time character counting
4. **Monitor Progress**: Watch the character count and remaining characters update as you type
5. **Visual Feedback**: Text exceeding the limit will be highlighted, and remaining count turns red when negative
6. **Copy Text**: Click the clipboard icon to copy your text to the clipboard
7. **Clear Text**: Click the trash icon to clear all text instantly

## 🎨 Features in Detail

### Character Limit Selection
- Dropdown interface with preset options
- Custom value input for flexible limits
- Real-time limit updates

### Enhanced Text Area
- Syntax highlighting for character limits
- Smooth scrolling synchronization
- Responsive design with proper scaling

### Action Panel
- **Copy Button**: Clipboard icon that transforms to a green checkmark on successful copy
- **Clear Button**: Trash icon with red hover effect for text clearing
- **Visual Feedback**: Animated "Copied to clipboard" notification

### Real-time Statistics
- Current character count display
- Remaining characters calculation
- Color-coded feedback (red when limit exceeded)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ahmed Hamdy** - [GitHub](https://github.com/aehamdy)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/) for modern design
- Icons from [Heroicons](https://heroicons.com/) for consistent UI elements
