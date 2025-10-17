import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Users, BarChart3, Settings, Search, Bell, Menu, X, Plus, Clock, CheckCircle, AlertCircle, TrendingUp, Target, Zap, FileText, Home, Columns, ArrowRight, Edit, Trash2, Activity, Award, Save } from 'lucide-react';

function App() {
  const initialTickets = [
    {
      id: 1,
      user: { name: 'Иван Петров', email: 'ivan@mail.ru', avatar: '👨' },
      subject: 'Не работает авторизация',
      message: 'Здравствуйте, не могу войти в систему. Пишет "неверный пароль"',
      status: 'new',
      priority: 'high',
      channel: 'email',
      category: 'Технические проблемы',
      created: new Date(Date.now() - 2 * 60 * 60 * 1000),
      updated: new Date(Date.now() - 2 * 60 * 60 * 1000),
      assignee: null,
      messages: [
        { sender: 'user', text: 'Здравствуйте, не могу войти в систему. Пишет "неверный пароль"', time: new Date(Date.now() - 2 * 60 * 60 * 1000) }
      ]
    },
    {
      id: 2,
      user: { name: 'Мария Смирнова', email: 'maria@gmail.com', avatar: '👩' },
      subject: 'Вопрос по тарифам',
      message: 'Добрый день! Хочу уточнить, какие тарифы у вас есть для корпоративных клиентов?',
      status: 'in-progress',
      priority: 'medium',
      channel: 'telegram',
      category: 'Общие вопросы',
      created: new Date(Date.now() - 5 * 60 * 60 * 1000),
      updated: new Date(Date.now() - 1 * 60 * 60 * 1000),
      assignee: 'Анна Волкова',
      messages: [
        { sender: 'user', text: 'Добрый день! Хочу уточнить, какие тарифы у вас есть для корпоративных клиентов?', time: new Date(Date.now() - 5 * 60 * 60 * 1000) },
        { sender: 'agent', text: 'Здравствуйте! Я подберу для вас оптимальный тариф. Сколько пользователей планируете?', time: new Date(Date.now() - 4 * 60 * 60 * 1000) }
      ]
    },
    {
      id: 3,
      user: { name: 'Алексей Козлов', email: 'alex@yandex.ru', avatar: '🧑' },
      subject: 'Ошибка 500 при загрузке файлов',
      message: 'При попытке загрузить документы больше 10 МБ появляется ошибка сервера',
      status: 'waiting',
      priority: 'high',
      channel: 'vk',
      category: 'Технические проблемы',
      created: new Date(Date.now() - 24 * 60 * 60 * 1000),
      updated: new Date(Date.now() - 3 * 60 * 60 * 1000),
      assignee: 'Дмитрий Соколов',
      messages: [
        { sender: 'user', text: 'При попытке загрузить документы больше 10 МБ появляется ошибка сервера', time: new Date(Date.now() - 24 * 60 * 60 * 1000) },
        { sender: 'agent', text: 'Спасибо за обращение. Передал проблему техническим специалистам.', time: new Date(Date.now() - 20 * 60 * 60 * 1000) },
        { sender: 'system', text: 'Создана задача для разработчиков #DEV-142', time: new Date(Date.now() - 20 * 60 * 60 * 1000) }
      ]
    },
    {
      id: 4,
      user: { name: 'Елена Морозова', email: 'elena@mail.ru', avatar: '👱‍♀️' },
      subject: 'Как настроить уведомления?',
      message: 'Подскажите, пожалуйста, где в настройках можно включить email-уведомления?',
      status: 'resolved',
      priority: 'low',
      channel: 'email',
      category: 'Общие вопросы',
      created: new Date(Date.now() - 48 * 60 * 60 * 1000),
      updated: new Date(Date.now() - 47 * 60 * 60 * 1000),
      assignee: 'Анна Волкова',
      messages: [
        { sender: 'user', text: 'Подскажите, пожалуйста, где в настройках можно включить email-уведомления?', time: new Date(Date.now() - 48 * 60 * 60 * 1000) },
        { sender: 'agent', text: 'Настройки → Уведомления → Email-оповещения. Там можно настроить все параметры.', time: new Date(Date.now() - 47 * 60 * 60 * 1000) },
        { sender: 'user', text: 'Спасибо, нашла!', time: new Date(Date.now() - 47 * 60 * 60 * 1000) }
      ]
    },
    {
      id: 5,
      user: { name: 'Сергей Новиков', email: 'sergey@corp.ru', avatar: '👨‍💼' },
      subject: 'Интеграция с API',
      message: 'Нужна помощь с интеграцией вашего API в нашу систему CRM',
      status: 'in-progress',
      priority: 'high',
      channel: 'email',
      category: 'Интеграции',
      created: new Date(Date.now() - 12 * 60 * 60 * 1000),
      updated: new Date(Date.now() - 30 * 60 * 1000),
      assignee: 'Дмитрий Соколов',
      messages: [
        { sender: 'user', text: 'Нужна помощь с интеграцией вашего API в нашу систему CRM', time: new Date(Date.now() - 12 * 60 * 60 * 1000) },
        { sender: 'agent', text: 'Добрый день! Отправил вам документацию по API. Изучите и дайте знать, если возникнут вопросы.', time: new Date(Date.now() - 11 * 60 * 60 * 1000) }
      ]
    }
  ];

  const users = [
    { id: 1, name: 'Анна Волкова', email: 'anna@smartsupport.ru', role: 'operator1', status: 'online', avatar: '👩‍💻' },
    { id: 2, name: 'Дмитрий Соколов', email: 'dmitry@smartsupport.ru', role: 'operator2', status: 'online', avatar: '👨‍💻' },
    { id: 3, name: 'Ольга Иванова', email: 'olga@smartsupport.ru', role: 'admin', status: 'online', avatar: '👩‍💼' },
    { id: 4, name: 'Михаил Петров', email: 'mikhail@smartsupport.ru', role: 'manager', status: 'away', avatar: '👨‍💼' },
    { id: 5, name: 'Игорь Сидоров', email: 'igor@smartsupport.ru', role: 'developer', status: 'offline', avatar: '👨‍🔧' }
  ];

  const initialTemplates = [
    { id: 1, name: 'Приветствие', category: 'Общие', text: 'Здравствуйте! Спасибо за обращение. Чем могу помочь?' },
    { id: 2, name: 'Проблема решена', category: 'Завершение', text: 'Рад, что смог помочь! Если возникнут еще вопросы, обращайтесь.' },
    { id: 3, name: 'Передача разработчикам', category: 'Эскалация', text: 'Спасибо за информацию. Передал задачу техническим специалистам.' },
    { id: 4, name: 'Запрос информации', category: 'Общие', text: 'Для решения проблемы нужна дополнительная информация.' }
  ];

  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentUser] = useState(users[0]);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Новое обращение #1', type: 'new', time: new Date() },
    { id: 2, text: 'Обращение #3 ожидает ответа', type: 'waiting', time: new Date(Date.now() - 60 * 60 * 1000) }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [draggedTicket, setDraggedTicket] = useState(null);
  const [templates, setTemplates] = useState(initialTemplates);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [showDevTaskModal, setShowDevTaskModal] = useState(false);
  const [devTaskTitle, setDevTaskTitle] = useState('');
  const [devTaskDescription, setDevTaskDescription] = useState('');

  const statusColors = {
    new: 'bg-amber-500',
    'in-progress': 'bg-blue-500',
    waiting: 'bg-orange-500',
    resolved: 'bg-emerald-500',
    closed: 'bg-gray-500'
  };

  const statusLabels = {
    new: 'Новое',
    'in-progress': 'В работе',
    waiting: 'Ожидание',
    resolved: 'Решено',
    closed: 'Закрыто'
  };

  const priorityIcons = {
    high: React.createElement(AlertCircle, { className: "w-4 h-4 text-red-600" }),
    medium: React.createElement(TrendingUp, { className: "w-4 h-4 text-amber-600" }),
    low: React.createElement(Target, { className: "w-4 h-4 text-gray-500" })
  };

  const channelIcons = {
    email: React.createElement(Mail, { className: "w-4 h-4" }),
    telegram: React.createElement(Send, { className: "w-4 h-4" }),
    vk: React.createElement(MessageSquare, { className: "w-4 h-4" })
  };

  const roleLabels = {
    operator1: 'Оператор 1-й линии',
    operator2: 'Оператор 2-й линии',
    admin: 'Администратор',
    manager: 'Руководитель',
    developer: 'Разработчик'
  };

  const getTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'только что';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return minutes + ' мин назад';
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return hours + ' ч назад';
    const days = Math.floor(hours / 24);
    return days + ' дн назад';
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    active: tickets.filter(t => t.status !== 'resolved' && t.status !== 'closed').length,
    avgTime: '2.5 ч',
    resolvedToday: tickets.filter(t => t.status === 'resolved').length,
    waiting: tickets.filter(t => t.status === 'waiting').length
  };

  const sendMessage = () => {
    if (!messageInput.trim() || !selectedTicket) return;
    
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        return {
          ...ticket,
          messages: [...ticket.messages, {
            sender: 'agent',
            text: messageInput,
            time: new Date()
          }],
          updated: new Date(),
          status: ticket.status === 'new' ? 'in-progress' : ticket.status
        };
      }
      return ticket;
    });
    
    setTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id));
    setMessageInput('');
  };

  const updateTicketStatus = (ticketId, newStatus) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          status: newStatus,
          updated: new Date(),
          messages: [...ticket.messages, {
            sender: 'system',
            text: 'Статус изменён на "' + statusLabels[newStatus] + '"',
            time: new Date()
          }]
        };
      }
      return ticket;
    });
    
    setTickets(updatedTickets);
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket(updatedTickets.find(t => t.id === ticketId));
    }
  };

  const takeTicket = (ticketId) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          assignee: currentUser.name,
          status: 'in-progress',
          updated: new Date(),
          messages: [...ticket.messages, {
            sender: 'system',
            text: 'Обращение взято в работу оператором ' + currentUser.name,
            time: new Date()
          }]
        };
      }
      return ticket;
    });
    
    setTickets(updatedTickets);
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket(updatedTickets.find(t => t.id === ticketId));
    }
  };

  const handleDragStart = (ticket) => {
    setDraggedTicket(ticket);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (newStatus) => {
    if (draggedTicket && draggedTicket.status !== newStatus) {
      updateTicketStatus(draggedTicket.id, newStatus);
    }
    setDraggedTicket(null);
  };

  const createDevTask = () => {
    if (!devTaskTitle.trim() || !selectedTicket) return;
    
    const taskId = 'DEV-' + Math.floor(Math.random() * 1000);
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        return {
          ...ticket,
          messages: [...ticket.messages, {
            sender: 'system',
            text: 'Создана задача для разработчиков ' + taskId + ': ' + devTaskTitle,
            time: new Date()
          }],
          updated: new Date()
        };
      }
      return ticket;
    });
    
    setTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id));
    setShowDevTaskModal(false);
    setDevTaskTitle('');
    setDevTaskDescription('');
  };

  const saveTemplate = (template) => {
    setTemplates(templates.map(t => t.id === template.id ? template : t));
    setEditingTemplate(null);
  };

  const deleteTemplate = (id) => {
    setTemplates(templates.filter(t => t.id !== id));
  };

  return React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50' },
    React.createElement('div', { className: 'fixed left-0 top-0 h-full bg-gradient-to-b from-emerald-600 to-emerald-700 shadow-xl transition-all duration-300 ' + (sidebarOpen ? 'w-64' : 'w-20') + ' z-30' },
      React.createElement('div', { className: 'p-6 flex items-center justify-between border-b border-emerald-500/30' },
        sidebarOpen && React.createElement('div', { className: 'flex items-center gap-2' },
          React.createElement('div', { className: 'w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center' },
            React.createElement(Zap, { className: 'w-5 h-5 text-white' })
          ),
          React.createElement('span', { className: 'text-white font-bold text-lg' }, 'SmartSupport')
        )
      ),
      React.createElement('nav', { className: 'p-4 space-y-2' },
        [
          { icon: Home, label: 'Дашборд', page: 'dashboard' },
          { icon: MessageSquare, label: 'Обращения', page: 'tickets' },
          { icon: Columns, label: 'Канбан', page: 'kanban' },
          { icon: BarChart3, label: 'Аналитика', page: 'analytics' },
          { icon: Users, label: 'Пользователи', page: 'users' },
          { icon: FileText, label: 'Шаблоны', page: 'templates' },
          { icon: Settings, label: 'Настройки', page: 'settings' }
        ].map(item =>
          React.createElement('button', {
            key: item.page,
            onClick: () => setCurrentPage(item.page),
            className: 'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ' + (currentPage === item.page ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' : 'text-emerald-50/80 hover:bg-white/10 hover:text-white')
          },
            React.createElement(item.icon, { className: 'w-5 h-5' }),
            sidebarOpen && React.createElement('span', { className: 'font-medium' }, item.label)
          )
        )
      ),
      sidebarOpen && React.createElement('div', { className: 'absolute bottom-6 left-4 right-4' },
        React.createElement('div', { className: 'bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20' },
          React.createElement('div', { className: 'flex items-center gap-3' },
            React.createElement('div', { className: 'w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl' },
              currentUser.avatar
            ),
            React.createElement('div', { className: 'flex-1 min-w-0' },
              React.createElement('div', { className: 'text-white text-sm font-semibold truncate' }, currentUser.name),
              React.createElement('div', { className: 'text-emerald-50/70 text-xs' }, roleLabels[currentUser.role])
            )
          )
        )
      )
    ),
    React.createElement('div', { className: 'fixed top-0 right-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-20', style: { marginLeft: sidebarOpen ? '256px' : '80px' } },
      React.createElement('div', { className: 'flex items-center justify-between p-4' },
        React.createElement('div', { className: 'flex items-center gap-4' },
          React.createElement('button', {
            onClick: () => setSidebarOpen(!sidebarOpen),
            className: 'p-2 hover:bg-gray-100 rounded-xl transition-colors'
          },
            React.createElement(Menu, { className: 'w-5 h-5 text-gray-600' })
          ),
          React.createElement('div', { className: 'relative' },
            React.createElement(Search, { className: 'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' }),
            React.createElement('input', {
              type: 'text',
              placeholder: 'Поиск...',
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: 'pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all w-80'
            })
          )
        ),
        React.createElement('div', { className: 'flex items-center gap-3' },
          React.createElement('div', { className: 'relative' },
            React.createElement('button', {
              onClick: () => setShowNotifications(!showNotifications),
              className: 'p-2 hover:bg-gray-100 rounded-xl transition-colors relative'
            },
              React.createElement(Bell, { className: 'w-5 h-5 text-gray-600' }),
              notifications.length > 0 && React.createElement('span', { className: 'absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse' })
            ),
            showNotifications && React.createElement('div', { className: 'absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden' },
              React.createElement('div', { className: 'p-4 border-b border-gray-100 bg-gray-50' },
                React.createElement('h3', { className: 'text-gray-800 font-semibold' }, 'Уведомления')
              ),
              React.createElement('div', { className: 'max-h-96 overflow-y-auto' },
                notifications.map(notif =>
                  React.createElement('div', { key: notif.id, className: 'p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors' },
                    React.createElement('p', { className: 'text-gray-700 text-sm' }, notif.text),
                    React.createElement('p', { className: 'text-gray-400 text-xs mt-1' }, getTimeAgo(notif.time))
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement('main', { className: 'transition-all duration-300 pt-20 p-8', style: { marginLeft: sidebarOpen ? '256px' : '80px' } },
      currentPage === 'dashboard' && React.createElement('div', { className: 'space-y-6' },
        React.createElement('h1', { className: 'text-3xl font-bold text-gray-800' }, 'Дашборд'),
        React.createElement('div', { className: 'grid grid-cols-4 gap-6' },
          [
            { label: 'Активные обращения', value: stats.active, icon: Activity, color: 'from-blue-500 to-blue-600' },
            { label: 'Среднее время ответа', value: stats.avgTime, icon: Clock, color: 'from-emerald-500 to-emerald-600' },
            { label: 'Решено сегодня', value: stats.resolvedToday, icon: CheckCircle, color: 'from-green-500 to-green-600' },
            { label: 'Ожидают ответа', value: stats.waiting, icon: AlertCircle, color: 'from-orange-500 to-orange-600' }
          ].map((stat, idx) =>
            React.createElement('div', { key: idx, className: 'bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300' },
              React.createElement('div', { className: 'flex items-center justify-between mb-4' },
                React.createElement('div', { className: 'w-12 h-12 bg-gradient-to-br ' + stat.color + ' rounded-xl flex items-center justify-center shadow-lg' },
                  React.createElement(stat.icon, { className: 'w-6 h-6 text-white' })
                )
              ),
              React.createElement('div', { className: 'text-3xl font-bold text-gray-800 mb-1' }, stat.value),
              React.createElement('div', { className: 'text-gray-500 text-sm' }, stat.label)
            )
          )
        ),
        React.createElement('div', { className: 'bg-white rounded-2xl p-6 border border-gray-200 shadow-sm' },
          React.createElement('h2', { className: 'text-xl font-semibold text-gray-800 mb-4' }, 'Последние обращения'),
          React.createElement('div', { className: 'space-y-3' },
            tickets.slice(0, 5).map(ticket =>
              React.createElement('div', {
                key: ticket.id,
                onClick: () => {
                  setSelectedTicket(ticket);
                  setCurrentPage('tickets');
                },
                className: 'bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200 cursor-pointer'
              },
                React.createElement('div', { className: 'flex items-center justify-between' },
                  React.createElement('div', { className: 'flex items-center gap-4 flex-1' },
                    React.createElement('div', { className: 'w-1 h-12 ' + statusColors[ticket.status] + ' rounded-full' }),
                    React.createElement('div', { className: 'flex-1' },
                      React.createElement('div', { className: 'flex items-center gap-2 mb-1' },
                        React.createElement('span', { className: 'text-gray-800 font-semibold' }, ticket.subject),
                        priorityIcons[ticket.priority]
                      ),
                      React.createElement('div', { className: 'flex items-center gap-3 text-sm text-gray-500' },
                        React.createElement('span', { className: 'flex items-center gap-1' },
                          channelIcons[ticket.channel],
                          ticket.user.name
                        ),
                        React.createElement('span', null, '•'),
                        React.createElement('span', null, getTimeAgo(ticket.updated))
                      )
                    )
                  ),
                  React.createElement('div', { className: 'flex items-center gap-3' },
                    React.createElement('span', {
                      className: 'px-3 py-1 rounded-full text-xs font-medium ' + (
                        ticket.status === 'resolved' ? 'bg-emerald-100 text-emerald-700' :
                        ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        ticket.status === 'waiting' ? 'bg-orange-100 text-orange-700' :
                        'bg-amber-100 text-amber-700'
                      )
                    },
                      statusLabels[ticket.status]
                    ),
                    React.createElement(ArrowRight, { className: 'w-4 h-4 text-gray-400' })
                  )
                )
              )
            )
          )
        )
      ),
      currentPage === 'tickets' && React.createElement('div', { className: 'space-y-6' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('h1', { className: 'text-3xl font-bold text-gray-800' }, 'Обращения'),
          React.createElement('div', { className: 'flex items-center gap-3' },
            React.createElement('select', {
              value: filterStatus,
              onChange: (e) => setFilterStatus(e.target.value),
              className: 'px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500'
            },
              React.createElement('option', { value: 'all' }, 'Все статусы'),
              React.createElement('option', { value: 'new' }, 'Новые'),
              React.createElement('option', { value: 'in-progress' }, 'В работе'),
              React.createElement('option', { value: 'waiting' }, 'Ожидание'),
              React.createElement('option', { value: 'resolved' }, 'Решено')
            )
          )
        ),
        React.createElement('div', { className: 'grid grid-cols-3 gap-6' },
          filteredTickets.map(ticket =>
            React.createElement('div', {
              key: ticket.id,
              onClick: () => setSelectedTicket(ticket),
              className: 'bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1'
            },
              React.createElement('div', { className: 'w-full h-1 ' + statusColors[ticket.status] + ' rounded-full mb-4' }),
              React.createElement('div', { className: 'flex items-start gap-3 mb-4' },
                React.createElement('div', { className: 'text-3xl' }, ticket.user.avatar),
                React.createElement('div', { className: 'flex-1 min-w-0' },
                  React.createElement('div', { className: 'text-gray-800 font-semibold mb-1 truncate' }, ticket.user.name),
                  React.createElement('div', { className: 'text-gray-500 text-sm truncate' }, ticket.user.email)
                ),
                priorityIcons[ticket.priority]
              ),
              React.createElement('h3', { className: 'text-gray-800 font-semibold mb-2 line-clamp-1' }, ticket.subject),
              React.createElement('p', { className: 'text-gray-600 text-sm line-clamp-2 mb-4' }, ticket.message),
              React.createElement('div', { className: 'flex items-center justify-between text-sm' },
                React.createElement('div', { className: 'flex items-center gap-2 text-gray-500' },
                  channelIcons[ticket.channel],
                  React.createElement('span', null, ticket.category)
                ),
                React.createElement('span', { className: 'text-gray-400' }, getTimeAgo(ticket.updated))
              )
            )
          )
        ),
        selectedTicket && React.createElement('div', {
          className: 'fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50',
          onClick: () => setSelectedTicket(null)
        },
          React.createElement('div', {
            className: 'bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-gray-200 shadow-2xl',
            onClick: (e) => e.stopPropagation()
          },
            React.createElement('div', { className: 'flex h-[90vh]' },
              React.createElement('div', { className: 'flex-1 flex flex-col border-r border-gray-200' },
                React.createElement('div', { className: 'p-6 border-b border-gray-200 flex items-center justify-between bg-gray-50' },
                  React.createElement('div', { className: 'flex items-center gap-3' },
                    React.createElement('div', { className: 'text-3xl' }, selectedTicket.user.avatar),
                    React.createElement('div', null,
                      React.createElement('h2', { className: 'text-gray-800 font-semibold' }, selectedTicket.subject),
                      React.createElement('p', { className: 'text-gray-500 text-sm' }, selectedTicket.user.name)
                    )
                  ),
                  React.createElement('button', {
                    onClick: () => setSelectedTicket(null),
                    className: 'p-2 hover:bg-gray-200 rounded-xl transition-colors'
                  },
                    React.createElement(X, { className: 'w-5 h-5 text-gray-600' })
                  )
                ),
                React.createElement('div', { className: 'flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50' },
                  selectedTicket.messages.map((msg, idx) =>
                    React.createElement('div', {
                      key: idx,
                      className: 'flex ' + (msg.sender === 'user' ? 'justify-start' : msg.sender === 'agent' ? 'justify-end' : 'justify-center')
                    },
                      msg.sender === 'system' ?
                        React.createElement('div', { className: 'text-gray-400 text-sm italic' }, msg.text) :
                        React.createElement('div', {
                          className: 'max-w-md rounded-2xl p-4 ' + (msg.sender === 'user' ? 'bg-white border border-gray-200 shadow-sm' : 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-md')
                        },
                          React.createElement('p', { className: 'text-sm mb-1 ' + (msg.sender === 'user' ? 'text-gray-700' : 'text-white') }, msg.text),
                          React.createElement('span', { className: 'text-xs ' + (msg.sender === 'user' ? 'text-gray-400' : 'text-emerald-50') }, getTimeAgo(msg.time))
                        )
                    )
                  )
                ),
                React.createElement('div', { className: 'p-6 border-t border-gray-200 bg-white' },
                  React.createElement('div', { className: 'flex gap-3' },
                    React.createElement('input', {
                      type: 'text',
                      value: messageInput,
                      onChange: (e) => setMessageInput(e.target.value),
                      onKeyDown: (e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      },
                      placeholder: 'Написать сообщение...',
                      className: 'flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                    }),
                    React.createElement('button', {
                      onClick: sendMessage,
                      className: 'px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200'
                    },
                      React.createElement(Send, { className: 'w-5 h-5' })
                    )
                  ),
                  React.createElement('div', { className: 'flex gap-2 mt-3' },
                    templates.slice(0, 3).map(template =>
                      React.createElement('button', {
                        key: template.id,
                        onClick: () => setMessageInput(template.text),
                        className: 'px-3 py-1 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-emerald-700 text-xs transition-colors'
                      },
                        template.name
                      )
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'w-80 p-6 overflow-y-auto space-y-6 bg-white' },
                React.createElement('div', { className: 'space-y-4' },
                  React.createElement('h3', { className: 'text-gray-800 font-semibold text-lg' }, 'Информация'),
                  React.createElement('div', { className: 'space-y-3' },
                    React.createElement('div', null,
                      React.createElement('label', { className: 'text-gray-500 text-xs mb-1 block' }, 'Статус'),
                      React.createElement('select', {
                        value: selectedTicket.status,
                        onChange: (e) => updateTicketStatus(selectedTicket.id, e.target.value),
                        className: 'w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                      },
                        React.createElement('option', { value: 'new' }, 'Новое'),
                        React.createElement('option', { value: 'in-progress' }, 'В работе'),
                        React.createElement('option', { value: 'waiting' }, 'Ожидание'),
                        React.createElement('option', { value: 'resolved' }, 'Решено'),
                        React.createElement('option', { value: 'closed' }, 'Закрыто')
                      )
                    )
                  )
                ),
                React.createElement('div', { className: 'space-y-3' },
                  React.createElement('h3', { className: 'text-gray-800 font-semibold' }, 'Действия'),
                  !selectedTicket.assignee || selectedTicket.assignee !== currentUser.name ?
                    React.createElement('button', {
                      onClick: () => takeTicket(selectedTicket.id),
                      className: 'w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all'
                    }, 'Взять в работу') :
                    React.createElement('div', { className: 'px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-center text-sm' },
                      'Вы работаете над этим обращением'
                    ),
                  React.createElement('button', {
                    onClick: () => setShowDevTaskModal(true),
                    className: 'w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors'
                  }, 'Создать задачу для разработчиков'),
                  selectedTicket.status !== 'resolved' && React.createElement('button', {
                    onClick: () => updateTicketStatus(selectedTicket.id, 'resolved'),
                    className: 'w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2'
                  },
                    React.createElement(CheckCircle, { className: 'w-4 h-4' }),
                    'Отметить решённым'
                  )
                )
              )
            )
          )
        ),
        showDevTaskModal && React.createElement('div', {
          className: 'fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50',
          onClick: () => setShowDevTaskModal(false)
        },
          React.createElement('div', {
            className: 'bg-white rounded-2xl w-full max-w-md p-6 border border-gray-200 shadow-2xl',
            onClick: (e) => e.stopPropagation()
          },
            React.createElement('div', { className: 'flex items-center justify-between mb-4' },
              React.createElement('h3', { className: 'text-lg font-semibold text-gray-800' }, 'Создать задачу для разработчиков'),
              React.createElement('button', {
                onClick: () => setShowDevTaskModal(false),
                className: 'p-1 hover:bg-gray-100 rounded-lg'
              },
                React.createElement(X, { className: 'w-5 h-5 text-gray-600' })
              )
            ),
            React.createElement('div', { className: 'space-y-4' },
              React.createElement('div', null,
                React.createElement('label', { className: 'text-gray-600 text-sm mb-2 block' }, 'Название задачи'),
                React.createElement('input', {
                  type: 'text',
                  value: devTaskTitle,
                  onChange: (e) => setDevTaskTitle(e.target.value),
                  placeholder: 'Краткое описание проблемы',
                  className: 'w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                })
              ),
              React.createElement('div', null,
                React.createElement('label', { className: 'text-gray-600 text-sm mb-2 block' }, 'Описание'),
                React.createElement('textarea', {
                  value: devTaskDescription,
                  onChange: (e) => setDevTaskDescription(e.target.value),
                  placeholder: 'Подробное описание проблемы',
                  rows: 4,
                  className: 'w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none'
                })
              ),
              React.createElement('div', { className: 'flex gap-3' },
                React.createElement('button', {
                  onClick: () => setShowDevTaskModal(false),
                  className: 'flex-1 px-4 py-2 bg-gray-100 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors'
                }, 'Отмена'),
                React.createElement('button', {
                  onClick: createDevTask,
                  disabled: !devTaskTitle.trim(),
                  className: 'flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                }, 'Создать')
              )
            )
          )
        )
      ),
      currentPage === 'kanban' && React.createElement('div', { className: 'space-y-6' },
        React.createElement('h1', { className: 'text-3xl font-bold text-gray-800' }, 'Канбан-доска'),
        React.createElement('div', { className: 'flex gap-6 overflow-x-auto pb-4' },
          [
            { id: 'new', label: 'Новые', color: 'border-amber-400' },
            { id: 'in-progress', label: 'В работе', color: 'border-blue-400' },
            { id: 'waiting', label: 'Ожидание', color: 'border-orange-400' },
            { id: 'resolved', label: 'Решено', color: 'border-emerald-400' }
          ].map(column =>
            React.createElement('div', {
              key: column.id,
              className: 'flex-shrink-0 w-80',
              onDragOver: handleDragOver,
              onDrop: () => handleDrop(column.id)
            },
              React.createElement('div', { className: 'bg-white rounded-2xl border-t-4 ' + column.color + ' overflow-hidden shadow-sm' },
                React.createElement('div', { className: 'p-4 border-b border-gray-100 bg-gray-50' },
                  React.createElement('div', { className: 'flex items-center justify-between' },
                    React.createElement('h3', { className: 'text-gray-800 font-semibold' }, column.label),
                    React.createElement('span', { className: 'px-2 py-1 bg-gray-200 rounded-lg text-gray-600 text-sm font-medium' },
                      tickets.filter(t => t.status === column.id).length
                    )
                  )
                ),
                React.createElement('div', { className: 'p-4 space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto' },
                  tickets.filter(t => t.status === column.id).map(ticket =>
                    React.createElement('div', {
                      key: ticket.id,
                      draggable: true,
                      onDragStart: () => handleDragStart(ticket),
                      onClick: () => setSelectedTicket(ticket),
                      className: 'bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition-all duration-200 cursor-move'
                    },
                      React.createElement('div', { className: 'flex items-start justify-between mb-2' },
                        React.createElement('span', { className: 'text-gray-400 text-xs' }, '#' + ticket.id),
                        priorityIcons[ticket.priority]
                      ),
                      React.createElement('h4', { className: 'text-gray-800 font-semibold text-sm mb-2 line-clamp-2' }, ticket.subject),
                      React.createElement('div', { className: 'flex items-center gap-2 text-xs text-gray-500' },
                        React.createElement('span', null, ticket.user.avatar),
                        React.createElement('span', { className: 'truncate' }, ticket.user.name)
                      ),
                      React.createElement('div', { className: 'mt-3 flex items-center justify-between' },
                        channelIcons[ticket.channel],
                        React.createElement('span', { className: 'text-gray-400 text-xs' }, getTimeAgo(ticket.updated))
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
      currentPage === 'analytics' && React.createElement('div', { className: 'space-y-6' },
        React.createElement('h1', { className: 'text-3xl font-bold text-gray-800' }, 'Аналитика'),
        React.createElement('div', { className: 'grid grid-cols-4 gap-6' },
          [
            { label: 'Всего обращений', value: tickets.length, icon: MessageSquare },
            { label: 'Среднее время решения', value: '2.5 ч', icon: Clock },
            { label: 'Удовлетворенность', value: '94%', icon: Award },
            { label: 'Активные операторы', value: users.filter(u => u.status === 'online').length, icon: Users }
          ].map((stat, idx) =>
            React.createElement('div', { key: idx, className: 'bg-white rounded-2xl p-6 border border-gray-200 shadow-sm' },
              React.createElement('div', { className: 'flex items-center justify-between mb-4' },
                React.createElement(stat.icon, { className: 'w-8 h-8 text-emerald-500' })
              ),
              React.createElement('div', { className: 'text-3xl font-bold text-gray-800 mb-1' }, stat.value),
              React.createElement('div', { className: 'text-gray-500 text-sm' }, stat.label)
            )
          )
        )
      ),
      currentPage === 'users' && React.createElement('div', { className: 'space-y-6' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('h1', { className: 'text-3xl font-bold text-gray-800' }, 'Пользователи'),
          React.createElement('button', { className: 'px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-medium flex items-center gap-2' },
            React.createElement(Plus, { className: 'w-5 h-5' }),
            'Добавить'
          )
        ),
        React.createElement('div', { className: 'bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden' },
          React.createElement('div', { className: 'overflow-x-auto' },
            React.createElement('table', { className: 'w-full' },
              React.createElement('thead', { className: 'bg-gray-50 border-b border-gray-200' },
                React.createElement('tr', null,
                  React.createElement('th', { className: 'px-6 py-4 text-left text-gray-600 font-semibold text-sm' }, 'Пользователь'),
                  React.createElement('th', { className: 'px-6 py-4 text-left text-gray-600 font-semibold text-sm' }, 'Email'),
                  React.createElement('th', { className: 'px-6 py-4 text-left text-gray-600 font-semibold text-sm whitespace-nowrap' }, 'Роль'),
                  React.createElement('th', { className: 'px-6 py-4 text-left text-gray-600 font-semibold text-sm' }, 'Статус')
                )
              ),
              React.createElement('tbody', null,
                users.map(user =>
                  React.createElement('tr', { key: user.id, className: 'border-b border-gray-100 hover:bg-gray-50 transition-colors' },
                    React.createElement('td', { className: 'px-6 py-4' },
                      React.createElement('div', { className: 'flex items-center gap-3' },
                        React.createElement('div', { className: 'text-2xl' }, user.avatar),
                        React.createElement('span', { className: 'text-gray-800 font-medium' }, user.name)
                      )
                    ),
                    React.createElement('td', { className: 'px-6 py-4 text-gray-600' }, user.email),
                    React.createElement('td', { className: 'px-6 py-4' },
                      React.createElement('span', { className: 'px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium whitespace-nowrap' },
                        roleLabels[user.role]
                      )
                    ),
                    React.createElement('td', { className: 'px-6 py-4' },
                      React.createElement('div', { className: 'flex items-center gap-2' },
                        React.createElement('div', { className: 'w-2 h-2 rounded-full ' + (user.status === 'online' ? 'bg-emerald-500' : user.status === 'away' ? 'bg-amber-500' : 'bg-gray-400') }),
                        React.createElement('span', { className: 'text-gray-600 text-sm capitalize whitespace-nowrap' },
                          user.status === 'online' ? 'Онлайн' : user.status === 'away' ? 'Отошел' : 'Оффлайн'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
      currentPage === 'templates' && React.createElement('div', { className: 'space-y-6' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('h1', { className: 'text-3xl font-bold text-gray-800' }, 'Шаблоны ответов'),
          React.createElement('button', { className: 'px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-medium flex items-center gap-2' },
            React.createElement(Plus, { className: 'w-5 h-5' }),
            'Создать шаблон'
          )
        ),
        React.createElement('div', { className: 'grid grid-cols-2 gap-6' },
          templates.map(template =>
            editingTemplate && editingTemplate.id === template.id ?
              React.createElement('div', { key: template.id, className: 'bg-white rounded-2xl p-6 border border-emerald-300 shadow-md' },
                React.createElement('div', { className: 'space-y-4' },
                  React.createElement('div', null,
                    React.createElement('label', { className: 'text-gray-600 text-sm mb-2 block' }, 'Название'),
                    React.createElement('input', {
                      type: 'text',
                      value: editingTemplate.name,
                      onChange: (e) => setEditingTemplate({...editingTemplate, name: e.target.value}),
                      className: 'w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    })
                  ),
                  React.createElement('div', null,
                    React.createElement('label', { className: 'text-gray-600 text-sm mb-2 block' }, 'Текст'),
                    React.createElement('textarea', {
                      value: editingTemplate.text,
                      onChange: (e) => setEditingTemplate({...editingTemplate, text: e.target.value}),
                      rows: 4,
                      className: 'w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none'
                    })
                  ),
                  React.createElement('div', { className: 'flex gap-2' },
                    React.createElement('button', {
                      onClick: () => saveTemplate(editingTemplate),
                      className: 'flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-medium flex items-center justify-center gap-2'
                    },
                      React.createElement(Save, { className: 'w-4 h-4' }),
                      'Сохранить'
                    ),
                    React.createElement('button', {
                      onClick: () => setEditingTemplate(null),
                      className: 'flex-1 px-4 py-2 bg-gray-100 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors'
                    }, 'Отмена')
                  )
                )
              ) :
              React.createElement('div', { key: template.id, className: 'bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all' },
                React.createElement('div', { className: 'flex items-start justify-between mb-4' },
                  React.createElement('div', null,
                    React.createElement('h3', { className: 'text-gray-800 font-semibold mb-1' }, template.name),
                    React.createElement('span', { className: 'px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs' }, template.category)
                  ),
                  React.createElement('div', { className: 'flex items-center gap-2' },
                    React.createElement('button', {
                      onClick: () => setEditingTemplate(template),
                      className: 'p-2 hover:bg-gray-100 rounded-xl transition-colors'
                    },
                      React.createElement(Edit, { className: 'w-4 h-4 text-emerald-600' })
                    ),
                    React.createElement('button', {
                      onClick: () => deleteTemplate(template.id),
                      className: 'p-2 hover:bg-gray-100 rounded-xl transition-colors'
                    },
                      React.createElement(Trash2, { className: 'w-4 h-4 text-red-600' })
                    )
                  )
                ),
                React.createElement('p', { className: 'text-gray-600 text-sm' }, template.text)
              )
          )
        )
      ),
      currentPage === 'settings' && React.createElement('div', { className: 'space-y-6' },
        React.createElement('h1', { className: 'text-3xl font-bold text-gray-800' }, 'Настройки'),
        React.createElement('div', { className: 'bg-white rounded-2xl p-6 border border-gray-200 shadow-sm' },
          React.createElement('h3', { className: 'text-gray-800 font-semibold mb-4' }, 'Профиль'),
          React.createElement('div', { className: 'space-y-4' },
            React.createElement('div', null,
              React.createElement('label', { className: 'text-gray-600 text-sm mb-2 block' }, 'Имя'),
              React.createElement('input', {
                type: 'text',
                value: currentUser.name,
                readOnly: true,
                className: 'w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700'
              })
            ),
            React.createElement('div', null,
              React.createElement('label', { className: 'text-gray-600 text-sm mb-2 block' }, 'Email'),
              React.createElement('input', {
                type: 'email',
                value: currentUser.email,
                readOnly: true,
                className: 'w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700'
              })
            )
          )
        )
      )
    )
  );
}

export default App;