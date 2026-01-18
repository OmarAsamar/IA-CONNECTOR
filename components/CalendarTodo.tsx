
import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckSquare, Square, ChevronLeft, ChevronRight, Plus, Clock } from 'lucide-react';
import { TodoItem } from '../types';

const CalendarTodo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Reply to WhatsApp pending leads', completed: true, date: '2024-03-24' },
    { id: '2', text: 'Schedule Instagram spring campaign', completed: false, date: '2024-03-24' },
    { id: '3', text: 'Audit Facebook Page permissions', completed: false, date: '2024-03-24' },
    { id: '4', text: 'Review HSM template rejections', completed: false, date: '2024-03-25' },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const toggleTodo = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false, date: '2024-03-24' }]);
    setNewTodo('');
  };

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 animate-in fade-in duration-500">
      
      {/* CALENDAR VIEW */}
      <div className="xl:col-span-8 space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-xl font-black uppercase text-black dark:text-white tracking-tight">March 2024</h1>
            <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">Social Content & Task Calendar</p>
          </div>
          <div className="flex gap-1">
            <button className="p-2 border border-neutral-100 dark:border-neutral-800 rounded hover:bg-neutral-50 dark:hover:bg-neutral-900"><ChevronLeft size={16}/></button>
            <button className="p-2 border border-neutral-100 dark:border-neutral-800 rounded hover:bg-neutral-50 dark:hover:bg-neutral-900"><ChevronRight size={16}/></button>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-md overflow-hidden shadow-sm">
          <div className="grid grid-cols-7 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-black/50">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
              <div key={d} className="px-3 py-2 text-center text-[9px] font-black text-neutral-400 uppercase tracking-widest">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {daysInMonth.map(d => (
              <div key={d} className={`h-24 md:h-32 border-r border-b border-neutral-50 dark:border-neutral-800/50 p-2 hover:bg-neutral-50/50 dark:hover:bg-black/20 transition-colors ${d === 24 ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : ''}`}>
                <span className={`text-[10px] font-black ${d === 24 ? 'text-indigo-600 bg-white dark:bg-indigo-900 w-5 h-5 flex items-center justify-center rounded-full shadow-sm' : 'text-neutral-400'}`}>{d}</span>
                {d === 24 && (
                   <div className="mt-2 space-y-1">
                      <div className="px-1.5 py-0.5 bg-green-500/10 text-green-500 text-[7px] font-black uppercase rounded truncate border border-green-500/20">FB Post: 10AM</div>
                      <div className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-500 text-[7px] font-black uppercase rounded truncate border border-indigo-500/20">WA Campaign</div>
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TODOLIST VIEW */}
      <div className="xl:col-span-4 space-y-4">
        <div className="card-pro p-5 shadow-lg border-2 border-black dark:border-white">
          <h2 className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-4 flex items-center gap-2">
            <CheckSquare size={16} /> Today's To-do List
          </h2>

          <form onSubmit={addTodo} className="flex gap-2 mb-6">
            <input 
              type="text" 
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              placeholder="Add new task..." 
              className="flex-1 input-pro text-[10px]" 
            />
            <button className="bg-black dark:bg-white text-white dark:text-black p-2 rounded shadow-lg hover:scale-105 transition">
              <Plus size={16} />
            </button>
          </form>

          <div className="space-y-3">
            {todos.filter(t => t.date === '2024-03-24').map(todo => (
              <div 
                key={todo.id} 
                onClick={() => toggleTodo(todo.id)}
                className="flex items-center gap-3 group cursor-pointer"
              >
                {todo.completed ? 
                  <div className="text-green-500 shrink-0"><CheckSquare size={16} /></div> : 
                  <div className="text-neutral-300 group-hover:text-black dark:group-hover:text-white shrink-0"><Square size={16} /></div>
                }
                <span className={`text-[11px] font-medium leading-tight ${todo.completed ? 'line-through text-neutral-400' : 'text-black dark:text-white'}`}>
                  {todo.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center justify-between text-[9px] font-black text-neutral-400 uppercase tracking-widest">
              <span>Progress</span>
              <span>{Math.round((todos.filter(t=>t.completed).length / todos.length) * 100)}%</span>
            </div>
            <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-black dark:bg-white h-full transition-all duration-700" 
                style={{ width: `${(todos.filter(t=>t.completed).length / todos.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="card-pro p-5 bg-neutral-900 text-white">
           <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2"><Clock size={12}/> Upcoming Tomorrow</h3>
           <div className="space-y-3 opacity-60">
             {todos.filter(t => t.date === '2024-03-25').map(todo => (
                <div key={todo.id} className="flex items-center gap-2 text-[10px]">
                   <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
                   <span>{todo.text}</span>
                </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTodo;
