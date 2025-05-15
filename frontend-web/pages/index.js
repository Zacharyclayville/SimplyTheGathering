export default function Home() {
  return (
    <div style={{
      backgroundImage: 'url("/background.jpg")',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textShadow: '0 2px 5px rgba(0,0,0,0.7)'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        Welcome to Simply The Gathering
      </h1>
      <button
        style={{
          marginTop: '20px',
          padding: '10px 30px',
          fontSize: '1rem',
          backgroundColor: 'rgba(0,0,255,0.7)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        View Admins
      </button>
    </div>
  );
}
