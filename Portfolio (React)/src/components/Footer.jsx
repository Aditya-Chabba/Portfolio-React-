export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem 0',
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Aditya Chabba – All Rights Reserved
      </p>
    </footer>
  );
}
