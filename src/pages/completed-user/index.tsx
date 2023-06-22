import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import CompletedUserLayout from '@/components/completedUser/CompletedUserLayout';

function CompletedUser() {
  const router = useRouter();
  const copyMessageRef = useRef<HTMLDivElement | null>(null);
  const [code, setCode] = useState('N380DB');

  console.log(router.query.id);

  const copy = () => {
    window.navigator.clipboard.writeText(code);

    if (!copyMessageRef.current) return;
    copyMessageRef.current.style.display = 'block';

    setTimeout(() => {
      if (!copyMessageRef.current) return;
      copyMessageRef.current.style.display = 'none';
    }, 5000);
  };

  return <CompletedUserLayout code={code} copyMessageRef={copyMessageRef} copy={copy} />;
}

export default CompletedUser;
