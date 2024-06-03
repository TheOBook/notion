"use client";

import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  // convex return undefined when it's in loading phase
  if (data === undefined) {
    return <div>Loading...</div>;
  }

  // when user search for something that dosent existe (if we don't have data length)
  // the order matter !!
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(data)}</div>;
};
