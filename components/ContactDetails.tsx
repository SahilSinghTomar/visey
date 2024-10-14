"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const ContactOverlay = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeOverlay = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="rounded-full"
      >
        <div className="flex gap-x-4">
          <PhoneCall size={20} />
          <span>Show contact Details</span>
        </div>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeOverlay}
          ></div>

          {/* Modal */}
          <div className="relative z-10 w-[300px] sm:w-[500px] md:w-[750px] p-6 bg-white shadow-lg rounded-md flex justify-between">
            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Contact Details</h2>
              <div className="flex flex-col">
                <strong>Website:</strong>
                <Link href="#">https://websitename.in</Link>
              </div>
              <div className="flex flex-col">
                <strong>Email:</strong>
                <Link href="#">cmoabc@gmail.com</Link>
              </div>
              <div className="flex flex-col">
                <strong>Contact Number:</strong>
                <p>+91 7658947302</p>
              </div>
            </div>

            <Button variant="outline">
              <Cross2Icon className="w-4 h-4" onClick={closeOverlay} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactOverlay;