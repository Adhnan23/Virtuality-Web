# Virtuality Website

A modern web application built with Vite.js, React, Tailwind CSS, and Bun.

## Overview

Virtuality is a sleek, responsive web application that showcases virtual experiences and content. This project leverages modern web technologies to provide an optimal development experience and performant user interface.

## Tech Stack

- **Vite.js** - Fast build tool and development server
- **React** - Frontend library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Bun** - JavaScript runtime and package manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adhnan23/Virtuality-Web.git
   cd Virtuality-Web
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
bun run build
```

The build output will be generated in the `dist` directory.

## Project Structure

```
Virtuality-Web/
├── public/         # Static assets
├── src/
│   ├── assets/     # Images, fonts, etc.
│   ├── components/ # Reusable UI components
│   ├── layouts/    # Layout components
│   ├── pages/      # Page components
│   ├── routes/     # Routing configuration
│   ├── App.jsx     # Root component
│   ├── index.css   # Global styles
│   └── main.jsx    # Entry point
├── index.html      # HTML template
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Customization

### Tailwind CSS

This project uses Tailwind CSS for styling. You can customize the default theme by editing the `tailwind.config.js` file.

### Adding New Pages

Create new page components in the `src/pages` directory and add routes in your routing configuration in the `src/routes` directory.

## Deployment

This project can be deployed to various platforms:

1. Build the project:
   ```bash
   bun run build
   ```

2. Deploy the `dist` directory to your hosting service of choice.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Vite.js](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bun](https://bun.sh/)

## Tutorial

For a detailed guide on building this project from scratch, visit the tutorial at [GitHub](https://github.com/Adhnan23/Virtuality-Web).

---

Created with ❤️ by [Adhnan23](https://github.com/Adhnan23)