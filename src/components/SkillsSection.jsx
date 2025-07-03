import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Languages
    { name: "Python", category: "languages" },
    { name: "HTML", category: "languages" },
    { name: "CSS", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "TypeScript", category: "languages" },

    // Frontend
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "GSAP", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    
    // Database
    { name: "MySQL", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Prisma", category: "database" },

    // Tools
    { name: "Git / GitHub", category: "tools" },
    { name: "Figma", category: "tools" },
];

const categories = ["languages", "frontend", "backend", "database", "tools"];

function SkillsSection() {

    const [activeCategory, setActiveCategory] = useState('languages');
    const filteredSkills = skills.filter((skill) => skill.category === activeCategory)

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground" 
                                : "text-foreground border hover:border-primary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                           
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection