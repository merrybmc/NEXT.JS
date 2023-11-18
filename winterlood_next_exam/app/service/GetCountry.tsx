type Props = {
  name: string;
};

export const GetServerSideProps = async (): Promise<Props> => {
  // SSR을 위해서 서버측에서 컴포넌트에게 전달할 데이터를 설정하는 함수
  return { name: 'korea' };
};
