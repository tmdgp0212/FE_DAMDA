import React from 'react';
import AcceptLayout from '@/components/manager/accept/AcceptLayout';
import { GetServerSideProps } from 'next';
import { MatchingData } from '@/apis/manager';
import { managerAcceptanceType } from '@/types/constants/manager';

export const getServerSideProps: GetServerSideProps<{ data: MatchingData }> = async ({ params }) => {
  const res = await fetch(`https://api.damda.store/api/v1/matching/accept/${params?.id}?memberId=1`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

function Id({ data }: { data: managerAcceptanceType }) {
  return <AcceptLayout data={data} />;
}

export default Id;
