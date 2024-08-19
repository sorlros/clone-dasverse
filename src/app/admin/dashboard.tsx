// // pages/admin/dashboard.js
// import { useEffect, useState } from 'react';

// const AdminDashboard = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const response = await fetch('/api/messages');
//       const data = await response.json();
//       setMessages(data);
//     };

//     fetchMessages();
//   }, []);

//   const handleRespond = async (messageId, responseContent) => {
//     await fetch(`/api/respond/${messageId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ content: responseContent }),
//     });
//     // Refresh messages or handle the response
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <ul>
//         {messages.map((message) => (
//           <li key={message.id}>
//             <p>{message.content}</p>
//             <textarea placeholder="Write your response here"></textarea>
//             <button onClick={() => handleRespond(message.id, 'Response Content')}>
//               Respond
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
