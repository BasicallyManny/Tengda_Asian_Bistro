interface ScrollLinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export const ScrollLink: React.FC<ScrollLinkProps> = ({ 
    to, 
    children, 
    onClick, 
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-bold tracking-wider transition-colors hover:border-b-2 border-white"
  }) => {
    const handleScroll = () => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (onClick) onClick(); // Call onClick if provided
    };
  
    return (
      <button onClick={handleScroll} className={className}>
        {children}
      </button>
    );
  };