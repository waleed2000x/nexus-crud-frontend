"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      //   onSelect={setDate}
      className="rounded-md border w-[max-content] text-white"
    />
  );
}
