// import React, { useState, useEffect } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { codeSnippets } from '../utils/codeSnippets';

// import '../styles/coding.scss';

// const customTheme = {
//     ...tomorrow,
//     'code[class*="language-"]': {
//       ...tomorrow['code[class*="language-"]'],
//       backgroundColor: '#1a1d1e', 
//     },
//     'pre[class*="language-"]': {
//       ...tomorrow['pre[class*="language-"]'],
//       backgroundColor: '#1a1d1e', 
//     },
//   };
  
// const Coding = () => {
//     const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);

//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         setCurrentSnippetIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
//       }, 5000); // Change code every 4 seconds
  
//       return () => clearInterval(intervalId);
//     }, []);

//   return (
//     <div className="ide-box">
//       <div className="ide-header">
//         <div className="ide-buttons">
//           <div className="close"></div>
//           <div className="minimize"></div>
//           <div className="restore"></div>
//         </div>
//         <div className="ide-title">shhahad20 - First commit</div>
//       </div>
//       <div className="ide-content">
//         <SyntaxHighlighter language="javascript" style={customTheme}>
//         {codeSnippets[currentSnippetIndex]}
//         </SyntaxHighlighter>
//       </div>
//     </div>
//   );
// };

// export default Coding;
