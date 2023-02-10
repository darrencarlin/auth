interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="h-10 rounded-md bg-slate-900 p-2 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
