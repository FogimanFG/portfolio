import { useMemo, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Coffee Website",
    category: "САЙТ ДЛЯ КОФЕЙНИ",
    type: "website",
    description:
      "Сайт кофейни с акцентом на визуальную подачу заведения и его ассортимента. Проект объединяет тематический дизайн, структуру презентационного сайта и интерактивные элементы.",
    focus: ["Презентация заведения", "Каталог ассортимента", "Интерфейс"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}coffe.png`,
    imageAlt: "Превью сайта Coffee Website",
    demo: "https://fogimanfg.github.io/Coffe-Website-/",
    github: "https://github.com/FogimanFG/Coffe-Website-",
  },
  {
    number: "02",
    name: "Music Player",
    category: "ВЕБ-ПРИЛОЖЕНИЕ",
    type: "app",
    description:
      "Веб-проект музыкального плеера. Здесь основной акцент сделан на интерфейсе приложения и взаимодействии пользователя с музыкальным контентом.",
    focus: ["Музыкальный интерфейс", "Интерактивность", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}musik.png`,
    imageAlt: "Превью проекта Music Player",
    demo: "https://fogimanfg.github.io/Music/",
    github: "https://github.com/FogimanFG/Music",
  },
  {
    number: "03",
    name: "Swimming Pools",
    category: "ТЕМАТИЧЕСКИЙ САЙТ",
    type: "website",
    description:
      "Тематический веб-сайт, посвящённый бассейнам. Работа над структурой страницы, визуальной подачей информации и оформлением тематического веб-интерфейса.",
    focus: ["Тематическая подача", "Структура сайта", "Веб-дизайн"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}acva.png`,
    imageAlt: "Превью проекта Swimming Pools",
    demo: "https://fogimanfg.github.io/Swimming-Pools-Website-/",
    github: "https://github.com/FogimanFG/Swimming-Pools-Website-",
  },
];

const skills = [
  { name: "HTML", level: "Уверенно", value: "01" },
  { name: "CSS", level: "Уверенно", value: "02" },
  { name: "JavaScript", level: "Хорошая база", value: "03" },
  { name: "React", level: "Практический опыт", value: "04" },
  { name: "Git и GitHub", level: "Рабочий уровень", value: "05" },
  { name: "Node.js", level: "Знаком", value: "06" },
  { name: "SQL", level: "Базовые знания", value: "07" },
  { name: "C#", level: "Начальный уровень", value: "08" },
];

const filters = [
  { label: "Все работы", value: "all" },
  { label: "Сайты", value: "website" },
  { label: "Веб-приложения", value: "app" },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.type === activeFilter),
    [activeFilter]
  );

  return (
    <main>
      <header className="header">
        <a className="logo" href="#top" aria-label="Fogiman — наверх">
          fogiman<span>.</span>
        </a>

        <nav className="nav">
          <a href="#about">Обо мне</a>
          <a href="#catalog">Каталог</a>
          <a href="#skills">Навыки</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a
          className="header-github"
          href="https://github.com/FogimanFG"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-grid page-width">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> FRONTEND DEVELOPER · JUNIOR</div>
            <h1>Роман</h1>
            <p className="hero-lead">
              Создаю веб-сайты и интерфейсы, превращая идеи в работающие
              цифровые продукты.
            </p>
            <p className="hero-subtext">
              Изучаю frontend-разработку, развиваю технические навыки и
              собираю собственное портфолио проектов.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#catalog">
                Смотреть работы <Arrow />
              </a>
              <a className="button button-ghost" href="#contact">
                Связаться
              </a>
            </div>

            <div className="hero-meta">
              <span><i>⌖</i> Краснодар, Россия</span>
              <span>ОТКРЫТ К ВОЗМОЖНОСТЯМ</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-topline">
              <span>PERSONAL PORTFOLIO</span>
              <span>№ 001 / 2026</span>
            </div>
            <div className="art-center">
              <div className="art-ring art-ring-outer" />
              <div className="art-ring art-ring-inner" />
              
              <div className="art-monogram">
                <img src={`${import.meta.env.BASE_URL}avatar.webp`} alt="Роман" />
              </div>
              
              <span className="art-coordinate art-coordinate-left">45°02' N</span>
              <span className="art-coordinate art-coordinate-right">38°58' E</span>
              <span className="art-cross art-cross-a">+</span>
              <span className="art-cross art-cross-b">+</span>
            </div>
            <div className="art-name">
              <span>DEVELOPER / 001</span>
              <strong>FOGIMAN</strong>
              <small>Создаю · Изучаю · Развиваюсь</small>
            </div>
            <div className="art-bottomline">
              <span>HTML / CSS / JS / REACT</span>
              <span>AVAILABLE FOR JUNIOR ROLES</span>
            </div>
          </div>
        </div>

        <div className="hero-ribbon">
          <div className="page-width ribbon-inner">
            <span>FRONTEND DEVELOPMENT</span><b>✳</b>
            <span>WEB INTERFACES</span><b>✳</b>
            <span>CONTINUOUS LEARNING</span><b>✳</b>
            <span>BUILDING IDEAS</span>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>08<span>+</span></strong>
            <small>ЛЕТ ИНТЕРЕСА К ПРОГРАММИРОВАНИЮ</small>
          </div>
          <div className="stat">
            <strong>03</strong>
            <small>ОПУБЛИКОВАННЫХ ПРОЕКТА</small>
          </div>
          <div className="stat">
            <strong>02</strong>
            <small>КУРС ОБУЧЕНИЯ</small>
          </div>
          <a className="stat stat-link" href="https://github.com/FogimanFG" target="_blank" rel="noreferrer">
            <small>КОД И РЕПОЗИТОРИИ</small>
            <strong><Arrow /></strong>
          </a>
        </div>
      </section>

      <section className="section page-width about-section" id="about">
        <div className="section-kicker"><span>01</span> ОБО МНЕ</div>
        <div className="about-layout">
          <h2>Интерес к коду.<br /><em>Фокус на развитии.</em></h2>
          <div className="about-copy">
            <p className="about-main">
              Я начал программировать в 9 лет. Сначала меня привлекала
              разработка игр, но со временем интерес перерос в желание
              создавать полноценные цифровые продукты.
            </p>
            <p>
              Сейчас я развиваюсь в направлении frontend-разработки,
              изучаю React и интересуюсь устройством веб-приложений — от
              пользовательского интерфейса до логики.
            </p>
            <p>
              Предпочитаю учиться на практике: самостоятельно проектировать,
              писать код, искать ошибки и доводить начатое до рабочего результата.
            </p>
          </div>
        </div>
        <div className="about-bottomline">
          <span>01 — НАПРАВЛЕНИЕ</span>
          <strong>FRONTEND DEVELOPMENT</strong>
          <span>02 — ФОРМАТ</span>
          <strong>ПРАКТИКА И САМОСТОЯТЕЛЬНЫЕ ПРОЕКТЫ</strong>
        </div>
      </section>

      <section className="catalog-section" id="catalog">
        <div className="page-width catalog-wrap">
          <div className="catalog-heading">
            <div>
              <div className="section-kicker"><span>02</span> ИЗБРАННЫЕ РАБОТЫ</div>
              <h2>Каталог<span className="lime">.</span><br /><em>Мои проекты.</em></h2>
            </div>
            <p>
              Здесь собраны проекты, над которыми я работал. У каждого —
              своя задача, визуальный характер и практический опыт.
            </p>
          </div>

          <div className="catalog-toolbar">
            <span className="catalog-count">ПОКАЗАНО <b>{String(visibleProjects.length).padStart(2, "0")}</b> / 03</span>
            <div className="filter-list" role="group" aria-label="Фильтр проектов">
              {filters.map((filter) => (
                <button
                  className={`filter-button ${activeFilter === filter.value ? "active" : ""}`}
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={activeFilter === filter.value}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-visual">
                  <div className="project-visual-top">
                    <span>PROJECT / {project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  {project.image ? (
                    <img src={project.image} alt={project.imageAlt} />
                  ) : (
                    <div className={`project-placeholder placeholder-${project.number}`}>
                      <span className="placeholder-mark">
                        {project.number === "01" ? "C." : project.number === "02" ? "♫" : "POOL"}
                      </span>
                      <span className="placeholder-hint">ЗДЕСЬ БУДЕТ ПРЕВЬЮ ПРОЕКТА</span>
                    </div>
                  )}
                  <span className="project-visual-index">{project.number}</span>
                </div>

                <div className="project-card-body">
                  <div className="project-card-heading">
                    <div>
                      <span className="project-category">{project.category}</span>
                      <h3>{project.name}</h3>
                    </div>
                    <a 
                      className="project-card-arrow" 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      aria-label={`Открыть демо ${project.name}`}
                    >
                      <Arrow />
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>

                  <div className="project-focus">
                    {project.focus.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <div className="project-card-footer">
                    <div className="tags">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <div className="project-actions">
                      <a href={project.demo} target="_blank" rel="noreferrer">Демо <Arrow /></a>
                      <a href={project.github} target="_blank" rel="noreferrer">Код <Arrow /></a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="catalog-footer">
            <span>БОЛЬШЕ КОДА И ЭКСПЕРИМЕНТОВ</span>
            <a href="https://github.com/FogimanFG" target="_blank" rel="noreferrer">
              Перейти в GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="section page-width education-section">
        <div className="section-kicker"><span>03</span> ОБРАЗОВАНИЕ</div>
        <div className="education-card">
          <div className="education-year">2025 —<br />НАСТОЯЩЕЕ ВРЕМЯ</div>
          <div className="education-main">
            <span className="mini-label">СРЕДНЕЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ</span>
            <h3>Кубанский информационно-технологический колледж</h3>
            <p>Специальность: «Разработка и управление программным обеспечением»</p>
            <div className="education-bottom">
              <span>2 курс</span>
              <a href="https://vkipo.ru/" target="_blank" rel="noreferrer">Сайт учебного заведения <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="page-width skills-wrap">
          <div className="section-kicker"><span>04</span> ТЕХНОЛОГИИ</div>
          <div className="skills-heading">
            <h2>Инструменты<br /><em>в работе.</em></h2>
            <p>
              Технологии, с которыми я работал и продолжаю развиваться.
              Уровень владения отражает мой текущий опыт.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <span className="skill-number">{skill.value}</span>
                <strong>{skill.name}</strong>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
          <div className="toolbox">
            <span>СРЕДА И ИНСТРУМЕНТЫ</span>
            <p>Visual Studio Code <i>·</i> Git <i>·</i> GitHub <i>·</i> PowerShell <i>·</i> Unity</p>
          </div>
        </div>
      </section>

      <section className="section page-width approach-section">
        <div className="section-kicker"><span>05</span> ПОДХОД К РАБОТЕ</div>
        <div className="approach-heading">
          <h2>Не боюсь<br /><em>разбираться.</em></h2>
          <p>Стараюсь не просто получить результат, а понять, как и почему он работает.</p>
        </div>
        <div className="approach-grid">
          <article><span>01 / SELF-DRIVEN</span><h3>Самостоятельность</h3><p>Могу организовать работу над учебным или личным проектом и искать решение самостоятельно.</p></article>
          <article><span>02 / LEARNING</span><h3>Обучаемость</h3><p>Готов осваивать незнакомые технологии, читать документацию и применять знания на практике.</p></article>
          <article><span>03 / DETAILS</span><h3>Внимание к деталям</h3><p>Уделяю внимание визуальной составляющей, структуре проекта и качеству реализации.</p></article>
          <article><span>04 / DEBUGGING</span><h3>Работа над ошибками</h3><p>Использую отладку, анализирую проблемы и спокойно отношусь к технической критике.</p></article>
        </div>
      </section>

      <section className="opportunity-section">
        <div className="page-width opportunity-wrap">
          <div>
            <div className="section-kicker"><span>06</span> СЛЕДУЮЩИЙ ШАГ</div>
            <h2>Готов расти<br /><em>в команде.</em></h2>
          </div>
          <div className="opportunity-copy">
            <p>
              Ищу возможность начать профессиональный путь в IT, получить
              опыт коммерческой разработки и стать частью команды, в которой
              смогу приносить пользу и развиваться.
            </p>
            <div className="goal-tags">
              <span>Junior Frontend</span>
              <span>Стажировка</span>
              <span>Удалённая работа</span>
              <span>Командная разработка</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="page-width footer-wrap">
          <div className="section-kicker"><span>07</span> КОНТАКТЫ</div>
          <h2>Есть задача?<br /><em>Давайте обсудим.</em></h2>
          <div className="footer-main">
            <p>Открыт к предложениям о стажировке, junior-позициях и сотрудничестве.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={() => setIsContactOpen(true)}>
                Написать мне <Arrow />
              </button>
              <a className="button button-outline" href="https://github.com/FogimanFG" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} FOGIMAN</span>
            <span>РОМАН · FRONTEND DEVELOPER</span>
            <a href="#top">НАВЕРХ ↑</a>
          </div>
        </div>
      </footer>

      {isContactOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={() => setIsContactOpen(false)}>✕</button>
            <h3>Связаться со мной</h3>
            <div className="contact-modal-links">
              <a href="tel:+79180213963" className="contact-modal-item">
                <span className="contact-modal-label">Телефон</span>
                <span className="contact-modal-value">8 918 021 39 63</span>
              </a>
              <a href="mailto:Romagorst1217@gmail.com" className="contact-modal-item">
                <span className="contact-modal-label">Почта</span>
                <span className="contact-modal-value">Romagorst1217@gmail.com</span>
              </a>
              <a href="https://t.me/FogimanHD" target="_blank" rel="noreferrer" className="contact-modal-item">
                <span className="contact-modal-label">Telegram</span>
                <span className="contact-modal-value">@FogimanHD</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;