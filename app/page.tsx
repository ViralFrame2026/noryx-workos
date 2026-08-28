"use client";

import {
  Activity,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Database,
  FileText,
  Inbox,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Upload,
  Workflow
} from "lucide-react";

const modules = [
  { icon: FileText, title: "Documentos", text: "Extrae, valida, resume y transforma archivos." },
  { icon: Search, title: "Investigación", text: "Investiga, contrasta fuentes y arma informes." },
  { icon: Mail, title: "Correo", text: "Clasifica, prioriza y redacta respuestas." },
  { icon: BarChart3, title: "Datos", text: "Analiza CSV, Excel y métricas operativas." },
  { icon: Workflow, title: "Workflows", text: "Automatiza procesos con reglas configurables." },
  { icon: ShieldCheck, title: "Aprobaciones", text: "Mantén control humano en acciones sensibles." }
];

const recent = [
  ["Informe operativo mensual", "Administración", "Completado", "18 min"],
  ["Validación de órdenes", "Logística", "Completado", "9 min"],
  ["Análisis de leads", "Ventas", "En revisión", "12 min"],
  ["Resumen de documentación", "RR. HH.", "Completado", "6 min"]
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark"><Sparkles size={18} /></div>
          <div><strong>NORYX</strong><span>WorkOS</span></div>
        </div>

        <nav>
          <a className="active"><LayoutDashboard size={18}/> Dashboard</a>
          <a><Bot size={18}/> Asistente</a>
          <a><Workflow size={18}/> Workflows</a>
          <a><FileText size={18}/> Documentos</a>
          <a><Inbox size={18}/> Bandeja</a>
          <a><Database size={18}/> Datos</a>
          <a><BriefcaseBusiness size={18}/> Sectores</a>
        </nav>

        <div className="sidebarBottom">
          <div className="miniCard">
            <Activity size={18}/>
            <div><b>Sistema operativo</b><small>Todos los servicios activos</small></div>
          </div>
          <div className="profile">
            <div className="avatar">SZ</div>
            <div><b>Workspace principal</b><small>Administrador</small></div>
          </div>
        </div>
      </aside>

      <section className="content">
        <header>
          <div>
            <p className="eyebrow">AI OPERATING SYSTEM FOR WORK</p>
            <h1>Tu trabajo, <span>orquestado por IA.</span></h1>
            <p className="sub">Automatiza tareas, analiza información y ejecuta procesos completos desde un solo lugar.</p>
          </div>
          <button className="primary"><Plus size={17}/> Nuevo proceso</button>
        </header>

        <section className="assistantCard">
          <div className="assistantIcon"><Bot size={24}/></div>
          <div className="assistantMain">
            <div className="assistantTitle">
              <div><b>Asistente universal</b><span>NORYX analiza la tarea y elige el flujo adecuado.</span></div>
              <div className="live"><i/> IA activa</div>
            </div>
            <div className="promptBox">
              <MessageSquareText size={20}/>
              <input placeholder="Sube un archivo o dime qué necesitas hacer..." />
              <button><Upload size={17}/> Adjuntar</button>
              <button className="go"><ChevronRight size={18}/></button>
            </div>
            <div className="chips">
              <span>Resumir documento</span><span>Crear informe</span><span>Analizar datos</span><span>Redactar correo</span>
            </div>
          </div>
        </section>

        <section className="stats">
          <article><div><small>Tareas procesadas</small><strong>47</strong><em>+18% esta semana</em></div><CheckCircle2/></article>
          <article><div><small>Tiempo ahorrado</small><strong>8,4 h</strong><em>≈ 1 jornada laboral</em></div><Clock3/></article>
          <article><div><small>Automatización</small><strong>91%</strong><em>43 de 47 tareas</em></div><Workflow/></article>
          <article><div><small>Requieren revisión</small><strong>3</strong><em>Human-in-the-loop</em></div><ShieldCheck/></article>
        </section>

        <div className="sectionHeader">
          <div><h2>Módulos inteligentes</h2><p>Un núcleo, múltiples capacidades.</p></div>
          <button className="ghost">Ver todos <ChevronRight size={16}/></button>
        </div>

        <section className="moduleGrid">
          {modules.map(({icon: Icon,title,text}) => (
            <article key={title}>
              <div className="moduleIcon"><Icon size={20}/></div>
              <div><b>{title}</b><p>{text}</p></div>
              <ChevronRight size={18}/>
            </article>
          ))}
        </section>

        <section className="bottomGrid">
          <div className="panel">
            <div className="panelTitle"><div><h3>Actividad reciente</h3><p>Últimos procesos ejecutados.</p></div><button className="ghost">Ver historial</button></div>
            <div className="table">
              {recent.map((r,i)=>(
                <div className="row" key={i}>
                  <div><b>{r[0]}</b><span>{r[1]}</span></div>
                  <div className={r[2]==="En revisión"?"status warn":"status"}>{r[2]}</div>
                  <small>{r[3]}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="panel sectors">
            <div className="panelTitle"><div><h3>Adaptable a cualquier sector</h3><p>Cambia las reglas, no el sistema.</p></div></div>
            <div className="sectorTags">
              {["Administración","Logística","Ventas","RR. HH.","Finanzas","Seguros","Comercio","Ingeniería"].map(x=><span key={x}>{x}</span>)}
            </div>
            <div className="ruleBox">
              <span>Arquitectura modular</span>
              <b>Entrada → IA → Reglas → Aprobación → Acción</b>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
