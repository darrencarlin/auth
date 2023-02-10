interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="mb-4 rounded-md bg-slate-900 py-4 px-6 font-bold text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
