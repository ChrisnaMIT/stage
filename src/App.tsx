import { useEffect, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Observer",
    text: "Analyser les concurrents et repérer ce qui rassure un visiteur confronté à un problème de chauffage.",
  },
  {
    number: "02",
    title: "Structurer",
    text: "Repenser l’arborescence pour faire passer le besoin du client avant le vocabulaire technique.",
  },
  {
    number: "03",
    title: "Prototyper",
    text: "Concevoir sur Figma une interface claire, cohérente avec le positionnement de l’entreprise.",
  },
  {
    number: "04",
    title: "Construire",
    text: "Développer sous WordPress et Elementor, puis compléter avec du HTML, du CSS et du JavaScript.",
  },
  {
    number: "05",
    title: "Mettre en service",
    text: "Optimiser le responsive, le SEO, les performances et accompagner la mise en ligne.",
  },
];

const missionGroups = [
  {
    label: "Recherche",
    items: ["Analyse concurrentielle", "Compréhension du métier", "Parcours utilisateur"],
  },
  {
    label: "Conception",
    items: ["Arborescence", "Maquette Figma", "Couleurs et typographies"],
  },
  {
    label: "Production",
    items: ["WordPress / Elementor", "HTML, CSS, JavaScript", "Formulaire de contact"],
  },
  {
    label: "Diffusion",
    items: ["Mobile-first", "SEO", "Performance, hébergement et mise en ligne"],
  },
];

const trainingLinks = [
  ["UX / UI", "Hiérarchiser l’information selon les attentes du visiteur"],
  ["Figma", "Prototyper avant de construire et faire valider une direction"],
  ["Responsive", "Repartir d’une logique mobile-first"],
  ["HTML / CSS / JS", "Personnaliser Elementor lorsque le constructeur atteint ses limites"],
  ["SEO", "Rendre les services plus lisibles pour les utilisateurs et les moteurs de recherche"],
  ["Gestion de projet", "Découper une mission complète en étapes vérifiables"],
];

function usePageProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

