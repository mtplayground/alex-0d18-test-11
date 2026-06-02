import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      default: "max-w-content",
      narrow: "max-w-readable",
      wide: "max-w-7xl",
      full: "max-w-none",
    },
    gutters: {
      default: "px-gutter",
      compact: "px-4",
      none: "px-0",
    },
  },
  defaultVariants: {
    size: "default",
    gutters: "default",
  },
});

function Container({
  className,
  size,
  gutters,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size, gutters }), className)}
      {...props}
    />
  );
}

export { Container, containerVariants };
