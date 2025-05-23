import React, { useEffect, useRef } from 'react';
import { CodeIcon, BoxIcon, DatabaseIcon, BrainIcon, PaletteIcon, GithubIcon, MonitorIcon, SmartphoneIcon, ServerIcon, FigmaIcon } from 'lucide-react';
type Skill = {
  name: string;
  icon: React.ReactNode;
  category: string;
  color: string;
};
export const Tools = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skills: Record<string, Skill[]> = {
    Languages: [{
      name: 'Java',
      icon: <CodeIcon />,
      category: 'Languages',
      color: '#f89820'
    }, {
      name: 'JavaScript',
      icon: <CodeIcon />,
      category: 'Languages',
      color: '#f7df1e'
    }, {
      name: 'Python',
      icon: <CodeIcon />,
      category: 'Languages',
      color: '#3776ab'
    }, {
      name: 'HTML5',
      icon: <CodeIcon />,
      category: 'Languages',
      color: '#e34f26'
    }, {
      name: 'CSS3',
      icon: <CodeIcon />,
      category: 'Languages',
      color: '#264de4'
    }, {
      name: 'Kotlin',
      icon: <CodeIcon />,
      category: 'Languages',
      color: '#7f52ff'
    }, {
      name: 'Dart',
      icon: <CodeIcon />,
      category: 'Languages',
      color: '#00b4ab'
    }],
    Frameworks: [{
      name: 'React',
      icon: <BoxIcon />,
      category: 'Frameworks',
      color: '#61dafb'
    }, {
      name: 'Flutter',
      icon: <SmartphoneIcon />,
      category: 'Frameworks',
      color: '#02569b'
    }, {
      name: 'Jetpack Compose',
      icon: <SmartphoneIcon />,
      category: 'Frameworks',
      color: '#4285f4'
    }],
    Tools: [{
      name: 'Figma',
      icon: <FigmaIcon />,
      category: 'Tools',
      color: '#f24e1e'
    }, {
      name: 'Git',
      icon: <GithubIcon />,
      category: 'Tools',
      color: '#f05032'
    }, {
      name: 'VS Code',
      icon: <MonitorIcon />,
      category: 'Tools',
      color: '#007acc'
    }, {
      name: 'IntelliJ IDEA',
      icon: <div />,
      category: 'Tools',
      color: '#fe315d'
    }, {
      name: 'Android Studio',
      icon: <SmartphoneIcon />,
      category: 'Tools',
      color: '#3ddc84'
    }, {
      name: 'Adobe Creative Cloud',
      icon: <PaletteIcon />,
      category: 'Tools',
      color: '#ff0000'
    }],
    Databases: [{
      name: 'MongoDB',
      icon: <DatabaseIcon />,
      category: 'Databases',
      color: '#47a248'
    }, {
      name: 'Firebase',
      icon: <ServerIcon />,
      category: 'Databases',
      color: '#ffca28'
    }, {
      name: 'MySQL',
      icon: <DatabaseIcon />,
      category: 'Databases',
      color: '#4479a1'
    }]
  };
  return <section id="tools" ref={sectionRef} className="min-h-screen py-20">
      <h2 className="text-3xl sm:text-4xl font-light mb-16 tracking-tight">
        Skills & <span className="text-[#6EC6B0]">Technologies</span>
      </h2>
      <div className="grid gap-16">
        {Object.entries(skills).map(([category, items]) => <div key={category}>
            <h3 className="text-xl font-light mb-8 flex items-center">
              <BrainIcon size={20} className="mr-2 text-[#6EC6B0]" />
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((skill, index) => <div key={index} className="p-4 bg-[#30382F]/30 rounded-lg hover:bg-[#30382F]/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="text-[#6EC6B0]" style={{
                color: skill.color
              }}>
                      {skill.icon}
                    </div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
    </section>;
};