export default function Home() {
  const progress = usePageProgress();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="Retour au début du reportage">
          <span className="brand-mark">CM</span>
          <span>
            Chrisna Mit
            <small>Reportage de stage · 2026</small>
          </span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#diagnostic">Diagnostic</a>
          <a href="#missions">Missions</a>
          <a href="#realisation">Réalisation</a>
          <a href="#formation">Formation</a>
          <a href="#bilan">Bilan</a>
        </nav>
        <div className="topbar-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>

      <div className="flow-rail" aria-hidden="true">
        <div className="flow-rail-track">
          <span style={{ transform: `scaleY(${progress})` }} />
        </div>
        <b>{Math.round(progress * 100)}%</b>
      </div>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Stage B2 · Swiss Désembouage · Lentigny</p>
            <h1>
              Faire circuler
              <span>le savoir-faire.</span>
            </h1>
            <p className="hero-lead">
              Comment transformer l’expertise technique d’une petite entreprise
              suisse en une présence numérique claire, utile et visible.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#diagnostic">
                Ouvrir le reportage
              </a>
              <a
                className="button button-secondary"
                href="https://www.swissdesembouage.ch/"
                target="_blank"
                rel="noreferrer"
              >
                Voir le site réalisé
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Schéma d'un circuit qui retrouve sa fluidité">
            <div className="pipe-label pipe-label-before">Besoin flou</div>
            <div className="pipe-label pipe-label-after">Parcours clair</div>
            <div className="pipe pipe-left" />
            <div className="pipe-elbow" />
            <div className="pipe pipe-right" />
            <div className="blockage">
              <i />
              <i />
              <i />
              <span>?</span>
            </div>
            <div className="water-line" />
            <div className="flow-arrow">→</div>
            <p>Le même principe que le métier : diagnostiquer, nettoyer, faire circuler.</p>
          </div>

          <div className="hero-facts">
            <div>
              <strong>06.04</strong>
              <span>au 17.07.2026</span>
            </div>
            <div>
              <strong>3 + 2</strong>
              <span>jours sur place / à distance</span>
            </div>
            <div>
              <strong>2</strong>
              <span>personnes dans l’entreprise</span>
            </div>
            <div>
              <strong>1</strong>
              <span>site entièrement repensé</span>
            </div>
          </div>
        </section>

        <section className="profile-section section-shell" aria-labelledby="profil-title">
          <div className="section-index">00 — Le développeur</div>
          <div className="profile-photo reveal">
            <img
              src={`${import.meta.env.BASE_URL}chrisna.jpg`}
              alt="Portrait de Chrisna Mit"
              width="1135"
              height="758"
              fetchPriority="high"
            />
            <span>Chrisna Mit · Développeur web</span>
          </div>
          <div className="profile-copy reveal">
            <p className="kicker">Avant d’entrer dans le circuit</p>
            <h2 id="profil-title">Un étudiant orienté développement, UX et projets concrets.</h2>
            <p>
              Je suis étudiant en Bachelor 2 Concepteur Développeur d’Applications à
              l’ESD Lyon. Je travaille principalement avec PHP, Symfony et JavaScript,
              tout en développant une sensibilité forte pour l’expérience utilisateur.
            </p>
            <p>
              Mon premier stage chez WebAtHeart m’avait apporté une base solide en
              WordPress, Elementor et référencement naturel. Chez Swiss Désembouage,
              l’enjeu n’était plus seulement de produire des pages : il fallait porter
              un projet complet et comprendre l’utilisateur qui se trouvait derrière
              chaque visite.
            </p>
            <div className="skill-line" aria-label="Compétences principales">
              <span>WordPress</span><span>Elementor</span><span>UX / UI</span>
              <span>SEO</span><span>HTML / CSS / JS</span>
            </div>
          </div>
        </section>

        <section className="diagnostic-section" id="diagnostic" aria-labelledby="diagnostic-title">
          <div className="section-shell diagnostic-grid">
            <div className="section-index">01 — Le diagnostic</div>
            <div className="diagnostic-intro reveal">
              <p className="kicker">Le point de départ</p>
              <h2 id="diagnostic-title">Le site existait. Le parcours, lui, restait à déboucher.</h2>
              <p>
                Swiss Désembouage avait déjà une présence en ligne. Mais le site ne
                suivait pas une logique mobile-first, manquait de visibilité sur Google
                et nécessitait plusieurs ajustements. Le véritable sujet était plus
                profond : que veut comprendre un client lorsqu’il arrive avec un
                radiateur tiède, du bruit dans son circuit ou une eau chaude trop lente ?
              </p>
            </div>
            <div className="diagnostic-list reveal">
              <article>
                <span>01</span>
                <h3>Mobile en retrait</h3>
                <p>Repenser les priorités pour les petits écrans plutôt que simplement réduire une version desktop.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Visibilité limitée</h3>
                <p>Clarifier les contenus et leur structure pour renforcer le référencement naturel.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Métier technique</h3>
                <p>Expliquer simplement le désembouage et le détartrage sans perdre la précision du métier.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="company-section section-shell" aria-labelledby="entreprise-title">
          <div className="section-index">02 — L’entreprise</div>
          <div className="company-heading reveal">
            <p className="kicker">Petite structure, expertise précise</p>
            <h2 id="entreprise-title">Swiss Désembouage, spécialiste des circuits de chauffage en Suisse romande.</h2>
          </div>
          <div className="company-copy reveal">
            <p>
              L’entreprise intervient auprès des particuliers comme des professionnels.
              Son activité se concentre sur deux expertises complémentaires : éliminer
              les boues dans les circuits de chauffage et retirer le calcaire des
              installations d’eau chaude.
            </p>
            <p>
              Dans une équipe de deux personnes, mon tuteur Ibrahima Camara porte le
              savoir-faire métier. Mon rôle consistait à le traduire en un outil de
              présentation et d’acquisition compréhensible par tous.
            </p>
          </div>
          <div className="company-metrics reveal">
            <article><strong>2</strong><span>expertises : désembouage et détartrage</span></article>
            <article><strong>6</strong><span>cantons cités dans la zone d’intervention</span></article>
            <article><strong>B2C + B2B</strong><span>particuliers et professionnels</span></article>
          </div>
          <aside className="strategy-note reveal">
            <span>Enjeu stratégique</span>
            <p>Être trouvé sur Google, expliquer rapidement la valeur de l’intervention et transformer une visite en demande de diagnostic.</p>
          </aside>
        </section>

        <section className="journey-section" id="missions" aria-labelledby="journey-title">
          <div className="section-shell">
            <div className="section-index light">03 — Le circuit du projet</div>
            <div className="journey-heading reveal">
              <p className="kicker light">De la recherche à la mise en ligne</p>
              <h2 id="journey-title">Cinq étapes pour remettre l’information en circulation.</h2>
            </div>
            <div className="process-track reveal">
              {processSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="missions-section section-shell" aria-labelledby="missions-title">
          <div className="section-index">04 — Les missions</div>
          <div className="missions-heading reveal">
            <p className="kicker">Un projet de bout en bout</p>
            <h2 id="missions-title">Une mission web complète, menée avec une forte autonomie.</h2>
            <p>
              Ibrahima intervenait peu dans la production quotidienne. Nous échangions
              en direct, par téléphone ou par e-mail pour valider les besoins et les
              avancées. Cette organisation m’a obligé à décider, tester et structurer
              mon propre travail.
            </p>
          </div>
          <div className="mission-grid reveal">
            {missionGroups.map((group, index) => (
              <article key={group.label}>
                <span>0{index + 1}</span>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <aside className="side-mission reveal">
            <div>
              <span>Mission parallèle</span>
              <h3>Prospection téléphonique</h3>
            </div>
            <p>
              J’ai également participé à la recherche de nouveaux clients par
              téléphone. Une expérience différente du développement, qui m’a confronté
              directement à la façon dont une entreprise présente sa valeur et ouvre
              une conversation commerciale.
            </p>
          </aside>
        </section>

        <section className="realisation-section" id="realisation" aria-labelledby="realisation-title">
          <div className="section-shell realisation-grid">
            <div className="section-index">05 — La réalisation</div>
            <div className="realisation-copy reveal">
              <p className="kicker">Le résultat visible</p>
              <h2 id="realisation-title">Le métier présenté à partir du problème du client.</h2>
              <p>
                La nouvelle page d’accueil part de symptômes concrets, explique leur
                cause, présente les deux interventions et guide naturellement vers une
                demande de diagnostic. Le vocabulaire, l’ordre des contenus et les
                appels à l’action ont été pensés ensemble.
              </p>
              <blockquote>
                « Comprendre le métier et réussir à bien le présenter, c’est ce qui me rend le plus fier. »
              </blockquote>
              <a
                className="text-link"
                href="https://www.swissdesembouage.ch/"
                target="_blank"
                rel="noreferrer"
              >
                Explorer le site final <span>↗</span>
              </a>
            </div>
            <figure className="browser-frame reveal">
              <div className="browser-bar">
                <span /><span /><span />
                <small>swissdesembouage.ch</small>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}swiss-home.jpg`}
                alt="Page d'accueil du site Swiss Désembouage réalisé pendant le stage"
                width="1365"
                height="918"
                loading="lazy"
              />
              <figcaption>Accueil du site actuellement en ligne · capture août 2026</figcaption>
            </figure>
          </div>
        </section>

        <section className="incident-section" aria-labelledby="incident-title">
          <div className="section-shell incident-grid">
            <div className="section-index light">06 — L’incident de mise en service</div>
            <div className="incident-copy reveal">
              <p className="kicker light">Le moment où rien ne circulait</p>
              <h2 id="incident-title">Un certificat HTTPS, un pare-feu… et un site qui refuse d’apparaître.</h2>
              <p>
                La mise en ligne a été le moment le plus difficile du stage. Malgré le
                travail terminé, le site restait inaccessible. Les vérifications ont
                fini par orienter le diagnostic vers le certificat HTTPS et un blocage
                lié au pare-feu.
              </p>
              <p>
                Plusieurs essais et contrôles ont été nécessaires avant de rendre le
                site accessible. Cette difficulté m’a rappelé qu’un projet web n’est pas
                terminé lorsque la dernière section est dessinée : il l’est lorsqu’un
                utilisateur peut réellement l’ouvrir.
              </p>
            </div>
            <div className="incident-diagram reveal" aria-label="Étapes du problème de mise en ligne">
              <div><span>01</span><b>Site prêt</b><small>Contenus et intégration terminés</small></div>
              <i />
              <div className="blocked"><span>02</span><b>Accès bloqué</b><small>HTTPS et pare-feu à diagnostiquer</small></div>
              <i />
              <div><span>03</span><b>Site accessible</b><small>Vérifications, essais, mise en service</small></div>
            </div>
          </div>
        </section>

        <section className="formation-section section-shell" id="formation" aria-labelledby="formation-title">
          <div className="section-index">07 — Formation ↔ entreprise</div>
          <div className="formation-heading reveal">
            <p className="kicker">Le lien avec l’ESD</p>
            <h2 id="formation-title">Les cours ont fourni les outils. Le stage m’a demandé de les relier.</h2>
          </div>
          <div className="training-table reveal" role="table" aria-label="Liens entre la formation et le stage">
            {trainingLinks.map(([skill, use]) => (
              <div className="training-row" role="row" key={skill}>
                <strong role="cell">{skill}</strong>
                <span role="cell">{use}</span>
              </div>
            ))}
          </div>
          <p className="formation-note reveal">
            Mon premier stage m’avait appris à utiliser WordPress et Elementor. L’ESD
            m’a apporté la méthode UX, le responsive, le code et la gestion de projet.
            Swiss Désembouage m’a donné la responsabilité de réunir ces compétences sur
            un seul projet réel.
          </p>
        </section>

        <section className="bilan-section" id="bilan" aria-labelledby="bilan-title">
          <div className="section-shell">
            <div className="section-index light">08 — Après l’intervention</div>
            <div className="bilan-heading reveal">
              <p className="kicker light">Bilan provisoire</p>
              <h2 id="bilan-title">Ce que ce projet a réellement mis en mouvement.</h2>
            </div>
            <div className="bilan-grid reveal">
              <article>
                <span>Acquis</span>
                <h3>Ce que j’ai appris</h3>
                <ul>
                  <li>Comprendre le besoin d’un client</li>
                  <li>Concevoir un parcours utilisateur</li>
                  <li>Renforcer une stratégie SEO</li>
                  <li>Prospecter par téléphone</li>
                  <li>Travailler avec une forte autonomie</li>
                </ul>
              </article>
              <article>
                <span>Contribution</span>
                <h3>Ce que j’ai apporté</h3>
                <ul>
                  <li>Une expérience plus cohérente sur mobile</li>
                  <li>Une présentation claire d’un métier technique</li>
                  <li>Un parcours orienté vers la prise de contact</li>
                  <li>Une base de contenus pensée pour le référencement</li>
                  <li>Un site remis en ligne et exploitable</li>
                </ul>
              </article>
              <article>
                <span>Déclic</span>
                <h3>Ce que j’ai compris sur moi</h3>
                <p>
                  Je suis capable de gérer seul un projet entier : de la recherche à la
                  mise en ligne, en passant par la conception, la production et les
                  échanges avec le client.
                </p>
              </article>
              <article className="future-card">
                <span>La suite</span>
                <h3>Transformer l’expérience en projet professionnel</h3>
                <p>
                  Ce stage a renforcé mon envie de me lancer en freelance, de créer des
                  sites internet et, à terme, des expériences e-commerce complètes.
                </p>
              </article>
            </div>
            <p className="honesty-note reveal">
              Le stage n’ayant pas intégré de suivi analytique chiffré, ce bilan reste
              volontairement qualitatif et s’appuie sur le travail livré et les
              compétences mobilisées.
            </p>
          </div>
        </section>

        <section className="closing-section section-shell" aria-labelledby="closing-title">
          <div className="closing-line" aria-hidden="true"><span /></div>
          <p className="eyebrow">Fin du reportage · Début du prochain projet</p>
          <h2 id="closing-title">Quand l’information circule, le savoir-faire devient visible.</h2>
          <p>
            Stage trouvé par candidature, choisi comme une première porte d’entrée vers
            le marché suisse et devenu une expérience fondatrice pour mon projet freelance.
          </p>
          <a className="button button-primary" href="#accueil">Revenir au début</a>
        </section>
      </main>

      <footer>
        <span>Chrisna Mit · Bachelor 2 CDA · ESD Lyon</span>
        <span>Swiss Désembouage · 6 avril — 17 juillet 2026</span>
        <span>Rapport de stage 2025—2026</span>
      </footer>
    </>
  );
}
