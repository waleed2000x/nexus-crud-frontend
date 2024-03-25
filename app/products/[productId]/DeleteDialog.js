"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteRequest } from "@/utils/requests";
import { useRouter } from "next/navigation";

export default function DeleteDialog({ id }) {
  const router = useRouter();
  const deleteProduct = async () => {
    try {
      await DeleteRequest(`http://localhost:8000/products/${id}/`)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log("error: " + e))
        .finally(() => {
          console.log("redirecting");
          router.push("/products");
          // redirect("/products");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-black mt-[15px] text-white hover:bg-gray-900 py-2 px-5 rounded">
        Delete
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose
            className="bg-red-500 px-6 py-2 text-white rounded"
            onClick={deleteProduct}
          >
            Delete
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
