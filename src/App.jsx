import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { TrendingUp, Shield, Zap, Target, Award, BarChart3, ArrowRight, Activity, Lock, Clock, DollarSign, Percent, Layers, BookOpen, Scale, AlertTriangle, CheckCircle, XCircle, Sparkles, Eye, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import stratPerfImg from './assets/strat_perf.png';
import stratVisualImg from './assets/strat_visual.png';
import cemByVixImg from './assets/CEM_by_VIX.png';
import freqHistImg from './assets/freq_hist.png';
import pathDependenceImg from './assets/path_dependence.png';
import robustnessImg from './assets/robustness.png';
import rorGraphImg from './assets/ror_graph.png';
import thetaDecayImg from './assets/theta_decay.png';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 2.0, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

// Embla Carousel Component for Strategy Images
function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0">
            <div className="glass-panel p-4 bg-zinc-900/80">
              <img src={stratVisualImg} alt="Strategy Visual" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <div className="glass-panel p-4 bg-zinc-900/80">
              <img src={stratPerfImg} alt="Strategy Performance" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}


// Slide Component
function Slide({ title, subtitle, children, theme = "theme-intro", layout = "split", image, imageCaption, fullHeight = true }) {
  return (
    <section className={`slide-container ${theme} ${fullHeight ? 'min-h-screen' : 'py-24'}`}>
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </motion.h2>
          {subtitle && (
            <motion.div variants={itemVariant} className="flex items-center gap-3 text-xl text-indigo-200 font-light">
              <div className="h-px w-12 bg-indigo-500/50"></div>
              {subtitle}
            </motion.div>
          )}
        </motion.div>

        {layout === 'stacked' ? (
          <div className="flex flex-col gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {children}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-center"
            >
              {image && (
                <div className="max-w-[85%] w-full">
                  <div className="glass-panel p-4 bg-zinc-900/80 w-fit mx-auto">
                    <img src={image} alt={title} className="w-full rounded-lg shadow-2xl" />
                  </div>
                </div>
              )}
              {imageCaption && (
                <p className="text-center text-sm font-mono text-zinc-500 mt-4 uppercase tracking-widest">
                  {imageCaption}
                </p>
              )}
            </motion.div>
          </div>
        ) : layout === 'grid' ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {children}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {children}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {image && (
                <div className="glass-panel p-2">
                  <img src={image} alt={title} className="w-full rounded-xl shadow-2xl" />
                </div>
              )}
              {imageCaption && (
                <p className="text-center text-sm font-mono text-zinc-500 mt-4 uppercase tracking-widest">
                  {imageCaption}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ label, value, subtext, icon: Icon }) {
  return (
    <motion.div variants={itemVariant} className="glass-card group h-full border-l-4 border-l-indigo-500/50">
      <div className="flex justify-between items-start mb-4">
        <div className="text-base font-mono text-zinc-400 uppercase tracking-wider">{label}</div>
        {Icon && <Icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />}
      </div>
      <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{value}</div>
      {subtext && <div className="text-base text-zinc-500">{subtext}</div>}
    </motion.div>
  );
}

function ListItem({ title, children, icon: Icon }) {
  return (
    <motion.div variants={itemVariant} className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
      <div className="mt-1 flex-shrink-0">
        {Icon ? <Icon className="w-6 h-6 text-indigo-500" /> : <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>}
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <div className="text-zinc-400 leading-relaxed text-lg space-y-2">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-indigo-500/30 font-sans">

      {/* HERO / COVER SECTION - Restored */}
      <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden theme-intro border-b border-white/5 snap-start snap-always">
        <div className="max-w-7xl mx-auto w-full z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span className="text-base font-mono text-zinc-300 tracking-wider">Präsentiert für OPTIONSUNIVERSUM</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              <span className="text-gradient">VIX-Gefilterte</span> <br />
              0 DTE SPX <br />
              <span className="text-white/90">Bull Put Spreads</span>
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-4xl mx-auto leading-relaxed">
              Statistische Arbitrage in kurzfristigen Volatilitätsmärkten
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <StatCard label="Renditeschnitt" value=">4%" subtext="Pro Trade" icon={TrendingUp} />
            <StatCard label="Gewinnrate" value="83%" subtext="12+ Jahre Daten" icon={Award} />
            <StatCard label="Regime" value="VIX <14" subtext="Volatilitätsgefiltert" icon={Activity} />
            <StatCard label="Struktur" value="Credit" subtext="Theta-positiv" icon={Clock} />
          </motion.div>
        </div>
      </section>

      {/* Section 1: Strategy Overview - Split Edge as prominent subsection */}
      <section className="slide-container theme-intro">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Strategieübersicht
            </motion.h2>
            <motion.div variants={itemVariant} className="flex items-center gap-3 text-xl text-indigo-200 font-light">
              <div className="h-px w-12 bg-indigo-500/50"></div>
              VIX-Gefilterte 0 DTE SPX Bull Put Spreads
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <StatCard label="Durchschnittlicher Gewinn" value=">4%" subtext="Pro Trade" icon={TrendingUp} />
              <StatCard label="Zuverlässigkeit" value="12Y+" subtext="Optionsdaten Getestet" icon={Shield} />
              <StatCard label="Validiert" value="Live" subtext="Erprobt im Trading" icon={CheckCircle} />
              <StatCard label="Gewinnrate" value="83%" subtext="Hohe Wahrscheinlichkeit" icon={Award} />
              <StatCard label="Regimebewusst" value="VIX <14" subtext="Nur die besten Ergebnisse" icon={Activity} />
              <StatCard label="Einkommen" value="Perfekt" subtext="Theta Positiv" icon={DollarSign} />
            </motion.div>

            {/* Carousel for Strategy Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[85%] mx-auto"
            >
              <EmblaCarousel />
              <p className="text-center text-sm font-mono text-zinc-500 mt-4 uppercase tracking-widest">
                Abb 1.0: Strategievisualisierung & Performance (ohne Zinseszinseffekt)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE EDGE - Prominent Subsection */}
      <section className="slide-container theme-emerald py-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-emerald-500/20 border border-emerald-500/50 rounded-lg mb-6">
              <h2 className="text-6xl font-bold text-emerald-400 flex items-center gap-4 justify-center">
                <Sparkles className="w-12 h-12" />
                Die Edge
                <Sparkles className="w-12 h-12" />
              </h2>
            </div>
            <p className="text-2xl text-zinc-300 max-w-3xl mx-auto">
              Statistische Arbitrage + Optimal Struktur + Definiertes Risiko
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="glass-card border-l-4 border-l-emerald-500">
              <Scale className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Statistische Arbitrage</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Historisch gesehen sind bestimmte Optionen in bestimmten Regimen fehlgepreist. Wir nutzen diesen Fakt strategisch aus.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="glass-card border-l-4 border-l-emerald-500">
              <Target className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Die Struktur</h3>
              <ul className="text-zinc-400 text-lg leading-relaxed space-y-2">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Ziehe Nutzen aus Drift mittels Hebel in Phasen mit niedriger Volatilität</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Maximaler Gewinn, wenn der Kurs steigt, gleich bleibt oder leicht fällt (typisch in ruhigen Marktphasen).</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Verkaufe bei 30 Delta um Raum für Preiskorrektur zu lassen</li>
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="glass-card border-l-4 border-l-emerald-500">
              <Shield className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Definiertes Risiko</h3>
              <ul className="text-zinc-400 text-lg leading-relaxed space-y-2">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Definiertes Risiko</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Es ist eine Kreditstrategie</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Theta arbeitet für uns</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: What is 0 DTE? - Enhanced design */}
      <section className="slide-container theme-blue py-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Was ist 0 DTE?</h2>
            <p className="text-2xl text-indigo-200">Optionen, die am selben Tag ablaufen.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card border-l-4 border-l-blue-500">
              <Clock className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Definition</h3>
              <p className="text-zinc-400 text-lg">
                Optionskontrakte, die am selben Tag ablaufen. Diese laufen mit Marktschluss ab, wodurch sie ein enges Zeitfenster für kontrollierte Positionen bieten.
              </p>
            </div>
            <div className="glass-card border-l-4 border-l-blue-500">
              <BarChart3 className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Marktdominanz</h3>
              <div className="text-5xl font-bold text-white mb-4">&gt;50%</div>
              <p className="text-zinc-400 text-lg">
                Des Gesamthandelsvolumens von Optionen entfällt auf 0 DTE. Dies ist das am meistern gehandelte und liquideste Optionensegment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Popular? - Enriched content */}
      <Slide
        title="Warum ist 0 DTE so beliebt?"
        subtitle="Theta-Ausnutzung und Kapitaleffizienz."
        theme="theme-blue"
        layout=""
        image={thetaDecayImg}
        imageCaption="Fig 2.0: Thetaverfall-Beschleunigung (23x Zyklen)"
      >
        <div className="col-span-1 md:col-span-3 space-y-6">
          <ListItem title="High Gamma & Theta" icon={Zap}>
            <p className="mb-3">Diese Optionen erfahren in ihren letzten Stunden einen exponentiellen Verfall. Dies bietet eine einzigartige Chance:</p>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="font-semibold text-white mb-2">Theta-Effizienz:</p>
              <p>Wir können den Thetaverfall effektiver nutzen, indem wir die letzten 6,5 Stunden des Thetaverfalls täglich ernten, im Gegensatz zum Halten von Positionen für Tage oder Wochen. Dies vermeidet das Risiko über Nacht und am Wochenende und maximiert die Premiumausbeute pro exponierter Zeit.</p>
            </div>
          </ListItem>
          <ListItem title="Kapitaleffizienz" icon={DollarSign}>
            <p>Überlener Gewinn für Kaufkraft. 23x mehr Tradingzyklen (6h → Verfall) im Vergleich zum Halten einer 45 DTE Position bis zu 21 DTE.</p>
          </ListItem>
        </div>
      </Slide>

      {/* Section 4: Why We Use It? - Added Tail Risk Content */}
      <Slide
        title="Warum nutzen wir 0 DTE?"
        subtitle="Beschwindigkeit, Konvergenz und Risikobeseitigung."
        theme="theme-violet"
        layout="stacked"
        image={pathDependenceImg}
        imageCaption="Fig 3.0: Pfadabhängigkeit & Konvergenz"
      >
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ListItem title="Strategische Vorteile">
              <ul className="list-disc space-y-3 text-lg">
                <li><strong>Aufzinsung:</strong> Viele kleine Ereignisse multiplizieren sich schnell</li>
                <li><strong>Risikobeseitigung:</strong> Kein Risiko über Nacht/Am Wochenende. Nur ~6.5h Exposition pro Tag</li>
                <li><strong>Wertextraktion:</strong> Maximierung des Thetaverfalls</li>
                <li><strong>Liquidität:</strong> Hohe Popularität, enges Spreading</li>
              </ul>
            </ListItem>
          </div>
          <div className="space-y-6">
            <ListItem title="Tactcal Tail Risk Avoidance" icon={AlertTriangle}>
              <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-500/30">
                <p>0 DTE <strong>eliminiert</strong> Risikoaussetzung über Nacht und Wochenendsprünge, die für katastrophale Crashes verantwortlich sind, wie den -7.5% Wochenenddrop von COVID.</p>
              </div>
            </ListItem>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <ListItem title="Konvergenzgeschwindigkeit">
            <p className="mb-2"><strong>45 DTE:</strong> ~15 Handel pro Jahr. Hochgradig pfadabhängig. Wenig Feedback.</p>
            <p><strong>0 DTE:</strong> 252 Handel pro Jahr. Schlechte Trades gleichen sich schneller aus (Gesetz der großen Zahlen).</p>
          </ListItem>
        </div>
      </Slide>

      {/* Section 5: Instrument - Enhanced Design */}
      <section className="slide-container theme-amber py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-lg mb-6">
                <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Das Instrument</span>
              </div>
              <h2 className="text-6xl font-bold text-white mb-6">SPX Optionen</h2>
              <p className="text-2xl text-zinc-400 mb-8">
                Optionen auf den S&P 500 Index, berechnet basiert auf dem Index selbst und verschieden von ETF Optionen wie SPY.
              </p>
              <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm">
                <div className="h-px flex-1 bg-zinc-700"></div>
                <span>Bargeldabwicklung</span>
                <div className="h-px flex-1 bg-zinc-700"></div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="grid grid-cols-2 gap-4">
              <div className="glass-card text-center border-l-4 border-l-amber-500">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">Index-basiert</div>
                <div className="text-white font-semibold">SPX</div>
              </div>
              <div className="glass-card text-center opacity-50">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">ETF-basiert</div>
                <div className="text-white font-semibold">SPY</div>
              </div>
              <div className="glass-card text-center border-l-4 border-l-green-500">
                <div className="text-4xl mb-2">💰</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">Abwicklung</div>
                <div className="text-green-400 font-semibold">Cash</div>
              </div>
              <div className="glass-card text-center border-l-4 border-l-amber-500">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">Risiko</div>
                <div className="text-white font-semibold">Diversifiziert</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Why SPX? - Enriched PDT Content */}
      <Slide
        title="Warum SPX Optionen?"
        subtitle="Risiko, Ausführung und Flexibilität."
        theme="theme-amber"
        layout="stacked"
      >
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ListItem title="Risiko Minimierung" icon={Shield}>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Bargeldabwicklung = Kein Pin-Risiko</h4>
                  <p className="text-zinc-400">Im Gegensatz zu SPY können Dir keine Aktien zugewiesen werden. Bei Verfall werden Profit und Verlust mit Bargeld abgewickelt. Das eliminiert das Risiko des "Pinning" auf einem Strike und der unerwarteten Zuweisung.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Kein Idiosyncratisches Risk</h4>
                  <p className="text-zinc-400">Diversifiziert durch den Index. Keine CEO-Scandale oder Earnings-Überraschungen.</p>
                </div>
              </li>
            </ul>
          </ListItem>

          <ListItem title="Ausführungsqualität" icon={Activity}>
            <p className="text-zinc-400 text-lg leading-relaxed">Hochliquider Ticker stellt enge Bid-Ask-Spreads und einfachen Ein- und Ausstieg sicher.</p>
          </ListItem>
        </div>

        {/* <div className="bg-white/5 p-4 rounded-lg border border-white/10"></div> */}
        <div className="bg-white/5 col-span-1 rounded md:col-span-3 border border-white/10">
          <ListItem title="Flexibilität: Pattern Day Trader (PDT) Regel" icon={Scale}>
            <div className="mb-6">
              <br />
              <h4 className="text-white font-bold mb-2 text-lg">Was ist die PDT Regel?</h4>
              <p className="text-zinc-400 text-lg">
                Falls Sie weniger als $25k in Ihrem Konto haben, sind Sie auf 3 Daytrades innerhalb von 5 Handelstagen limitiert. Ein "Daytrade" ist das Öffnen und Schließen der gleichen Position am gleichen Tag. Gegen diese Regel zu verstoßen hat zur Folge, dass Ihr Konto auf "Close Only" gesetzt wird.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 p-6 rounded-lg border-2 border-green-500/50">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h4 className="text-green-400 font-bold text-xl">SPX: PDT-Immun</h4>
                </div>
                <p className="text-zinc-400 text-lg mb-4">
                  Sie können SPX-Optionen einfach auslaufen lassen, anstatt sie zu schließen. Da Sie die Position nicht „schließen“ (sie verfällt lediglich), zählt das nicht als Daytrade.
                </p>
                <div className="text-green-400 font-mono text-sm">✓ Perfect für kleine Konten</div>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 opacity-75">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <h4 className="text-red-400 font-bold text-xl">SPY / Andere Optionen</h4>
                </div>
                <p className="text-zinc-400 text-lg mb-4">
                  <strong>SPY:</strong> Erfordert Schließen (PDT-Regel gilt).<br />
                  <strong>XSP:</strong> Furchtbare Spreads.<br />
                  <strong>/ES:</strong> Futures options, PDT-Regel gilt nicht aber Schließen ist erforderlich.
                </p>
              </div>
            </div>
          </ListItem>
        </div>
      </Slide>

      {/* Section 7: Why Defined Risk? - SPLIT LAYOUT */}
      <section className="slide-container theme-rose">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Warum definiertes Risiko?
            </motion.h2>
            <motion.div variants={itemVariant} className="flex items-center gap-3 text-xl text-indigo-200 font-light">
              <div className="h-px w-12 bg-indigo-500/50"></div>
              Kapitaleffizienz und Extremrisiko-Management.
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ListItem title="Maximierte Kapitaleffizienz" icon={TrendingUp}>
                <p className="mb-4">Bei SPX erfordern ungedeckte Positionen etwa <strong className="text-white">136.000 $</strong> Margin pro Position.</p>
                <p className="text-white font-semibold">Mit definierten Risiko-Spreads (nur ca. 700 $ Margin) können wir etwa das 120-Fache an Positionen eröffnen.</p>
              </ListItem>
              <ListItem title="Gedeckltes Extremrisiko" icon={Lock}>
                <p>Der Kauf von Absicherung macht die Renditeverteilung deutlich vorhersehbarer und begrenzt katastrophale Verluste wirksam. So überstehen Sie die „Black-Swan“-Ereignisse, die ungedeckte Verkäufer aus dem Markt fegen.</p>
              </ListItem>
            </div>

            <div className="glass-panel p-8 bg-zinc-900">
              <h3 className="text-center text-zinc-500 uppercase tracking-widest text-base mb-8">Kaufkraftvergleich</h3>
              <div className="flex items-end justify-center gap-12 h-64 mb-8">
                <div className="w-32 bg-gradient-to-t from-red-900/80 to-red-700/50 border-2 border-red-500 h-full relative group flex flex-col justify-between py-4">
                  <span className="text-center text-red-400 font-mono font-bold text-xl px-2">$136k</span>
                  <span className="text-center text-xs text-red-300 uppercase tracking-wide px-2">Ungedeckte Position</span>
                </div>
                <div className="w-32 bg-gradient-to-t from-green-900/80 to-green-700/50 border-2 border-green-500 h-[2%] relative group flex flex-col justify-end pb-2">
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-green-400 font-mono font-bold text-xl whitespace-nowrap">~$700</span>
                  <span className="text-center text-xs text-green-300 uppercase tracking-wide px-2">Def. Risiko</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">~120x</div>
                <div className="text-zinc-500 font-mono text-sm uppercase tracking-wider">Höhere Effizienz</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: VIX Gating */}
      <Slide
        title="Warum VIX-Filterung?"
        subtitle="Regimebewusstsein"
        theme="theme-intro"
        layout="stacked"
        image={cemByVixImg}
        imageCaption="Fig 4.0: Performanceverfall nach VIX-Level"
      >
        <ListItem title="What is VIX?" icon={Activity}>
          <p>Der CBOE Volatility Index (VIX) wird aus S&P-500-Optionen mit 30 Tagen Restlaufzeit berechnet. Ein hoher VIX bedeutet, dass der Markt starke Schwankungen einpreist – Optionen sind teuer und die Marktlage ist unsicher.</p>
        </ListItem>
        <ListItem title="The Filter" icon={AlertTriangle}>
          <p className="mb-2">Nicht jede Strategie funktioniert in allen Marktphasen gleich gut. Volatilitätserwartungen korrelieren stark mit dem Marktverhalten.</p> <p className="text-white font-semibold">Wir setzen die Strategie nur dort ein, wo sie am besten performt: bei einem VIX &lt; 14.</p>
        </ListItem>
        <ListItem title="Only Play When You Have Edge" icon={Brain}>
          <ul className="list-disc text-lg">
            <li>Credit Spreads verhalten sich in Phasen niedriger Volatilität berechenbarer.</li>
            <li>Da wir vom <strong>Aufwärtsdrift des Basiswerts</strong> und <strong>Theta-Verfall</strong> profitieren, funktioniert die Strategie hier am besten.</li>
            <li>Das entspricht durchschnittlich etwa 3 Trades innerhalb von 2 Wochen.</li>
          </ul>
        </ListItem>
      </Slide>

      {/* Section 9: Methodology - FLOWCHART STYLE */}
      <section className="slide-container theme-cyan py-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Methodik</h2>
            <p className="text-2xl text-cyan-200">Einfach. Systematisch. Wiederholbar.</p>
          </motion.div>

          {/* Flowchart */}
          <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
            {/* VIX Check */}
            <motion.div {...fadeIn} className="w-full">
              <div className="glass-card text-center bg-cyan-900/20 border-2 border-cyan-500/50 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-zinc-950 font-bold text-sm rounded-full">
                  Entscheidung
                </div>
                <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4 mt-2" />
                <h3 className="text-2xl font-bold text-white mb-3">Ist VIX &lt;14?</h3>
                <p className="text-zinc-400 text-lg">Volatilitätsregime bei Marktöffnung prüfen</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="flex items-center gap-8 w-full justify-center">
              <div className="flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-green-500 rotate-90" />
                <span className="text-green-500 font-bold mt-2">Ja</span>
              </div>
              <div className="flex flex-col items-center opacity-30">
                <XCircle className="w-8 h-8 text-red-500" />
                <span className="text-red-500 font-bold mt-2">Nein → Überspringen</span>
              </div>
            </div>

            {/* Execute */}
            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="glass-card bg-green-900/10 border-l-4 border-l-green-500">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 text-xl font-bold mb-4 border border-green-500/50">
                  1
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Einstieg (09:32 EST)</h4>
                <p className="text-zinc-400 text-lg mb-3">2 Minuten nach NY Marktöffnung</p>
                <div className="bg-white/5 p-3 rounded font-mono text-sm text-green-400">
                  Verkaufen: 30Δ Put<br />
                  Kaufen: 15Δ Put
                </div>
              </div>

              <div className="glass-card bg-green-900/10 border-l-4 border-l-green-500">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 text-xl font-bold mb-4 border border-green-500/50">
                  2
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Ausstieg (16:00 EST)</h4>
                <p className="text-zinc-400 text-lg mb-3">Auslaufen lassen (Bargeldabwicklung)</p>
                <div className="bg-white/5 p-3 rounded font-mono text-sm text-green-400">
                  Keine Handlung notwendig.<br />
                  Automatische Abwicklung.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Capital Requirements */}
      <Slide
        title="Kapitalanforderungen"
        subtitle="Kaufkraft und Bankrottrisiko"
        theme="theme-rose"
        layout="stacked"
        image={rorGraphImg}
        imageCaption="Fig 5.0: Bankrottrisiko Simulation"
      >
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-white mb-4">Kaufkraft</h3>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Durchschnitt:</span>
                <span className="text-white font-mono font-bold">~$700</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Maximal:</span>
                <span className="text-white font-mono font-bold">~$2,000</span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-2xl font-bold text-white mb-4">Sicherheitsrahmen</h3>
            <p className="text-zinc-400 text-lg mb-4">Legen Sie einen Kapitalrahmen an, um das Reihenrisiko zu vermeiden. Simulationen zeigen:</p>
            <ul className="space-y-2 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span className="text-zinc-400"><strong className="text-white">$15k:</strong> &lt;1% Bankrottrisiko (~100% Jahresgewinn)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span className="text-zinc-400"><strong className="text-white">$25k:</strong> ~0% Bankrottrisiko (~60% Jahresgewinn)</span>
              </li>
            </ul>
          </div>

          <div className="glass-card md:col-span-2 bg-rose-900/10 border-rose-500/30">
            <h4 className="text-rose-400 font-bold mb-3 text-xl">Die Abwägung</h4>
            <p className="text-zinc-400 text-lg">Mehr Abstand bedeutet geringere effektive Rendite, jedoch deutlich höhere Sicherheit. Wir simulieren verschiedene Parameter, um das angemessene Risikoniveau für Ihre Kontogröße zu bestimmen.</p>
          </div>
        </div>
      </Slide>

      {/* Section 11: Return Distribution */}
      <Slide
        title="Renditeverteilung"
        subtitle="Frequenz-Histogramm."
        theme="theme-emerald"
        layout="stacked"
        image={freqHistImg}
        imageCaption="Fig 6.0: Renditeverteilung"
      >
        <div className="col-span-1 md:col-span-3 text-center glass-card">
          <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            Visualisierung der Verteilung der Handelsergebnisse über mehr als 12 Jahre. Beachten Sie die typischen Links­ausläufer beim Prämienverkauf – genau deshalb nutzen wir definiertes Risiko, um das Extremrisiko zu begrenzen.
          </p>
        </div>
      </Slide>

      {/* Section 12: Results & Robustness - Custom layout with Sensitivity Analysis next to CEM */}
      <section className="slide-container theme-emerald">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Ergebnisse & Robustheit
            </motion.h2>
            <motion.div variants={itemVariant} className="flex items-center gap-3 text-xl text-indigo-200 font-light">
              <div className="h-px w-12 bg-indigo-500/50"></div>
              Validierung und Sensitivität.
            </motion.div>
          </motion.div>

          {/* Top row: Results and Robustness */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            <ListItem title="Ergebnisse" icon={TrendingUp}>
              <p>Alle Renditegrafiken zeigen ausschließlich <strong>unkomponiertes</strong> Wachstum. Mit Zinseszinseffekt können die Ergebnisse aufgrund von Sequenzrisiko stark variieren – das konkrete Einstiegs­timing ist entscheidend.</p>
            </ListItem>

            <ListItem title="Robustheit" icon={Shield}>
              <p>Die Strategie kann je nach Zielsetzung angepasst werden (höhere Renditen vs. höhere Konstanz).</p>
            </ListItem>

            <ListItem title="CEM-Metrik" icon={CheckCircle}>
              <p>Eigene Evaluationsmetrik – Bestandteil eines proprietären Tools zur quantitativen Bewertung der Strategie in unterschiedlichen Marktphasen und zur Optimierung auf konkrete Zielgrößen (z. B. Sharpe Ratio vs. absolute Rendite).</p>
            </ListItem>

          </motion.div>

          {/* Bottom row: Sensitivity Analysis (left) and CEM Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ListItem title="Abhängigkeitsanalyse" icon={Shield}>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="mb-2">Selbst bei abweichender Wahl angrenzender Deltas (z. B. 15 oder 20 statt 30 für das Long-Leg) ist die Performanceeinbuße minimal.</p>
                  <p>Das zeigt, dass der Vorteil <strong className="text-emerald-400">real und robust</strong> ist – nicht auf einen spezifischen Parameter überoptimiert.</p>
                </div>
              </ListItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="glass-panel p-4 bg-zinc-900/80 w-fit">
                <img src={robustnessImg} alt="Robustheit" className="rounded-lg shadow-2xl max-w-full" />
              </div>
              <p className="text-center text-sm font-mono text-zinc-500 mt-4 uppercase tracking-widest">
                Fig 7.0: Abhängigkeitsanalyse (CEM-Metrik)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Constrain CEM image container */}
      <style>{`
        img[src*="robustness"] {
          max-width: 75% !important;
          margin: 0 auto !important;
        }
        img[src*="robustness"]::parent {
          max-height: fit-content !important;
        }
        .glass-panel:has(img[src*="robustness"]) {
          max-height: fit-content !important;
          height: auto !important;
        }
      `}</style>

      {/* Summary Slide */}
      <section className="slide-container theme-intro py-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white mb-6">Strategieübersicht</h2>
            <p className="text-2xl text-zinc-400">Schlüsselpunkte</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div {...fadeIn} className="glass-card border-l-4 border-l-indigo-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="text-indigo-500" />
                Die Strategie
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                VIX-gefilterte 0 DTE SPX Bull Put Spreads. Verkaufen von 30 delta, Kaufen von 15 delta Absicherung. Handle nur wenn VIX &lt; 14.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="glass-card border-l-4 border-l-emerald-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-emerald-500" />
                Die Edge
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Statistische Arbitrage im kurzfristigen Volatilitätsmarkt. Manche Optionen sind in Niedrigvolatilitätsphasen historisch systematisch fehlgepreist. Diese Fehlbewertung nutzen wir konsequent aus.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="glass-card border-l-4 border-l-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="text-blue-500" />
                Der Vorteil
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                252 Trades pro Jahr. Schnelle Thetaernte. Kein Übernacht- oder Wochenendrisiko. Eliminiert katastrophale Extremereignisse und nutzt dennoch Intraday-Bewegungen.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="glass-card border-l-4 border-l-amber-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="text-amber-500" />
                Das Risikomanagement
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Definiertes Risiko begrenzt Verluste. Rund 120-fache Kapitaleffizienz gegenüber ungedeckt. VIX-Filter meidet turbulente Marktphasen. Erfordert 15.000–25.000 $ Sicherheitsreserve.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="text-center glass-panel p-8 bg-indigo-900/20 border-indigo-500/50">
            <p className="text-xl text-indigo-200 font-light italic">
              „Eine regimebewusste, risikodefinierte Einkommensstrategie, optimiert auf Kapitaleffizienz und systematische Ausnutzung statistischer Vorteile in kurzfristigen Volatilitätsmärkten.“
            </p>
          </motion.div>
        </div>
      </section>

      {/* Q&A Slide */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-32 bg-zinc-900 border-t border-white/10 snap-start snap-always">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Eye className="w-24 h-24 text-indigo-500 mx-auto mb-8" />
            <h2 className="text-7xl font-bold text-white mb-8">Fragen?</h2>
            <p className="text-2xl text-zinc-400 mb-12">
              Lassen Sie uns die Strategie, Implementierung oder die Methodologie besprechen.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
