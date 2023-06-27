import React, { useState } from 'react';
import { managerAcceptanceType } from '@/types/constants/manager';
import { useMutation } from '@tanstack/react-query';
import { postManagerAccept } from '@/apis/manager';
import { useRouter } from 'next/router';
import YesPage from '@/components/manager/accept/YesPage';
import Matching from '@/components/manager/accept/Matching';
import NoPage from '@/components/manager/accept/NoPage';
import Error from '@/components/manager/accept/Error';

function AcceptLayout({ data }: { data: managerAcceptanceType }) {
  const [isAccept, setIsAccept] = useState<boolean | null>(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();
  const path = router.query.id;

  const { mutate } = useMutation(postManagerAccept);

  const handleAccept = ({ status }: { status: 'YES' | 'NO' }) => {
    mutate(
      { id: Number(path), accept: status },
      {
        onSuccess: () => {
          setIsAccept(status === 'YES');
        },
        onError: (error: any) => {
          setIsError(true);
          setErrorMsg(error.message);
        },
      },
    );
  };

  if (isAccept === null)
    return (
      <Matching data={data} handleAccept={handleAccept}>
        {isError && <Error errorMsg={errorMsg} />}
      </Matching>
    );
  if (isAccept) return <YesPage data={data} />;
  if (!isAccept) return <NoPage data={data} />;

  return <div>error</div>;
}

export default AcceptLayout;
