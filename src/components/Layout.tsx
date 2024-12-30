import React from 'react';
import { Menu, LogOut, Home, Users, FileText, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Menu className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">GatePass</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-600 hover:text-gray-900">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 min-h-screen bg-white shadow-sm">
          <nav className="mt-5 px-2">
            <a href="/" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </a>
            <a href="/visitors" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Users className="mr-3 h-5 w-5" />
              Visitors
            </a>
            <a href="/passes" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FileText className="mr-3 h-5 w-5" />
              Passes
            </a>
            <a href="/settings" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </a>
          </nav>

          {/* Designer Credit */}
          <div className="absolute bottom-0 left-0 w-64 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
            <p className="font-medium">Designed by:</p>
            <a 
              href="https://www.linkedin.com/in/syed-mohsin-bukhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Syed Mohsin Bukhari
            </a>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}