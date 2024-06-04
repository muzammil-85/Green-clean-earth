"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LinkIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react";


export function DialogAddUser() {

  const referral_code = "abcde";
  const message = `
Follow the link to join GreenCleanEarth mission.
https://www.greencleanearth.org/user-register
Use referral code "${referral_code}" to join.
`;

  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-800 my-2"><LinkIcon className="mr-2 h-4 w-4" />Get referral link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" >
        <DialogHeader>
          <DialogTitle>Add members</DialogTitle>
          <DialogDescription>
          </DialogDescription>
          <div>
            <p className="text-base">
              Follow the link to join GreenCleanEarth mission.
            </p>
            <Link 
              href={"https://www.greencleanearth.org/user-register"}
              className="text-green-600 text-base"
            >
            greencleanearth.org/user-register
            </Link>
            <p className="py-2">
              Use referral code 
              <span className="text-green-600 bg-green-200 px-3 py-1 m-2 rounded"> { referral_code } </span> to join.
            </p>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button 
            onClick={()=>copyToClipboard(message) } 
            className="bg-green-600 hover:bg-green-800"
          >
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
