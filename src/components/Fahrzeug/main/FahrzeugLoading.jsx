import { GridCol, Skeleton } from "@mantine/core";

const FahrzeugLoading = () => {
  const xl = 4;
  const lg = 4;
  const md = 6;
  const sm = 6;
  const xs = 12;
  return (
    <>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
    </>
  );
}
export default FahrzeugLoading;