import React from 'react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'Git',
        'Python',
        'SQL',
        'TypeScript',
        'Redux'
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;