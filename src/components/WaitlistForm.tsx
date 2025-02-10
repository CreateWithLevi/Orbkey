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
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 h-12 text-base"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-12 bg-[#111827] hover:bg-[#1f2937] text-base px-6"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}
