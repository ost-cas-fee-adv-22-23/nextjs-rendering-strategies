import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { TimeOutput } from "../../components/response";
import { fetchDatetime } from "../../services/datetimeapi";

type PageProps = {
  serverDatetime: string;
};

export default function Page({ serverDatetime }: PageProps) {
  const [datetime, setDatetime] = useState<string>();

  useEffect(() => {
    fetchDatetime()
      .then((datetime) => setDatetime(datetime))
      .catch(console.error);
  }, []);

  return <TimeOutput datetime={datetime} serverDatetime={serverDatetime} />;
}
export const getStaticProps: GetStaticProps = async () => ({
  props: { serverDatetime: await fetchDatetime() },
});
