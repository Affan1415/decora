import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded font-semibold transition inline-block';

  const variantStyles = {
    primary: 'bg-primary text-dark hover:bg-yellow-400',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-dark',
    white: 'bg-white text-dark hover:bg-gray-100',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
