import {
    FaPython,
    FaAws,
    FaDocker,
    FaGit,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaLinux,
    FaDrupal,
    FaJava,
    FaReact,
    FaNodeJs,
    FaCloud, 
    FaBrain,
    FaComments,
    FaMicrochip,
    FaProjectDiagram,
    FaUsers,
    FaChalkboardTeacher,
    FaNetworkWired,
    FaCube,
    FaRobot,
    FaSitemap
  } from 'react-icons/fa';
  import { SiJenkins, SiPytorch, SiTerraform } from 'react-icons/si';
  import { SiMysql } from "react-icons/si";
  import { FaDatabase } from "react-icons/fa";
  import { FaShopify } from "react-icons/fa";
  import { FaBootstrap } from "react-icons/fa";
  import { FaEgg } from "react-icons/fa6";
  import { MdOutlineEgg } from "react-icons/md";
  import { FaGolang } from "react-icons/fa6";
import JiggleSpinComponent from './JiggleSpinComponent';

  const IconComponents = {
    FaPython,
    FaAws,
    FaDocker,
    FaGit,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaLinux,
    FaDrupal,
    FaJava,
    SiJenkins,
    SiPytorch,
    SiTerraform,
    SiMysql,
    FaDatabase,
    FaShopify,
    FaBootstrap,
    FaEgg,
    MdOutlineEgg,
    FaReact,
    FaGolang,
    FaNodeJs,
    FaCloud, 
    FaBrain,
    FaComments,
    FaMicrochip,
    FaProjectDiagram,
    FaUsers,
    FaChalkboardTeacher,
    FaNetworkWired,
    FaCube,
    FaRobot,
    FaSitemap
  };

  // Brand-inspired icon colors; neutral brands use a light variant on this dark UI.
  const toolColors = {
    FaPython: '#3776AB',
    FaAws: '#FF9900',
    FaDocker: '#2496ED',
    FaGit: '#F05032',
    FaGithub: '#F0F6FC',
    FaHtml5: '#E34F26',
    FaCss3: '#1572B6',
    FaLinux: '#FCC624',
    FaDrupal: '#009CDE',
    FaJava: '#F89820',
    SiJenkins: '#D24939',
    SiPytorch: '#EE4C2C',
    SiTerraform: '#844FBA',
    SiMysql: '#4479A1',
    FaDatabase: '#4DB6AC',
    FaShopify: '#95BF47',
    FaBootstrap: '#7952B3',
    FaEgg: '#FDE68A',
    MdOutlineEgg: '#FBBF24',
    FaReact: '#61DAFB',
    FaGolang: '#00ADD8',
    FaNodeJs: '#5FA04E',
    FaCloud: '#7DD3FC',
    FaBrain: '#F472B6',
    FaComments: '#A3E635',
    FaMicrochip: '#FB7185',
    FaProjectDiagram: '#C4B5FD',
    FaUsers: '#60A5FA',
    FaChalkboardTeacher: '#34D399',
    FaNetworkWired: '#38BDF8',
    FaCube: '#A78BFA',
    FaRobot: '#FBBF24',
    FaSitemap: '#FB923C',
  };

  // Generic symbols can represent different products, so resolve those by label.
  const toolLabelColors = {
    PostgreSQL: '#336791',
    Hostinger: '#A78BFA',
    OpenAI: '#F5F5F5',
  };

  const ExperienceIcons = ({ icons = [], showDescription=true, size=100 }) => (
      <div className="flex flex-wrap justify-center space-x-4">
        {icons.length > 0 ? (
          icons.map((icon) => {
            const IconComponent = IconComponents[icon.name];
            const color = icon.color || toolLabelColors[icon.label] || toolColors[icon.name] || "#CBD5E1";

            // Check if the IconComponent exists before rendering
            if (!IconComponent) {
              console.error(`Icon ${icon.name} does not exist in the IconComponents mapping.`);
              return null; // Return null if the icon is not found
            }
    
            return (
              <div key={icon.name} className="flex flex-col items-center">
                {/* Apply specific hover effect for Shopify */}
                <div className="group">
                  <div key={icon.name} className="flex flex-col items-center transition-transform hover:scale-125 duration-500">
                    {icon.name === 'FaShopify' ? (
                      <JiggleSpinComponent shadowColor={color} eggColor="green">
                        <IconComponent
                          size={size}
                          color={color}
                        />
                      </JiggleSpinComponent>
                    ) : (
                      <div className="group">
                        <IconComponent
                          size={size}
                          color={color}
                        />
                      </div>
                    )}
                    {showDescription && (
                      <p className="mt-2 text-center text-sm text-white">{icon.label}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No icons available</p> // Fallback text if no icons are available
        )}
      </div>
    );

    export default ExperienceIcons;
