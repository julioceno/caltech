"use client";

import { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean;
}

export default function Accordion({ items, allowMultipleOpen = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultipleOpen) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        
        return (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`rounded-3xl transition-all duration-300 cursor-pointer ${
              isOpen
                ? 'bg-secondary shadow-lg'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center justify-between p-6">
                <h3 className={`text-lg md:text-xl font-semibold ${
                    isOpen ? 'text-white' : 'text-gray-900'
                }`}>
                    {item.title}
                </h3>
                
               <div className='rounded-md h-8 w-8 flex justify-center items-center bg-primary text-white text-3xl'>
                 {isOpen ? (
                   <BsDash />
                 ) : (
                   <BsPlus />
                 )}
                </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">
                <p className="text-white text-sm md:text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}