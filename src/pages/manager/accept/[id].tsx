import React from 'react';
import AcceptLayout from '@/components/manager/accept/AcceptLayout';
import { GetServerSideProps } from 'next';
import { MatchingData, MatchingManagerData } from '@/apis/manager';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps<{ data: MatchingData }> = async ({ params }) => {
  const res = await fetch(`https://api.damda.store/api/v1/matching/accept/${params?.id}?memberId=5`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

function Id({ data }: { data: MatchingManagerData }) {
  return <AcceptLayout data={data} />;
}

export default Id;
