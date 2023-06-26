import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import CompletedUserLayout from '@/components/completedUser/CompletedUserLayout';
import { useQuery } from '@tanstack/react-query';
import { getDiscountCode } from '@/apis/code';

function CompletedUser() {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery(['code'], () => getDiscountCode(String(router.query.id)));

  const copyMessageRef = useRef<HTMLDivElement | null>(null);
  const [code, setCode] = useState('');

  const copy = () => {
    window.navigator.clipboard.writeText(code);

    if (!copyMessageRef.current) return;
    copyMessageRef.current.style.display = 'block';

    setTimeout(() => {
      if (!copyMessageRef.current) return;
      copyMessageRef.current.style.display = 'none';
    }, 5000);
  };

  useEffect(() => {
    if (!data) return;
    setCode(data.data);
  }, [data]);

  return (
    <CompletedUserLayout
      code={code}
      isLoading={isLoading}
      isError={isError}
      copyMessageRef={copyMessageRef}
      copy={copy}
    />
  );
}

export default CompletedUser;
