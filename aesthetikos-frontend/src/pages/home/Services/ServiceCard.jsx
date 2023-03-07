// all imports

export default function ServiceCard({ title, icon }) {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-center items-center p-10 sm:p-20 bg-sec-5/25 rounded-[45px] h-full">
        <div className="w-40 h-40">{icon}</div>
      </div>
      <h3 className="text-center p-4 bg-sec-5/25 rounded-xl text-2xl capitalize text-sec-9">{title}</h3>
    </div>
  );
}
