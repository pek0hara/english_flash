import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { listeningList } from '../data/listening';
import type { ListeningLevel, ListeningType } from '../data/listening';

type Phase = 'start' | 'listening' | 'question' | 'result';

function ListeningPractice() {
  const [currentLevel, setCurrentLevel] = useState<ListeningLevel>('470');
  const [selectedType] = useState<ListeningType | 'all'>('all');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showSentence, setShowSentence] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState<Phase>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showQuestionText, setShowQuestionText] = useState(false); // 問題の英文と和訳を表示
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [continuousPlay, setContinuousPlay] = useState(false);
  const continuousPlayRef = useRef(false);
  const sentenceIndexRef = useRef(0);
  const phaseRef = useRef<Phase>('start');
  const autoAdvanceRef = useRef<() => void>(null);

  // refsを状態と同期
  useEffect(() => { continuousPlayRef.current = continuousPlay; }, [continuousPlay]);
  useEffect(() => { sentenceIndexRef.current = currentSentenceIndex; }, [currentSentenceIndex]);
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  // 利用可能な音声を取得
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const englishVoices = availableVoices.filter(v => v.lang.startsWith('en'));
      setVoices(englishVoices.length > 0 ? englishVoices : availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // スピーカーに応じた音声を選択
  const getVoiceForSpeaker = useCallback((speaker?: string): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;

    // 男性/女性の音声を探す（名前に含まれるキーワードで判定）
    const maleKeywords = ['Daniel', 'Alex', 'Tom', 'James', 'David', 'Male', 'Guy'];
    const femaleKeywords = ['Samantha', 'Karen', 'Moira', 'Victoria', 'Female', 'Woman'];
    const preferredNames = [
      'Google US English',
      'Google UK English Female',
      'Google UK English Male',
      'Samantha',
      'Alex',
    ];

    const findVoice = (keywords: string[]) => {
      return voices.find(v => keywords.some(k => v.name.includes(k)));
    };

    const findPreferredVoice = () => {
      return voices.find(v => preferredNames.some(name => v.name.includes(name)));
    };

    // スピーカーAは男性、Bは女性、Cは別の男性...
    if (speaker === 'A') {
      return findVoice(maleKeywords) || findPreferredVoice() || voices[0];
    } else if (speaker === 'B') {
      return findVoice(femaleKeywords) || findPreferredVoice() || voices[1] || voices[0];
    } else if (speaker === 'C') {
      // 3人目は違う音声
      const usedVoices = [findVoice(maleKeywords), findVoice(femaleKeywords)];
      return voices.find(v => !usedVoices.includes(v)) || findPreferredVoice() || voices[2] || voices[0];
    }

    // スピーカー指定なし（Part 4のtalk）は最初の音声
    return findPreferredVoice() || voices[0];
  }, [voices]);

  // フィルタリングされたリスニングアイテム
  const filteredItems = useMemo(() => {
    return listeningList.filter(item => {
      const levelMatch = item.level === currentLevel;
      const typeMatch = selectedType === 'all' || item.type === selectedType;
      return levelMatch && typeMatch;
    });
  }, [currentLevel, selectedType]);

  const currentItem = filteredItems[currentItemIndex];
  const currentSentence = currentItem?.sentences[currentSentenceIndex];
  const totalSentences = currentItem?.sentences.length || 0;
  const currentQuestion = currentItem?.questions[currentQuestionIndex];
  const totalQuestions = currentItem?.questions.length || 0;

  // Text-to-Speech（スピーカーに応じた音声を使用）
  const speak = useCallback((text: string, speaker?: string, onEnd?: () => void) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;

    // スピーカーに応じた音声を設定
    const voice = getVoiceForSpeaker(speaker);
    if (voice) {
      utterance.voice = voice;
    }

    setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      if (onEnd) onEnd();
    };
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [getVoiceForSpeaker, speechRate]);

  // 連続再生で次の文を自動的に再生するコールバック
  const autoAdvance = useCallback(() => {
    if (!continuousPlayRef.current) return;
    if (phaseRef.current !== 'listening') return;

    const idx = sentenceIndexRef.current;
    const item = filteredItems[currentItemIndex];
    if (!item) return;

    if (idx < item.sentences.length - 1) {
      const nextIdx = idx + 1;
      setCurrentSentenceIndex(nextIdx);
      setShowTranslation(false);
      setShowSentence(false);
      const nextSentence = item.sentences[nextIdx];
      if (nextSentence) {
        // setTimeout to let state update before speaking
        setTimeout(() => {
          speak(nextSentence.text, nextSentence.speaker, () => {
            if (autoAdvanceRef.current) {
              autoAdvanceRef.current();
            }
          });
        }, 600);
      }
    } else {
      // 全ての文が終了したら問題表示モードへ
      setPhase('question');
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setAnswers([]);
      setShowQuestionText(false);
      const firstQuestion = item.questions[0];
      if (firstQuestion) {
        setTimeout(() => speak(firstQuestion.question), 600);
      }
    }
  }, [filteredItems, currentItemIndex, speak]);

  useEffect(() => {
    autoAdvanceRef.current = autoAdvance;
  }, [autoAdvance]);

  // 現在の文を再生
  const handlePlayCurrent = () => {
    if (currentSentence) {
      speak(currentSentence.text, currentSentence.speaker, continuousPlay ? autoAdvance : undefined);
    }
  };

  // スタートボタン押下
  const handleStart = () => {
    setPhase('listening');
    setIsDrawerOpen(false);
    if (currentSentence) {
      speak(currentSentence.text, currentSentence.speaker, continuousPlay ? autoAdvance : undefined);
    }
  };

  // 前の文へ戻る
  const handlePrev = () => {
    if (currentSentenceIndex <= 0) return;
    window.speechSynthesis.cancel();
    setShowTranslation(false);
    setShowSentence(false);
    const prevIdx = currentSentenceIndex - 1;
    setCurrentSentenceIndex(prevIdx);
    const prevSentence = currentItem?.sentences[prevIdx];
    if (prevSentence) {
      speak(prevSentence.text, prevSentence.speaker, continuousPlay ? autoAdvance : undefined);
    }
  };

  // 次の文へ（自動で音声再生）
  const handleNext = () => {
    setShowTranslation(false);
    setShowSentence(false);

    if (currentSentenceIndex < totalSentences - 1) {
      // 次の文へ
      const nextSentenceIndex = currentSentenceIndex + 1;
      setCurrentSentenceIndex(nextSentenceIndex);
      const nextSentence = currentItem?.sentences[nextSentenceIndex];
      if (nextSentence) {
        speak(nextSentence.text, nextSentence.speaker, continuousPlay ? autoAdvance : undefined);
      }
    } else {
      // 全ての文が終了したら問題表示モードへ
      setPhase('question');
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setAnswers([]);
      setShowQuestionText(false);
      // 最初の問題を読み上げ
      const firstQuestion = currentItem?.questions[0];
      if (firstQuestion) {
        speak(firstQuestion.question);
      }
    }
  };

  // 問題を再生
  const handlePlayQuestion = () => {
    if (currentQuestion) {
      speak(currentQuestion.question);
    }
  };

  // 選択肢を選ぶ
  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  // 回答を確定して次の問題へ
  const handleConfirmAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      // 次の問題へ
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(null);
      setShowQuestionText(false);
      // 次の問題を読み上げ
      const nextQuestion = currentItem?.questions[nextQuestionIndex];
      if (nextQuestion) {
        speak(nextQuestion.question);
      }
    } else {
      // 全ての問題が終了
      setPhase('result');
    }
  };

  // 次のアイテムへ進む
  const handleNextItem = () => {
    if (currentItemIndex < filteredItems.length - 1) {
      setCurrentItemIndex(prev => prev + 1);
    } else {
      setCurrentItemIndex(0);
    }
    resetState();
  };

  // 状態をリセット
  const resetState = () => {
    setCurrentSentenceIndex(0);
    setShowTranslation(false);
    setShowSentence(false);
    setPhase('start');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    window.speechSynthesis.cancel();
  };

  // 英文を表示/非表示
  const toggleSentence = () => {
    setShowSentence(prev => !prev);
  };

  // 訳を表示/非表示
  const toggleTranslation = () => {
    setShowTranslation(prev => !prev);
  };

  // レベル変更
  const handleLevelChange = (level: ListeningLevel) => {
    setCurrentLevel(level);
    setCurrentItemIndex(0);
    resetState();
  };

  // アイテム選択
  const handleSelectItem = (index: number) => {
    setCurrentItemIndex(index);
    resetState();
  };

  // 正答数を計算
  const correctCount = answers.reduce((count: number, answer, index) => {
    if (currentItem?.questions[index]?.correctAnswer === answer) {
      return count + 1;
    }
    return count;
  }, 0);

  // 問題選択時にドロワーを閉じる
  const handleSelectItemAndClose = (index: number) => {
    handleSelectItem(index);
    setIsDrawerOpen(false);
  };

  const drawerContent = (
    <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(false)}>
      <div className={`drawer-content ${isDrawerOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <span className="drawer-title">問題を選択</span>
          <button className="close-btn" onClick={() => setIsDrawerOpen(false)}>×</button>
        </div>

        <div className="drawer-body">
          <div className="filter-group">
            <span className="filter-label">Level</span>
            <div className="level-selector">
              {(['470', '600', '730'] as const).map((level) => (
                <button
                  key={level}
                  className={`level-btn ${currentLevel === level ? 'active' : ''}`}
                  onClick={() => handleLevelChange(level)}
                >
                  {level}点
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Speed</span>
            <div className="speed-control">
              <input
                className="speed-slider"
                type="range"
                min="0.5"
                max="3.0"
                step="0.25"
                value={speechRate}
                onChange={(e) => setSpeechRate(Number(e.target.value))}
                onInput={(e) => setSpeechRate(Number((e.target as HTMLInputElement).value))}
              />
              <span className="speed-value">{speechRate.toFixed(2)}x</span>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="no-items">
              <p>選択された条件に一致するコンテンツがありません。</p>
            </div>
          ) : (
            <div className="filter-group">
              <span className="filter-label">問題</span>
              <div className="item-list-inline">
                <div className="item-selector">
                  {filteredItems.map((item, index) => (
                    <button
                      key={item.id}
                      className={`item-btn ${currentItemIndex === index ? 'active' : ''}`}
                      onClick={() => handleSelectItemAndClose(index)}
                    >
                      <span className="item-type">{item.type === 'conversation' ? 'P3' : 'P4'}</span>
                      <span className="item-title">{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (filteredItems.length === 0) {
    return (
      <div className="listening-practice">
        <div className="header-bar">
          <button className="hamburger-btn" onClick={() => setIsDrawerOpen(true)}>☰</button>
          <h2 className="listening-title">TOEIC Listening Practice</h2>
        </div>
        {drawerContent}
        <div className="no-content-message">
           <p>問題が見つかりません。左上のメニューからレベルなどを変更してください。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="listening-practice">
      <div className="header-bar">
        <button className="hamburger-btn" onClick={() => setIsDrawerOpen(true)}>☰</button>
        <h2 className="listening-title">TOEIC Listening Practice</h2>
      </div>

      {drawerContent}

      {phase === 'start' && (
        /* スタート画面 */
        <div className="start-screen">
          <p className="start-instruction">ボタンを押すと音声が再生されます</p>
          <button className="start-btn" onClick={handleStart}>
            スタート
          </button>
        </div>
      )}

      {phase === 'listening' && (
        <>
          {/* 連続再生トグル */}
          <div className="playback-mode">
            <label className="toggle-label">
              <span className="toggle-text">連続再生</span>
              <div
                className={`toggle-switch ${continuousPlay ? 'active' : ''}`}
                onClick={() => setContinuousPlay(prev => !prev)}
                role="switch"
                aria-checked={continuousPlay}
              >
                <div className="toggle-knob" />
              </div>
            </label>
          </div>

          {/* 進捗表示 */}
          <div className="sentence-progress">
            <span>文 {currentSentenceIndex + 1} / {totalSentences}</span>
            <div className="progress-dots">
              {currentItem.sentences.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentSentenceIndex ? 'active' : ''} ${idx < currentSentenceIndex ? 'completed' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* メインカード */}
          <div className="listening-card">
            {/* カード上部ツールバー */}
            <div className="card-toolbar">
              <button
                className="toolbar-btn prev-btn"
                onClick={handlePrev}
                disabled={currentSentenceIndex === 0}
              >
                ← 戻る
              </button>
              <div className="toolbar-right">
                <button className="toolbar-btn repeat-btn" onClick={toggleSentence}>
                  {showSentence ? '英文を隠す' : '英文'}
                </button>
                <button className="toolbar-btn translate-btn" onClick={toggleTranslation}>
                  {showTranslation ? '訳を隠す' : '和訳'}
                </button>
              </div>
            </div>

            {/* カード中央コンテンツ */}
            <div className="card-content">
              {currentSentence.speaker && (
                <div className="speaker-badge">
                  Speaker {currentSentence.speaker}
                </div>
              )}

              <button
                className={`play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={handlePlayCurrent}
                disabled={isPlaying}
              >
                {isPlaying ? '再生中...' : '再生'}
              </button>

              {showSentence && (
                <div className="sentence-text">
                  {currentSentence.text}
                </div>
              )}

              {showTranslation && (
                <div className="sentence-translation">
                  {currentSentence.translation}
                </div>
              )}
            </div>
          </div>

          {/* 次へボタン */}
          <button className="next-btn-full" onClick={handleNext}>
            OK (次へ)
          </button>
        </>
      )}

      {phase === 'question' && currentQuestion && (
        /* 問題表示画面 */
        <div className="question-screen">
          <div className="question-progress">
            問題 {currentQuestionIndex + 1} / {totalQuestions}
          </div>

          <div className="question-card">
            {/* 再生ボタン */}
            <button
              className={`play-btn question-play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlayQuestion}
              disabled={isPlaying}
            >
              {isPlaying ? '再生中...' : '問題を再生'}
            </button>

            {/* 英文と和訳（トグル表示） */}
            {showQuestionText && (
              <>
                <div className="question-text">
                  {currentQuestion.question}
                </div>
                <div className="question-text-ja">
                  {currentQuestion.questionJa}
                </div>
              </>
            )}

            {/* 英文表示トグルボタン */}
            <button
              className="toggle-question-text-btn"
              onClick={() => setShowQuestionText(prev => !prev)}
            >
              {showQuestionText ? '英文と和訳を隠す' : '英文と和訳を表示'}
            </button>

            <div className="options-list">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleSelectAnswer(index)}
                >
                  <span className="option-label">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            className="confirm-btn"
            onClick={handleConfirmAnswer}
            disabled={selectedAnswer === null}
          >
            回答する
          </button>
        </div>
      )}

      {phase === 'result' && (
        /* 結果表示画面 */
        <div className="result-screen">
          <div className="result-card">
            <h3>結果</h3>
            <div className="result-score">
              {correctCount} / {totalQuestions} 問正解
            </div>

            <div className="result-details">
              {currentItem.questions.map((q, index) => (
                <div
                  key={index}
                  className={`result-item ${answers[index] === q.correctAnswer ? 'correct' : 'incorrect'}`}
                >
                  <div className="result-question">
                    Q{index + 1}: {q.questionJa}
                  </div>
                  <div className="result-answer">
                    あなたの回答: {q.options[answers[index] ?? 0]}
                    {answers[index] !== q.correctAnswer && (
                      <span className="correct-answer">
                        （正解: {q.options[q.correctAnswer]}）
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="next-item-btn" onClick={handleNextItem}>
            次の問題へ
          </button>
        </div>
      )}
    </div>
  );
}

export default ListeningPractice;
