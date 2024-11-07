import { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils"; // Certifique-se de que a função 'cn' esteja sendo importada corretamente

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
