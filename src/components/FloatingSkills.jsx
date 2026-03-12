import React from "react";
import "../style/FloatingSkills.css";

const skills = [
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#1572b6" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#7fffd4" },
  { name: "Express", color: "#e3965a" },
  { name: "Python", color: "#3cb371" },
  { name: "Java", color: "#d34fc4" },
  { name: "Git", color: "#20b2aa" },
  { name: "SQL", color: "#eaea96" },
];

function FloatingSkills() {
  return (
    <div className="floating_container">
      {skills.map((skill, i) => (
        <span
          key={skill.name}
          className="bubble"
          style={{
            "--delay": `${i * -2.5}s`,
            "--duration": `${14 + (i % 4) * 3}s`,
            "--x-end": `${-30 + (i % 5) * 15}px`,
            borderColor: skill.color,
            color: skill.color,
          }}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
}

export default FloatingSkills;
