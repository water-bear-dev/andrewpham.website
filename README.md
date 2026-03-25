<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Andrew Pham | Personal Portfolio & CV

This is a modern, interactive single-page React portfolio for Andrew Pham, a Senior Software & Data Engineer. The site highlights professional experience, technical skills, services offered, and includes a Generative AI assistant to chat interactively about Andrew's qualifications.

## Features
- **Dynamic React Portfolio:** Fully responsive and styled with Tailwind CSS (`@tailwindcss/vite` v4).
- **Framer Motion Animations:** Smooth layout transitions and interactive micro-animations.
- **AI Assistant Bot:** Integrated with the official `@google/genai` SDK to provide instantaneous, smart responses to visitor questions.
- **Service Listings & Detailed CV:** Comprehensive interactive sections representing work history and technical competencies across AWS, Data Engineering, and Web Development.

## Run Locally

**Prerequisites:**  Node.js (v18+)

1. Clone and install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in `.env.local` to your Google Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Tech Stack
- React 18
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React (Iconography)
- `@google/genai` (Google AI Studio Gemini SDK)
