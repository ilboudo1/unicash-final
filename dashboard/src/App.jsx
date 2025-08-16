import { useEffect, useState } from 'react';
function App() {
  const [status, setStatus] = useState('loading...');
  useEffect(() => {
    fetch('https://unicash-final.vercel.app/health')
      .then(r => r.json())
      .then(d => setStatus(d.status));
  }, []);
  return (
    <main style={{ padding: 40 }}>
      <h1>UniCash Dashboard</h1>
      <p>API status: {status}</p>
    </main>
  );
}
export default App;
