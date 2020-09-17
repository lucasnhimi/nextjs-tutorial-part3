import { useRouter } from 'next/router';

export default function Prodcut() {
  const router = useRouter();
  console.log(router);
  return <h1>{`${router.query.category} - ${router.query.product}`}</h1>;
}
