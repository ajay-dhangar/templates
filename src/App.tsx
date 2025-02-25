import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import TemplateCard from './components/TemplateCard';
import TemplateDetails from './components/TemplateDetails';
import CategoryFilter from './components/CategoryFilter';
import { templates } from './data/templates';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
      const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentTemplate = templates.find(t => t.id === selectedTemplate);

  if (currentTemplate) {
    return <TemplateDetails template={currentTemplate} onBack={() => setSelectedTemplate(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Discover Templates</h2>
          <p className="text-gray-600 mb-6">
            Find the perfect starting point for your next project with our collection of templates
          </p>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard 
              key={template.id} 
              template={template}
              onClick={() => setSelectedTemplate(template.id)}
            />
          ))}
        </div>
        
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900">No templates found</h3>
            <p className="text-gray-600 mt-2">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}
      </main>
      
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Templates Marketplace. All rights reserved. Made with ❤️ by Ajay Dhangar.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;