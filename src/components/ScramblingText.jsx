import React, { useState, useEffect, useRef } from 'react';

const phrases = [
  'Interfaces',
  'Animations',
  'Experiences',
  'Websites',
  'Mods'
];

const ScramblingText = () => {
  const [text, setText] = useState(phrases[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const timeouts = useRef([]);

  const scramble = (newText) => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let currentText = text.split('');
    let a = 0;

    const update = () => {
      let output = '';
      for (let i = 0; i < newText.length; i++) {
        if (i < a) {
          output += newText[i];
        } else {
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          output += randomChar;
        }
      }
      setText(output);
      
      if (a < newText.length) {
        a += 1;
        timeouts.current.push(setTimeout(update, 50));
      }
    };
    update();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    scramble(phrases[phraseIndex]);
    return () => timeouts.current.forEach(clearTimeout);
  }, [phraseIndex]);

  return <span className="text-primary font-bold">{text}</span>;
};

export default ScramblingText; 