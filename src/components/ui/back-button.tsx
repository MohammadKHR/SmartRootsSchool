import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  to?: string; // Optional path to navigate to, if not using history.back()
}

export function BackButton({ to }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1); // Go back one step in history
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleBackClick} className="mb-4">
      <ArrowLeft className="h-5 w-5" />
      <span className="sr-only">Back</span>
    </Button>
  );
}

