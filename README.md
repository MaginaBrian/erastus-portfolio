Samuel Ndege Portfolio Website
A modern, responsive personal portfolio website for Erastus Samuel Ndege Ochieng', a leader in agribusiness, climate risk management, and strategic partnerships across Africa. This site highlights professional experience, achievements, core competencies, and contact information.
Demo
[Live Preview (if hosted)] - Replace with actual URL if deployed (e.g., on Netlify, Vercel, or GitHub Pages).
Features

Responsive Design: Optimized for desktop, tablet, and mobile devices using media queries.
Sections:
Hero/About: Introduction with photo, contact details, and badges.
Mission/Stats: Professional mission, key statistics, and trusted organizations.
Core Competencies: Grid of skills and expertise areas.
Professional Journey: Timeline of career experience.
Major Achievements: Grid of project highlights with images.
Testimonials: Featured quote from a professional reference.
Contact: Form for inquiries and detailed contact info.

Animations: Subtle CSS animations for smooth user experience (e.g., fade-ins, pulses, hovers).
Contact Form: Basic form with client-side validation and simulated submission (logs to console and shows alert).
Icons: Integrated with Lucide React for modern, customizable icons.
Theming: Dark mode with custom CSS variables for colors and gradients.

Technologies Used

Framework: React.js (v18+)
Styling: CSS3 with custom properties (variables), gradients, and animations.
Icons: Lucide React
Fonts: Montserrat and Playfair Display (via Google Fonts or similar; assumed in index.html).
Images: Local assets (e.g., profile photo) and Unsplash placeholders for project images.
State Management: React Hooks (useState for form handling).
Build Tool: Create React App (assumed; or Vite if customized).

Installation

Clone the repository:textgit clone https://github.com/your-username/samuel-ndege-portfolio.git
Navigate to the project directory:textcd samuel-ndege-portfolio
Install dependencies:textnpm install
This will install React, Lucide React, and any other required packages.

Add assets:
Place the profile photo in src/assets/erastus.jpg (or update the import path if renamed).


Usage

Start the development server:textnpm start
The app will run at http://localhost:3000.

Build for production:textnpm run build
This creates an optimized build in the build/ folder, ready for deployment.

Customization:
Update content in src/App.js (e.g., text, images, timelines).
Modify styles in src/App.css.
For actual form submission, integrate a backend service (e.g., EmailJS, Formspree, or Node.js API).


Folder Structure
textsamuel-ndege-portfolio/
├── public/
│   └── index.html          # Entry HTML
├── src/
│   ├── assets/             # Images (e.g., erastus.jpg)
│   ├── App.css             # Main stylesheet
│   ├── App.js              # Main component with all sections
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
└── README.md               # This file
Dependencies

react: ^18.2.0
react-dom: ^18.2.0
lucide-react: ^0.105.0 (for icons)
@testing-library/*: For testing (optional)
react-scripts: For Create React App scripts

Install with npm install lucide-react.
Contributing
This is a personal project, but contributions are welcome:

Fork the repository.
Create a feature branch (git checkout -b feature/AmazingFeature).
Commit changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details (add if needed).
Contact

Name: Erastus Samuel Ndege Ochieng'
Email: samuelndege@yahoo.com
Phone: +254 720 671 213
LinkedIn: linkedin.com/in/samuel-ndege
Location: Nairobi, Kenya

For project-related questions, open an issue on GitHub.
© 2026 Erastus Samuel Ndege Ochieng' | Built with React.js