type SsrProps = {
  serverTime: string;
}
export default function Ssr({ serverTime }: SsrProps) {

  return (
    <div>
      <p>Server time <span>{new Date(serverTime).toLocaleTimeString()}</span></p>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { serverTime: new Date().toISOString() }
  };
}