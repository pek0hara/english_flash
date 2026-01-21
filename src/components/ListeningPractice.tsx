import { useState, useMemo, useCallback } from 'react';
import { listeningList } from '../data/listening';
import type { ListeningLevel, ListeningType } from '../data/listening';

type Phase = 'start' | 'listening' | 'question' | 'result';

function ListeningPractice() {
  const [currentLevel, setCurrentLevel] = useState<ListeningLevel>('470');
  const [selectedType, setSelectedType] = useState<ListeningType | 'all'>('all');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showSentence, setShowSentence] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState<Phase>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

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

  // Text-to-Speech
  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;

    setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  // 現在の文を再生
  const handlePlayCurrent = () => {
    if (currentSentence) {
      speak(currentSentence.text);
    }
  };

  // スタートボタン押下
  const handleStart = () => {
    setPhase('listening');
    if (currentSentence) {
      speak(currentSentence.text);
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
        speak(nextSentence.text);
      }
    } else {
      // 全ての文が終了したら問題表示モードへ
      setPhase('question');
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setAnswers([]);
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
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
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

  // タイプ変更
  const handleTypeChange = (type: ListeningType | 'all') => {
    setSelectedType(type);
    setCurrentItemIndex(0);
    resetState();
  };

  // アイテム選択
  const handleSelectItem = (index: number) => {
    setCurrentItemIndex(index);
    resetState();
  };

  // 正答数を計算
  const correctCount = answers.reduce((count, answer, index) => {
    if (currentItem?.questions[index]?.correctAnswer === answer) {
      return count + 1;
    }
    return count;
  }, 0);

  if (filteredItems.length === 0) {
    return (
      <div className="listening-practice">
        <div className="listening-header">
          <h2>TOEIC Listening Practice</h2>
          <p>Part 3 & Part 4</p>
        </div>

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

        <div className="type-selector">
          <button
            className={`type-btn ${selectedType === 'all' ? 'active' : ''}`}
            onClick={() => handleTypeChange('all')}
          >
            All
          </button>
          <button
            className={`type-btn ${selectedType === 'conversation' ? 'active' : ''}`}
            onClick={() => handleTypeChange('conversation')}
          >
            Part 3 (会話)
          </button>
          <button
            className={`type-btn ${selectedType === 'talk' ? 'active' : ''}`}
            onClick={() => handleTypeChange('talk')}
          >
            Part 4 (説明文)
          </button>
        </div>

        <div className="no-items">
          <p>選択された条件に一致するコンテンツがありません。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="listening-practice">
      <div className="listening-header">
        <h2>TOEIC Listening Practice</h2>
        <p>Part 3 & Part 4</p>
      </div>

      {/* レベル選択 */}
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

      {/* タイプ選択 */}
      <div className="type-selector">
        <button
          className={`type-btn ${selectedType === 'all' ? 'active' : ''}`}
          onClick={() => handleTypeChange('all')}
        >
          All
        </button>
        <button
          className={`type-btn ${selectedType === 'conversation' ? 'active' : ''}`}
          onClick={() => handleTypeChange('conversation')}
        >
          Part 3 (会話)
        </button>
        <button
          className={`type-btn ${selectedType === 'talk' ? 'active' : ''}`}
          onClick={() => handleTypeChange('talk')}
        >
          Part 4 (説明文)
        </button>
      </div>

      {/* 問題選択リスト */}
      <div className="item-selector">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            className={`item-btn ${currentItemIndex === index ? 'active' : ''}`}
            onClick={() => handleSelectItem(index)}
          >
            <span className="item-type">{item.type === 'conversation' ? 'P3' : 'P4'}</span>
            <span className="item-title">{item.title}</span>
          </button>
        ))}
      </div>

      {/* 現在の問題情報 */}
      <div className="current-item-info">
        <div className="item-badge">
          {currentItem.type === 'conversation' ? 'Part 3 - 会話' : 'Part 4 - 説明文'}
        </div>
        <h3>{currentItem.title}</h3>
        <p className="situation">{currentItem.situation}</p>
      </div>

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
            {currentSentence.speaker && (
              <div className="speaker-badge">
                Speaker {currentSentence.speaker}
              </div>
            )}

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

            <button
              className={`play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlayCurrent}
              disabled={isPlaying}
            >
              {isPlaying ? '再生中...' : '再生'}
            </button>
          </div>

          {/* コントロールボタン */}
          <div className="listening-controls">
            <button className="control-btn repeat-btn" onClick={toggleSentence}>
              {showSentence ? '英文を隠す' : '英文を表示'}
            </button>
            <button className="control-btn translate-btn" onClick={toggleTranslation}>
              {showTranslation ? '訳を隠す' : '訳を見る'}
            </button>
            <button className="control-btn next-btn" onClick={handleNext}>
              OK (次へ)
            </button>
          </div>
        </>
      )}

      {phase === 'question' && currentQuestion && (
        /* 問題表示画面 */
        <div className="question-screen">
          <div className="question-progress">
            問題 {currentQuestionIndex + 1} / {totalQuestions}
          </div>

          <div className="question-card">
            <div className="question-text">
              {currentQuestion.question}
            </div>
            <div className="question-text-ja">
              {currentQuestion.questionJa}
            </div>

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
