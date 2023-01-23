import { FC } from "react";

type Props = {
  datetime: string | undefined;
  serverDatetime?: string;
};

export const TimeOutput: FC<Props> = ({ datetime, serverDatetime }: Props) => (
  <main>
    <pre>
      (from client)
      <br />
      {datetime ? datetime : "loading..."}
    </pre>
    {serverDatetime && (
      <div>
        <pre>
          (from server)
          <br />
          {serverDatetime}
        </pre>

        <pre>
          (diff)
          <br />
          {datetime
            ? `${
                (new Date(datetime).getTime() -
                  new Date(serverDatetime).getTime()) /
                1000
              } seconds`
            : "loading..."}
        </pre>
      </div>
    )}
  </main>
);
