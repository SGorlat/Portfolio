import React, { useState, useEffect } from "react";
import "../style/TerminalSkills.css";

const lines = [
  "> salva.skills.forEach(s => console.log(s))",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Python",
  "Java",
  "Git",
  "SQL",
  '> salva.status = "Listo para trabajar" ✔',
];

function TerminalSkills() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      // reiniciar después de 3s
      const restart = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setDone(false);
      }, 3000);
      return () => clearTimeout(restart);
    }

    const line = lines[currentLine];
    const isCommand = line.startsWith(">");
    const speed = isCommand ? 45 : 30;

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const pause = isCommand ? 500 : 150;
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, pause);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="terminal_container">
      <div className="terminal_header">
        <span className="terminal_dot t_red"></span>
        <span className="terminal_dot t_yellow"></span>
        <span className="terminal_dot t_green"></span>
        <span className="terminal_title">skills.sh</span>
      </div>
      <div className="terminal_body">
        {displayedLines.map((line, i) => (
          <p
            key={i}
            className={`terminal_line ${
              lines[i]?.startsWith(">") ? "t_command" : "t_output"
            }`}
          >
            {line}
            {i === currentLine && !done && (
              <span className="terminal_cursor">▌</span>
            )}
          </p>
        ))}
        {displayedLines.length === 0 && (
          <p className="terminal_line t_command">
            <span className="terminal_cursor">▌</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default TerminalSkills;
