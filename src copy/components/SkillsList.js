import React from 'react';

const SkillsList = () => {
    const skills = [
        'Proficient with Java',
        'Python',
        'SQL',
        'HTML',
        'CSS',
        'MatLab',
        'Linux',
        'Interpersonal Communication Skills',
        'Relationship building',
        'Merchandising',
        'Lead Generation',
        'Learn New Software Quickly',
        'Customer Relationship Management',
        'Teamwork',
        'Account Management',
        'Crisis Management',
        'Business Development',
    ];

    const midIndex = Math.ceil(skills.length / 2);
    const skillsColumn1 = skills.slice(0, midIndex);
    const skillsColumn2 = skills.slice(midIndex);

    return (
        <div className="skills__list">
            <div className="skills__column">
                <ul>
                    {skillsColumn1.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="skills__column">
                <ul>
                    {skillsColumn2.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillsList;
