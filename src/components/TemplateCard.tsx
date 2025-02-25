import React from 'react';
import { Star, Download, ExternalLink, Info, Play } from 'lucide-react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden rounded-t-xl">
        <img
          src={template.image}
          alt={template.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{template.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{template.description}</p>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {template.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
          {template.technologies.length > 3 && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              +{template.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="flex items-center space-x-2">
            <img
              src={template.author.avatar}
              alt={template.author.name}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm text-gray-600">{template.author.name}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-gray-600">{template.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{template.downloads}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <a
            href={`/template/${template.id}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <Info className="h-4 w-4" />
            View Details
          </a>
          {template.demoUrl ? (
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              <Play className="h-4 w-4" />
              Live Preview
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed"
            >
              <Play className="h-4 w-4" />
              Preview N/A
            </button>
          )}
        </div>
      </div>
    </div>
  );
}