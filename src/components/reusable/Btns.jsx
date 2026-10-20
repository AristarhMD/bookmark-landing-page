export function Button({ children, type, addStyle }) {
  const typeOfBtn =
    type === "primary"
      ? "bg-blue-600 text-white hover:inset-ring-blue-600 hover:text-blue-600"
      : "bg-grey-50 text-blue-950/75 hover:inset-ring-grey-600 hover:text-grey-600";
  return (
    <button
      className={`cursor-pointer preset-2-mob-m md:preset-6-medium py-2 md:py-2.5 rounded-[5px]  w-full hover:inset-ring-2 hover:bg-transparent ${typeOfBtn} ${addStyle ? addStyle : ""}`}
    >
      {children}
    </button>
  );
}
