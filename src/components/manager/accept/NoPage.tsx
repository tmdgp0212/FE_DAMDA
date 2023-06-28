import React from 'react';
import { managerAcceptanceType } from '@/types/constants/manager';
import { AcceptButton, NoPageWrapper } from '@/components/manager/accept/accept.styled';
import { useRouter } from 'next/router';

function NoPage({ data }: { data: managerAcceptanceType }) {
  const router = useRouter();

  return (
    <NoPageWrapper>
      <div className="header">
        <h1>
          {data.manager} 매니저님! <br />
          이번 서비스가 <br />
          거절 처리 되었습니다.
        </h1>
        <p>다른 요청이 오게되면 다시 알려드릴게요.</p>
      </div>

      <AcceptButton onClick={() => router.push('/')}>확인</AcceptButton>
    </NoPageWrapper>
  );
}

export default NoPage;
