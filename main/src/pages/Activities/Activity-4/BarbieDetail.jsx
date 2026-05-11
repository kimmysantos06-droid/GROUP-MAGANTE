import "./BarbieDetail.css";
import BarbieCard from "../../../components/barbie-card/BarbieCard";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom"; 

// Skeleton card component – shows placeholder while offline or loading
const SkeletonCard = () => {
  return (
    <div className="barbie-card skeleton">
      <div className="barbie-image-wrapper skeleton-image"></div>
      <div className="barbie-header">
        <div className="skeleton-title"></div>
        <div className="skeleton-rating"></div>
      </div>
      <div className="skeleton-description"></div>
      <div className="barbie-meta skeleton-meta">
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
      <div className="barbie-genres">
        <div className="skeleton-genre"></div>
        <div className="skeleton-genre"></div>
      </div>
    </div>
  );
};

const BarbieDetail = () => {
  const [barbieList, setBarbieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // When coming online, trigger a data fetch
      fetchBarbieData(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
      // Clear any existing data when going offline
      setBarbieList([]);
      setError(null);
      setLoading(false); // Still show skeletons (loading false but no data)
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const fetchBarbieData = useCallback(async (forceRefresh = false) => {
    if (!isOnline && !forceRefresh) {
      // Do not attempt to fetch if offline (unless forced, but we never force offline)
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/barbie.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      let barbieArray = [];
      if (data && Array.isArray(data.barbie_list)) {
        barbieArray = data.barbie_list;
      } else if (Array.isArray(data)) {
        barbieArray = data;
      } else {
        console.warn("Unexpected data structure:", data);
        barbieArray = [];
      }

      if (barbieArray.length > 0) {
        setBarbieList(barbieArray);
        setError(null);
      } else {
        setError("No Barbie movies found in the data file.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(`Failed to load movies: ${err.message}`);
      setBarbieList([]);
    } finally {
      setLoading(false);
    }
  }, [isOnline]);

  // Initial data load only when online
  useEffect(() => {
    if (isOnline) {
      fetchBarbieData();
    } else {
      setLoading(false); // No loading, just show skeletons with offline message
    }
  }, [isOnline, fetchBarbieData]);

  // Determine what to render
  const showSkeletons = !isOnline || loading || (!loading && barbieList.length === 0 && !error);

  return (
    <div className="activity4-container">
      <h1 className="activity4-title">🎀 Barbie Movie Collection 🎀</h1>

      {!isOnline && (
        <div className="offline-banner">
           You are offline! Connect to the internet to see Barbie movies.
        </div>
      )}

      {error && isOnline && (
        <div className="error-message">
          ❌ {error}
          <button onClick={() => fetchBarbieData(true)} className="retry-button">
            🔄 Retry
          </button>
        </div>
      )}

      <div className="barbie-grid">
        {showSkeletons
          ? Array(8)
              .fill()
              .map((_, idx) => <SkeletonCard key={idx} />)
          : barbieList.map((barbie) => (
              <BarbieCard key={barbie.id} barbie={barbie} />
            ))}
      </div>
         <Link to="/">← Back to MCO</Link>

      {!loading && !showSkeletons && barbieList.length === 0 && isOnline && (
        <div className="no-data">✨ No Barbie movies found. ✨</div>
      )}
      
    </div>
  );
};

export default BarbieDetail;