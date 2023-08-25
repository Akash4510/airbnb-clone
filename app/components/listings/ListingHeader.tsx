'use client';

import Image from 'next/image';

import { SafeUser } from '@/app/types';
import useCountries from '@/app/hooks/useCountries';
import Heading from '../Heading';
import HeartButton from '../HeartButton';

interface ListingHeaderProps {
  id: string;
  title: string;
  locationValue: string;
  imageSrc: string;
  currentUser: SafeUser | null;
}

const ListingHeader = ({
  id,
  title,
  locationValue,
  imageSrc,
  currentUser,
}: ListingHeaderProps) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          src={imageSrc}
          alt="Property image"
          fill
          className="object-cover w-full"
        />

        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHeader;
