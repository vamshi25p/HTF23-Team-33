import React, { useState, useEffect } from 'react';
import './NextPage.css';
import { useNavigate } from 'react-router-dom';


function NextPage() {
  const [dsaSkillLevel, setDsaSkillLevel] = useState('beginner'); // Default to 'beginner'
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleDsaSkillLevelChange = (e) => {
    if (!showRoadmap) {
      setDsaSkillLevel(e.target.value); // Set the selected skill level only if "Generate Roadmap" is not clicked
    }
  };

  const handleTopicChange = (e) => {
    if (!showRoadmap) {
      const topic = e.target.value;
      // Check if the topic is already selected, and toggle its selection
      if (selectedTopics.includes(topic)) {
        setSelectedTopics(selectedTopics.filter((t) => t !== topic));
      } else {
        setSelectedTopics([...selectedTopics, topic]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate the image based on the selected skill level and topics
    const generatedImageSrc = generateImage(dsaSkillLevel, selectedTopics);
    setGeneratedImage(generatedImageSrc);
    setShowRoadmap(true);
  };

  // List of available DSA topics
  const dsaTopics = [
    'Arrays and Lists',
    'Backtracking',
    'Bit Manipulation',
    'Dynamic Programming',
    'Graphs',
    'Greedy Algorithms',
    'Linked Lists',
    'Recursion',
    'Searching Algorithms',
    'Sorting Algorithms',
    'Stacks and Queues',
    'Trees',
    'Tries',
    // Add more topics as needed
  ];
  const navigate = useNavigate();

const navigateToProblemsPage = () => {
  // Use the `navigate` function to redirect to the problems page
  navigate('/problems'); // Replace '/problems' with the actual URL of your problems page
};


  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Function to generate the image based on skill level and topics
  const generateImage = (skillLevel, topics) => {
    // Replace this with your image generation logic
    // You can generate images based on skillLevel and topics here
    
    // Example image URLs for each skill level
    const beginnerImage = process.env.PUBLIC_URL + '/Beginner.png';

    const intermediateImage = process.env.PUBLIC_URL + '/interrmediate.png';
    const advancedImage = process.env.PUBLIC_URL + '/advanced.png';
  
    // Initialize an array to store the selected images
    const selectedImages = [];
  
    // Check the skill level and add the corresponding image to the array
    if (skillLevel === 'beginner') {
      selectedImages.push(beginnerImage);
    } else if (skillLevel === 'intermediate') {
      selectedImages.push(intermediateImage);
    } else if (skillLevel === 'advanced') {
      selectedImages.push(advancedImage);
    }
  
    // You can add additional logic here to select images based on topics if needed
  
    return selectedImages;
  };
  

  return (
    <div className='Next'>
        <div className="next-page-container">
      <h1>DSA Roadmap Generator</h1>
      <div>
        <h2>Specify Your DSA Skill Level</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='dsaSkillLevel'>DSA Skill Level:</label>
            <select
              id='dsaSkillLevel'
              value={dsaSkillLevel} // Set the selected value
              onChange={handleDsaSkillLevelChange}
            >
              <option value='beginner'>Beginner</option>
              <option value='intermediate'>Intermediate</option>
              <option value='advanced'>Advanced</option>
            </select>
          </div>
          <h2>Select DSA Topics of Interest</h2>
          <div>
            {dsaTopics.map((topic) => (
              <label key={topic}>
                <input
                  type='checkbox'
                  value={topic}
                  checked={selectedTopics.includes(topic)}
                  onChange={handleTopicChange}
                />
                {topic}
              </label>
            ))}
          </div>
          <button type='submit'>Generate Roadmap</button>
        </form>
      </div>
      {showRoadmap && generatedImage && (
        <div>
          <h2>DSA Roadmap</h2>
          <p>Your DSA Skill Level: {dsaSkillLevel.charAt(0).toUpperCase() + dsaSkillLevel.slice(1)}</p>
          <p>Selected DSA Topics: {selectedTopics.join(', ')}</p>
          {/* Display the generated image */}
          <div className="image-container">
            <img src={generatedImage} alt='Generated Roadmap' />
          </div>
          <button className="Explore" onClick={navigateToProblemsPage}>
  Explore DSA Problems
</button>

          
          
        </div>
      )}
    </div>
    </div>
  );
}

export default NextPage;
