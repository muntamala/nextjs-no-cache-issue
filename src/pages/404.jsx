export default function NotFoundPage(props) {
  return <div>Custom 404 page with {props.data}</div>;
}

export function getStaticProps() {
  return {
    props: {
      data: "server side props",
    },
  };
}
