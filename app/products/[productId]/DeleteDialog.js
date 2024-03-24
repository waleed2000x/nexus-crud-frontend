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
import { Button } from "@/components/ui/button";
import { DeleteRequest } from "@/utils/requests";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function DeleteDialog({ id }) {
  const router = useRouter();
  const deleteProduct = async () => {
    try {
      await DeleteRequest(`http://localhost:8000/products/${id}`)
        .then((res) => {
          router.push("/products");
          console.log(res);
        })
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>Delete</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose onClick={deleteProduct}>Delete</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
