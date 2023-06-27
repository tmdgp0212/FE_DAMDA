import React, { useState } from 'react';
import { managerAcceptanceType } from '@/types/constants/manager';
import { useMutation } from '@tanstack/react-query';
import { postManagerAccept } from '@/apis/manager';
import { useRouter } from 'next/router';
import YesPage from '@/components/manager/accept/YesPage';
import Matching from '@/components/manager/accept/Matching';
import NoPage from '@/components/manager/accept/NoPage';

function AcceptLayout({ data }: { data: managerAcceptanceType }) {
  const [isAccept, setIsAccept] = useState<boolean | null>(null);

  const router = useRouter();
  const path = router.query.id;

  const { mutate } = useMutation(postManagerAccept, {});

  const handleAccept = ({ status }: { status: 'YES' | 'NO' }) => {
    // mutate({ id: Number(path), accept: status });
    setIsAccept(status === 'YES');
  };

  if (isAccept === null) return <Matching data={data} handleAccept={handleAccept} />;
  if (isAccept) return <YesPage data={data} />;
  if (!isAccept) return <NoPage data={data} />;

  return <div>error</div>;
}

export default AcceptLayout;
