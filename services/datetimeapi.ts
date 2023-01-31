const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

type TimeResponse = {
  datetime: string;
};

export const fetchDatetime = async () => {
  await sleep(2000);
  const res = await fetch("https://time-api-six.vercel.app/api/datetime");
  const { datetime }: TimeResponse = await res.json();

  return datetime;
};
