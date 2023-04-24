import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../styles/about.css';
import ErrorMessage from './ErrorMessages/errorMessage';

export default function About() {
  const Animal = useSelector((state) => state.animal.value);

  const [video, setvideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState(null);
  const fetchUserData = async () => {
    setLoading(true);
    const key = "AIzaSyA3g2pYnwi06wNT4qXseHzZCe0ZULx-Xzo";

    const video = await axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          key,
          q: Animal + "videos",
        },
      })
      .then((response) => {
        // console.log("response", response);
        let searchResults =
          response.data.items &&
          response.data.items.map((item) => ({ id: item.id.videoId }));
          setvideo(searchResults);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(true);
        setError(err.response.data.error.code + " " +err.response.data.error.status);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchUserData();
    setvideo(video);
  }, [Animal]);

  return (
    <div>
      {loading && (
          <div style={{fontSize: "30px"}}>
            Please wait...
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
      )}
      {errorMessage && 
      (
        <div className="border border-2 border-secondary w-50 m-auto mt-5 py-5">
          <h2>
            Sorry, your request can't be fulfilled at the moment. Please try again later.
          </h2>
          <ErrorMessage error={error}/>
        </div>
      )}
      {video.map((arr) => {
        return (
          <>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${arr.id}`}
              title="Animals"
              frameBorder="0"
              allowFullScreen
              className="p-2 m-1"
            ></iframe>
          </>
        );
      })}
    </div>
  );
}
