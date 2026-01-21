import { useState, useEffect, useMemo } from 'react';
import './App.css';
import { vocabList } from './data/vocab';
import ListeningPractice from './components/ListeningPractice';

type AppMode = 'vocab' | 'listening';

function App() {
  const [appMode, setAppMode] = useState<AppMode>('vocab');
  const [currentLevel, setCurrentLevel] = useState<'600' | '730' | '860'>('600');
  const [knownWords, setKnownWords] = useState<number[]>(() => {
    const saved = localStorage.getItem('toeic_flash_known_words');
    return saved ? JSON.parse(saved) : [];
  });
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter words by level
  const levelWords = useMemo(() => {
    return vocabList.filter(word => word.level === currentLevel);
  }, [currentLevel]);

  // Words that are yet to be learned (not in knownWords)
  const studyList = useMemo(() => {
    return levelWords.filter(word => !knownWords.includes(word.id));
  }, [levelWords, knownWords]);

  const currentWord = studyList[currentIndex];

  // Save to localStorage whenever knownWords changes
  useEffect(() => {
    localStorage.setItem('toeic_flash_known_words', JSON.stringify(knownWords));
  }, [knownWords]);

  // Reset index when level or studyList changes (to avoid out of bounds)
  useEffect(() => {
    if (currentIndex >= studyList.length) {
      setCurrentIndex(0);
    }
  }, [studyList.length, currentLevel]);

  // Text-to-Speech
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  // Play audio automatically when card appears (optional, maybe better on click for web policies)
  useEffect(() => {
    if (currentWord && !isFlipped) {
      // Auto-play can be annoying or blocked by browsers. Let's make it manual or opt-in.
      // Keeping it manual for now to be safe.
    }
  }, [currentWord, isFlipped]);

  const handleLevelChange = (level: '600' | '730' | '860') => {
    setCurrentLevel(level);
    setIsFlipped(false);
    setCurrentIndex(0);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && currentWord) {
        // Optional: Play audio when flipping?
    }
  };

  const handleKnown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentWord) return;

    setKnownWords(prev => [...prev, currentWord.id]);
    setIsFlipped(false);
    // Index stays 0 because the array shifts, or we can stay at current index if we want.
    // Since we are filtering the list, the current element disappears.
    // So the next element becomes index 0 (or whatever index we were at).
    // If we are at the end, it will handle via the useEffect above.
    if (currentIndex >= studyList.length - 1) {
        setCurrentIndex(0);
    }
  };

  const handleUnknown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    // Move to next card
    if (currentIndex < studyList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const handleResetLevel = () => {
    const idsToRemove = levelWords.map(w => w.id);
    setKnownWords(prev => prev.filter(id => !idsToRemove.includes(id)));
    setCurrentIndex(0);
  };

  const progressPercentage = Math.round(((levelWords.length - studyList.length) / levelWords.length) * 100) || 0;

  return (
    <div className="app">
      <h1>TOEIC Flash Master</h1>

      {/* モード切り替え */}
      <div className="mode-selector">
        <button
          className={`mode-btn ${appMode === 'vocab' ? 'active' : ''}`}
          onClick={() => setAppMode('vocab')}
        >
          単語帳
        </button>
        <button
          className={`mode-btn ${appMode === 'listening' ? 'active' : ''}`}
          onClick={() => setAppMode('listening')}
        >
          リスニング
        </button>
      </div>

      {appMode === 'listening' ? (
        <ListeningPractice />
      ) : (
        <>
          <div className="level-selector">
            {(['600', '730', '860'] as const).map((level) => (
              <button
                key={level}
                className={`level-btn ${currentLevel === level ? 'active' : ''}`}
                onClick={() => handleLevelChange(level)}
              >
                Level {level}
              </button>
            ))}
          </div>

          <div className="progress-container">
            <div className="progress-stats">
              <span>Progress: {levelWords.length - studyList.length} / {levelWords.length} words</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {studyList.length > 0 && currentWord ? (
            <>
              <div className={`card-container`} onClick={handleFlip}>
                <div className={`card ${isFlipped ? 'flipped' : ''}`}>

                  {/* Front */}
                  <div className="card-face card-front">
                    <div className="word-pos">{currentWord.partOfSpeech}</div>
                    <div className="word-term">{currentWord.term}</div>
                    <div className="word-pronunciation">{currentWord.pronunciation}</div>
                    <button
                      className="audio-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(currentWord.term);
                      }}
                    >
                      🔊
                    </button>
                    <div style={{marginTop: 'auto', fontSize: '0.8rem', color: '#a0aec0'}}>
                      Tap to flip
                    </div>
                  </div>

                  {/* Back */}
                  <div className="card-face card-back">
                    <div className="word-meaning">{currentWord.meaning}</div>
                    <div className="word-example">"{currentWord.example}"</div>
                    <div className="word-example-meaning">{currentWord.exampleMeaning}</div>
                    <button
                      className="audio-icon"
                      style={{color: 'white', marginTop: '1rem'}}
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(currentWord.example);
                      }}
                    >
                      🔊 Listen to sentence
                    </button>
                  </div>

                </div>
              </div>

              <div className="controls">
                <button className="btn-unknown" onClick={handleUnknown}>
                  Unknown (Later)
                </button>
                <button className="btn-known" onClick={handleKnown}>
                  Known (Done)
                </button>
              </div>
            </>
          ) : (
            <div className="completion-message">
              <h2>Level {currentLevel} Complete! 🎉</h2>
              <p>You have mastered all words in this level.</p>
              <button className="reset-btn" onClick={handleResetLevel}>
                Reset Progress for Level {currentLevel}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
