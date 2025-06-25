'use client';

import { useMemo, useState, useEffect } from 'react';
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
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface Skill {
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  years: number;
  icon: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const iconMap = {
  code: HiCodeBracket,
  cpu: HiCpuChip,
  database: HiCircleStack,
  tool: HiWrench
};

const categoryIcons = {
  Languages: HiCodeBracket,
  Technologies: HiCpuChip,
  Data: HiCircleStack,
  Tools: HiWrench
};

const getLevelColor = (level: string) => {
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

const getLevelBadgeVariant = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'default';
    case 'Advanced':
      return 'secondary';
    default:
      return 'outline';
  }
};

const getProgressBarColor = (level: string) => {
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

const getLevelWidth = (level: string) => {
  switch (level) {
    case 'Expert':
      return '100%';
    case 'Advanced':
      return '75%';
    case 'Intermediate':
      return '50%';
    case 'Beginner':
      return '25%';
    default:
      return '0%';
  }
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const skillsByCategory = useMemo(() => {
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);

    // Sort skills within each category by level (Expert first, then Advanced, etc.)
    const levelOrder = { Expert: 4, Advanced: 3, Intermediate: 2, Beginner: 1 };
    Object.keys(grouped).forEach((category) => {
      grouped[category].sort(
        (a, b) => levelOrder[b.level] - levelOrder[a.level]
      );
    });

    return grouped;
  }, [skills]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Languages');

  const filteredSkillsByCategory = useMemo(() => {
    if (!searchTerm.trim()) {
      return skillsByCategory;
    }

    const filtered: Record<string, Skill[]> = {};
    Object.keys(skillsByCategory).forEach((category) => {
      const categorySkills = skillsByCategory[category].filter((skill) =>
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

  const categories = ['Languages', 'Technologies', 'Data', 'Tools'];

  // Auto-switch to first tab with results when searching
  useEffect(() => {
    if (searchTerm.trim()) {
      const categoriesWithResults = categories.filter(
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
  }, [searchTerm, filteredSkillsByCategory, activeTab, categories]);

  // Reset to Languages tab when clearing search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setActiveTab('Languages');
    }
  }, [searchTerm]);

  const SkillListItem = ({ skill }: { skill: Skill }) => {
    const IconComponent =
      iconMap[skill.icon as keyof typeof iconMap] || HiCodeBracket;

    return (
      <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors group">
        <div className="flex items-center gap-3">
          <IconComponent
            className={cn('w-5 h-5', getLevelColor(skill.level))}
          />
          <div>
            <h4 className="font-medium">{skill.name}</h4>
            <p className="text-sm text-muted-foreground">{skill.level}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <Badge variant={getLevelBadgeVariant(skill.level)} className="mb-1">
              {skill.level}
            </Badge>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <HiCalendar className="w-3 h-3" />
              {skill.years} years
            </div>
          </div>

          <div className="w-32">
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className={cn(
                  'h-2 rounded-full transition-all duration-700 bg-gradient-to-r',
                  getProgressBarColor(skill.level)
                )}
                style={{ width: getLevelWidth(skill.level) }}
              />
            </div>
            <div className="text-xs text-center mt-1 text-muted-foreground">
              {skill.level}
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
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            {categories.map((category) => {
              const IconComponent =
                categoryIcons[category as keyof typeof categoryIcons] ||
                HiCodeBracket;
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

        {categories.map((category) => {
          const categorySkills = filteredSkillsByCategory[category] || [];
          return (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="space-y-3">
                {categorySkills.length > 0 ? (
                  categorySkills.map((skill) => (
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
