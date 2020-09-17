import Link from 'next/link';
export default function Products() {
  return (
    <div>
      <h1>Produtos</h1>
      <Link href='/category/product'>
        <a>Nagevar para produto</a>
      </Link>
    </div>
  );
}
