export default function Logo() {
  return (
    <div className="w-[280px] h-[30.08px] flex flex-row justify-start items-center gap-2">
      <img src="./logo.svg" alt="Logo" className="w-[51px] h-[30px]" />
      <span className="w-auto h-auto  text-lg font-semibold text-gray-800">
        NAA Control Panel
      </span>
    </div>
  );
}
