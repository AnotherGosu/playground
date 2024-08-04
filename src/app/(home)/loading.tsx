export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 p-4">
      <div className="loader size-[256px]" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="loader h-[84px] w-[307px]" />
        <div className="loader h-[84px] w-[307px]" />
        <div className="loader h-[84px] w-[307px]" />
      </div>
    </div>
  );
}
