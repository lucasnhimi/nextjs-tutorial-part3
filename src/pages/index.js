import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Index</h1>
      <Link href='/products'>
        <a>Nagevar para produtos</a>
      </Link>
    </div>
  );
}
