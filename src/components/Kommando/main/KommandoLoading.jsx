import { Skeleton } from "@mantine/core";

export default function KommandoLoading() {
  return (
    <>
      <div>
        <Skeleton height={640}></Skeleton>
      </div>
      <div>
        <Skeleton height={640}></Skeleton>
      </div>
      <div>
        <Skeleton height={640}></Skeleton>
      </div>
    </>
  );
}
