import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import WaitlistForm from "./WaitlistForm";

interface WaitlistDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: (message: string) => void;
}

export default function WaitlistDialog({ open, onOpenChange, onSuccess }: WaitlistDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Join the Waitlist</DialogTitle>
                    <DialogDescription>
                        This product is currently in a fundraising phase. Join our waitlist to receive the latest updates.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    <WaitlistForm onSuccess={onSuccess} />
                </div>
            </DialogContent>
        </Dialog>
    );
}