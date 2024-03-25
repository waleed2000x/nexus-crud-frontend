"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL, // Import getDownloadURL from firebase storage
} from "firebase/storage";
import { storage } from "../../firebase";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  detail: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
});

export default function ProductCreate() {
  const [image, setImage] = useState("");
  const [imageProgress, setImageProgress] = useState(false);
  const [imageProgressValue, setImageProgressValue] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      detail: "",
      price: "",
    },
  });

  console.log(form.formState.isValid);
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const storageRef = ref(storage, imageFile.name);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(progress + "%");
          setImageProgress(progress);
          setImageProgressValue(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            // form.setValue("image", downloadURL);
            setImage(downloadURL);
          });
        }
      );
    }
  };

  function handleSubmit(values) {
    console.log("values");
    try {
      axios
        .post("http://localhost:8000/products/", {
          ...values,
          image,
        })
        .then((res) => {
          toast("Product created successfully");
          setTimeout(() => {
            form.reset();
            router.push("/products");
          }, 1000);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="product-create-parent">
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormDescription>
            You will not be able to submit the form until all Fields are filled
          </FormDescription>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <StyledFormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </StyledFormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <StyledFormItem>
                <FormLabel className="text-white">Details</FormLabel>
                <FormControl>
                  <Input placeholder="Detail" {...field} />
                </FormControl>
                <FormMessage />
              </StyledFormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <StyledFormItem>
                <FormLabel className="text-white">Price</FormLabel>
                <FormControl>
                  <Input placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </StyledFormItem>
            )}
          />
          <div style={{ width: "80%" }}>
            <FormLabel className="text-white">Image</FormLabel>
            <Input
              className="mt-2 text-white"
              onChange={handleImageUpload}
              type="file"
              placeholder="Image"
            />
          </div>
          <Progress value={imageProgressValue} />
          <Button
            type="submit"
            disabled={imageProgress !== 100 && !form.formState.isValid}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
const StyledFormItem = styled(FormItem)`
  width: 80%;
`;
