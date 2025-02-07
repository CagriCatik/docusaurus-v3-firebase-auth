# Docusaurus v3 Firebase Auth

This project is a documentation website built with [Docusaurus v3](https://docusaurus.io) that integrates [Firebase Authentication](https://firebase.google.com/docs/auth) using Google Sign-In. The Firebase configuration is securely managed via environment variables, which are injected at build time using a custom Webpack plugin.

## Features

- **Docusaurus v3:** Modern static site generation for documentation.
- **Firebase Authentication:** Secure your site using Google Sign-In.
- **Environment Variable Injection:** Securely load Firebase configuration from a `.env` file using a custom Webpack plugin with Webpack’s DefinePlugin.
- **Customizable:** Easily update documentation, blog posts, and theming via Docusaurus presets and custom CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later) and npm installed.
- A Firebase project with Authentication enabled (Google Sign-In recommended).
- Basic knowledge of Docusaurus and Firebase.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/docusaurus-v3-firebase-auth.git
cd docusaurus-v3-firebase-auth
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase Securely

#### a. Create a `.env` File

In the root of your project, create a file named `.env` and add your Firebase configuration values. For example:

```dotenv
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```

*Note:* Although Firebase API keys are not secret (Firebase keys are intended to be public), storing them in a `.env` file keeps them out of your source code repository. **Make sure to add `.env` to your `.gitignore` file.**

#### b. Custom Webpack Plugin for Environment Variables

A custom plugin in `src/plugins/define-env-plugin.js` is used to inject these variables at build time via Webpack’s DefinePlugin. This plugin automatically replaces references like `process.env.FIREBASE_API_KEY` in your client code with the actual values from your `.env` file.

### 4. Run the Development Server

Start your Docusaurus site locally with:

```bash
npm run start
```

Your site should now be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`src/theme/firebase.js`**  
  Contains the Firebase initialization and authentication functions (Google sign-in and sign-out). It uses environment variables for configuration.

- **`src/plugins/define-env-plugin.js`**  
  A custom Webpack plugin that injects environment variables into your client bundle using Webpack’s DefinePlugin.

- **`docusaurus.config.js`**  
  Main Docusaurus configuration file that sets up presets, theme configuration, navbar, footer, and registers the custom Webpack plugin.

- **`/src/`**  
  Contains additional custom pages, components, and styles for your site.

## Firebase Setup

1. **Enable Authentication:**  
   In your Firebase Console, go to **Authentication** > **Sign-in method** and enable Google Sign-In (or any other method you prefer).

2. **Add a Web App:**  
   Under **Project Settings > General**, add a new Web App if you haven’t done so. Copy the configuration values to your `.env` file.

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

You can then serve the production build locally with:

```bash
npm run serve
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have improvements, new features, or bug fixes.

### Final Notes

- **Security:**  
  The Firebase configuration is injected via environment variables. Ensure your `.env` file is secure and not committed to version control.

- **Customization:**  
  Customize the project further by modifying the Docusaurus configuration and adding new documentation pages or blog posts.

By following this README, users and contributors will know how to set up, run, and build your Docusaurus Firebase authentication project securely.
