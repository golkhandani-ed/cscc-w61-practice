"use client"
import Link from "next/link";

export default function LinkButton({
  className,
  text,
  href
}: {
  className: string | undefined;
  text: string;
  href: string;
}) {
  return <Link className={`link-button ${className}`} href={href}>
    {text}
  </Link >
}

export function AddToCardButton({
  className,
  text,
}: {
  className: string | undefined;
  text: string;
}) {
  return <button disabled className={`link-button ${className}`}>
    {text}
  </button >
}