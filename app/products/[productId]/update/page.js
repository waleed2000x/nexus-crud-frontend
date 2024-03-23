"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
  Form,
  FormControl,
  // FormDescription,
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
import UpdateLoading from "./loading";
const formSchema = z.object({
  name: z.string().min(2).max(50),
  detail: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  image: z.string().min(2).max(50),
});

export default function ProductUpdate({ params: productId }) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = productId.productId;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        setProduct(res.data.data.product);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  function handleSubmit(values) {
    try {
      axios
        .patch(`http://localhost:8000/products/${id}`, values)
        .then((res) => {
          toast("Product updated successfully");
          setTimeout(() => {
            form.reset();
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      detail: "",
      price: "",
      image: "",
    },
  });
  useEffect(() => {
    form.reset({
      name: product.name || "",
      detail: product.detail || "",
      price: product.price || "",
      image: product.image || "",
    });
  }, [product]);
  if (isLoading) {
    return <UpdateLoading />;
  }
  return (
    <div className="product-create-parent">
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <StyledFormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <StyledInput placeholder="Name" {...field} />
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
                  <StyledInput placeholder="Detail" {...field} />
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
                  <StyledInput placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </StyledFormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <StyledFormItem>
                <FormLabel className="text-white">Image</FormLabel>
                <FormControl>
                  <StyledInput placeholder="Image" {...field} />
                </FormControl>
                <FormMessage />
              </StyledFormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
const StyledInput = styled(Input)`
  background-color: transparent;
  color: white;
`;
const StyledFormItem = styled(FormItem)`
  width: 80%;
`;
