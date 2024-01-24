import { FooterIcon } from "./icons/FooterIcon";

export const Footer = () => {
  return (
    <div className="flex flex-col py-6">
      <div className="flex items-center gap-2 m-auto">
        <div>
          <FooterIcon />
        </div>
        <p className="text-sm">
          2023 | <span className="underline">Designed</span> and{" "}
          <span className="underline">coded</span> with ❤️️ by Sagar Shah
        </p>
      </div>
    </div>
  );
};
