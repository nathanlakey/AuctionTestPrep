import { useState, useRef, useEffect } from 'react';
import './Podcast.css';

// Episodes organized by state — add new states here as podcasts become available
const EPISODES_BY_STATE = {
  Texas: [
    {
      id: 1,
      title: 'How Texas Regulates the Auction Block',
      file: '/audio/How_Texas_Regulates_the_Auction_Block.m4a',
      description: 'A deep dive into the regulatory framework governing auctions in the state of Texas, including licensing bodies, oversight rules, and compliance requirements.',
    },
  {
    id: 2,
    title: 'Texas Auction Laws Behind the Gavel',
    file: '/audio/Texas_Auction_Laws_Behind_the_Gavel.m4a',
    description: 'Explore the key Texas statutes that every auctioneer must know — from bid calling rules to seller disclosures and post-sale obligations.',
  },
  {
    id: 3,
    title: 'How Texas Law Stops Auction Fraud',
    file: '/audio/How_Texas_Law_Stops_Auction_Fraud.m4a',
    description: 'Learn how Texas consumer protection laws, the DTPA, and fraud statutes protect buyers and sellers at auction and what penalties auctioneers face for violations.',
  },
  {
    id: 4,
    title: 'Auctioning Cars, Firearms, and Alcohol in Texas',
    file: '/audio/Auctioning_Cars,_Firearms,_and_Alcohol_in_Texas.m4a',
    description: 'Special rules for auctioning regulated goods in Texas — motor vehicle title transfers, federal firearms licensing, and TABC alcohol permit requirements.',
  },
  {
    id: 5,
    title: 'Auctioning Salvaged Goods Under Texas Law',
    file: '/audio/Auctioning_Salvaged_Goods_Under_Texas_Law.m4a',
    description: 'Understanding the legal requirements for selling salvaged, abandoned, and unclaimed property at auction in Texas, including storage lien and notification rules.',
  },
  {
    id: 6,
    title: 'Texas Auctions Collide With Real Estate Law',
    file: '/audio/Texas_Auctions_Collide_With_Real_Estate_Law.m4a',
    description: 'How real estate auction sales work in Texas — from broker licensing crossover to foreclosure auctions, earnest money, and property disclosure requirements.',
  },
  {
    id: 7,
    title: 'The Strict Contract Laws of Texas Auctions',
    file: '/audio/The_Strict_Contract_Laws_of_Texas_Auctions.m4a',
    description: 'Covering the UCC Article 2 rules for auction contracts in Texas — when the hammer falls, reserve vs. no-reserve, buyer\'s remedies, and breach of contract.',
  },
  ],
  // Future states go here, e.g.:
  // Alabama: [ ... ],
};

/** Returns true if the given state has podcast episodes */
export function hasPodcasts(state) {
  return (EPISODES_BY_STATE[state]?.length ?? 0) > 0;
}

function formatTime(seconds) {
  if (!seconds || !isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function EpisodeCard({ episode, isPlaying, isCurrent, onPlay, onPause }) {
  return (
    <div className={`episode-card ${isCurrent ? 'episode-card--active' : ''}`}>
      <div className="episode-number">EP {episode.id}</div>
      <div className="episode-info">
        <h3 className="episode-title">{episode.title}</h3>
        <p className="episode-description">{episode.description}</p>
      </div>
      <button
        className={`episode-play-btn ${isCurrent && isPlaying ? 'episode-play-btn--playing' : ''}`}
        onClick={() => (isCurrent && isPlaying) ? onPause() : onPlay(episode)}
        aria-label={isCurrent && isPlaying ? 'Pause' : 'Play'}
      >
        {isCurrent && isPlaying ? '⏸' : '▶'}
      </button>
    </div>
  );
}

function Podcast({ state, onBack }) {
  const EPISODES = EPISODES_BY_STATE[state] || [];
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  // Update time as audio plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      // Auto-play next episode
      if (currentEpisode) {
        const idx = EPISODES.findIndex(e => e.id === currentEpisode.id);
        if (idx < EPISODES.length - 1) {
          handlePlay(EPISODES[idx + 1]);
        }
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentEpisode]);

  const handlePlay = (episode) => {
    const audio = audioRef.current;
    if (currentEpisode?.id !== episode.id) {
      setCurrentEpisode(episode);
      audio.src = episode.file;
      audio.playbackRate = playbackRate;
      audio.load();
    }
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handleSeek = (e) => {
    const bar = progressRef.current;
    if (!bar || !audioRef.current) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioRef.current.currentTime = pct * duration;
  };

  const handleSkip = (seconds) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 1.75, 2];
    const idx = speeds.indexOf(playbackRate);
    const next = speeds[(idx + 1) % speeds.length];
    setPlaybackRate(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="podcast-container">
      {/* Header */}
      <div className="podcast-header">
        <div className="podcast-header-content">
          <button className="podcast-back-btn" onClick={onBack}>← Back</button>
          <h1 className="podcast-heading">🎙️ Auction Academy Podcast</h1>
        </div>
      </div>

      {/* Episode List */}
      <div className="podcast-content">
        <p className="podcast-subtitle">
          Listen and learn — {EPISODES.length} episode{EPISODES.length !== 1 ? 's' : ''} covering key {state} auction law topics
        </p>

        <div className="episode-list">
          {EPISODES.map(ep => (
            <EpisodeCard
              key={ep.id}
              episode={ep}
              isPlaying={isPlaying}
              isCurrent={currentEpisode?.id === ep.id}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          ))}
        </div>
      </div>

      {/* Sticky Player */}
      {currentEpisode && (
        <div className="podcast-player">
          <div className="player-inner">
            <div className="player-info">
              <span className="player-ep-label">EP {currentEpisode.id}</span>
              <span className="player-title">{currentEpisode.title}</span>
            </div>

            <div className="player-controls">
              <button className="player-skip-btn" onClick={() => handleSkip(-15)} title="Back 15s">⏪ 15</button>

              <button
                className="player-play-btn"
                onClick={() => isPlaying ? handlePause() : handlePlay(currentEpisode)}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>

              <button className="player-skip-btn" onClick={() => handleSkip(30)} title="Forward 30s">30 ⏩</button>

              <button className="player-speed-btn" onClick={cycleSpeed} title="Playback speed">
                {playbackRate}×
              </button>
            </div>

            <div className="player-progress-row">
              <span className="player-time">{formatTime(currentTime)}</span>
              <div className="player-progress-bar" ref={progressRef} onClick={handleSeek}>
                <div className="player-progress-fill" style={{ width: `${progress}%` }} />
                <div className="player-progress-thumb" style={{ left: `${progress}%` }} />
              </div>
              <span className="player-time">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Hidden audio element */}
      <audio ref={audioRef} preload="metadata" />
    </div>
  );
}

export default Podcast;
