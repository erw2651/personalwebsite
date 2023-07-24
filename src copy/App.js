import React from 'react';
import './App.css';
import ProfilePicture from './components/ProfilePicture';
import Resume from './components/Resume';
import BioSection from './components/BioSection';
import SkillsSection from './components/SkillsList'; // New component for Skills section
import Experience from './components/Experience'; // New component for Experience
function App() {
    //Function to handle smooth scrolling to section
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="app">
            {/* Header */}
            <header className="app__header">

                {/* Horizontal Navigation Menu */}
                <nav className="app__nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <div className="app__body">
                {/* Left Sidebar - Profile Picture */}
                <div className="app__profile">
                    <ProfilePicture />
                    <h2>Ezra Williams</h2>
                    <p>University of Texas at Arlington</p>
                    <p>Bachelors of Business Management in Information Systems</p>
                </div>


                {/* Right Sidebar */}
                <div className="app__content">
                    <h2>About Me</h2>
                    {/* About Me Section */}
                    <section className="app__about-me">

                        <BioSection />
                    </section>
                    <h2>Skills</h2>
                    {/* Skills Section */}
                    <section className="app__skills">

                        <SkillsSection />
                    </section>
                    {/*Experience Section*/}
                    <section className="app__experience">
                        <Experience/>
                    </section>

                </div>
            </div>

            {/* Footer */}
            <footer className="app__footer">
                {/* Add your footer content here */}
            </footer>
        </div>
    );
}

export default App;

