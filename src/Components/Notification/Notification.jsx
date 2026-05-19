"use client";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import React, { useState } from "react";
import { FaRegBell, FaSearch } from "react-icons/fa";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)} className="">
        <FaRegBell size={19} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto md:pr-20">
          <div className="flex min-w-full justify-end mt-15">
            <DialogPanel
              transition
              className="w-2/3 md:w-1/3 max-w-sm rounded-sm bg-gray-200 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1 flex items-center gap-2 px-5 pt-2">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur saepe exercitationem ipsum dolores amet alias
                    rerum, eum delectus corporis aut. Minus rem consequuntur
                    vero harum blanditiis nihil repellat neque molestiae?
                  </p>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Notification;
