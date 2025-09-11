# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# My Portfolio 🚀

An interactive personal portfolio built with **React, TailwindCSS, Framer Motion, and Three.js**.  
It features a **futuristic ChromeGrid background**, smooth **scroll-based containers**, and an integrated **AI Chatbot** powered by **Botpress**.  

---

## ✨ Features

- 🎨 **ChromeGrid Background** – Interactive 3D grid of boxes built with Three.js.  
- 📜 **ContainerScroll Layout** – Scroll-driven animations with depth & perspective.  
- 🤖 **AI Chatbot Integration** – Botpress-powered assistant available on all pages.  
- 📱 **Mobile-First & Responsive** – Optimized for both smartphones and desktop.  
- ⚡ **Performance Optimized** – Lazy loading sections + instanced mesh rendering.  

---

## 🧩 Components Breakdown

### 1. **ChromeGrid**  
📌 Source/Reference: [21st.dev – ChromeGrid](https://21st.dev/community/components/66hex/chrome-grid/default)  

- Implemented with **Three.js** + **React Three Fiber**.  
- Displays a grid of extruded 3D boxes with hover interaction (ripple effect).  
- Optimized with **`InstancedMesh`** for performance.  
- Runs as a **fixed background layer** (`inset-0 z-0`) so other content scrolls above it.  
- Customization: lighting, hover scale, ripple radius, and color scheme.  

🔧 **Usage in Project:**  
- Serves as the **universal animated background** for the site.  
- Creates a futuristic aesthetic for all sections.  

---

### 2. **ContainerScroll**  
📌 Source/Reference: [21st.dev – Container Scroll Animation](https://21st.dev/community/components/aceternity/container-scroll-animation/default)  

- Built with **Framer Motion**’s `useScroll` and `useTransform`.  
- Adds **parallax-like animations** as you scroll:  
  - Cards tilt (`rotateX`)  
  - Smooth scaling (`scale`)  
  - Vertical translation (`translateY`)  
- Provides each **section container** with depth & cinematic transitions.  

🔧 **Usage in Project:**  
- Wraps every portfolio section (Hero, About, Projects, Experience, Contact).  
- Ensures consistent scroll-based animations across the entire site.  

---

### 3. **Hero Section**  
- A **scrollable container** introducing you:  
  - 👋 Greeting headline  
  - Summary of role (Full-Stack Developer)  
  - Downloadable Resume button  

---

### 4. **About Me Section**  
- Faux-resume style presentation:  
  - Name, education, certifications, and skills  
  - Inspirational quote in italics  

---

### 5. **Projects Section**  
- Showcases 4 main repos:  
  - `my-portfolio`  
  - `TaifaMobileBulkSMS`  
  - `LaravelERP`  
  - `SimpleTaskManager`  
- Each project is displayed in a **card layout** with hover animations.  

---

### 6. **Experience Section**  
- Highlights **internships** and **leadership roles**.  

---

### 7. **Contact Section**  
- Provides key contact info:  
  - Email  
  - GitHub  
  - LinkedIn  
- Works alongside the chatbot for multiple ways to reach you.  

---

### 8. **AI Chatbot (Botpress)**  
- Integrated via **Botpress Cloud Webchat v3.2**.  
- Injected dynamically with:  
  ```js
  await injectScript("https://cdn.botpress.cloud/webchat/v3.2/inject.js")
  await injectScript("https://files.bpcontent.cloud/<your-bot-id>.js")
- Provides:

- Project navigation help

- Contact info delivery

- General portfolio Q&A

- Loads after main site for better performance.

- Cached aggressively by browsers to reduce repeat load time.

### 9.⚡ Performance Optimizations

- This project is designed to run smoothly across desktop and mobile devices.

- InstancedMesh for ChromeGrid

- Instead of rendering 100+ separate meshes, the grid is drawn using one InstancedMesh.

- Reduces GPU draw calls from hundreds → one, greatly improving performance.

- Lazy Loading Sections

- Sections (About, Projects, Experience, Contact) load only when scrolled into view.

- Keeps initial page load fast, especially on mobile.

- Dynamic Chatbot Loading

- The Botpress chatbot script is injected dynamically after the site loads.

- Ensures your portfolio UI is interactive immediately, with the chatbot initializing in the background.

- Responsive Scaling

- ContainerScroll adjusts scale based on device width (0.7 → 0.9 for mobile).

- Prevents heavy animations from overwhelming smaller devices.

- Browser Caching

- Botpress scripts + assets are cached by the browser for faster repeat visits.

### 🖥️ Tech Stack

- Frontend: React, TailwindCSS, Framer Motion

- 3D Graphics: Three.js, React Three Fiber

- AI Chatbot: Botpress Cloud

- Deployment: Netlify

### 🚀 Running Locally
git clone https://github.com/HAWIBRYAN/my-portfolio.git
cd my-portfolio
npm install
npm start

### 📱 Mobile Compatibility

- Fully responsive design using TailwindCSS.

- ContainerScroll animations optimized for smaller screens.

- ChromeGrid renders smoothly even on mobile thanks to instancing.

- Chatbot automatically adapts into a mobile-friendly chat panel.

### 📬 Contact

Email: hawibryan04@gmail.com
Discord : hawi0445
GitHub: HAWIBRYAN
