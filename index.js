
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", background: 'linear-gradient(135deg, #e66465, #9198e5)', color: '#fff' }}>
      <h1>Queer Pages</h1>
      <p>Celebrating LGBTQ Stories One Page at a Time</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', margin: '10px', borderRadius: '10px' }}
      />
      <button onClick={handleSubscribe} style={{ padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', background: '#333', color: '#fff' }}>
        Subscribe
      </button>
    </div>
  );
}
