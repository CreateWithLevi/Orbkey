import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { CheckCircle2 } from 'lucide-react';

interface AlertProps {
    show: boolean;
    message: string;
    variant?: 'success' | 'error';
}

const Alert = ({ show, message, variant = 'success' }: AlertProps) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    className="fixed top-0 left-0 right-0 z-[100] flex justify-center"
                >
                    <div className={cn(
                        "px-4 py-2 rounded-b-lg flex items-center gap-2 text-sm font-medium",
                        variant === 'success' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    )}>
                        <CheckCircle2 className="w-4 h-4" />
                        {message}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Alert;