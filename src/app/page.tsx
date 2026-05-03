import React, { ReactNode } from "react";

import {
  Trophy, Target, Gamepad2, CalendarDays, MapPin, Users, Coins, ShieldCheck,
  TrendingUp, Award, ChevronRight, Phone, Map, Scale, BookOpen, UserCheck,
  Activity, Presentation, Flame, PlaySquare, Mic2, Tv2, Star, Megaphone,
  Briefcase, BarChart, Handshake, Info, Layers, Crosshair, Crown, Maximize2, Layout,
  Zap, MonitorPlay, Speaker, Leaf, Flag, Building
} from "lucide-react";

const PrintPage = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`print-page bg-white relative flex flex-col ${className}`}>
    {children}
  </div>
);

const PageHeader = ({ title, chapter }: { title: string, chapter: string }) => (
  <header className="mb-8 pb-3 border-b-2 border-emerald-100 flex items-center justify-between">
    <h2 className="text-xs font-bold tracking-widest text-amber-600 uppercase">{chapter}</h2>
    <span className="text-emerald-700 font-semibold text-xs">{title}</span>
  </header>
);

const FormalTitle = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-700 rounded-lg shadow-sm">
      <Icon className="text-white w-5 h-5" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
  </div>
);

export default function Proposal() {
  return (
    <div className="proposal-container min-h-screen text-slate-800">

      {/* 0. COVER */}
      <PrintPage className="justify-center items-center text-center overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40" 
          style={{ backgroundImage: 'url("/images/teamfight_bg.png")' }} 
        />
        
        {/* Dark Overlay gradient to ensure text readability while keeping the epic image visible */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/95" />

        <div className="z-10 flex flex-col items-center max-w-2xl mx-auto space-y-8 w-full px-8 relative">
          <div className="mb-4">
            <img 
              src="/images/logo mobile legend.png" 
              alt="Mobile Legends Bang Bang" 
              className="h-28 object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-4 w-full">
            <h2 className="text-lg md:text-xl font-bold tracking-[0.25em] text-emerald-300 uppercase drop-shadow-md bg-slate-900/60 inline-block px-8 py-2.5 rounded-full backdrop-blur-md border border-emerald-500/40 shadow-lg">
              Official Sponsorship Proposal
            </h2>
            <div className="py-6 relative flex flex-col items-center w-full">
              {/* Decorative radial glow behind logo to blend it with the background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-emerald-900/5 to-transparent blur-3xl -z-10 rounded-full scale-150" />
              
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -z-10" />
              
              {/* Main Event Logo - Enlarged */}
              <div className="relative z-10 w-[90%] sm:w-[80%] mx-auto">
                <img 
                  src="/images/Logo_Esport.png" 
                  alt="Logo Esport Sukabumi Showdown" 
                  className="w-full h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
            <div className="inline-block px-8 py-3 bg-slate-900/80 backdrop-blur-md text-white rounded-full mt-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-amber-500/50">
              <p className="text-lg font-medium italic text-amber-400 drop-shadow-md">"Unleash The Champion Within"</p>
            </div>
          </div>
          
          <div className="mt-28 pt-12 border-t border-slate-600/50 w-full flex flex-col items-center">
            <p className="text-xl font-black text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">SUKABUMI E-SPORTS</p>
            <p className="text-sm text-emerald-400 font-medium mt-3 drop-shadow-md tracking-wide">
              Officially Managed by <span className="font-bold text-amber-400">Sukabumi Techno Park</span> &copy; 2026
            </p>
          </div>
        </div>
      </PrintPage>

      {/* 0.5 Identitas Visual (Makna Logo) */}
      <PrintPage className="relative overflow-hidden">
        {/* Latar Belakang Logo Watermark */}
        <div 
          className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-[0.05] scale-[1.2]" 
          style={{ backgroundImage: 'url("/images/Logo_Esport.png")' }} 
        />
        
        <header className="mb-8 pb-3 border-b-2 border-slate-200 flex items-center justify-between relative z-10">
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">IDENTITAS VISUAL</h2>
          <span className="text-emerald-700 font-semibold text-xs">Filosofi & Makna Logo</span>
        </header>
        
        <div className="flex-1 relative z-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-700 rounded-lg shadow-sm">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Filosofi Logo Turnamen</h3>
          </div>
          
          <div className="flex flex-col items-center mb-10">
            <img 
              src="/images/Logo_Esport.png" 
              alt="Logo Esport Sukabumi" 
              className="w-64 h-64 object-contain drop-shadow-[0_15px_20px_rgba(4,120,87,0.3)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="text-sm text-slate-700 text-justify leading-relaxed space-y-6">
            <p>
              Logo <strong className="text-emerald-800">Clash of Champions: Sukabumi Showdown</strong> dirancang dengan perpaduan elemen <em>esports</em> modern dan nilai-nilai kearifan lokal Pasundan. Didominasi oleh warna <strong>Hijau dan Emas</strong>, setiap elemen di dalamnya memiliki makna luhur yang mendalam:
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 shadow-sm">
                <h4 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Perisai Hijau & Kujang
                </h4>
                <p className="text-xs text-slate-600">Latar perisai melambangkan pertahanan yang kuat. Senjata <strong>Kujang</strong> di tengah adalah pusaka kebanggaan masyarakat Sunda, merepresentasikan ketajaman taktik, keberanian, dan pelindung sejati di arena pertempuran.</p>
              </div>
              
              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 shadow-sm">
                <h4 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" /> Warna Emas & Bintang
                </h4>
                <p className="text-xs text-slate-600">Bintang di puncak dan balutan warna emas mewakili kejayaan, kemakmuran, serta pencapaian prestasi tertinggi. Emas adalah target utama setiap atlet esports untuk menjadi sang juara yang bersinar.</p>
              </div>

              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 shadow-sm">
                <h4 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" /> Untaian Padi & Bunga
                </h4>
                <p className="text-xs text-slate-600">Terinspirasi dari falsafah "ilmu padi", menyimbolkan kesejahteraan dan kerendahan hati. Semakin tinggi mekanik dan <em>skill</em> seorang atlet, semakin merunduk dan menghargai lawan-lawannya.</p>
              </div>

              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 shadow-sm">
                <h4 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
                  <Flag className="w-4 h-4 text-amber-700" /> Reugreug Pageuh Repeh Rapih
                </h4>
                <p className="text-xs text-slate-600">Pita semboyan kebanggaan Sukabumi yang berarti tangguh, kokoh, rukun, dan damai. Pesan moral bahwa turnamen ini bertujuan membangun persaudaraan dan solidaritas antarpemuda.</p>
              </div>
            </div>
            
            <div className="mt-10 p-4 border-l-4 border-emerald-600 bg-emerald-50 rounded-r-lg shadow-sm">
              <p className="italic text-sm text-emerald-800 font-medium">
                "Lebih dari sekadar identitas visual, logo ini adalah panji kehormatan yang menyatukan semangat juang esports dengan jiwa ksatria masyarakat Sukabumi."
              </p>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 1 & 2. Pendahuluan & Dasar Hukum */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 1" title="Pendahuluan & Dasar Hukum" />
        <div className="flex-1 flex flex-col gap-10">
          
          {/* Pendahuluan */}
          <div>
            <FormalTitle title="Pendahuluan" icon={Info} />
            <div className="prose prose-slate max-w-none text-sm text-slate-700 text-justify leading-relaxed">
              <p>
                Industri E-Sports saat ini telah bertransformasi dari sekadar sarana rekreasi digital menjadi sebuah industri olahraga prestasi dan ekonomi kreatif yang bernilai triliunan rupiah. Di Indonesia, penetrasi ekosistem E-Sports, khususnya melalui game Mobile Legends: Bang Bang, mendominasi berbagai lapisan masyarakat. 
              </p>
              <p className="mt-3">
                Kota Sukabumi, sebagai salah satu kota dengan populasi generasi muda (Milenial dan Gen-Z) yang masif, memiliki animo komunitas gamer yang sangat luar biasa namun masih kekurangan platform kompetisi profesional yang mampu menjadi kawah candradimuka bagi atlet lokal.
              </p>
            </div>
          </div>

          {/* Dasar Pemikiran */}
          <div>
            <FormalTitle title="Dasar Pemikiran & Hukum" icon={Scale} />
            <ul className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <li className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Undang-Undang Republik Indonesia Nomor 11 Tahun 2022</strong> tentang Keolahragaan Nasional.</span>
              </li>
              <li className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pengakuan resmi E-Sports sebagai cabang <strong>olahraga prestasi</strong> di bawah naungan Komite Olahraga Nasional Indonesia (KONI) dan Pengurus Besar Esports Indonesia (PB ESI).</span>
              </li>
              <li className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Program Kerja Daerah dalam rangka pemberdayaan pemuda dan pengembangan ekonomi kreatif digital.</span>
              </li>
            </ul>
          </div>
          
        </div>
      </PrintPage>

      {/* 3. Latar Belakang */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 2" title="Latar Belakang" />
        <div className="flex-1 flex flex-col">
          <FormalTitle title="Latar Belakang" icon={Layers} />
          <div className="prose prose-slate max-w-none text-sm text-slate-700 text-justify leading-relaxed">
            <p>
              Menyikapi urgensi pembinaan talenta E-Sports di Sukabumi, kami mengamati bahwa ekosistem lokal saat ini dipenuhi oleh turnamen berskala mikro yang belum terstandarisasi. Akibatnya, banyak talenta potensial dengan mekanik tingkat tinggi tidak terekspos ke radar pencari bakat nasional.
            </p>
            <p className="mt-3">
              Event ini dikonsep dengan standar <em>production value</em> berskala nasional—mencakup panggung megah, tata cahaya profesional, <em>live casting</em>, dan <em>broadcasting</em> interaktif. Melalui pendekatan ini, kami tidak hanya menghadirkan sebuah turnamen, melainkan sebuah festival olahraga elektronik yang menumbuhkan kebanggaan daerah serta membuka pintu karir bagi atlet amatir untuk melangkah ke kancah E-Sports profesional.
            </p>
          </div>

          {/* Galeri Ilustrasi */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border-2 border-emerald-100 group">
              <img src="/images/esports_indo_1.png" alt="Komunitas Esports Remaja" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-4">
                <span className="text-white text-sm font-semibold drop-shadow-md">Antusiasme Komunitas Lokal</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border-2 border-emerald-100 group">
              <img src="/images/esports_indo_2.png" alt="Atlet Esports Bertanding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-4">
                <span className="text-white text-sm font-semibold drop-shadow-md">Potensi Atlet Berprestasi</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border-2 border-emerald-100 group">
              <img src="/images/esports_indo_3.png" alt="Broadcasting Esports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-4">
                <span className="text-white text-sm font-semibold drop-shadow-md">Broadcasting & Produksi</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border-2 border-emerald-100 group">
              <img src="/images/esports_indo_4.png" alt="Selebrasi Kemenangan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-4">
                <span className="text-white text-sm font-semibold drop-shadow-md">Target Pencapaian Juara</span>
              </div>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 4. Maksud & Tujuan (Special Hero Page) */}
      <PrintPage className="!p-0 overflow-hidden shadow-sm">
        {/* Full width hero image at the top */}
        <div className="relative h-[250px] w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/purpose_bg.png")' }}></div>
          {/* Gradient to blend image into the white background below */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-white"></div>
          
          {/* Custom Header Badge */}
          <div className="absolute top-10 left-10 flex items-center gap-3">
             <div className="px-3 py-1 bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md">Halaman 4</div>
             <span className="text-white text-xs font-semibold uppercase tracking-widest drop-shadow-md">Visi & Misi</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-10 pb-10 flex-1 flex flex-col z-10 relative">
          
          {/* Epic Title overlapping the image transition */}
          <div className="flex items-center gap-4 mb-6 -mt-8">
            <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-lg border-2 border-white">
              <Target className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-widest uppercase drop-shadow-sm">Maksud & Tujuan</h3>
              <p className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm mt-1">Pilar Pencapaian Utama</p>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Penyelenggaraan <strong>Clash of Champions: Sukabumi Showdown</strong> tidak sekadar mencari pemenang, melainkan memiliki 4 objektif strategis utama yang saling berkesinambungan:
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                title: "Pembinaan Atlet",
                desc: "Mendeteksi dan membina bibit-bibit unggul atlet E-Sports Sukabumi secara sistematis dan terukur.",
                icon: Trophy
              },
              {
                title: "Karakter & Sportivitas",
                desc: "Membangun mentalitas kompetitif, disiplin, dan sportivitas (Fair Play) di kalangan generasi muda.",
                icon: ShieldCheck
              },
              {
                title: "Ekonomi Kreatif",
                desc: "Menstimulasi perputaran ekonomi kreatif lokal (UMKM, pekerja event, dan kreator konten) melalui multiplier effect.",
                icon: TrendingUp
              },
              {
                title: "Platform Promosi",
                desc: "Menyediakan platform pemasaran (brand activation) yang terukur dan efisien bagi mitra sponsor korporat.",
                icon: Presentation
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors shadow-sm flex items-center gap-6 relative overflow-hidden group">
                {/* Large watermark number on the right */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-50 group-hover:text-emerald-50 transition-colors">
                  <span className="text-7xl font-black italic">0{i + 1}</span>
                </div>
                
                {/* Icon Box */}
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-full border border-emerald-100 z-10 shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                
                {/* Text Content */}
                <div className="relative z-10 flex-1 pr-16">
                  <h5 className="font-bold text-lg text-slate-800 mb-1">{item.title}</h5>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </PrintPage>

      {/* 5. Profil Penyelenggara */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 5" title="Profil Penyelenggara" />
        <div className="flex-1 flex flex-col">
          <FormalTitle title="Profil Penyelenggara" icon={UserCheck} />
          
          {/* Main Organizer Highlight Box */}
          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-6 shadow-sm mb-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-amber-50 rounded-full blur-2xl opacity-60"></div>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Building className="w-6 h-6 text-emerald-600" /> Sukabumi Techno Park
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed text-justify mb-3">
                <strong>Clash of Champions: Sukabumi Showdown</strong> merupakan sebuah inisiatif strategis yang digagas dan dikelola langsung oleh <strong>Sukabumi Techno Park</strong>. Inisiatif ini lahir sebagai wujud nyata komitmen kami dalam memajukan industri kreatif digital dan olahraga elektronik di daerah.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                Event berskala regional ini tidak dirancang sebagai turnamen biasa, melainkan sebagai wadah kolaborasi inklusif berskala besar yang menyatukan para penggiat <em>game</em>, komunitas kepemudaan, dan pelaku ekonomi kreatif di Sukabumi.
              </p>
            </div>
          </div>

          <div className="mt-2 mb-4 px-1">
            <p className="text-sm text-slate-700 leading-relaxed">
              Untuk merealisasikan ekosistem <em>esports</em> yang profesional dan berkelanjutan, kami mengusung skema kolaborasi <strong>Pentahelix</strong> dengan bersinergi melibatkan banyak pihak kunci:
            </p>
          </div>

          {/* Pentahelix Collaboration Grid */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            {/* Government */}
            <div className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Scale className="w-5 h-5 text-emerald-600" />
                </div>
                <h5 className="font-bold text-slate-800">Pemerintah Daerah</h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Berperan sebagai fasilitator dan pembina kebijakan kepemudaan yang mendukung penyediaan ruang kreatif yang aman dan positif.
              </p>
            </div>

            {/* Association */}
            <div className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <h5 className="font-bold text-slate-800">Asosiasi Resmi (PB ESI)</h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Berperan sebagai pengawas regulasi dan standarisasi kompetisi agar sesuai dengan kaidah olahraga prestasi nasional.
              </p>
            </div>

            {/* Corporate */}
            <div className="bg-white border-l-4 border-amber-500 rounded-r-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Handshake className="w-5 h-5 text-amber-600" />
                </div>
                <h5 className="font-bold text-slate-800">Mitra & Korporasi</h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Berperan sebagai akselerator industri yang mendukung keberlangsungan acara dari sisi finansial, teknologi, dan promosi.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h5 className="font-bold text-slate-800">Komunitas Esports</h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sebagai aktor utama sekaligus pondasi penggerak ekosistem talenta yang kompetitif dan sportif di tingkat akar rumput.
              </p>
            </div>
          </div>
          
        </div>
      </PrintPage>

      {/* 6. Deskripsi Kegiatan (Special Hero Page) */}
      <PrintPage className="!p-0 overflow-hidden shadow-sm">
        {/* Full width hero image at the top */}
        <div className="relative h-[280px] w-full">
          <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: 'url("/images/grand_final_stage.png")' }}></div>
          {/* Gradient to blend image into the white background below */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-white"></div>
          
          {/* Custom Header Badge */}
          <div className="absolute top-10 left-10 flex items-center gap-3">
             <div className="px-3 py-1 bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md">Halaman 6</div>
             <span className="text-white text-xs font-semibold uppercase tracking-widest drop-shadow-md">Format Kegiatan</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-10 pb-10 flex-1 flex flex-col z-10 relative">
          
          {/* Epic Title overlapping the image transition */}
          <div className="flex items-center gap-4 mb-8 -mt-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-700 rounded-xl shadow-lg border-2 border-white">
              <Gamepad2 className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-widest uppercase drop-shadow-sm">Clash of Champions</h3>
              <p className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-sm mt-1">Sukabumi Showdown</p>
            </div>
          </div>

          {/* Philosophy Box */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl p-6 shadow-sm mb-8">
            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              Tema <strong className="text-emerald-600">"Unleash The Champion Within"</strong> memiliki makna filosofis mendalam, yakni membangkitkan potensi juara yang tertidur di dalam diri setiap pemuda. Acara ini bukan sekadar turnamen, melainkan panggung pembuktian bagi mereka yang berani bermimpi besar.
            </p>
          </div>

          {/* Format Cards */}
          <div className="grid grid-cols-2 gap-6 mt-2">
            {/* Qualifier Card */}
            <div className="bg-white border-2 border-slate-100 hover:border-emerald-200 rounded-2xl p-6 relative overflow-hidden transition-colors shadow-sm hover:shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl transition-colors"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <h4 className="text-slate-900 font-bold text-lg tracking-wide">Online Qualifiers</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                Fase kualifikasi daring yang sangat inklusif untuk <strong>64 tim</strong> dari seluruh penjuru Sukabumi. Sistem ini memastikan setiap talenta, di manapun mereka berada, memiliki kesempatan yang adil untuk bertarung di arena.
              </p>
            </div>

            {/* Grand Final Card */}
            <div className="bg-white border-2 border-slate-100 hover:border-amber-200 rounded-2xl p-6 relative overflow-hidden transition-colors shadow-sm hover:shadow-md">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl transition-colors"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="text-slate-900 font-bold text-lg tracking-wide">Offline Grand Final</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                Mengerucut ke babak puncak luring di <strong>Main Stage</strong> eksklusif. Menyajikan tensi pertandingan memukau dengan tata cahaya, <em>live casting</em> profesional, dan gemuruh penonton layaknya liga esports nasional sesungguhnya.
              </p>
            </div>
          </div>

        </div>
      </PrintPage>

      {/* 7. Analisis SWOT & Target Demografi (Combined) */}
      <PrintPage className="!p-0 overflow-hidden shadow-sm">
        {/* Full width hero image at the top */}
        <div className="relative h-[250px] w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/strategy_bg.png")' }}></div>
          {/* Gradient to blend image into the white background below */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-white"></div>
          
          {/* Custom Header Badge */}
          <div className="absolute top-10 left-10 flex items-center gap-3">
             <div className="px-3 py-1 bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md">Halaman 7</div>
             <span className="text-white text-xs font-semibold uppercase tracking-widest drop-shadow-md">Analisis & Riset</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-10 pb-10 flex-1 flex flex-col z-10 relative">
          
          {/* Epic Title overlapping the image transition */}
          <div className="flex items-center gap-4 mb-6 -mt-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-700 rounded-xl shadow-lg border-2 border-white">
              <Activity className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-widest uppercase drop-shadow-sm">Analisis Strategis</h3>
              <p className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm mt-1">SWOT & Demografi Target</p>
            </div>
          </div>
          
          {/* Section 1: SWOT Matrix */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* Top Left: Strengths (Internal Positive) */}
              <div className="p-5 border border-emerald-200 bg-emerald-50 rounded-xl relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-100/50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform"></div>
                <h4 className="text-sm font-bold text-emerald-700 mb-2 flex items-center gap-2"><Zap className="w-4 h-4"/> STRENGTHS (Kekuatan)</h4>
                <p className="text-xs text-slate-700 leading-relaxed relative z-10">Massa komunitas Mobile Legends di Sukabumi sangat loyal dan masif. Tim produksi diisi oleh praktisi berpengalaman dengan rekam jejak yang jelas.</p>
              </div>

              {/* Top Right: Weaknesses (Internal Negative) */}
              <div className="p-5 border border-amber-200 bg-amber-50 rounded-xl relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-0 top-0 w-24 h-24 bg-amber-100/50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform"></div>
                <h4 className="text-sm font-bold text-amber-700 mb-2 flex items-center gap-2"><Flag className="w-4 h-4"/> WEAKNESSES (Kelemahan)</h4>
                <p className="text-xs text-slate-700 leading-relaxed relative z-10">Biaya produksi panggung dan penyiaran (broadcasting) cukup tinggi, menuntut kolaborasi kuat dengan pihak sponsor pendanaan.</p>
              </div>

              {/* Bottom Left: Opportunities (External Positive) */}
              <div className="p-5 border border-emerald-200 bg-emerald-50 rounded-xl relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-100/50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform"></div>
                <h4 className="text-sm font-bold text-emerald-700 mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4"/> OPPORTUNITIES (Peluang)</h4>
                <p className="text-xs text-slate-700 leading-relaxed relative z-10">Dukungan penuh dari pemerintah dan PB ESI memperlancar perizinan. Format tayangan langsung (live streaming) memungkinkan jangkauan sponsor meluas secara digital.</p>
              </div>

              {/* Bottom Right: Threats (External Negative) */}
              <div className="p-5 border border-amber-200 bg-amber-50 rounded-xl relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-0 top-0 w-24 h-24 bg-amber-100/50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform"></div>
                <h4 className="text-sm font-bold text-amber-700 mb-2 flex items-center gap-2"><Flame className="w-4 h-4"/> THREATS (Ancaman)</h4>
                <p className="text-xs text-slate-700 leading-relaxed relative z-10">Ancaman kendala teknis dari pihak eksternal seperti pemadaman listrik atau server pusat permainan yang tidak stabil.</p>
              </div>
            </div>
          </div>

          {/* Section 2: Demografi */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" /> Target Demografi
            </h4>
            <div className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100 mt-3 shadow-sm relative overflow-hidden">
               {/* Background Watermark Icon */}
               <div className="absolute right-0 bottom-0 text-emerald-600 opacity-[0.03]">
                 <Users className="w-64 h-64 -mr-10 -mb-10" />
               </div>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6 relative z-10">
                <div className="flex flex-col">
                  <p className="text-2xl font-black text-amber-500 mb-1 drop-shadow-sm">15 - 35 Tahun</p>
                  <p className="text-sm font-bold text-slate-800 border-b border-emerald-100 pb-1 inline-block">Usia Dominan</p>
                  <p className="text-xs text-slate-600 mt-2">Gen-Z (65%) & Milenial (35%)</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-black text-amber-500 mb-1 drop-shadow-sm">70 : 30</p>
                  <p className="text-sm font-bold text-slate-800 border-b border-emerald-100 pb-1 inline-block">Rasio Gender</p>
                  <p className="text-xs text-slate-600 mt-2">Pria (70%) & Wanita (30%)</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-black text-amber-500 mb-1 drop-shadow-sm">Pelajar & Pekerja</p>
                  <p className="text-sm font-bold text-slate-800 border-b border-emerald-100 pb-1 inline-block">Status Pekerjaan</p>
                  <p className="text-xs text-slate-600 mt-2">Pelajar (40%), Mahasiswa (35%), Pekerja (25%)</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-black text-amber-500 mb-1 drop-shadow-sm">Teknologi & F&B</p>
                  <p className="text-sm font-bold text-slate-800 border-b border-emerald-100 pb-1 inline-block">Minat Spesifik</p>
                  <p className="text-xs text-slate-600 mt-2">Gaming, Kuliner, Fashion Streetwear, Teknologi</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </PrintPage>

      {/* 8. Pembahasan Atlet Kelas Nasional (Split Layout) */}
      <PrintPage className="!p-0 flex flex-row overflow-hidden shadow-sm">
        {/* Left Side: Dark Emerald Panel */}
        <div className="w-5/12 bg-emerald-900 p-12 flex flex-col justify-center text-white relative">
           {/* Abstract Background Elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -z-0 translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl opacity-50 -z-0 -translate-x-1/3 translate-y-1/3"></div>
           
           {/* Watermark Logo */}
           <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none overflow-hidden">
              <img src="/images/Logo_Esport.png" alt="Logo Watermark" className="w-[150%] h-auto grayscale" />
           </div>
           
           <div className="relative z-10">
              {/* Official Logo */}
              <img src="/images/Logo_Esport.png" alt="Sukabumi Esports" className="h-20 mb-8 drop-shadow-lg object-contain" />

              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-400 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                 <Crown className="w-4 h-4" /> Halaman 8
              </div>
              <h3 className="text-3xl font-black text-white leading-tight mb-4 tracking-wide">JALAN MENUJU <br/><span className="text-amber-400">LIGA NASIONAL</span></h3>
              <div className="w-12 h-1 bg-emerald-500 mb-6"></div>
              
              <p className="text-xs text-emerald-50 leading-relaxed mb-4 text-justify">
                 Sukabumi telah terbukti melahirkan atlet-atlet elit yang berlaga di tingkat teratas seperti <strong>MPL (Mobile Legends Professional League) Indonesia</strong>. Kompetisi "Clash of Champions" bukan sekadar ajang perebutan piala, melainkan <strong>kawah candradimuka</strong> dan sistem <em>talent scouting</em> resmi untuk bibit muda.
              </p>
              <p className="text-xs text-emerald-50 leading-relaxed text-justify mb-8">
                 Panitia telah menjalin koordinasi strategis dengan pencari bakat dari tim-tim profesional raksasa. Pemain dengan performa mekanik, penguasaan makro, dan mentalitas terbaik akan mendapatkan pantauan khusus selama turnamen berlangsung.
              </p>
              
              <div className="bg-emerald-950/60 p-5 rounded-xl border border-emerald-800/50 backdrop-blur-md shadow-lg">
                 <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <h5 className="font-bold text-white text-sm">Program Trial Academy</h5>
                 </div>
                 <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                    Pemain dengan predikat <em>Most Valuable Player</em> (MVP) di turnamen ini akan kami fasilitasi dan rekomendasikan masuk ke fase <strong>Percobaan (Trial)</strong> di akademi tim E-Sports Jakarta, membuka gerbang emas menuju karir atlet profesional.
                 </p>
              </div>
           </div>
        </div>

        {/* Right Side: Animated Image Collage */}
        <div className="w-7/12 bg-slate-50 p-8 flex items-center justify-center relative overflow-hidden">
            
            {/* Bento Box Masonry Grid */}
            <div className="flex gap-4 w-[105%] h-[550px] relative z-10">
               
               {/* Left Column (Main Image) */}
               <div className="w-[50%] h-full flex flex-col pt-8">
                  <div className="w-full flex-1 group overflow-hidden rounded-2xl shadow-xl border-4 border-white relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
                     <img src="/images/athlete_1.png" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" alt="Athlete 1" />
                     <div className="absolute bottom-4 left-4 z-20">
                        <div className="bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm mb-1 inline-block uppercase tracking-wide">Potensi Lokal</div>
                        <p className="text-white font-bold text-sm drop-shadow-md">Pencarian Bakat</p>
                     </div>
                  </div>
               </div>
               
               {/* Right Column (Split Images) */}
               <div className="w-[50%] h-full flex flex-col gap-4 pb-8">
                  {/* Top Right Image */}
                  <div className="w-full h-[55%] group overflow-hidden rounded-2xl shadow-xl border-4 border-white relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
                     <img src="/images/athlete_2.png" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" alt="Athlete 2" />
                     <div className="absolute bottom-4 left-4 z-20">
                        <div className="bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm mb-1 inline-block uppercase tracking-wide">Fokus & Disiplin</div>
                        <p className="text-white font-bold text-sm drop-shadow-md">Mentalitas Atlet</p>
                     </div>
                  </div>
                  
                  {/* Bottom Right Image */}
                  <div className="w-full h-[45%] group overflow-hidden rounded-2xl shadow-xl border-4 border-white relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
                     <img src="/images/athlete_3.png" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" alt="Athlete 3" />
                     <div className="absolute bottom-4 left-4 z-20">
                        <div className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm mb-1 inline-block uppercase tracking-wide">Persiapan Liga</div>
                        <p className="text-white font-bold text-sm drop-shadow-md">Trial Profesional</p>
                     </div>
                  </div>
               </div>
               
            </div>
            
            {/* Decorative Grid Dots */}
            <div className="absolute top-8 right-8 text-slate-200 pointer-events-none">
               <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="4" />
                  <circle cx="30" cy="10" r="4" />
                  <circle cx="50" cy="10" r="4" />
                  <circle cx="70" cy="10" r="4" />
                  <circle cx="90" cy="10" r="4" />
                  <circle cx="10" cy="30" r="4" />
                  <circle cx="30" cy="30" r="4" />
                  <circle cx="50" cy="30" r="4" />
                  <circle cx="70" cy="30" r="4" />
                  <circle cx="90" cy="30" r="4" />
                  <circle cx="10" cy="50" r="4" />
                  <circle cx="30" cy="50" r="4" />
                  <circle cx="50" cy="50" r="4" />
                  <circle cx="70" cy="50" r="4" />
                  <circle cx="90" cy="50" r="4" />
                  <circle cx="10" cy="70" r="4" />
                  <circle cx="30" cy="70" r="4" />
                  <circle cx="50" cy="70" r="4" />
                  <circle cx="70" cy="70" r="4" />
                  <circle cx="90" cy="70" r="4" />
                  <circle cx="10" cy="90" r="4" />
                  <circle cx="30" cy="90" r="4" />
                  <circle cx="50" cy="90" r="4" />
                  <circle cx="70" cy="90" r="4" />
                  <circle cx="90" cy="90" r="4" />
               </svg>
            </div>
        </div>
      </PrintPage>

      {/* 9. Strategi Marketing & Exposure */}
      <PrintPage className="bg-slate-50">
        <PageHeader chapter="HALAMAN 9" title="Strategi Marketing & Exposure" />
        <div className="flex-1 flex flex-col">
          <FormalTitle title="Strategi Marketing & Exposure" icon={TrendingUp} />
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 mb-8 flex items-center gap-6 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none"></div>
             
             {/* Left Text */}
             <div className="relative z-10 w-5/12 pr-4">
                <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold tracking-widest uppercase rounded-full mb-3">Target & Proyeksi</div>
                <h4 className="text-xl font-black text-slate-800 leading-tight mb-2">O2O <span className="text-emerald-600">Marketing Funnel</span></h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                   Sistem pemasaran terintegrasi (Online to Offline) untuk retensi & visibilitas maksimal.
                </p>
             </div>
             
             {/* Right Metric Cards */}
             <div className="relative z-10 w-7/12 grid grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-xl border-2 border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <p className="text-xl font-black text-emerald-600 mb-1">1.5M+</p>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Digital Reach</p>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-amber-200 shadow-sm flex flex-col items-center justify-center text-center">
                   <p className="text-xl font-black text-amber-500 mb-1">50.000+</p>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Live Viewers</p>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <p className="text-xl font-black text-emerald-600 mb-1">5.000+</p>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Offline Crowd</p>
                </div>
             </div>
          </div>

          {/* Timeline Layout */}
          <div className="relative pl-6 pr-2 flex-1 flex flex-col justify-center">
             {/* Vertical Connected Line */}
             <div className="absolute top-8 bottom-8 left-[45px] w-1 bg-gradient-to-b from-emerald-300 via-amber-300 to-emerald-300 rounded-full z-0"></div>
             
             <div className="space-y-6 relative z-10 w-full">
                
                {/* Pre-Event Card */}
                <div className="flex gap-6 items-center group">
                   <div className="w-12 h-12 rounded-full bg-white border-4 border-emerald-100 shadow-md flex items-center justify-center shrink-0 z-10 relative text-emerald-600 transition-transform group-hover:scale-110">
                      <Megaphone className="w-5 h-5" />
                   </div>
                   <div className="bg-white border-2 border-slate-100 rounded-2xl p-5 flex-1 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-2 h-full bg-emerald-500"></div>
                      <div className="flex items-center gap-3 mb-3">
                         <h4 className="font-black text-slate-800 text-lg">PRE-EVENT</h4>
                         <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Awareness & Hype</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs text-slate-600 leading-relaxed">
                         <div className="flex gap-2"><span className="text-emerald-500 font-bold">•</span><p><strong>Digital Ads:</strong> Optimalisasi iklan berbayar (Meta & TikTok Ads) ke target Gen-Z di wilayah Sukabumi.</p></div>
                         <div className="flex gap-2"><span className="text-emerald-500 font-bold">•</span><p><strong>Guerilla Offline:</strong> Distribusi 5.000+ pamflet fisik ke warkop, warnet, dan institusi pendidikan.</p></div>
                         <div className="flex gap-2 col-span-2"><span className="text-emerald-500 font-bold">•</span><p><strong>KOL Partnerships:</strong> Kolaborasi masif dengan influencer E-Sports lokal untuk memicu gelombang antusiasme pendaftaran.</p></div>
                      </div>
                   </div>
                </div>

                {/* Main Event Card (Highlighted) */}
                <div className="flex gap-6 items-center group">
                   <div className="w-12 h-12 rounded-full bg-emerald-900 border-4 border-amber-400 shadow-lg flex items-center justify-center shrink-0 z-10 relative text-amber-400 transition-transform group-hover:scale-110">
                      <Tv2 className="w-5 h-5" />
                   </div>
                   <div className="bg-emerald-900 border-2 border-emerald-700 rounded-2xl p-5 flex-1 shadow-xl relative overflow-hidden transform group-hover:-translate-x-1 transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 -z-0"></div>
                      <div className="absolute right-0 top-0 w-2 h-full bg-amber-400 z-10 shadow-[0_0_10px_rgba(251,191,36,0.6)]"></div>
                      
                      <div className="relative z-10">
                         <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-black text-white text-lg">MAIN EVENT</h4>
                            <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Engagement & Viral</span>
                         </div>
                         <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs text-emerald-50/90 leading-relaxed">
                            <div className="flex gap-2"><span className="text-amber-400 font-bold">•</span><p><strong>Live Broadcasting:</strong> Multi-kamera HD di YouTube & TikTok dengan <em>overlay</em> permanen logo sponsor.</p></div>
                            <div className="flex gap-2"><span className="text-amber-400 font-bold">•</span><p><strong>Brand Zone:</strong> Pendirian <em>booth</em> eksklusif fisik interaktif dengan <em>mini-games</em> menjaring <em>leads</em> pengunjung.</p></div>
                            <div className="flex gap-2 col-span-2"><span className="text-amber-400 font-bold">•</span><p><strong>UGC Campaign:</strong> Pengunjung mengunggah Instastory <em>on-site</em> menggunakan tagar resmi dan <em>mention</em> sponsor untuk suvenir.</p></div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Post Event Card */}
                <div className="flex gap-6 items-center group">
                   <div className="w-12 h-12 rounded-full bg-white border-4 border-emerald-100 shadow-md flex items-center justify-center shrink-0 z-10 relative text-emerald-600 transition-transform group-hover:scale-110">
                      <BarChart className="w-5 h-5" />
                   </div>
                   <div className="bg-white border-2 border-slate-100 rounded-2xl p-5 flex-1 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-2 h-full bg-emerald-500"></div>
                      <div className="flex items-center gap-3 mb-3">
                         <h4 className="font-black text-slate-800 text-lg">POST-EVENT</h4>
                         <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Retention & Loyalty</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs text-slate-600 leading-relaxed">
                         <div className="flex gap-2"><span className="text-emerald-500 font-bold">•</span><p><strong>Cinematic Aftermovie:</strong> Rilis video rekapitulasi resolusi tinggi menampilkan kemeriahan <em>hype</em> acara.</p></div>
                         <div className="flex gap-2"><span className="text-emerald-500 font-bold">•</span><p><strong>Analytics Report:</strong> Dokumen laporan komprehensif impresi digital & <em>reach</em> kepada sponsor.</p></div>
                         <div className="flex gap-2 col-span-2"><span className="text-emerald-500 font-bold">•</span><p><strong>Community Nurturing:</strong> Aktivasi grup Discord secara berkelanjutan via <em>fun-match</em> untuk menjaga retensi audiens.</p></div>
                      </div>
                   </div>
                </div>
                
             </div>
          </div>
        </div>
      </PrintPage>

      {/* 10. Rangkaian Acara */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 10" title="Rangkaian Acara Resmi" />
        <div className="flex-1 flex flex-col">
          <FormalTitle title="Rangkaian Acara Resmi" icon={CalendarDays} />
          
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Kompetisi akan berlangsung selama 2 hari berturut-turut, memadukan tensi tinggi dari turnamen E-Sports dengan kemeriahan festival budaya pop (<em>Side Events</em>), menciptakan pengalaman hiburan tanpa henti bagi ribuan pengunjung.
          </p>

          {/* 2 Days Schedule */}
          <div className="grid grid-cols-2 gap-8 mb-6">
             
             {/* Day 1 */}
             <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-4 mb-5 border-b border-emerald-100 pb-4">
                   <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 font-black text-2xl">1</div>
                   <div>
                      <h4 className="font-bold text-slate-800 text-base">HARI PERTAMA</h4>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Kualifikasi & Playoffs</p>
                   </div>
                </div>
                <div className="space-y-4 relative pl-2">
                   <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-emerald-100"></div>
                   
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_#d1fae5]"></div>
                      <p className="text-[11px] font-bold text-slate-400 mb-0.5">09:00 - 10:00</p>
                      <p className="text-sm font-semibold text-slate-700">Opening Ceremony</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_#d1fae5]"></div>
                      <p className="text-[11px] font-bold text-slate-400 mb-0.5">10:00 - 15:00</p>
                      <p className="text-sm font-semibold text-slate-700">Babak Kualifikasi Grup</p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-tight">64 Tim bertanding serentak secara bertahap.</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_#d1fae5]"></div>
                      <p className="text-[11px] font-bold text-slate-400 mb-0.5">16:00 - 18:00</p>
                      <p className="text-sm font-semibold text-slate-700">Babak 16 & 8 Besar</p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-tight">Fase eliminasi menuju perempat final.</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_#d1fae5]"></div>
                      <p className="text-[11px] font-bold text-slate-400 mb-0.5">19:00 - Selesai</p>
                      <p className="text-sm font-semibold text-slate-700">Semi-Final Match</p>
                   </div>
                </div>
             </div>

             {/* Day 2 */}
             <div className="bg-emerald-900 rounded-2xl border-2 border-emerald-700 p-6 shadow-xl relative overflow-hidden transform -translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 -z-0"></div>
                
                <div className="relative z-10 flex items-center gap-4 mb-5 border-b border-emerald-700 pb-4">
                   <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 font-black text-2xl shadow-md">2</div>
                   <div>
                      <h4 className="font-bold text-white text-base">HARI KEDUA</h4>
                      <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">The Grand Finale & Festival</p>
                   </div>
                </div>
                <div className="space-y-4 relative z-10 pl-2">
                   <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-emerald-700"></div>
                   
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_#065f46]"></div>
                      <p className="text-[11px] font-bold text-emerald-200 mb-0.5">10:00 - 13:00</p>
                      <p className="text-sm font-semibold text-white">Influencer Fun Match</p>
                      <p className="text-[10px] text-emerald-100/70 mt-1 leading-tight">Hiburan interaktif VIP bersama audiens.</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.3)]"></div>
                      <p className="text-[11px] font-bold text-amber-200 mb-0.5">14:00 - 16:00</p>
                      <p className="text-sm font-bold text-amber-400">Cosplay Walk Competition</p>
                      <p className="text-[10px] text-emerald-100/70 mt-1 leading-tight">Penampilan kostum megah karakter game.</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_#065f46]"></div>
                      <p className="text-[11px] font-bold text-emerald-200 mb-0.5">16:30 - 19:30</p>
                      <p className="text-sm font-black text-amber-400 tracking-wide">GRAND FINAL (BO5)</p>
                      <p className="text-[10px] text-emerald-100/70 mt-1 leading-tight">Pertandingan puncak disiarkan langsung.</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_#065f46]"></div>
                      <p className="text-[11px] font-bold text-emerald-200 mb-0.5">20:00 - Selesai</p>
                      <p className="text-sm font-semibold text-white">Awarding & Closing</p>
                   </div>
                </div>
             </div>

          </div>

          {/* Epic Image Section */}
          <div className="flex-1 relative w-full rounded-2xl overflow-hidden shadow-2xl border-[6px] border-emerald-950 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 transition-opacity duration-500"></div>
            <img src="/images/grand_final_stage.png" alt="Grand Final Stage" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000" />
            
            {/* Overlay Badges */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
               <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Gamepad2 className="w-3 h-3" /> E-Sports Arena
               </span>
               <span className="bg-amber-500/90 backdrop-blur-md text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Flame className="w-3 h-3" /> Cultural Festival
               </span>
            </div>

            <div className="absolute bottom-6 left-8 z-20 max-w-lg">
              <div className="inline-block px-3 py-1 bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-sm mb-3 shadow-sm transform -skew-x-6">Atmosfer Puncak</div>
              <h3 className="text-3xl font-black text-white drop-shadow-lg mb-2">THE ULTIMATE ARENA</h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">Gedung Juang 45 akan disulap menjadi panggung megah berstandar nasional, dilengkapi tata cahaya mutakhir, layar LED raksasa, dan area <strong>Bazaar UMKM</strong> untuk menahan retensi ribuan audiens.</p>
            </div>
          </div>
          
        </div>
      </PrintPage>

      {/* 11. Publikasi */}
      <PrintPage>
         <PageHeader chapter="HALAMAN 11" title="Kanal Publikasi Resmi" />
         
         <div className="flex-1 flex flex-row bg-white rounded-2xl border-2 border-slate-100 shadow-sm overflow-hidden mt-4">
            {/* Left Side: Image */}
            <div className="w-5/12 bg-emerald-950 relative group overflow-hidden">
               <div className="absolute inset-0 bg-emerald-900/60 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-20"></div>
               <img src="/images/esports_indo_2.png" alt="Publikasi Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               
               <div className="absolute bottom-8 left-8 right-8 z-30">
                  <div className="bg-amber-400 w-10 h-1 mb-4"></div>
                  <h3 className="text-2xl font-black text-white leading-tight mb-3">MASSIFYING <br/><span className="text-amber-400">THE HYPE</span></h3>
                  <p className="text-[10px] text-emerald-100/90 leading-relaxed font-medium">Penyebaran informasi strategis melalui kombinasi media digital agresif dan penetrasi luring (OOH) untuk menjamin dominasi visibilitas di seluruh penjuru Sukabumi.</p>
               </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-7/12 p-8 flex flex-col justify-center relative">
               <FormalTitle title="Omnichannel Publication" icon={Megaphone} />
               
               <div className="space-y-6 mt-4">
                  {/* Digital Media */}
                  <div className="relative pl-6">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-full"></div>
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600"><Tv2 className="w-4 h-4"/></div>
                        <h4 className="text-lg font-black text-slate-800">Media Digital <span className="text-emerald-600 text-[10px] font-bold tracking-wide uppercase ml-1">(Digital Presence)</span></h4>
                     </div>
                     <div className="pl-1 space-y-4 mt-2 text-[10px] text-slate-600 leading-relaxed">
                        <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-sm"></div><p><strong>Targeted Social Media Ads:</strong> Penempatan iklan berbayar presisi di Meta Ads & TikTok Ads yang difokuskan pada radius demografis <em>gamer</em> Gen-Z (15-25 tahun) di Sukabumi Raya.</p></div>
                        <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-sm"></div><p><strong>Algorithmic Video Content:</strong> Produksi tayangan <em>short-video</em> interaktif yang dioptimasi untuk menembus algoritma <em>FYP (For You Page)</em> TikTok & Instagram Reels secara masif.</p></div>
                        <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-sm"></div><p><strong>Local Media Partners:</strong> Publikasi <em>press release</em> terstruktur di 5+ portal berita dan media partner lokal terkemuka di Sukabumi (misal: Sukabumi Update, dll).</p></div>
                     </div>
                  </div>

                  <div className="w-full h-px bg-slate-100 my-4"></div>

                  {/* OOH Media */}
                  <div className="relative pl-6">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 rounded-full"></div>
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600"><Map className="w-4 h-4"/></div>
                        <h4 className="text-lg font-black text-slate-800">Cetak & Luar Ruang <span className="text-amber-500 text-[10px] font-bold tracking-wide uppercase ml-1">(Out-of-Home)</span></h4>
                     </div>
                     <div className="pl-1 space-y-4 mt-2 text-[10px] text-slate-600 leading-relaxed">
                        <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 shadow-sm"></div><p><strong>Giant Billboard Placement:</strong> Penempatan baliho raksasa (ukuran 4x6m) di titik sentral lalu lintas padat kota (Contoh: Bundaran Adipura / Jl. Ahmad Yani).</p></div>
                        <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 shadow-sm"></div><p><strong>Street Banners (Umbul-umbul):</strong> Pemasangan 50+ umbul-umbul promosi <em>brand awareness</em> di sepanjang rute protokol utama menuju lokasi acara (Gedung Juang 45).</p></div>
                        <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 shadow-sm"></div><p><strong>Community Posters:</strong> Penempelan poster cetak eksklusif (<em>Call to Action</em>) di titik kumpul komunitas (<em>Cybercafe</em> / Warnet, Kampus, dan Warung Kopi populer).</p></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </PrintPage>

      {/* 12. Guest Star */}
      <PrintPage>
         <PageHeader chapter="HALAMAN 12" title="Guest Star & Talent" />
         
         <div className="flex-1 flex flex-col justify-center">
            
            <div className="text-center max-w-xl mx-auto mb-10">
               <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-4 shadow-sm">Key Attractions</div>
               <h3 className="text-2xl font-black text-slate-800 mb-3">Elevating the <span className="text-emerald-600">Experience</span></h3>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Menghadirkan figur publik berkaliber nasional dengan basis penggemar organik yang masif untuk menaikkan nilai prestise, daya tarik komersial, dan tingkat interaksi langsung.
               </p>
            </div>

            <div className="space-y-6">
               
               {/* Professional Caster Dossier */}
               <div className="bg-emerald-950 rounded-3xl overflow-hidden shadow-xl border border-emerald-800 relative group flex items-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                  
                  {/* Avatar / Graphic Side */}
                  <div className="w-1/3 relative h-56 flex items-end justify-center bg-emerald-900 border-r border-emerald-800 overflow-hidden">
                     <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-emerald-950 to-transparent z-10"></div>
                     <img src="/images/athlete_1.png" alt="Caster Silhouette" className="h-[130%] w-auto object-cover object-bottom relative z-0 mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-500" />
                     {/* Badge Overlay */}
                     <div className="absolute top-4 left-4 z-20 bg-amber-400 text-slate-900 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-md flex items-center gap-1.5">
                        <Mic2 className="w-3 h-3" /> The Voice
                     </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-2/3 p-8 relative z-20">
                     <h4 className="text-3xl font-black text-white mb-1">PRO CASTERS</h4>
                     <p className="text-[10px] text-amber-400 font-bold tracking-widest uppercase mb-4">Official Shoutcasters</p>
                     
                     <p className="text-xs text-emerald-100/90 leading-relaxed mb-6">
                        Mengundang <strong>2 Shoutcaster Profesional</strong> berlisensi yang biasa memandu liga E-Sports resmi nasional. Kehadiran mereka sangat krusial untuk menghidupkan tensi emosional, memberikan analisis mendalam secara <em>real-time</em>, dan menyuntikkan adrenalin epik ke seluruh penjuru panggung utama.
                     </p>
                     
                     <div className="flex gap-5">
                        <div className="flex items-center gap-2 text-[10px] text-emerald-200"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shrink-0"></div> Play-by-Play Commentary</div>
                        <div className="flex items-center gap-2 text-[10px] text-emerald-200"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shrink-0"></div> Live Match Analysis</div>
                     </div>
                  </div>
               </div>

               {/* Influencer / Pro-Player Dossier */}
               <div className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 relative group flex items-center flex-row-reverse">
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
                  
                  {/* Avatar / Graphic Side */}
                  <div className="w-1/3 relative h-56 flex items-end justify-center bg-slate-50 border-l border-slate-100 overflow-hidden">
                     <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
                     <img src="/images/athlete_3.png" alt="Pro Player Silhouette" className="h-[130%] w-auto object-cover object-bottom relative z-0 group-hover:scale-105 transition-transform duration-500" />
                     {/* Badge Overlay */}
                     <div className="absolute top-4 right-4 z-20 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-md flex items-center gap-1.5">
                        <Star className="w-3 h-3" /> The Star
                     </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-2/3 p-8 relative z-20">
                     <h4 className="text-3xl font-black text-slate-800 mb-1">PRO-PLAYER</h4>
                     <p className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase mb-4">Guest Star & Influencer</p>
                     
                     <p className="text-xs text-slate-600 leading-relaxed mb-6">
                        Menghadirkan sosok bintang tamu dari kalangan pembuat konten <em>gaming</em> papan atas atau mantan pemain profesional (Pro-Player). Figurnya akan menjadi daya tarik utama yang memicu ledakan jumlah pengunjung harian dan meningkatkan <em>engagement</em> di ranah sosial media.
                     </p>
                     
                     <div className="flex flex-wrap gap-5">
                        <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-wide"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm shrink-0"></div> Meet & Greet</div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-wide"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm shrink-0"></div> VIP Fun Match</div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-wide"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm shrink-0"></div> Sponsor Session</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </PrintPage>

      {/* 13. Visual Venue 1 */}
      <PrintPage>
         <PageHeader chapter="HALAMAN 13" title="Visualisasi Venue: Fasad & Gate Masuk" />
         <div className="flex-1 flex flex-col gap-6 pt-4 h-full">
            {/* Foto 1 */}
            <div className="flex-1 w-full bg-emerald-950 rounded-3xl overflow-hidden relative shadow-md border-2 border-slate-100 group">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
               <img src="/images/Gate event 1.jpeg" alt="Gate Event 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-amber-400 w-10 h-1.5 mb-3"></div>
                  <h4 className="text-2xl font-black text-white mb-2">GERBANG UTAMA (MAIN GATE)</h4>
                  <p className="text-xs text-emerald-50/90 leading-relaxed max-w-xl">Desain gerbang penyambutan megah di area luar gedung. Dilengkapi dengan instalasi visual memukau yang segera memberikan atmosfer E-Sports futuristik sejak langkah pertama pengunjung tiba di lokasi acara.</p>
               </div>
               <div className="absolute top-4 right-4 z-20 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">Visual Concept 1</div>
            </div>
            
            {/* Foto 2 */}
            <div className="flex-1 w-full bg-emerald-950 rounded-3xl overflow-hidden relative shadow-md border-2 border-slate-100 group">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
               <img src="/images/gate event 2.jpeg" alt="Gate Event 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-emerald-500 w-10 h-1.5 mb-3"></div>
                  <h4 className="text-2xl font-black text-white mb-2">LORONG SELASAR (CORRIDOR GATE)</h4>
                  <p className="text-xs text-emerald-50/90 leading-relaxed max-w-xl">Konsep desain untuk lorong atau koridor menuju area dalam venue. Struktur pencahayaan LED yang dramatis membangkitkan tensi antusiasme penonton sebelum memasuki arena pertempuran utama.</p>
               </div>
               <div className="absolute top-4 right-4 z-20 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">Visual Concept 2</div>
            </div>
         </div>
      </PrintPage>

      {/* 14. Visual Venue 2: Main Stage */}
      <PrintPage>
         <PageHeader chapter="HALAMAN 14" title="Visualisasi Venue: Main Stage" />
         <div className="flex-1 flex flex-col pt-4 h-full pb-4">
            <div className="flex-1 w-full bg-emerald-950 rounded-3xl overflow-hidden relative shadow-md border-2 border-slate-100 group">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
               <img src="/images/main stage.jpeg" alt="Main Stage" className="absolute inset-0 z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="bg-amber-400 w-12 h-2 mb-4"></div>
                  <h4 className="text-4xl font-black text-white mb-4 tracking-wide drop-shadow-lg">PANGGUNG UTAMA <span className="text-emerald-400">(MAIN STAGE)</span></h4>
                  <p className="text-sm text-emerald-50/90 leading-relaxed max-w-3xl drop-shadow-md">Visualisasi desain panggung utama turnamen. Titik sentral pertempuran ini dirancang eksklusif dengan pencahayaan sinematik berstandar industri, layar LED videotron resolusi tinggi, serta bilik tanding (<em>player booth</em>) khusus untuk menjaga fokus dan privasi komunikasi taktis setiap tim secara absolut.</p>
               </div>
               <div className="absolute top-6 right-6 z-20 bg-emerald-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">Stage Concept</div>
            </div>
         </div>
      </PrintPage>


      {/* 15. Skema & Mekanisme Kompetisi */}
      <PrintPage>
         <PageHeader chapter="HALAMAN 15" title="Skema & Mekanisme Kompetisi" />
         <div className="flex-1 flex flex-col pt-4">
            <div className="text-center mb-8">
               <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-2">REGULASI & FORMAT</h3>
               <p className="text-sm text-slate-500 max-w-xl mx-auto">Sistem kompetisi dirancang dengan standar profesionalisme tinggi untuk menguji kelayakan taktis dan mekanik secara adil tanpa celah kecurangan.</p>
            </div>

            <div className="grid grid-cols-12 gap-5 mb-5">
               
               {/* Platform Card */}
               <div className="col-span-7 bg-emerald-950 rounded-3xl p-6 relative overflow-hidden shadow-lg border border-emerald-900 group">
                  <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all pointer-events-none"></div>
                  <Gamepad2 className="w-10 h-10 text-emerald-400 mb-4 relative z-10" />
                  <h4 className="text-xl font-black text-white mb-2 relative z-10">CORE PLATFORM</h4>
                  <div className="space-y-4 relative z-10 mt-4">
                     <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-800/50 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div></div>
                        <div>
                           <p className="text-xs font-bold text-emerald-100">Mobile Legends: Bang Bang</p>
                           <p className="text-[10px] text-emerald-200/70 mt-0.5">Mempertandingkan game Moba Mobile nomor satu dengan menggunakan aplikasi resmi versi terbaru dari Server Indonesia.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-800/50 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div></div>
                        <div>
                           <p className="text-xs font-bold text-emerald-100">Custom Room - Draft Pick 5v5</p>
                           <p className="text-[10px] text-emerald-200/70 mt-0.5">Mode turnamen kompetitif mutlak. Aturan <em>Global Ban</em> otomatis berlaku bagi pahlawan (hero) yang baru rilis di bawah umur 14 hari.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Kuota Card */}
               <div className="col-span-5 bg-gradient-to-br from-amber-50 to-white rounded-3xl p-6 relative overflow-hidden shadow-md border border-amber-200 group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none"></div>
                  <Users className="w-10 h-10 text-amber-500 mb-4 relative z-10" />
                  <h4 className="text-xl font-black text-slate-800 mb-2 relative z-10">ROSTER LIMIT</h4>
                  <p className="text-4xl font-black text-amber-600 mb-3 relative z-10 tracking-tighter">64 <span className="text-lg text-slate-500 font-bold tracking-normal">TIM</span></p>
                  <p className="text-xs text-slate-600 leading-relaxed relative z-10">
                     Kapasitas registrasi terbuka. Setiap delegasi tim diwajibkan menyetor form dengan komposisi roster absolut: <strong>5 Pemain Inti</strong> dan <strong>1 Pemain Cadangan</strong>.
                  </p>
               </div>
            </div>

            {/* Match Format Flow */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-inner relative overflow-hidden flex-1 flex flex-col justify-center">
               <h4 className="text-base font-black text-slate-800 mb-6 flex items-center gap-2"><Layout className="w-5 h-5 text-emerald-600" /> PROGRESSIVE MATCH FORMAT</h4>
               
               <div className="grid grid-cols-3 gap-4 h-full items-stretch">
                  {/* Phase 1 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col relative shadow-sm">
                     <div className="absolute top-0 right-0 p-3"><div className="w-2 h-2 rounded-full bg-slate-300"></div></div>
                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">FASE AWAL</p>
                     <h5 className="text-sm font-bold text-slate-800 mb-3">Qualifiers Stage</h5>
                     <div className="mt-auto">
                        <div className="inline-block px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-black rounded-lg mb-2 border border-slate-200">BEST OF 1 (BO1)</div>
                        <p className="text-[10px] text-slate-500 leading-relaxed">Sistem gugur mematikan. Tim dipaksa bermain aman tanpa celah karena satu kekalahan langsung berarti eliminasi (<em>Sudden Death</em>).</p>
                     </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="bg-white border border-amber-200 rounded-2xl p-5 flex flex-col relative shadow-md">
                     <div className="absolute top-0 right-0 p-3"><div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div></div>
                     <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest mb-1">MAIN EVENT</p>
                     <h5 className="text-sm font-bold text-slate-800 mb-3">Quarter & Semifinal</h5>
                     <div className="mt-auto">
                        <div className="inline-block px-3 py-1.5 bg-amber-50 text-amber-700 text-[10px] font-black rounded-lg mb-2 border border-amber-200">BEST OF 3 (BO3)</div>
                        <p className="text-[10px] text-slate-500 leading-relaxed">Bermain di panggung utama. Menuntut tim mengamankan 2 poin kemenangan mutlak, mengeliminasi faktor *luck* murni.</p>
                     </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 border border-emerald-700 rounded-2xl p-5 flex flex-col relative shadow-xl transform scale-[1.02]">
                     <div className="absolute top-0 right-0 p-3"><Star className="w-3 h-3 text-amber-400" /></div>
                     <p className="text-[10px] font-black uppercase text-emerald-400 tracking-widest mb-1">THE CLIMAX</p>
                     <h5 className="text-sm font-bold text-white mb-3">Grand Final Match</h5>
                     <div className="mt-auto">
                        <div className="inline-block px-3 py-1.5 bg-amber-500 text-slate-900 text-[10px] font-black rounded-lg mb-2 shadow-sm">BEST OF 5 (BO5)</div>
                        <p className="text-[10px] text-emerald-100/80 leading-relaxed">Puncak eksekusi stamina mental. Tim yang mencetak 3 kali kemenangan berhak mengangkat piala. Pertempuran sengit berjam-jam.</p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </PrintPage>

      {/* 16. Sistem Bracket & Alur Kompetisi */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 16" title="Sistem Bracket & Alur Kompetisi" />
        <div className="flex-1">
          <FormalTitle title="Sistem Bracket & Alur Kompetisi" icon={Maximize2} />
          <p className="text-sm text-slate-700 text-justify mb-6 leading-relaxed">
            Acara ini mengadopsi sistem gugur tunggal (<strong>Single Elimination Bracket</strong>). Setiap tim yang mengalami kekalahan langsung dinyatakan gugur tanpa masuk ke bagan bawah (Lower Bracket). Hal ini dipilih agar atmosfir setiap pertandingan berlangsung sangat krusial ("Do or Die").
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <div className="w-full max-w-sm bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-center">
              <p className="text-xs font-bold text-emerald-800">Tahap 1</p>
              <p className="text-sm font-semibold text-slate-700">Kualifikasi Online (64 Tim)</p>
            </div>
            <div className="w-1 h-6 bg-slate-300"></div>
            <div className="w-full max-w-xs bg-emerald-100 border border-emerald-300 p-3 rounded-lg text-center">
              <p className="text-xs font-bold text-emerald-800">Tahap 2</p>
              <p className="text-sm font-semibold text-slate-700">Babak 16 Besar Offline</p>
            </div>
            <div className="w-1 h-6 bg-slate-300"></div>
            <div className="w-full max-w-xs bg-emerald-200 border border-emerald-400 p-3 rounded-lg text-center">
              <p className="text-xs font-bold text-emerald-900">Tahap 3</p>
              <p className="text-sm font-semibold text-slate-700">Perempat & Semifinal Offline</p>
            </div>
            <div className="w-1 h-6 bg-slate-300"></div>
            <div className="w-full max-w-xs bg-amber-100 border-2 border-amber-400 p-4 rounded-lg text-center shadow-md">
              <p className="text-xs font-bold text-amber-800">Puncak Acara</p>
              <p className="text-base font-black text-amber-600">Grand Final (2 Tim)</p>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 17. Penghargaan Individu (Awarding) */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 17" title="Penghargaan Individu (Awarding)" />
        <div className="flex-1">
          <FormalTitle title="Penghargaan Individu" icon={Award} />
          <p className="text-sm text-slate-700 text-justify mb-6 leading-relaxed">
            Selain hadiah trofi dan uang tunai secara kolektif untuk tim yang berhasil menempati posisi Juara 1, Juara 2, dan Juara 3, panitia juga menyiapkan anggaran apresiasi khusus yang akan diberikan kepada performa individual terbaik atlet, sebagai berikut:
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-sm text-center">
              <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h4 className="text-base font-bold text-amber-800 mb-2">Pemain Terbaik (Final MVP)</h4>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                Gelar kehormatan untuk satu pemain yang memberikan kontribusi poin *KDA* (Kill, Death, Assist) terbaik dan penentu kemenangan mutlak di laga puncak Grand Final.
              </p>
              <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">Trofi Spesial & Uang Tunai Pembinaan</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl shadow-sm text-center">
              <Crosshair className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-base font-bold text-emerald-800 mb-2">Gelar Terminator</h4>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                Apresiasi untuk pemain agresif yang berhasil menorehkan angka agregat "Kill" atau eksekusi poin terbanyak dihitung sejak bergulirnya acara offline secara keseluruhan.
              </p>
              <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">Plakat Penghargaan Tersendiri</span>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 18. Persyaratan & Regulasi */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 18" title="Persyaratan & Regulasi" />
        <div className="flex-1">
          <FormalTitle title="Persyaratan & Regulasi" icon={BookOpen} />
          <div className="prose prose-slate max-w-none text-sm text-slate-700 text-justify leading-relaxed">
            <p>
              Untuk menjaga iklim kompetisi yang bersih (Fair Play) dan profesional, panitia pelaksana menetapkan Buku Peraturan Dasar yang wajib disepakati seluruh tim:
            </p>
            <ul className="space-y-2">
              <li><strong>Verifikasi Dokumen:</strong> Pendaftaran mewajibkan pemain menyertakan salinan fisik KTP / Kartu Pelajar sebagai bukti otentik identitas. Batas minimal usia peserta adalah 15 tahun.</li>
              <li><strong>Integritas Perangkat Elektronik:</strong> Peserta harus menggunakan <em>smartphone</em> pribadi murni. Bermain menggunakan mesin komputer/emulator (PC) atau *tablet* seperti iPad dilarang mutlak karena dapat memberikan keunggulan sudut pandang layar secara tidak adil.</li>
              <li><strong>Aturan Interupsi (Pause):</strong> Setiap kapten tim memiliki hak meminta <em>technical pause</em> jika mengalami masalah koneksi ekstrem. Waktu henti dibatasi maksimal 3 menit agar pertandingan tidak berlarut-larut.</li>
              <li><strong>Kode Etik Pemain:</strong> Kami menerapkan aturan <em>Zero Tolerance</em> terhadap perilaku tercela. Menghina lawan tanding menggunakan kalimat bernada rasisme (SARA), mengucapkan kalimat makian kasar (*Taunting* non-sportif), atau terindikasi menyuntikkan aplikasi pihak ketiga (*cheat/map hack*) akan berakhir pada sanksi <strong>diskualifikasi tanpa peringatan</strong>.</li>
            </ul>
          </div>
        </div>
      </PrintPage>

      {/* 19. Jadwal & Rundown Acara */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 19" title="Jadwal & Rundown Acara" />
        <div className="flex-1">
          <FormalTitle title="Jadwal & Rundown Acara Puncak" icon={CalendarDays} />
          <p className="text-sm font-bold text-slate-800 mb-4">Minggu, 26 Juli 2026 — Lokasi: Gedung Juang 45 Sukabumi</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm text-sm">
            <table className="w-full text-left">
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-2 font-bold text-emerald-700 w-32 align-top">10:00 - 11:00</td>
                  <td className="py-3 px-2 align-top text-slate-700"><strong>Pintu Dibuka (Open Gate):</strong> Pengecekan tiket pengunjung, penukaran gelang tanda masuk, registrasi ulang pemain, dan pengkondisian area panggung.</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-bold text-emerald-700 align-top">11:00 - 12:00</td>
                  <td className="py-3 px-2 align-top text-slate-700"><strong>Upacara Pembukaan (Opening Ceremony):</strong> Pidato protokoler oleh Ketua Panitia, perwakilan PB ESI, doa bersama, dan pentas hiburan lokal.</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-bold text-emerald-700 align-top">13:00 - 16:00</td>
                  <td className="py-3 px-2 align-top text-slate-700"><strong>Bronze Match:</strong> Pertandingan penentuan Juara Tiga yang dilakukan dalam format Best of 3.</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-bold text-emerald-700 align-top">16:00 - 17:30</td>
                  <td className="py-3 px-2 align-top text-slate-700"><strong>Fun Match Ekshibisi:</strong> Acara santai berupa pertempuran dalam game antara Penonton VIP melawan Bintang Tamu untuk membagikan <em>doorprize</em>.</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="py-3 px-2 font-black text-amber-700 align-top">18:30 - 21:30</td>
                  <td className="py-3 px-2 align-top text-slate-800"><strong>LAGA GRAND FINAL (Best of 5):</strong> Puncak acara. Dilakukan sesi panggilan masuk para pemain ke panggung (Player Walk-In) diikuti serangkaian pertarungan penentu juara pertama.</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-bold text-emerald-700 align-top">21:30 - Selesai</td>
                  <td className="py-3 px-2 align-top text-slate-700"><strong>Seremoni Penutupan (Awarding):</strong> Penyerahan uang tunai maket cek, medali, piala kehormatan, diakhiri dengan foto bersama seluruh manajemen sponsor dan peserta.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PrintPage>

      {/* 20. Timeline Pelaksanaan */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 20" title="Timeline Pelaksanaan" />
        <div className="flex-1 flex flex-col">
          <FormalTitle title="Roadmap & Timeline Operasional" icon={CalendarDays} />
          <p className="text-sm text-slate-700 mb-8 leading-relaxed">
            Rancangan jadwal makro operasional kepanitiaan dibagi menjadi empat tahapan krusial. Tanggal spesifik akan diumumkan secara resmi menyusul (TBA) setelah seluruh kesiapan logistik dan penandatanganan kontrak sponsor terkunci.
          </p>
          
          <div className="relative pl-12 flex-1 flex flex-col justify-between py-2">
            {/* Vertical Dashed Line */}
            <div className="absolute left-4 top-4 bottom-8 border-l-2 border-dashed border-emerald-300"></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[42px] mt-2.5 w-7 h-7 rounded-full bg-emerald-100 border-[3px] border-white shadow-sm flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative">
                 <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-black rounded-lg mb-3 border border-slate-200 tracking-wider">🗓️ TBA / COMING SOON</div>
                 <h5 className="text-base font-black text-emerald-950 mb-2">Fase 1: Pendaftaran & Aktivasi Promosi</h5>
                 <p className="text-sm text-slate-600 leading-relaxed">
                   <strong>Fokus Kegiatan:</strong> Publikasi poster digital massif, <em>media placement</em> di akun-akun publik lokal, distribusi undangan fisik ke lembaga pendidikan (sekolah & kampus), dan operasional loket pendaftaran hingga kuota maksimal (64 Tim) terpenuhi secara mutlak.
                 </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mt-5">
              <div className="absolute -left-[42px] mt-2.5 w-7 h-7 rounded-full bg-emerald-100 border-[3px] border-white shadow-sm flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative">
                 <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-black rounded-lg mb-3 border border-slate-200 tracking-wider">🗓️ TBA / COMING SOON</div>
                 <h5 className="text-base font-black text-emerald-950 mb-2">Fase 2: Technical Meeting & Drawing Bracket</h5>
                 <p className="text-sm text-slate-600 leading-relaxed">
                   <strong>Fokus Kegiatan:</strong> Pemanggilan wajib bagi seluruh kapten tim terdaftar. Meliputi pembacaan <em>Rulebook</em> resmi, penyamaan persepsi sanksi pelanggaran, serta pengundian (<em>drawing</em>) bagan pertandingan secara langsung dan transparan demi sportivitas.
                 </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mt-5">
              <div className="absolute -left-[42px] mt-2.5 w-7 h-7 rounded-full bg-emerald-100 border-[3px] border-white shadow-sm flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative">
                 <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-black rounded-lg mb-3 border border-slate-200 tracking-wider">🗓️ TBA / COMING SOON</div>
                 <h5 className="text-base font-black text-emerald-950 mb-2">Fase 3: Babak Kualifikasi Daring (Online)</h5>
                 <p className="text-sm text-slate-600 leading-relaxed">
                   <strong>Fokus Kegiatan:</strong> Mengeksekusi laga eliminasi tahap awal. Seluruh laga diawasi sangat ketat oleh dewan wasit melalui fitur <em>Spectator Room</em> guna memastikan tidak ada tindakan joki, manipulasi <em>ping</em> jaringan, atau eksploitasi <em>bug</em> ilegal.
                 </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative mt-5">
              <div className="absolute -left-[42px] mt-2.5 w-7 h-7 rounded-full bg-amber-100 border-[3px] border-white shadow-sm flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-white border border-amber-300 rounded-2xl p-5 shadow-md relative overflow-hidden">
                 <div className="absolute right-0 top-0 bottom-0 w-32 bg-amber-400/10 transform -skew-x-12 translate-x-10 pointer-events-none"></div>
                 <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-black rounded-lg mb-3 border border-amber-200 tracking-wider">🗓️ TBA / COMING SOON</div>
                 <h5 className="text-base font-black text-amber-800 mb-2">Fase 4: Puncak Acara (Offline Main Event)</h5>
                 <p className="text-sm text-slate-700 leading-relaxed relative z-10">
                   <strong>Fokus Kegiatan:</strong> Penyelenggaraan fisik di <em>venue</em> panggung utama. Mencakup kedatangan audiens suporter, aktivasi <em>booth</em> sponsor & UMKM, pertarungan langsung perempat hingga Grand Final, penampilan bintang tamu, dan seremoni angkat piala.
                 </p>
              </div>
            </div>

          </div>
        </div>
      </PrintPage>

      {/* 21. Produksi & Tata Ruang */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 21" title="Produksi & Tata Ruang" />
        <div className="flex-1">
          <FormalTitle title="Produksi Panggung & Tata Ruang" icon={Map} />
          <div className="prose prose-slate max-w-none text-sm text-slate-700 text-justify leading-relaxed">
            <p>
              Membangun atmosfer turnamen luring (offline) yang mewah memerlukan investasi peralatan produksi skala tinggi. Venue kegiatan akan dirombak interiornya sedemikian rupa agar menduplikasi arena stadion E-Sports tingkat nasional.
            </p>
            <p>
              <strong>Panggung Utama (Main Stage):</strong> Akan didirikan panggung berukuran luas minimal 12 x 8 meter dengan <em>rigging</em> aluminium profesional. Panggung dirancang simetris agar pemain tim merah dan tim biru saling berhadapan namun tidak mengganggu jarak pandang visual mereka satu sama lain.
            </p>
            <p>
              <strong>Tata Suara (Audio System):</strong> Guna menghentakkan dada para penonton, arena diisi oleh instalasi Audio <em>Line Array System</em> dengan keluaran daya puncak mencapai 10.000 Watt. Efek dentuman bass saat adegan pertempuran di dalam game akan terasa secara fisik oleh pengunjung.
            </p>
            <p>
              <strong>Area Tanding (Player Booth):</strong> Tempat duduk pemain diamankan dengan sekat khusus. Setiap meja diberi karpet tebal untuk meredam guncangan meja, kursi *ergonomic gaming chair* agar pemain merasa nyaman berjam-jam, serta perangkat *headphone Noise Cancelling* canggih agar suara teriakan penonton tidak membocorkan instruksi komunikasi internal antar anggota tim.
            </p>
          </div>
        </div>
      </PrintPage>

      {/* 22. Denah & Spesifikasi */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 22" title="Denah & Spesifikasi" />
        <div className="flex-1">
          <FormalTitle title="Denah Area (Venue Layout)" icon={Layout} />
          <p className="text-sm text-slate-700 text-justify mb-4 leading-relaxed">
            Pembagian tata letak area kegiatan diatur dengan alur pergerakan manusia (*flow of traffic*) yang rasional, mencegah penumpukan massa di satu titik.
          </p>
          <div className="bg-slate-50 border-2 border-dashed border-emerald-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
            <Layout className="w-16 h-16 text-emerald-400 mb-4" />
            <p className="text-base font-bold text-slate-800 mb-2">Simulasi Pemetaan Ruangan (Zoning)</p>
            <div className="text-sm text-slate-600 text-left w-full max-w-lg mt-4 space-y-3">
              <p><strong>Zona Utara (Ujung):</strong> Panggung Utama, Layar LED Raksasa, dan Ruang Tunggu Eksklusif Pemain (Backstage).</p>
              <p><strong>Zona Tengah:</strong> Tribun tempat duduk pengunjung terbagi menjadi dua sektor (Sayap Kiri dan Kanan), dipisahkan lorong koridor tengah untuk parade masuk atlet.</p>
              <p><strong>Zona Sayap:</strong> Area operasional Front Of House (FOH) tempat sutradara siaran dan alat kontrol teknisi berada, serta Caster Desk untuk pemandu acara.</p>
              <p><strong>Zona Selatan (Depan/Gerbang):</strong> Akses pintu masuk (Gate), loket penukaran tiket, dan deretan ruang berjejaring untuk Booth Aktivasi Sponsor serta Bazaar Kuliner UMKM.</p>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 23. Broadcasting */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 23" title="Broadcasting" />
        <div className="flex-1">
          <FormalTitle title="Sistem Penyiaran (Broadcasting)" icon={MonitorPlay} />
          <div className="prose prose-slate max-w-none text-sm text-slate-700 text-justify leading-relaxed">
            <p>
              Selain pengunjung yang datang ke lokasi secara fisik, acara ini dirancang mengudara melalui siaran langsung (Live Streaming) digital di platform YouTube. Memproduksi siaran digital yang elegan tidak sekadar merekam permainan, tetapi memadukan ilmu pertelevisian yang modern. Komponen pendukungnya adalah:
            </p>
            <ul>
              <li><strong>Multi-Camera Setup:</strong> Kami tidak menggunakan satu kamera mati statis. Proses produksi akan menyalakan minimal 4 kamera secara simultan: dua buah *player-cam* yang disorot langsung menatap wajah ketegangan kedua tim, satu kamera luas (wide camera) yang menangkap reaksi histeris penonton, dan satu sudut kamera khusus untuk analis acara (Caster).</li>
              <li><strong>Juru Kamera Dalam-Permainan (In-Game Observer):</strong> Permainan tidak bergerak sendiri. Dua orang tenaga ahli bersertifikat Observer akan masuk ke ruangan pertandingan dalam mode *spectator*, yang bertugas mengontrol pergerakan kamera layar mengarahkan audiens pada titik-titik krusial di peta pertarungan.</li>
              <li><strong>Sistem Siaran Ulang (Instant Replay System):</strong> Tim pengarah gambar dilengkapi mesin digital yang bisa mengulang cuplikan adegan pertandingan (Highlight) dalam format gerak lambat sesaat sesudah terjadinya adegan krusial (seperti mencuri *Lord* atau memenangkan pertarungan kelompok).</li>
            </ul>
          </div>
        </div>
      </PrintPage>

      {/* 24. Visual Layout */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 24" title="Visual Layout" />
        <div className="flex-1">
          <FormalTitle title="Visual Layout & Graphic Assets" icon={Speaker} />
          <p className="text-sm text-slate-700 text-justify mb-6 leading-relaxed">
            Cerminan sebuah event profesional terletak pada aset estetika digital yang mulus dan jernih. Oleh sebab itu, seluruh grafis layar acara diproduksi pada resolusi *High Definition* (HD).
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4 shadow-sm">
              <Tv2 className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-800">Layar LED Panggung (Stage Display)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Bukan menggunakan proyektor usang, melainkan menyewa bentangan modul Videotron LED *pitch* rapat. Pada layar ini tidak hanya menampilkan peta pertandingan, melainkan tayangan transisi bumper masuk, logo sponsor besar berpendar, hingga menampilkan wajah pemain dan pelatih pada sesi seleksi karakter (*Draft Pick phase*).</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4 shadow-sm">
              <Layout className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-800">Desain Antarmuka Tontonan (Streaming Overlay HUD)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Bagian luar bingkai tayangan YouTube dibungkus secara kustom menggunakan desain bernuansa emas dan biru gelap (sesuai citra warna Mobile Legends). Di sudut layar akan disisipkan kotak iklan kecil berisi kompilasi bergulir aset promosi dari berbagai level mitra sponsor (*Running Logo Sponsor*).</p>
              </div>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 25. Revenue Stream */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 25" title="Revenue Stream" />
        <div className="flex-1">
          <FormalTitle title="Revenue Stream (Alur Pendapatan Acara)" icon={Coins} />
          <p className="text-sm text-slate-700 text-justify mb-4 leading-relaxed">
            Menjalankan kegiatan megah membutuhkan landasan arus kas yang terencana. Agar acara berlangsung berkesinambungan dan tidak bergantung pada sepihak saja, panitia mengelola pos pendapatan ganda:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm text-center">
              <Handshake className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-800 mb-2">Kemitraan Sponsorship Utama</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Pendanaan dari sektor swasta atau instansi yang menginginkan penukaran manfaat ruang beriklan komersial dalam aktivitas event ini.</p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm text-center">
              <Activity className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-800 mb-2">Penjualan Tiket Akses (Ticketing)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Penjualan tiket fisik secara harian (*Daily Pass*) atau sistem terusan (*3-Day Pass VIP*) bagi penonton yang masuk area panggung tertutup.</p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-800 mb-2">Pendaftaran Tim (Entry Fee)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Dana partisipasi wajib dari setiap tim yang bersaing, sekaligus sebagai uang komitmen keseriusan (*commitment fee*) mematuhi jadwal.</p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm text-center">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-800 mb-2">Penyewaan Tapak Komersial (Tenant)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Pendapatan retribusi yang dihimpun dari para pedagang dan pelaku bisnis UMKM kreatif yang menjajakan barang jualan di lorong bazaar.</p>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 26. Kemitraan & Sponsorship */}
      {/* 26. Kemitraan & Sponsorship */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 26" title="Kemitraan & Sponsorship" />
        <div className="flex-1 flex flex-col h-full pt-4 pb-2">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">VIP SPONSORSHIP TIERS</h3>
            <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">Pilih level integrasi <em>brand</em> Anda. Kami membatasi jumlah mitra demi menjamin eksklusivitas maksimum dan menjanjikan <em>Return of Investment</em> (ROI) yang optimal.</p>
          </div>

          <div className="flex items-end justify-center gap-4 flex-1">
            
            {/* SILVER */}
            <div className="w-[30%] bg-white border border-slate-200 rounded-3xl p-5 shadow-sm relative h-[75%] flex flex-col hover:border-slate-300 transition-colors">
              <div className="text-center mb-4 border-b border-slate-100 pb-4">
                <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">Supporting</p>
                <h4 className="text-2xl font-black text-slate-700">SILVER</h4>
                <p className="text-lg font-black text-slate-900 mt-2">Rp 35 Juta</p>
              </div>
              <ul className="space-y-4 text-[10px] text-slate-600 flex-1 overflow-y-auto pr-1">
                <li className="flex gap-2 items-start"><Zap className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5"/> <span><strong>Brand Awareness:</strong> Pencantuman logo (Tier 3) pada pamflet cetak & media promosi digital.</span></li>
                <li className="flex gap-2 items-start"><Zap className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5"/> <span><strong>Stage Shoutout:</strong> <em>Adlibs</em> (penyebutan nama brand) oleh MC di sesi pembukaan & penutupan.</span></li>
                <li className="flex gap-2 items-start"><Zap className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5"/> <span><strong>Direct Sampling:</strong> Izin resmi mengerahkan 2 staf *usher* untuk *flyering* di pintu masuk.</span></li>
              </ul>
            </div>

            {/* PLATINUM */}
            <div className="w-[40%] bg-emerald-950 rounded-3xl p-6 shadow-2xl relative h-[95%] flex flex-col transform -translate-y-4 border border-emerald-800 group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">PALING EKSKLUSIF</div>
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-transparent rounded-3xl z-0 pointer-events-none"></div>
              <div className="text-center mb-5 border-b border-emerald-800/50 pb-5 relative z-10 mt-2">
                <p className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-1 drop-shadow-md">Title Sponsor (1 Slot)</p>
                <h4 className="text-3xl font-black text-white drop-shadow-lg">PLATINUM</h4>
                <p className="text-2xl font-black text-emerald-300 mt-2">Rp 300 Juta</p>
              </div>
              <ul className="space-y-4 text-[11px] text-emerald-100/90 flex-1 relative z-10">
                <li className="flex gap-3 items-start"><Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-sm fill-amber-400/20"/> <span><strong>Naming Rights:</strong> Dominasi mutlak identitas acara (Misal: <em>"Sukabumi Showdown presented by [Brand]"</em>).</span></li>
                <li className="flex gap-3 items-start"><Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-sm fill-amber-400/20"/> <span><strong>Media Dominance:</strong> Penayangan TVC komersial 60 detik selama jeda live-stream. Logo mendominasi videotron & panggung.</span></li>
                <li className="flex gap-3 items-start"><Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-sm fill-amber-400/20"/> <span><strong>Venue Monopoly:</strong> Hak eksklusif mendirikan <em>booth</em> utama 5x5m di VVIP Area tanpa kehadiran <em>brand</em> kompetitor.</span></li>
                <li className="flex gap-3 items-start"><Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-sm fill-amber-400/20"/> <span><strong>Ceremonial Prestige:</strong> Panggung kehormatan khusus bagi Direksi untuk menyerahkan trofi Juara 1 secara simbolis.</span></li>
              </ul>
            </div>

            {/* GOLD */}
            <div className="w-[30%] bg-gradient-to-b from-amber-50 to-white border border-amber-200 rounded-3xl p-5 shadow-md relative h-[85%] flex flex-col">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/20 rounded-bl-full pointer-events-none"></div>
              <div className="text-center mb-4 border-b border-amber-200 pb-4 relative z-10">
                <p className="text-xs font-bold text-amber-600 tracking-widest uppercase mb-1">Official Partner</p>
                <h4 className="text-2xl font-black text-slate-800">GOLD</h4>
                <p className="text-xl font-black text-amber-700 mt-2">Rp 100 Juta</p>
              </div>
              <ul className="space-y-4 text-[10px] text-slate-700 flex-1 overflow-y-auto pr-1 relative z-10">
                <li className="flex gap-2 items-start"><Zap className="w-3 h-3 text-amber-500 shrink-0 mt-0.5 fill-amber-500/20"/> <span><strong>Visual Presence:</strong> Logo proporsional terpasang pada seluruh media cetak & baliho (Tier 2).</span></li>
                <li className="flex gap-2 items-start"><Zap className="w-3 h-3 text-amber-500 shrink-0 mt-0.5 fill-amber-500/20"/> <span><strong>Digital Integration:</strong> Penyisipan logo <em>overlay</em> live streaming & 3x <em>Adlibs</em> oleh Caster.</span></li>
                <li className="flex gap-2 items-start"><Zap className="w-3 h-3 text-amber-500 shrink-0 mt-0.5 fill-amber-500/20"/> <span><strong>Activation Space:</strong> Fasilitas gratis area <em>booth</em> komersial 3x3m di zona penonton strategis.</span></li>
                <li className="flex gap-2 items-start"><Zap className="w-3 h-3 text-amber-500 shrink-0 mt-0.5 fill-amber-500/20"/> <span><strong>Merchandising:</strong> Akses menaruh produk/brosur fisik ke dalam 1.000 <em>goodie bag</em> VIP.</span></li>
              </ul>
            </div>

          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center text-[10px] text-slate-500 flex items-center justify-center gap-2 mt-6">
             <Info className="w-4 h-4 text-emerald-600" /> Paket di atas bersifat fleksibel (<em>Negotiable & Customized</em>) dan dapat disesuaikan mutlak dengan alokasi kampanye <em>marketing</em> Anda.
          </div>
        </div>
      </PrintPage>

      {/* 27. Key Performance Indicators (KPI) */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 27" title="Key Performance Indicators (KPI)" />
        <div className="flex-1">
          <FormalTitle title="Key Performance Indicators (KPI)" icon={BarChart} />
          <p className="text-sm text-slate-700 text-justify mb-4 leading-relaxed">
            Menjalin mitra bukanlah bentuk donasi tanpa arah, melainkan investasi penjenamaan merek (*Branding Investment*). Agar kemitraan berjalan akuntabel, pihak kami menetapkan garansi target ketercapaian angka-angka rasional sebagai basis pengukur tingkat Pengembalian Investasi (Return on Investment) sponsor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center shadow-sm">
              <h4 className="text-3xl font-black text-emerald-700 mb-1">1.500+ Orang</h4>
              <p className="text-sm font-bold text-slate-800">Kunjungan Fisik (Foot Traffic)</p>
              <p className="text-xs text-slate-600 mt-2">Diverifikasi manual lewat penjualan total tiket sobek selama 3 hari pelaksanaan event acara fisik. Pasar yang siap diedukasi untuk melihat spanduk booth perusahaan.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center shadow-sm">
              <h4 className="text-3xl font-black text-amber-600 mb-1">15.000+ Views</h4>
              <p className="text-sm font-bold text-slate-800">Tangkapan Penyiaran Daring</p>
              <p className="text-xs text-slate-600 mt-2">Akumulasi *Viewers* yang mengakses tayangan YouTube selama rangkaian kejuaraan, dengan rata-rata puncak 1.000 penonton bersamaan (Concurrent View) pada sesi Final.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
              <h4 className="text-3xl font-black text-slate-700 mb-1">80.000+ Reach</h4>
              <p className="text-sm font-bold text-slate-800">Jejak Metrik Sosial Media</p>
              <p className="text-xs text-slate-600 mt-2">Target impresi (*Impressions*) digital algoritma sebulan sebelum pertandingan lewat penyebaran poster elektronik, Instagram Reels, dan TikTok FYP regional Sukabumi.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center shadow-sm">
              <h4 className="text-3xl font-black text-green-700 mb-1">64 Tim Amatir</h4>
              <p className="text-sm font-bold text-slate-800">Konversi Peserta Inti</p>
              <p className="text-xs text-slate-600 mt-2">Target kuota keterisian minimal 320 pemain remaja kompetitif yang rela berpanas-panasan menjadi penggerak *Hype* (mulut ke mulut) kepada lingkungan teman sebayanya.</p>
            </div>
          </div>
        </div>
      </PrintPage>

      {/* 28. Struktur Kepanitiaan */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 28" title="Struktur Kepanitiaan" />
        <div className="flex-1">
          <FormalTitle title="Bagan Struktur Kepanitiaan Inti" icon={Users} />
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mt-4 text-sm text-slate-700">
            <p className="mb-4 leading-relaxed">Pelaksanaan program sekompleks ini menuntut pendelegasian tugas yang spesifik. Acara ini ditenagai oleh 30 pemuda Sukabumi yang berdedikasi dan dikelompokkan ke dalam divisi hierarki terstruktur.</p>
            <ul className="space-y-4">
              <li className="flex flex-col border-b border-emerald-100 pb-2">
                <span className="font-bold text-emerald-800">Pelindung & Penasihat Teknis Organisasi</span>
                <span className="text-slate-600">Perwakilan Cabang Pengurus Besar Esports Indonesia (PB ESI) Kota Sukabumi.</span>
              </li>
              <li className="flex flex-col border-b border-emerald-100 pb-2">
                <span className="font-bold text-emerald-800">Ketua Pelaksana Eksekutif (Project Manager)</span>
                <span className="text-slate-600">Sdr. Drefan Aditya, dibantu oleh Sekretariat Jenderal Administrasi dan Bendahara.</span>
              </li>
              <li className="flex flex-col border-b border-emerald-100 pb-2">
                <span className="font-bold text-emerald-800">Divisi Teknis & Pertandingan Cabor E-Sports</span>
                <span className="text-slate-600">Berjumlah 8 Personil Tenaga Administratif game (Admin) serta Wasit panggung yang memahami mekanisme internal server.</span>
              </li>
              <li className="flex flex-col border-b border-emerald-100 pb-2">
                <span className="font-bold text-emerald-800">Divisi Manajemen Produksi, Acara, & Siaran Layar</span>
                <span className="text-slate-600">Berjumlah 12 Praktisi Ahli tata kelola panggung (Stage Manager), Juru Kamera (Cameraman), Editor Video Cepat, serta Sutradara Broadcaster (Showcaller).</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-emerald-800">Divisi Keamanan Komunal & Dukungan Medis Pertolongan Pertama</span>
                <span className="text-slate-600">Menggandeng pihak berwajib kepolisian lokal, perawat medis siaga, serta manajemen ketertiban kerumunan (*Crowd Control*).</span>
              </li>
            </ul>
          </div>
        </div>
      </PrintPage>

      {/* 29. Dampak Ekonomi & Pemberdayaan */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 29" title="Dampak Ekonomi & Pemberdayaan" />
        <div className="flex-1">
          <FormalTitle title="Dampak Multiplier Ekonomi" icon={TrendingUp} />
          <div className="prose prose-slate max-w-none text-sm text-slate-700 text-justify leading-relaxed">
            <p>
              Kami meyakini bahwa olahraga E-Sports tidak berdiri sendiri; ia layaknya lokomotif pendorong gerbong industri kreatif lainnya. Menyelenggarakan sebuah festival pameran akbar (Ekshibisi E-Sports) selama akhir pekan akan memicu perputaran roda finansial makro mikro bagi entitas masyarakat Kota Sukabumi (*Multiplier Effect*).
            </p>
            <ul>
              <li><strong>Pemberdayaan Pelaku Usaha UMKM Kuliner:</strong> Hadirnya gelombang pengunjung dan panitia memicu lonjakan tingkat konsumsi makanan instan serta kopi olahan. Tersedianya kawasan *bazaar Food & Beverage* sengaja dibuat agar uang yang dikeluarkan penonton terus mengalir kepada pedagang kecil lokal, bukan perusahaan besar.</li>
              <li><strong>Sektor Persewaan Infrastruktur & Komputerisasi Kreatif:</strong> Penyerapan jasa dari sektor pengusaha persewaan properti panggung (vendor lighting, sistem suara konser, perancah genset) hingga penyedia infrastruktur *Router Jaringan Fiber Optic* tingkat tinggi turut bergeliat kembali pasca masa jeda liburan.</li>
              <li><strong>Pekerja Seni Sablon Kaos dan Desain Merchandise:</strong> Seluruh panitia dan perwakilan tim membutuhkan seragam khusus cetakan bordir dan desain seragam olahraga (*Jersey Gaming*). Belum terhitung order pembuatan hadiah-hadiah *merchandise* kunci (*lanyard*, stiker promosi, cetak baliho reklame), yang mana semuanya menggunakan jasa percetakan digital asli Sukabumi.</li>
            </ul>
          </div>
        </div>
      </PrintPage>

      {/* 30. Mitigasi Risiko & Penutup */}
      <PrintPage>
        <PageHeader chapter="HALAMAN 30" title="Mitigasi Risiko & Penutup" />
        <div className="flex-1">
          <FormalTitle title="Mitigasi Insiden & Kesimpulan Akhir" icon={ShieldCheck} />
          
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm mb-4">
            <h4 className="text-sm font-bold text-slate-800 mb-2">Perencanaan Kelangsungan Acara (Mitigasi Bencana Teknis)</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">Sebuah kegiatan yang menyedot listrik dan massa rawan terhambat teknis. Kami siap menghadapinya dengan perisai preventif:</p>
            <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
              <li>Mencegah listrik anjlok, kami menempatkan mesin Generator Set di area lahan parkir yang dilengkapi sistem peralihan sirkuit cerdas. Jika aliran PLN putus, Genset menutupi daya dalam interval kedip detik.</li>
              <li>Mencegah internet pemain tiba-tiba melambat (*ping delay* merah), disediakan 2 kabel instalasi penyedia pita lebar terpisah berkapasitas besar. Satu bertindak sebagai tumpuan utama, satunya siaga di latar belakang (*Redundancy Backup Internet*).</li>
            </ul>
          </div>

          <p className="text-sm text-slate-700 text-justify leading-relaxed mb-6 font-medium italic border-l-4 border-amber-500 pl-3">
            "Keberanian mencetak sejarah bukan dilakukan seorang diri. Suksesnya pembangunan fondasi mentalitas kompetitif bagi pemuda Sukabumi via festival E-Sports ini membutuhkan sinergi kapital dan kebijaksanaan. Proposal dokumen acuan strategis ini kami sampaikan sebagai bahan komprehensif pertimbangan penanaman anggaran sponsor yang mulia dari pihak pimpinan Manajemen. Bersama, mari kita mewujudkan visi pemuda dari ranah hiburan ke arah industri gemilang masa depan."
          </p>

          <div className="bg-slate-900 rounded-2xl p-6 text-white border-b-4 border-amber-500 shadow-lg flex gap-6 items-center">
            <Phone className="w-10 h-10 text-emerald-500 shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-amber-400 mb-2 uppercase tracking-wider">Pusat Konfirmasi & Kemitraan (Narahubung)</h3>
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
                <div>
                  <p>Saluran WhatsApp (Negosiasi Langsung):</p>
                  <p className="font-bold text-sm text-white mt-0.5">0812-3456-7890 (Drefan / Project Manager)</p>
                </div>
                <div>
                  <p>Surat Menyurat Resmi Perusahaan (Email):</p>
                  <p className="font-bold text-sm text-white mt-0.5">partnership@sukabumi-esports.id</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PrintPage>
      
      {/* 30. Lampiran RAB (Part 1) */}
      <PrintPage>
        <PageHeader chapter="LAMPIRAN 1" title="Rencana Anggaran Biaya (Bagian 1)" />
        <div className="flex-1">
          <FormalTitle title="RAB Bagian 1: Prize Pool & Perizinan" icon={Coins} />
          <p className="text-sm text-slate-700 text-justify mb-4 leading-relaxed">
            Kalkulasi rincian estimasi biaya acara "Clash of Champions: Sukabumi Showdown" dibagi menjadi empat bagian (Lampiran 1-4). Bagian pertama berfokus pada penghargaan atlet dan administrasi legalitas tempat:
          </p>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-[11px] text-slate-700 w-full">
            <table className="w-full text-left">
              <thead className="bg-emerald-50 border-b border-emerald-200">
                <tr>
                  <th className="py-2 px-3 font-bold text-emerald-800 w-8 text-center">No</th>
                  <th className="py-2 px-3 font-bold text-emerald-800">Uraian Kebutuhan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-16">Vol</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-20">Satuan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-24">Harga (Rp)</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-28">Jumlah (Rp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Kategori 1 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">A. Prize Pool & Penghargaan (Rp 65.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Uang Pembinaan Juara 1</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Tim</td><td className="py-1.5 px-3 text-right">30.000.000</td><td className="py-1.5 px-3 text-right">30.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">Uang Pembinaan Juara 2</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Tim</td><td className="py-1.5 px-3 text-right">15.000.000</td><td className="py-1.5 px-3 text-right">15.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Uang Pembinaan Juara 3</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Tim</td><td className="py-1.5 px-3 text-right">7.500.000</td><td className="py-1.5 px-3 text-right">7.500.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Uang Pembinaan Juara Harapan</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Tim</td><td className="py-1.5 px-3 text-right">4.000.000</td><td className="py-1.5 px-3 text-right">4.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Reward Pemain Terbaik (Final MVP)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Orang</td><td className="py-1.5 px-3 text-right">2.500.000</td><td className="py-1.5 px-3 text-right">2.500.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Reward Gelar Terminator</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Orang</td><td className="py-1.5 px-3 text-right">1.500.000</td><td className="py-1.5 px-3 text-right">1.500.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">7</td><td className="py-1.5 px-3">Trofi Utama Eksklusif Lapis Emas & Plakat</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">3.000.000</td><td className="py-1.5 px-3 text-right">3.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">8</td><td className="py-1.5 px-3">Medali Custom Premium Tim Juara</td><td className="py-1.5 px-3 text-center">15</td><td className="py-1.5 px-3 text-center">Pcs</td><td className="py-1.5 px-3 text-right">100.000</td><td className="py-1.5 px-3 text-right">1.500.000</td></tr>
                
                {/* Kategori 2 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">B. Sewa Venue & Perizinan (Rp 58.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Sewa Gedung Skala Besar (Indoor)</td><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3 text-center">Hari</td><td className="py-1.5 px-3 text-right">13.333.333</td><td className="py-1.5 px-3 text-right">40.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">Perizinan Polresta (Keramaian & Pengamanan)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">5.000.000</td><td className="py-1.5 px-3 text-right">5.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Perizinan Satgas Tingkat Daerah & Rekomendasi</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">3.000.000</td><td className="py-1.5 px-3 text-right">3.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Pajak Hiburan & Tontonan (Bapenda Daerah)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">5.000.000</td><td className="py-1.5 px-3 text-right">5.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Pajak Reklame Insidentil (Baliho & Spanduk)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">3.000.000</td><td className="py-1.5 px-3 text-right">3.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Retribusi Kebersihan & Pengangkutan Sampah</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">2.000.000</td><td className="py-1.5 px-3 text-right">2.000.000</td></tr>
              </tbody>
              <tfoot className="bg-slate-100 font-bold text-[11px]">
                <tr>
                  <td colSpan={5} className="py-2 px-3 text-right text-slate-600">Subtotal Bagian 1 (A + B)</td>
                  <td className="py-2 px-3 text-right border-l border-slate-200">Rp 123.000.000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </PrintPage>

      {/* 31. Lampiran RAB (Part 2) */}
      <PrintPage>
        <PageHeader chapter="LAMPIRAN 2" title="Rencana Anggaran Biaya (Bagian 2)" />
        <div className="flex-1 pt-4">
          <FormalTitle title="RAB Bagian 2: Infrastruktur, Kelistrikan & IT" icon={MonitorPlay} />
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-[11px] text-slate-700 w-full mb-4 mt-4">
            <table className="w-full text-left">
              <thead className="bg-emerald-50 border-b border-emerald-200">
                <tr>
                  <th className="py-2 px-3 font-bold text-emerald-800 w-8 text-center">No</th>
                  <th className="py-2 px-3 font-bold text-emerald-800">Uraian Kebutuhan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-16">Vol</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-20">Satuan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-24">Harga (Rp)</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-28">Jumlah (Rp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Kategori 3 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">C. Utilitas & Kelistrikan (Rp 52.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Sewa Genset 150 KVA Khusus Event</td><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3 text-center">Hari</td><td className="py-1.5 px-3 text-right">4.000.000</td><td className="py-1.5 px-3 text-right">12.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">BBM Genset Solar Industri (Estimasi)</td><td className="py-1.5 px-3 text-center">1000</td><td className="py-1.5 px-3 text-center">Liter</td><td className="py-1.5 px-3 text-right">12.000</td><td className="py-1.5 px-3 text-right">12.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Operator Genset & Teknisi Standby</td><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3 text-center">Sif</td><td className="py-1.5 px-3 text-right">500.000</td><td className="py-1.5 px-3 text-right">3.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Panel Distribusi Kelistrikan & Tarik Kabel 3 Phase</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">8.000.000</td><td className="py-1.5 px-3 text-right">8.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Sewa AC Standing Portable 5 PK</td><td className="py-1.5 px-3 text-center">30</td><td className="py-1.5 px-3 text-center">Unit/Hr</td><td className="py-1.5 px-3 text-right">400.000</td><td className="py-1.5 px-3 text-right">12.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Sewa Misty Fan / Kipas Embun Blower</td><td className="py-1.5 px-3 text-center">30</td><td className="py-1.5 px-3 text-center">Unit/Hr</td><td className="py-1.5 px-3 text-right">150.000</td><td className="py-1.5 px-3 text-right">4.500.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">7</td><td className="py-1.5 px-3">Instalasi Kelistrikan Tenant/Booth Sponsor</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">500.000</td><td className="py-1.5 px-3 text-right">500.000</td></tr>

                {/* Kategori 4 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">D. IT, Jaringan & Keamanan Venue (Rp 55.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Jaringan Internet Dedicated Fiber Optic (100Mbps)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">10.000.000</td><td className="py-1.5 px-3 text-right">10.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">Backup Internet (Failover Router 5G)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">3.000.000</td><td className="py-1.5 px-3 text-right">3.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Penarikan Kabel LAN CAT6 (Area Tanding & Stream)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">4.000.000</td><td className="py-1.5 px-3 text-right">4.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Sewa Barikade Keamanan Baja (Crowd Control 50m)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">10.000.000</td><td className="py-1.5 px-3 text-right">10.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Sewa Tenda Sarnafil 3x3 (Registrasi & Medis)</td><td className="py-1.5 px-3 text-center">12</td><td className="py-1.5 px-3 text-center">Unit/Hr</td><td className="py-1.5 px-3 text-right">500.000</td><td className="py-1.5 px-3 text-right">6.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Kursi Futura VIP (Cover & Pita)</td><td className="py-1.5 px-3 text-center">150</td><td className="py-1.5 px-3 text-center">Pcs/Hr</td><td className="py-1.5 px-3 text-right">20.000</td><td className="py-1.5 px-3 text-right">3.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">7</td><td className="py-1.5 px-3">Karpet Buana Area VIP & Tanding (100 Meter)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">4.000.000</td><td className="py-1.5 px-3 text-right">4.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">8</td><td className="py-1.5 px-3">Booth Tanding Eksklusif Kedap Suara (Soundproof)</td><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3 text-center">Unit</td><td className="py-1.5 px-3 text-right">7.500.000</td><td className="py-1.5 px-3 text-right">15.000.000</td></tr>
              </tbody>
              <tfoot className="bg-slate-100 font-bold text-[11px]">
                <tr>
                  <td colSpan={5} className="py-2 px-3 text-right text-slate-600">Subtotal Bagian 2 (C + D)</td>
                  <td className="py-2 px-3 text-right border-l border-slate-200">Rp 107.000.000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </PrintPage>

      {/* 32. Lampiran RAB (Part 3) */}
      <PrintPage>
        <PageHeader chapter="LAMPIRAN 3" title="Rencana Anggaran Biaya (Bagian 3)" />
        <div className="flex-1 pt-4">
          <FormalTitle title="RAB Bagian 3: Produksi Panggung & Penyiaran" icon={Users} />
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-[11px] text-slate-700 w-full mb-4 mt-4">
            <table className="w-full text-left">
              <thead className="bg-emerald-50 border-b border-emerald-200">
                <tr>
                  <th className="py-2 px-3 font-bold text-emerald-800 w-8 text-center">No</th>
                  <th className="py-2 px-3 font-bold text-emerald-800">Uraian Kebutuhan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-16">Vol</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-20">Satuan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-24">Harga (Rp)</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-28">Jumlah (Rp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Kategori 5 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">E. Produksi Panggung & Multimedia (Rp 100.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Panggung Rigging Utama (16x10 Meter) & Atap</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">25.000.000</td><td className="py-1.5 px-3 text-right">25.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">Videotron LED Screen Pitch 3.9 (Panggung 6x4m)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">24.000.000</td><td className="py-1.5 px-3 text-right">24.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Videotron LED Screen Sayap (Kanan Kiri @3x2m)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">12.000.000</td><td className="py-1.5 px-3 text-right">12.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Sound System Line Array 20.000 Watt (FOH)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">18.000.000</td><td className="py-1.5 px-3 text-right">18.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Sound System Monitor Panggung & Area Tanding</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">6.000.000</td><td className="py-1.5 px-3 text-right">6.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Lighting Moving Head Beam 230W (12 Unit)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">6.000.000</td><td className="py-1.5 px-3 text-right">6.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">7</td><td className="py-1.5 px-3">Lighting Par LED & Fresnel (Wajah Pemain)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">4.000.000</td><td className="py-1.5 px-3 text-right">4.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">8</td><td className="py-1.5 px-3">Spesial FX (Pyrotechnics, Confetti, Smoke Machine)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">5.000.000</td><td className="py-1.5 px-3 text-right">5.000.000</td></tr>

                {/* Kategori 6 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">F. Penyiaran (Broadcasting) & Observasi (Rp 80.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Jasa Tim Penyiaran & Sutradara (Show Director)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">15.000.000</td><td className="py-1.5 px-3 text-right">15.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">Sewa Kamera Broadcast Mirrorless 4K (4 Unit)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">12.000.000</td><td className="py-1.5 px-3 text-right">12.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Sewa Video Switcher (vMix Pro PC Setup)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">10.000.000</td><td className="py-1.5 px-3 text-right">10.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Jasa Operator In-Game (Observer Mobile Legends)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">10.000.000</td><td className="py-1.5 px-3 text-right">10.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Sewa HP Device Tanding Flagship (10 Unit)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">15.000.000</td><td className="py-1.5 px-3 text-right">15.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Sewa Headset Noise Cancelling & Comm (12 Unit)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">6.000.000</td><td className="py-1.5 px-3 text-right">6.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">7</td><td className="py-1.5 px-3">Kabel SDI/HDMI Optic & Audio Capture Card</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">7.000.000</td><td className="py-1.5 px-3 text-right">7.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">8</td><td className="py-1.5 px-3">Jasa Tim Desain Grafis Stream (Overlay, Bumper)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">5.000.000</td><td className="py-1.5 px-3 text-right">5.000.000</td></tr>
              </tbody>
              <tfoot className="bg-slate-100 font-bold text-[11px]">
                <tr>
                  <td colSpan={5} className="py-2 px-3 text-right text-slate-600">Subtotal Bagian 3 (E + F)</td>
                  <td className="py-2 px-3 text-right border-l border-slate-200">Rp 180.000.000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </PrintPage>

      {/* 33. Lampiran RAB (Part 4) */}
      <PrintPage>
        <PageHeader chapter="LAMPIRAN 4" title="Rencana Anggaran Biaya (Bagian 4)" />
        <div className="flex-1 pt-4">
          <FormalTitle title="RAB Bagian 4: Pemasaran, Talenta & Operasional" icon={Users} />
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-[11px] text-slate-700 w-full mb-4 mt-4">
            <table className="w-full text-left">
              <thead className="bg-emerald-50 border-b border-emerald-200">
                <tr>
                  <th className="py-2 px-3 font-bold text-emerald-800 w-8 text-center">No</th>
                  <th className="py-2 px-3 font-bold text-emerald-800">Uraian Kebutuhan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-16">Vol</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-center w-20">Satuan</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-24">Harga (Rp)</th>
                  <th className="py-2 px-3 font-bold text-emerald-800 text-right w-28">Jumlah (Rp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Kategori 7 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">G. Pengisi Acara & Dokumentasi (Rp 75.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Honor Bintang Tamu Utama (Artis Nasional)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">30.000.000</td><td className="py-1.5 px-3 text-right">30.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">Honor Profesional Caster Tier A (2 Orang x 3 Hari)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">20.000.000</td><td className="py-1.5 px-3 text-right">20.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Honor MC Profesional Acara (2 Orang x 3 Hari)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">7.000.000</td><td className="py-1.5 px-3 text-right">7.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Jasa Tim Fotografi Profesional</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">5.000.000</td><td className="py-1.5 px-3 text-right">5.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Jasa Tim Videografi & Cinematic Aftermovie</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">8.000.000</td><td className="py-1.5 px-3 text-right">8.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Cetak Baliho, Spanduk & Umbul-umbul</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">5.000.000</td><td className="py-1.5 px-3 text-right">5.000.000</td></tr>

                {/* Kategori 8 */}
                <tr className="bg-slate-50 font-bold"><td colSpan={6} className="py-1.5 px-3 text-amber-700">H. Operasional, Medis & Keamanan (Rp 65.000.000)</td></tr>
                <tr><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3">Konsumsi Panitia & Keamanan (100 org x 3 Hr x 2)</td><td className="py-1.5 px-3 text-center">600</td><td className="py-1.5 px-3 text-center">Box</td><td className="py-1.5 px-3 text-right">35.000</td><td className="py-1.5 px-3 text-right">21.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">2</td><td className="py-1.5 px-3">Konsumsi VIP, Guest Star & Caster (3 Hari)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">8.000.000</td><td className="py-1.5 px-3 text-right">8.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">3</td><td className="py-1.5 px-3">Akomodasi Hotel Bintang Tamu (8 Kmr x 3 Hr)</td><td className="py-1.5 px-3 text-center">24</td><td className="py-1.5 px-3 text-center">Kamar/Hr</td><td className="py-1.5 px-3 text-right">600.000</td><td className="py-1.5 px-3 text-right">14.400.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">4</td><td className="py-1.5 px-3">Tiket Pesawat / Kereta PP Bintang Tamu & Caster</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">8.000.000</td><td className="py-1.5 px-3 text-right">8.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">5</td><td className="py-1.5 px-3">Honor Keamanan BKO Polisi / TNI (10 Org x 3 Hr)</td><td className="py-1.5 px-3 text-center">30</td><td className="py-1.5 px-3 text-center">Org/Hr</td><td className="py-1.5 px-3 text-right">200.000</td><td className="py-1.5 px-3 text-right">6.000.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">6</td><td className="py-1.5 px-3">Tim Medis P3K Standby + Ambulans (3 Hari)</td><td className="py-1.5 px-3 text-center">1</td><td className="py-1.5 px-3 text-center">Paket</td><td className="py-1.5 px-3 text-right">3.600.000</td><td className="py-1.5 px-3 text-right">3.600.000</td></tr>
                <tr><td className="py-1.5 px-3 text-center">7</td><td className="py-1.5 px-3">Seragam Kemeja/Jaket Panitia Inti</td><td className="py-1.5 px-3 text-center">40</td><td className="py-1.5 px-3 text-center">Pcs</td><td className="py-1.5 px-3 text-right">100.000</td><td className="py-1.5 px-3 text-right">4.000.000</td></tr>
              </tbody>
              <tfoot className="bg-slate-100 font-bold text-[11px]">
                <tr>
                  <td colSpan={5} className="py-2 px-3 text-right text-slate-600">Subtotal Bagian 4 (G + H)</td>
                  <td className="py-2 px-3 text-right border-l border-slate-200">Rp 140.000.000</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="bg-slate-900 border-2 border-amber-500 rounded-xl p-6 text-white flex justify-between items-center shadow-xl mt-6">
            <div>
              <p className="text-amber-400 font-bold text-sm tracking-wider uppercase mb-1">Rekapitulasi Anggaran Total</p>
              <p className="text-slate-300 text-xs">Total Bagian 1 (123 JT) + Bagian 2 (107 JT) + Bagian 3 (180 JT) + Bagian 4 (140 JT)</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-white">Rp 550.000.000</p>
              <p className="text-xs text-slate-400 mt-1 italic">Terbilang: Lima Ratus Lima Puluh Juta Rupiah</p>
            </div>
          </div>
          
          <p className="text-[10px] text-slate-500 mt-4 italic text-center">*Catatan: Angka di atas bersifat estimasi operasional maksimal (ceiling budget) dan dapat menyesuaikan dengan eskalasi kebutuhan lapangan atas persetujuan bersama manajemen dan auditor keuangan sponsor.</p>
        </div>
      </PrintPage>
    </div>
  );
}
