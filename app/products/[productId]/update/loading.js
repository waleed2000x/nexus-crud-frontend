import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function UpdateLoading() {
  return (
    <div className="product-create-parent">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "50px",
        }}
      >
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-10 w-[80px]" />
      </div>
    </div>
  );
}
