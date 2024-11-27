// Reference the buttons and containers
const vueButton = document.getElementById('load-vue') as HTMLButtonElement;
const reactButton = document.getElementById('load-react') as HTMLButtonElement;
const goBackButton = document.getElementById('go-back') as HTMLButtonElement;
const menu = document.getElementById('menu') as HTMLElement;
const appContainer = document.getElementById('app') as HTMLElement;
const rootContainer = document.getElementById('root') as HTMLElement;

let vueApp: ReturnType<typeof import('vue')['createApp']> | null = null; // Reference to the Vue app instance
let reactRoot: any | null = null; // Reference to the React root

// Show the menu and hide the app containers
function showMenu(): void {
  menu.style.display = 'block';
  goBackButton.style.display = 'none';

  // Clean up Vue and React apps
  if (vueApp) {
    vueApp.unmount(); // Unmount Vue app
    vueApp = null; // Clear reference
  }

  if (reactRoot) {
    reactRoot.unmount(); // Unmount React app
    reactRoot = null; // Clear reference
  }

  appContainer.innerHTML = '';
  rootContainer.innerHTML = '';
}

// Hide the menu and show the Go Back button
function showApp(): void {
  menu.style.display = 'none';
  goBackButton.style.display = 'block';
}

// Load Vue app
vueButton.addEventListener('click', async () => {
  showApp(); // Hide menu and show Go Back button

  // Dynamically import and mount Vue app
  const { createApp } = await import('vue');
  const App = (await import('./main.ts')).default; // Assumes Vue app entry exports default component

  // Clean up any existing Vue app
  if (vueApp) {
    vueApp.unmount();
  }

  vueApp = createApp(App); // Create new Vue app
  vueApp.mount('#app');
});

// Load React app
reactButton.addEventListener('click', async () => {
  showApp(); // Hide menu and show Go Back button

  // Dynamically import and render React app
  const React = await import('react');
  const ReactDOM = await import('react-dom/client');
  const App = (await import('./main.tsx')).default; // Assumes React app entry exports default component

  // Clean up any existing React app
  if (reactRoot) {
    reactRoot.unmount();
  }

  reactRoot = ReactDOM.createRoot(rootContainer); // Create or reuse root
  reactRoot.render(React.createElement(App)); // Render React app
});

// Go back to the menu
goBackButton.addEventListener('click', showMenu);
