import { addExtensionData } from "../../data";
import { Button } from "./Btns";
import dotSvg from "../../assets/images/bg-dots.svg";
import logoChrome from "../../assets/images/logo-chrome.svg";
import logoFirefox from "../../assets/images/logo-firefox.svg";
import logoOpera from "../../assets/images/logo-opera.svg";

export function Download() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-10 md:gap-2 mt-10 mb-32 md:mt-16 md:mb-35.5 xl:gap-10 xl:mt-12 xl:mb-40">
      {addExtensionData.map((extension) => (
        <div
          key={extension.id}
          className={`w-70 md:w-50 xl:w-70 text-center py-8 md:py-6 xl:py-8 rounded-[15px] shadow-download-card ${extension.id === 14 ? "xl:mt-10" : extension.id === 15 ? "xl:mt-20" : ""}`}
        >
          <div className="flex items-center justify-center mb-8 md:mb-4 xl:mb-8">
            <img
              src={
                extension.id === 13
                  ? logoChrome
                  : extension.id === 14
                    ? logoFirefox
                    : logoOpera
              }
              alt={`logo of ${extension.name}`}
              className="h-25 md:h-18 xl:h-25"
            />
          </div>
          <div>
            <p className="download-header mb-2 md:mb-0 xl:mb-2">
              Add to {extension.name}
            </p>
            <p className="preset-2-mob-r md:preset-6-regular text-blue-950/50">
              Minimum version {extension.minVersion}
            </p>
          </div>
          <img src={dotSvg} alt="Dots image" className="my-6 md:my-4 xl:my-6" />
          <div className="w-[82.85%] md:w-[90.45%] xl:w-[82.85%] mx-auto">
            <Button type="primary">Add & Install Extension</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
