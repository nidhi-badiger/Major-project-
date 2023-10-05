import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpeechSynthesis } from 'react-speech-kit';

function WebsiteContentReader() {
  const [websiteContent, setWebsiteContent] = useState('');
  const websiteUrl = 'http://localhost:3000'; // Replace with the URL you want to fetch
  const { speak, cancel, speaking } = useSpeechSynthesis();

  useEffect(() => {
    // Fetch website content when the component mounts
    axios
      .get(websiteUrl)
      .then((response) => {
        // Set the entire HTML content of the website
        setWebsiteContent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching website content:', error);
      });
  }, []);

  const readWebsiteContent = () => {
    if (!speaking) {
      speak({ text: websiteContent });
    } else {
      cancel();
    }
  };

  return (
    <div>
      <h1>Website Content Reader</h1>
      <button type="button" onClick={readWebsiteContent}>
        {speaking ? 'Stop Reading' : 'Read Website Content'}
      </button>
      <div dangerouslySetInnerHTML={{ __html: websiteContent }} />
    </div>
  );
}

export default WebsiteContentReader;
