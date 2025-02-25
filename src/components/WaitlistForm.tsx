import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveEmail } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveEmail(email);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm mx-auto space-x-2"
    >
      <Input
        type="email"
        placeholder="Try typing your email to see the magic..."
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
