"use client";

import { useOrganization } from "@clerk/nextjs";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  return <div className="flex-1 h-[calc(100%-80px)] p-6">AAA</div>;
};

export default DashboardPage;
