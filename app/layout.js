import './globals.css';

export const metadata = {
  title: 'WhoisAutomations – AI Workflow & Automation Service',
  description: 'Automate your business workflows easily with AI-powered integrations.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
