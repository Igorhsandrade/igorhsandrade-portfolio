'use client';

import { useMemo, useState, useEffect } from 'react';
import type { JSX } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  HiCodeBracket,
  HiCpuChip,
  HiCircleStack,
  HiWrench,
  HiCalendar,
  HiMagnifyingGlass,
  HiXMark
} from 'react-icons/hi2';
import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk, // For Java
  SiGo,
  SiRust,
  SiPhp,
  SiCplusplus,
  // Technologies - Frontend
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiTailwindcss,
  SiSass,
  // Technologies - Backend
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiSpring,
  SiLaravel,
  // Data
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiElasticsearch,
  SiSqlite,
  SiAmazondynamodb,
  SiGraphql,
  SiPrisma,
  // Tools
  SiGit,
  SiDocker,
  SiAmazon, // For AWS
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiFigma,
  SiPostman,
  SiJest,
  SiCypress,
  SiWebpack,
  SiVite,
  SiSharp,
  SiPandas,
  SiGithubcopilot,
  SiR
} from 'react-icons/si';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import type {
  Skill,
  SkillIcon,
  SkillLevel,
  SkillCategory
} from '@/constants/skills';

// Type definitions for better type safety
type IconComponent = React.ComponentType<{ className?: string }>;

type BadgeVariant = 'secondary' | 'default' | 'destructive' | 'outline';

type LevelOrder = Record<SkillLevel, number>;

type SkillsByCategory = Record<SkillCategory, Skill[]>;

type CategoryIcons = Record<SkillCategory, IconComponent>;

// Utility type for level-based styling functions
type LevelStyleFunction<T = string> = (level: SkillLevel) => T;

interface SkillsSectionProps {
  readonly skills: Skill[];
}

interface SkillListItemProps {
  readonly skill: Skill;
}

// Constants with proper typing
const LEVEL_ORDER: Readonly<LevelOrder> = {
  Expert: 4,
  Advanced: 3,
  Intermediate: 2,
  Beginner: 1
} as const;

const LEVEL_WIDTHS: Readonly<Record<SkillLevel, string>> = {
  Expert: '100%',
  Advanced: '75%',
  Intermediate: '50%',
  Beginner: '25%'
} as const;

const CATEGORIES: readonly SkillCategory[] = [
  'Languages',
  'Technologies',
  'Data',
  'Tools'
] as const;

// Icon mapping with proper typing
const iconMap: Record<SkillIcon, IconComponent> = {
  // Languages
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  java: SiOpenjdk,
  go: SiGo,
  rust: SiRust,
  php: SiPhp,
  cpp: SiCplusplus,
  csharp: SiSharp,
  r: SiR,
  // Technologies - Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  vuejs: SiVuedotjs,
  angular: SiAngular,
  svelte: SiSvelte,
  tailwind: SiTailwindcss,
  sass: SiSass,
  // Technologies - Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  django: SiDjango,
  fastapi: SiFastapi,
  spring: SiSpring,
  laravel: SiLaravel,
  // Data
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  redis: SiRedis,
  elasticsearch: SiElasticsearch,
  sqlite: SiSqlite,
  dynamodb: SiAmazondynamodb,
  graphql: SiGraphql,
  prisma: SiPrisma,
  pandas: SiPandas,
  // Tools
  git: SiGit,
  vscode: HiCodeBracket, // Fallback to generic code icon
  docker: SiDocker,
  aws: SiAmazon,
  vercel: SiVercel,
  netlify: SiNetlify,
  github: SiGithubactions,
  kubernetes: SiKubernetes,
  terraform: SiTerraform,
  jenkins: SiJenkins,
  figma: SiFigma,
  postman: SiPostman,
  jest: SiJest,
  cypress: SiCypress,
  webpack: SiWebpack,
  vite: SiVite,
  copilot: SiGithubcopilot,
  // Generic fallbacks
  code: HiCodeBracket,
  cpu: HiCpuChip,
  database: HiCircleStack,
  tool: HiWrench
};

const categoryIcons: CategoryIcons = {
  Languages: HiCodeBracket,
  Technologies: HiCpuChip,
  Data: HiCircleStack,
  Tools: HiWrench
};

const getLevelColor: LevelStyleFunction = (level) => {
  switch (level) {
    case 'Expert':
      return 'text-teal-500';
    case 'Advanced':
      return 'text-green-500';
    case 'Intermediate':
      return 'text-yellow-500';
    case 'Beginner':
      return 'text-orange-500';
    default:
      return 'text-gray-500';
  }
};

const getLevelBadgeVariant: LevelStyleFunction<BadgeVariant> = (level) => {
  // Use 'secondary' as base and override with custom colors via className
  return 'secondary';
};

const getBadgeColorClasses: LevelStyleFunction = (level) => {
  switch (level) {
    case 'Expert':
      return 'bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700';
    case 'Advanced':
      return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700';
    case 'Beginner':
      return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-700';
  }
};

