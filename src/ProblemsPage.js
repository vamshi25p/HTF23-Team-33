import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './ProblemsPage.css';
import { useEffect } from 'react';
function ProblemsPage() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [completionStatus, setCompletionStatus] = useState({}); // Store completion status
  const [subtopicCompletion, setSubtopicCompletion] = useState(0);
  const [overallCompletion, setOverallCompletion] = useState(0);
  // Simulated data for subtopics and problems
  const subtopics = ['Basic Maths','Recursion','Hashing','Arrays','BinarySearch','Strings','LinkedList','Bit Manipulation','StackQueues','Sliding Window & Two Pointer Combined','Heaps','Greedy Algorithms','Binary Trees','Binary Search Trees','Graphs','Dynamic Programming','Tries','Strings Advanced']; // Replace with your data
  const problemsData = {
    Arrays:[
        {problem:'Check if array is sorted',externalLink:"https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/"},
        {problem:'remove duplicates from sorted array',externalLink:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/"},
        {problem:'rotate array',externalLink:"https://leetcode.com/problems/rotate-array/"},
        {problem:'move zeroes',externalLink:"https://leetcode.com/problems/move-zeroes/"},
        {problem:'missing number',externalLink:"https://leetcode.com/problems/missing-number/"},
        {problem:'max consecutive',externalLink:"https://leetcode.com/problems/max-consecutive-ones/"},
        {problem:'pascal triangle',externalLink:"https://leetcode.com/problems/pascals-triangle/"},
        {problem:'majority element2',externalLink:"https://leetcode.com/problems/majority-element-ii/"},
        {problem:'4sum',externalLink:"https://leetcode.com/problems/4sum/"},
        {problem:'3sum',externalLink:"https://leetcode.com/problems/3sum/"},
        {problem:'merge intervals',externalLink:"https://leetcode.com/problems/merge-intervals/"},
        {problem:'reverse pairs',externalLink:"https://leetcode.com/problems/reverse-pairs/"},
        {problem:'maximum product subarray',externalLink:"https://leetcode.com/problems/maximum-product-subarray/"},
    ],
    
    BinarySearch:[
        {problem:'binary search',externalLink:"https://leetcode.com/problems/binary-search/"},
        {problem:'search insert position',externalLink:"https://leetcode.com/problems/search-insert-position/"},
        {problem:'find first and last position',externalLink:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"},
        {problem:'sorted array',externalLink:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},
        {problem:'find peak element',externalLink:"https://leetcode.com/problems/find-peak-element/"},
    
    
    ],
    
    Strings:[
        {problem:'remove parenthesis',externalLink:"https://leetcode.com/problems/remove-outermost-parentheses/"},
        {problem:'reverse words in string',externalLink:"https://leetcode.com/problems/reverse-words-in-a-string/"},
        {problem:'largest odd number in a string',externalLink:"https://leetcode.com/problems/largest-odd-number-in-string/"},
        {problem:'longest common prefix',externalLink:"https://leetcode.com/problems/longest-common-prefix/"},
        {problem:'isomorphic strings',externalLink:"https://leetcode.com/problems/isomorphic-strings/"},
    
    
    ],
    
    LinkedList:[
        {problem:'delete node in a linked list',externalLink:"https://leetcode.com/problems/delete-node-in-a-linked-list/"},
        {problem:'middle of the linked list',externalLink:"https://leetcode.com/problems/middle-of-the-linked-list/"},
        {problem:'reverse linked list',externalLink:"https://leetcode.com/problems/reverse-linked-list/"},
        {problem:'linked list cycle',externalLink:"https://leetcode.com/problems/linked-list-cycle/"},
        {problem:'linked list cycle list ii',externalLink:"https://leetcode.com/problems/linked-list-cycle-ii/"},
    
    
    ],
    'Stack&Queues':[
        {problem:'implement stack using queues',externalLink:"https://leetcode.com/problems/implement-stack-using-queues/"},
        {problem:'implement queue using stacks',externalLink:"https://leetcode.com/problems/implement-queue-using-stacks/"},
        {problem:'valid parentheses',externalLink:"https://leetcode.com/problems/valid-parentheses/"},
        {problem:'min stack',externalLink:"https://leetcode.com/problems/min-stack/"},
        {problem:'next greater element',externalLink:"https://leetcode.com/problems/next-greater-element-i/"},
    
    
    ],
    Recursion:[
        {problem:'string to integer',externalLink:"https://leetcode.com/problems/string-to-integer-atoi/"},
        {problem:'powx-n',externalLink:"https://leetcode.com/problems/powx-n/"},
        {problem:'count good numbers',externalLink:"https://leetcode.com/problems/count-good-numbers/"},
        {problem:'generate parentheses',externalLink:"https://leetcode.com/problems/generate-parentheses/"},
        {problem:'subsets',externalLink:"https://leetcode.com/problems/subsets/"},
    
    
    ],
    
    'Bit Manipulation':[
        {problem:'power of two',externalLink:"https://leetcode.com/problems/power-of-two/"},
        {problem:'divide two integers',externalLink:"https://leetcode.com/problems/divide-two-integers/"},
        {problem:'minimum bit flips to convert number',externalLink:"https://leetcode.com/problems/minimum-bit-flips-to-convert-number/"},
        {problem:'single number',externalLink:"https://leetcode.com/problems/single-number/"},
        {problem:'subsets',externalLink:"https://leetcode.com/problems/subsets/"},
    
    
    ],
    
    Heaps:[
        {problem:'largest element in an array',externalLink:"https://leetcode.com/problems/kth-largest-element-in-an-array/"},
        {problem:'merge k sorted lsits',externalLink:"https://leetcode.com/problems/merge-k-sorted-lists/"},
        {problem:'task scheduler',externalLink:"https://leetcode.com/problems/task-scheduler/"},
        {problem:'hand of straights',externalLink:"https://leetcode.com/problems/hand-of-straights/"},
        {problem:'design twitter',externalLink:"https://leetcode.com/problems/design-twitter/"},
    
    
    ],
    
    'Greedy Algorithms':[
        {problem:'assign cookies',externalLink:"https://leetcode.com/problems/assign-cookies/"},
        {problem:'lemonade change',externalLink:"https://leetcode.com/problems/lemonade-change/"},
        {problem:'valid parenthesis',externalLink:"https://leetcode.com/problems/valid-parenthesis-string/"},
        {problem:'jump game i',externalLink:"https://leetcode.com/problems/jump-game/"},
        {problem:'jump game ii',externalLink:"https://leetcode.com/problems/jump-game-ii/"},
    
    
    ],
    
    
    'Binary Trees':[
        {problem:'binary tree preorder',externalLink:"https://leetcode.com/problems/binary-tree-preorder-traversal/"},
        {problem:'binary tree inorder traversal',externalLink:"https://leetcode.com/problems/binary-tree-inorder-traversal/"},
        {problem:'binary tree postorder traversal',externalLink:"https://leetcode.com/problems/binary-tree-postorder-traversal/"},
        {problem:'binary tree level order traversal',externalLink:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},
        {problem:'binary tree preorder traversal',externalLink:"https://leetcode.com/problems/binary-tree-preorder-traversal/"},
    
    
    ],
    
    Graphs:[
        {problem:'no of provinces',externalLink:"https://leetcode.com/problems/number-of-provinces/"},
        {problem:'rotting oranges',externalLink:"https://leetcode.com/problems/rotting-oranges/"},
        {problem:'flood fill',externalLink:"https://leetcode.com/problems/flood-fill/"},
        {problem:'01 matrix',externalLink:"https://leetcode.com/problems/01-matrix/"},
        {problem:'surrounded regions',externalLink:"https://leetcode.com/problems/surrounded-regions/"},
    
    
    ],
    
    'Dynamic Programming':[
        {problem:'climbing stairs',externalLink:"https://leetcode.com/problems/climbing-stairs/"},
        {problem:'house robber',externalLink:"https://leetcode.com/problems/house-robber/"},
        {problem:'house robber ii',externalLink:"https://leetcode.com/problems/house-robber-ii/"},
        {problem:'unique paths',externalLink:"https://leetcode.com/problems/unique-paths/"},
        {problem:'unique paths ii',externalLink:"https://leetcode.com/problems/unique-paths-ii/"},
    
    
    ],
    
    Tries:[
        {problem:'implement trie prefix tree',externalLink:"https://leetcode.com/problems/implement-trie-prefix-tree/"},
        {problem:'maximum xor of two numbers in an array',externalLink:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},
        {problem:'maximum xor with an element from array',externalLink:"https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"},
    ],
    
        
    'Basic Maths':[
        {problem:'Reverse Integer',externalLink:"https://leetcode.com/problems/reverse-integer/"},
        {problem:'Palindrome Number',externalLink:"https://leetcode.com/problems/palindrome-number/"},
        {problem:'Armstrong Number',externalLink:"https://leetcode.com/problems/armstrong-number/"},
       
    
    ],
    
    
       
    'Hashing':[
        {problem:'frequency of the most frequent element',externalLink:"https://leetcode.com/problems/frequency-of-the-most-frequent-element/"},
    ]
    // Add other subtopics here
  };
  
  // Handle subtopic click
  const handleSubtopicClick = (subtopic) => {
    setSelectedSubtopic(subtopic);
  };
  const calculateSubtopicCompletion = () => {
    if (!selectedSubtopic) return 0;

    const problemsList = problemsData[selectedSubtopic] || [];
    const completedProblems = problemsList.filter((problemData) => completionStatus[problemData.problem]).length;
    const subtopicProgress = (completedProblems / problemsList.length) * 100;

    setSubtopicCompletion(subtopicProgress);
  };
  const handleProblemClick = (problem) => {
    setCompletionStatus((prevStatus) => ({
      ...prevStatus,
      [problem]: !prevStatus[problem],
    }));
  };

  const calculateOverallCompletion = () => {
    const totalProblems = subtopics.reduce((count, subtopic) => {
      const problemsList = problemsData[subtopic];
      return count + (problemsList ? problemsList.length : 0);
    }, 0);

    const completedProblems = Object.values(completionStatus).filter((completed) => completed).length;
    const overallProgress = (completedProblems / totalProblems) * 100;

    setOverallCompletion(overallProgress);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
useEffect(() => {
  calculateSubtopicCompletion();
  calculateOverallCompletion();
}, [selectedSubtopic, completionStatus]);
/* eslint-enable react-hooks/exhaustive-deps */


  // Generate problems list based on selected subtopic
  const renderProblemsList = () => {
    if (!selectedSubtopic) {
      return <p>Select a subtopic to view problems.</p>;
    }
  
    const problemsList = problemsData[selectedSubtopic];
  
    if (!problemsList || problemsList.length === 0) {
      return <p>No problems available for this subtopic.</p>;
    }
  
    return (
      <ul>
        {problemsList.map((problemData) => (
          <li key={problemData.problem}>
            <div onClick={() => handleProblemClick(problemData.problem)}>
              <a href={problemData.externalLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} /> {/* Link icon */}
              </a>
              {problemData.problem}
              <progress value={completionStatus[problemData.problem] ? 100 : 0} max={100}></progress>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  

  return (
    <div className='Problem'>
      <h1>DSA Problems Page</h1>
      <p>Overall Completion Progress: {overallCompletion.toFixed(2)}%</p>
        {selectedSubtopic && <p>Subtopic Completion Progress ({selectedSubtopic}): {subtopicCompletion.toFixed(2)}%</p>}
      <div>
  <h2>Subtopics</h2>
  <div className="subtopics">
    <div className="subtopic-row">
      {subtopics.slice(0, 5).map((subtopic) => (
        <button
          key={subtopic}
          onClick={() => handleSubtopicClick(subtopic)}
          className={`subtopic-button ${selectedSubtopic === subtopic ? 'active' : ''}`}
        >
          {subtopic}
        </button>
      ))}
    </div>
    <div className="subtopic-row">
      {subtopics.slice(5, 10).map((subtopic) => (
        <button
          key={subtopic}
          onClick={() => handleSubtopicClick(subtopic)}
          className={`subtopic-button ${selectedSubtopic === subtopic ? 'active' : ''}`}
        >
          {subtopic}
        </button>
      ))}
    </div>
    <div className="subtopic-row">
      {subtopics.slice(10, 15).map((subtopic) => (
        <button
          key={subtopic}
          onClick={() => handleSubtopicClick(subtopic)}
          className={`subtopic-button ${selectedSubtopic === subtopic ? 'active' : ''}`}
        >
          {subtopic}
        </button>
      ))}
    </div>
    <div className="subtopic-row">
      {subtopics.slice(15, 19).map((subtopic) => (
        <button
          key={subtopic}
          onClick={() => handleSubtopicClick(subtopic)}
          className={`subtopic-button ${selectedSubtopic === subtopic ? 'active' : ''}`}
        >
          {subtopic}
        </button>
      ))}
    </div>
    {/* Add more rows as needed */}
  </div>
</div>
<div>
        <h2>Problems</h2>
        
          {renderProblemsList()}
      </div>
      <div className='code'>
      <img  className='leet' src={process.env.PUBLIC_URL + '/leetcode_logo.webp'} alt="LeetCode Logo" />
      <i>Problems sourced from LeetCode.</i>
      </div>
    </div>
  );
}

export default ProblemsPage;
