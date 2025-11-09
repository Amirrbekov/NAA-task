export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src="./logo.svg" alt="Logo" className="w-[51px] h-[30px]" />
      <span className="text-lg font-medium text-gray-800">
        NAA Control Panel
      </span>
    </div>
  );
}
