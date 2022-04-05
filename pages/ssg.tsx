import getData from "../data";

export async function getStaticProps() {
  const data =
    await new Promise((r) => setTimeout(r, 2000))
      .then(() => getData());

  return {
    props: {
      data,
    },
  };
};

export default function Ssg({ data }: { data: number }) {
  return (<>{ new Date(data).toLocaleString('ja-JP') }</>);
};