const getProgressBarColor: LevelStyleFunction = (level) => {
  switch (level) {
    case 'Expert':
      return 'from-teal-500 to-teal-600';
    case 'Advanced':
      return 'from-green-500 to-green-600';
    case 'Intermediate':
      return 'from-yellow-500 to-yellow-600';
    case 'Beginner':
      return 'from-orange-500 to-orange-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getLevelWidth: LevelStyleFunction = (level) => {
  return LEVEL_WIDTHS[level];
};

export function SkillsSection({ skills }: SkillsSectionProps): JSX.Element {
  const skillsByCategory = useMemo((): SkillsByCategory => {
    const grouped = skills.reduce<SkillsByCategory>((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as SkillsByCategory);

    // Sort skills within each category by level (Expert first, then Advanced, etc.)
    (Object.keys(grouped) as SkillCategory[]).forEach((category) => {
      grouped[category].sort(
        (a, b) => LEVEL_ORDER[b.level] - LEVEL_ORDER[a.level]
      );
    });

    return grouped;
  }, [skills]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<SkillCategory>('Languages');

  const filteredSkillsByCategory = useMemo((): SkillsByCategory => {
    if (!searchTerm.trim()) {
      return skillsByCategory;
    }

    const filtered: SkillsByCategory = {} as SkillsByCategory;
    (Object.keys(skillsByCategory) as SkillCategory[]).forEach((category) => {
      const categorySkills = skillsByCategory[category].filter((skill: Skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (categorySkills.length > 0) {
        filtered[category] = categorySkills;
      }
    });
    return filtered;
  }, [skillsByCategory, searchTerm]);

  const totalFilteredSkills = Object.values(filteredSkillsByCategory).flat()
    .length;

  // Auto-switch to first tab with results when searching
  useEffect(() => {
    if (searchTerm.trim()) {
      const categoriesWithResults = CATEGORIES.filter(
        (category) => (filteredSkillsByCategory[category] || []).length > 0
      );

      if (categoriesWithResults.length > 0) {
        // If current tab has no results, switch to first tab with results
        if (
          !filteredSkillsByCategory[activeTab] ||
          filteredSkillsByCategory[activeTab].length === 0
        ) {
          setActiveTab(categoriesWithResults[0]);
        }
      }
    }
  }, [searchTerm, filteredSkillsByCategory, activeTab]);

  // Reset to Languages tab when clearing search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setActiveTab('Languages');
    }
  }, [searchTerm]);

  const SkillListItem = ({ skill }: SkillListItemProps): JSX.Element => {
    const IconComponent = iconMap[skill.icon] || iconMap.code;

    return (
      <div className="p-3 md:p-4 rounded-lg border hover:bg-muted/50 transition-colors group">
        {/* Mobile Layout: Stack vertically */}
        <div className="flex flex-col gap-3 sm:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconComponent
                className={cn('w-4 h-4', getLevelColor(skill.level))}
              />
              <h4 className="font-medium text-sm">{skill.name}</h4>
            </div>
            <Badge
              variant={getLevelBadgeVariant(skill.level)}
              className={cn(
                'text-xs px-2 py-0',
                getBadgeColorClasses(skill.level)
              )}
            >
              {skill.level}
            </Badge>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <HiCalendar className="w-3 h-3" />
              {skill.years} years
            </div>
            <div className="flex-1 max-w-24">
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={cn(
                    'h-2 rounded-full transition-all duration-700 bg-gradient-to-r',
                    getProgressBarColor(skill.level)
                  )}
                  style={{ width: getLevelWidth(skill.level) }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconComponent
              className={cn('w-5 h-5', getLevelColor(skill.level))}
            />
            <div>
              <h4 className="font-medium">{skill.name}</h4>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <HiCalendar className="w-3 h-3" />
                {skill.years} years
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-32">
              <div className="text-xs text-center mb-1">
                <Badge
                  variant={getLevelBadgeVariant(skill.level)}
                  className={cn(
                    'text-xs px-2 py-0',
                    getBadgeColorClasses(skill.level)
                  )}
                >
                  {skill.level}
                </Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={cn(
                    'h-2 rounded-full transition-all duration-700 bg-gradient-to-r',
                    getProgressBarColor(skill.level)
                  )}
                  style={{ width: getLevelWidth(skill.level) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative mb-6">
        <HiMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <HiXMark className="w-4 h-4" />
          </button>
        )}
      </div>

      {searchTerm && (
        <div className="mb-4 text-sm text-muted-foreground">
          Found {totalFilteredSkills} skill
          {totalFilteredSkills !== 1 ? 's' : ''} matching "{searchTerm}"
          {totalFilteredSkills > 0 && (
            <span className="ml-2 text-teal-600">
              • Showing results in{' '}
              {Object.keys(filteredSkillsByCategory).length} categor
              {Object.keys(filteredSkillsByCategory).length !== 1 ? 'ies' : 'y'}
            </span>
          )}
        </div>
      )}

      {/* Tabs for Categories */}
      <Tabs
        value={activeTab}
        onValueChange={(value: string) => setActiveTab(value as SkillCategory)}
        className="w-full"
      >
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            {CATEGORIES.map((category) => {
              const IconComponent = categoryIcons[category] || HiCodeBracket;
              const categorySkills = filteredSkillsByCategory[category] || [];
              const hasResults = categorySkills.length > 0;
              const isSearching = searchTerm.trim() !== '';

              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    'flex flex-col items-center gap-1 p-3 text-xs data-[state=active]:bg-background transition-all',
                    !hasResults && isSearching && 'opacity-50'
                  )}
                  disabled={!hasResults && isSearching}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category}</span>
                  <Badge
                    variant="outline"
                    className={cn(
                      'text-xs px-1 py-0',
                      hasResults &&
                        isSearching &&
                        'bg-teal-100 text-teal-700 border-teal-300 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700'
                    )}
                  >
                    {categorySkills.length}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {CATEGORIES.map((category) => {
          const categorySkills = filteredSkillsByCategory[category] || [];
          return (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="space-y-3">
                {categorySkills.length > 0 ? (
                  categorySkills.map((skill: Skill) => (
                    <SkillListItem key={skill.name} skill={skill} />
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    {searchTerm ? (
                      <>
                        <div className="mb-2">
                          No skills found matching "{searchTerm}" in {category}
                        </div>
                        <div className="text-sm">
                          Try a different search term or browse other categories
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-2">
                          No skills in this category yet
                        </div>
                        <div className="text-sm">
                          Skills will be added as I learn new technologies
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
