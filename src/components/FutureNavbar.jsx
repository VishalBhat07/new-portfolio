import { createContext, useState } from "react";
import { Github, Linkedin, Zap } from "lucide-react";
import { Frame } from "./ui/future-navbar";
import FutureButton from "./ui/future-navbar";

export const MobileMenuContext = createContext({
  showMenu: true,
  setShowMenu: () => {},
});

function FutureNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  // 🎨 Direct color constants
  const primaryStroke = "#4f46e5"; // Indigo
  const primaryFill = "rgba(79, 70, 229, 0.2)";

  return (
    <MobileMenuContext.Provider value={{ showMenu, setShowMenu }}>
      <div className="h-16 mt-2 mx-2 lg:-mt-px lg:-mx-px flex w-full top-0 inset-x-0 z-40">
        {/* Left decorative wing */}
        <div className="size-full relative -mr-[11px] hidden lg:block">
          <Frame
            className="drop-shadow-2xl"
            paths={JSON.parse(
              `[{
                "show": true,
                "style": {"strokeWidth": "1", "stroke": "${primaryStroke}", "fill": "rgba(79,70,229,0.08)"},
                "path":[["M","0","0"],["L","100% - 6","0"],["L","100% - 11","100% - 64"],["L","100% + 0","0% + 29"],["L","0","11"],["L","0","0"]]
              },{
                "show": true,
                "style": {"strokeWidth": "1", "stroke": "${primaryStroke}38", "fill": "transparent"},
                "path":[["M","0","14"],["L","100% - 7","33"]]
              }]`,
            )}
          />
        </div>

        {/* Main center section */}
        <div className="flex lg:container h-full relative flex-none w-full">
          {/* Logo + Nav links */}
          <div className="flex-none h-full px-14 relative w-full lg:w-auto">
            <Frame
              enableBackdropBlur
              className="drop-shadow-2xl"
              paths={JSON.parse(
                `[{
                  "show":true,
                  "style":{"strokeWidth":"1","stroke":"${primaryStroke}","fill":"${primaryFill}"},
                  "path":[["M","6","0"],["L","100% - 6.5","0"],["L","100% + 0","0% + 9"],["L","100% - 28","100% - 15"],["L","162","100% - 15"],["L","164","100% - 30"],["L","153","100% - 15"],["L","27","100% - 15"],["L","0","0% + 8"],["L","6","0"]]
                },{
                  "show":true,
                  "style":{"strokeWidth":"1","stroke":"${primaryStroke}91","fill":"transparent"},
                  "path":[["M","32","100% - 15"],["L","0% + 152.5","100% - 15"],["L","0% + 163.5","100% - 29"],["L","0% + 161.5","100% - 15"],["L","100% - 32.5","100% - 15"],["L","100% - 36.5","100% - 7"],["L","0% + 163.5","100% - 7"],["L","0% + 165.5","100% - 23"],["L","0% + 152.5","100% - 7"],["L","37","100% - 7"],["L","32","100% - 15"]]
                },{
                  "show":true,
                  "style":{"strokeWidth":"1","stroke":"${primaryStroke}3B","fill":"transparent"},
                  "path":[["M","0","0% + 33"],["M","4","0% + 33"],["L","0% + 18.5","100% - 12"],["L","0% + 23.5","100% - 12"],["L","29","100% + 0"],["L","155","100% - 0"],["L","160","100% - 8"],["L","161","100% - 0"],["L","100% - 28","100% + 0"],["L","100% - 23","100% - 11"],["L","100% - 17","100% - 11"],["L","100% - 14","100% - 14"],["L","100% + 0","100% - 14"]]
                }]`,
              )}
            />
            <div className="flex items-center mt-2.5 relative">
              <a href="/" className="me-16 font-bold text-white no-underline">
                Portfolio
              </a>
              <nav className="hidden lg:flex gap-6 font-medium text-sm">
                <a href="#about" className="text-white hover:text-indigo-300 transition-colors">About</a>
                <a href="#experience" className="text-white hover:text-indigo-300 transition-colors">Experience</a>
                <a href="#clubs" className="text-white hover:text-indigo-300 transition-colors">Clubs</a>
                <a href="#projects" className="text-white hover:text-indigo-300 transition-colors">Projects</a>
                <a href="#skills" className="text-white hover:text-indigo-300 transition-colors">Skills</a>
                <a href="#contact" className="text-white hover:text-indigo-300 transition-colors">Contact</a>
              </nav>
              <div
                onClick={() => setShowMenu(true)}
                className="cursor-pointer ms-auto flex items-center gap-2 lg:hidden font-medium text-white"
              >
                <Zap className="size-4" />
                Menu
              </div>
            </div>
          </div>

          {/* Right section — search + GitHub */}
          <div className="w-full relative -ml-[25px] lg:flex justify-end pe-8 hidden">
            <Frame
              enableBackdropBlur
              className="drop-shadow-2xl"
              paths={JSON.parse(
                `[{
                  "show":true,
                  "style":{"strokeWidth":"1","stroke":"${primaryStroke}80","fill":"rgba(79,70,229,0.1)"},
                  "path":[["M","19","0"],["L","100% - 5","0"],["L","100% + 0","0% + 7"],["L","100% - 36","100% - 20"],["L","0","100% - 20"],["L","25","8.999992370605469"],["L","19","1"]]
                },{
                  "show":true,
                  "style":{"strokeWidth":"1","stroke":"${primaryStroke}3B","fill":"transparent"},
                  "path":[["M","25","100% - 14"],["L","100% - 32","100% - 13"],["L","100% - 15","36"]]
                }]`,
              )}
            />
            <div className="flex items-center -mt-3.5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/vishalbhat07/"
              >
                <FutureButton shape="flat" className="py-[0.45rem] px-6">
                  <Linkedin className="size-4" />
                </FutureButton>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VishalBhat07"
              >
                <FutureButton shape="flat" className="py-[0.45rem] px-6 ms-1">
                  <Github className="size-4" />
                </FutureButton>
              </a>
            </div>
          </div>
        </div>

        {/* Right decorative wing */}
        <div className="size-full relative -ml-[18px] hidden lg:block">
          <Frame
            paths={JSON.parse(
              `[{
                "show":true,
                "style":{"strokeWidth":"1","stroke":"${primaryStroke}E6","fill":"rgba(79,70,229,0.08)"},
                "path":[["M","12","0"],["L","100% + 0","0"],["L","100% + 0","0% + 16"],["L","0","100% - 42"],["L","18","7"],["L","12","0"]]
              },{
                "show":true,
                "style":{"strokeWidth":"1","stroke":"${primaryStroke}3B","fill":"transparent"},
                "path":[["M","3","100% - 36"],["L","100% + 0","20"]]
              }]`,
            )}
          />
        </div>
      </div>

      {/* Mobile slide-out menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl font-medium">
            <a href="#about" onClick={() => setShowMenu(false)}>About</a>
            <a href="#experience" onClick={() => setShowMenu(false)}>Experience</a>
            <a href="#clubs" onClick={() => setShowMenu(false)}>Clubs</a>
            <a href="#projects" onClick={() => setShowMenu(false)}>Projects</a>
            <a href="#skills" onClick={() => setShowMenu(false)}>Skills</a>
            <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
            <button
              onClick={() => setShowMenu(false)}
              className="mt-8 text-sm text-indigo-400 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </MobileMenuContext.Provider>
  );
}

export default FutureNavbar;
