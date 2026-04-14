import { ShieldCheck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center px-6 py-3 justify-between glass-panel rounded-full w-[90%] max-w-5xl transition-all">
      <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-indigo-600" />
        Architect.ai
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link className="text-sm font-medium text-slate-900" to="/">产品平台</Link>
        <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">客户案例</a>
        <Link className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" to="/pricing">价格方案</Link>
        <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">更新日志</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-slate-900 transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <Link to="/dashboard" className="bg-slate-900/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
          开始构建
        </Link>
      </div>
    </nav>
  );
}
