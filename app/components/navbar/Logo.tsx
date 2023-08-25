'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <>
      <Image
        onClick={() => router.push('/')}
        src="/images/logo.png"
        alt="logo"
        className="hidden md:block cursor-pointer"
        width="100"
        height="100"
      />
      <Image
        onClick={() => router.push('/')}
        src="/images/logo-short.png"
        alt="logo"
        className="block md:hidden cursor-pointer p-2"
        width="50"
        height="50"
      />
    </>
  );
};

export default Logo;
