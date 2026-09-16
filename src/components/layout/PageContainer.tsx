// src/components/layout/PageContainer.tsx

import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return <div className={`container-nexa ${className}`}>{children}</div>;
}
