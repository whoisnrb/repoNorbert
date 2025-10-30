import './globals.css';

export const metadata = {
  title: 'WhoisAutomations – AI Workflow & Automation Service',
  description: 'Automate your business workflows easily with AI-powered integrations.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
