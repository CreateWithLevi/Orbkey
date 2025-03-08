import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveEmail } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

interface WaitlistFormProps {
  className?: string;
  onSuccess?: (message: string) => void;
}

export default function WaitlistForm({ className = "max-w-sm mx-auto", onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveEmail(email);
      const successMsg = "Thanks for joining our waitlist! We'll keep you updated.";
      toast({
        title: "Success!",
        description: successMsg,
      });
      setEmail("");
      onSuccess?.(successMsg);
    } catch (error) {
      if (error instanceof Error && error.message === "EMAIL_EXISTS") {
        const existsMsg = "This email is already on our waitlist. We'll continue to keep you updated.";
        toast({
          title: "Already Registered",
          description: existsMsg,
        });
        setEmail("");
        onSuccess?.(existsMsg);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full space-x-2 ${className}`}
    >
      <Input
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 h-12 text-base bg-white/50 backdrop-blur-sm placeholder:text-gray-600 border border-input focus:border-input focus:ring-input rounded-md"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-12 bg-blue-600 text-white hover:bg-blue-700 text-base px-6 transition-colors"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}
