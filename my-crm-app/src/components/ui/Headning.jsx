export const Heading = ({ text, className }) => (
  <div
    className={`w-[300px] flex gap-3 items-center justify-center , ${className}`}
  >
    <hr className="border-3 border-themecolor w-full" />
    <span className="w-full text-themecolor">{text}</span>
    <hr className="border-3 border-themecolor w-full" />
  </div>
);
