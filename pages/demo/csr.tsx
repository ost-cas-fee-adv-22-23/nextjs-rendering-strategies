import { useEffect, useState } from "react";
import { TimeOutput } from "../../components/response";
import { fetchDatetime } from "../../services/worldtimeapi";

export default function Page() {
  const [datetime, setDatetime] = useState<string>();

  useEffect(() => {
    fetchDatetime()
      .then((datetime) => setDatetime(datetime))
      .catch(console.error);
  }, []);

  return <TimeOutput datetime={datetime} />;
}
