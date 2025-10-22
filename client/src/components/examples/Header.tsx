import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header 
      isDarkMode={false} 
      toggleDarkMode={() => console.log('Theme toggle clicked')} 
    />
  );
}