import '@styles/global.css'; // import '../styles/global.css';

export const metadata = {
  title: 'SharePrompts',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

// https://www.youtube.com/watch?v=wm5gMKuwSYk
// 53
