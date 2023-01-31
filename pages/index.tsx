import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/demo/csr">CSR</Link>
      </li>
      <li>
        <Link href="/demo/ssr">SSR</Link>
      </li>
      <li>
        <Link href="/demo/ssg">SSG</Link>
      </li>
      <li>
        <Link href="/demo/isr">ISR</Link>
      </li>
    </ul>
  );
}
