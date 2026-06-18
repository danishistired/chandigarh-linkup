import webring from "../../webring.json";

export type Member = {
  name: string;
  gh: string;
  url: string;
};

export const members: Member[] = (webring as { members: Member[] }).members;

export function findIndex(name: string): number {
  return members.findIndex((m) => m.name.toLowerCase() === name.toLowerCase());
}

export function neighbour(name: string, dir: "prev" | "next"): Member | null {
  const i = findIndex(name);
  if (i === -1) return null;
  const offset = dir === "next" ? 1 : -1;
  const n = (i + offset + members.length) % members.length;
  return members[n];
}

export function random(): Member | null {
  if (members.length === 0) return null;
  return members[Math.floor(Math.random() * members.length)];
}
