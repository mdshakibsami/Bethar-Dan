# Bethar-Dan

## Project Overview
Bethar-Dan is a modern healthcare web application built with React and Vite. The project aims to provide a streamlined platform for healthcare services, medical information, and health tools.

## Features
- BMI calculator and health assessment tools
- Doctor and medicine directory
- Ambulance service information
- Health tips and medical content
- User authentication system
- Administrative interfaces for doctors and dispensary management
- Mobile-friendly responsive design

## Technology Stack
- **Frontend**: React 19, TailwindCSS 4
- **Build Tool**: Vite
- **UI Components**: Custom components with React Hook Form
- **Styling**: TailwindCSS with responsive design
- **Routing**: React Router

## Prerequisites
- Node.js (v18.0 or higher)
- npm (v9.0 or higher)

## Installation

### Clone the repository
```bash
git clone https://github.com/yourusername/Bethar-Dan.git
cd Bethar-Dan
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## Testing Instructions

### Frontend Testing
1. Start the development server:
```bash
cd Frontend
npm run dev
```

2. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

3. Test the following features and routes:
   - **Home Page**: `/` - Overview of services and features
   - **BMI Calculator**: `/bmi` - Calculate and assess BMI
   - **Doctors & Medicine**: `/doctor` - Browse doctors and available medicines
   - **Ambulance Services**: `/ambulance` - Find ambulance services
   - **Health Tips**: `/healthTips` - Browse health content and tips
   - **Authentication**: 
     - `/login` - User login 
     - `/registration` - New user registration
   - **Admin Interfaces**:
     - `/doctorAdmin` - Doctor administration portal
     - `/dispensaryAdmin` - Dispensary management portal

4. Test responsiveness on various screen sizes (desktop, tablet, mobile)
5. Verify form validations work correctly in registration and login forms

### Backend Testing
Backend functionality will be added in future updates. The API endpoints will be documented here when available.

## Project Structure
```
Bethar-Dan/
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   ├── BMI/
│   │   │   ├── DoctorAndMedicien/
│   │   │   ├── Footer/
│   │   │   └── Home/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── Ambulance.jsx
│   │   │   ├── BMI.jsx
│   │   │   ├── DoctorAdmin.jsx
│   │   │   ├── DoctorsAndMedicine.jsx
│   │   │   ├── DispensaryAdmin.jsx
│   │   │   ├── HealthContents.jsx
│   │   │   └── Home.jsx
│   │   ├── Route/
│   │   │   └── Routers.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── eslint.config.js
│   └── vite.config.js
└── README.md
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
Project Maintainer: Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/Bethar-Dan](https://github.com/yourusername/Bethar-Dan)

## Acknowledgements
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/)