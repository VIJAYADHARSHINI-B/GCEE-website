import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, GraduationCap, Users, BookOpen, 
  Building2, FlaskConical, Award, Briefcase, Download, 
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, 
  Instagram, Globe, ExternalLink, ArrowRight, CheckCircle2,
  Calendar, Trophy, Library, Microscope, Home as HomeIcon,
  Newspaper, Star, Link as LinkIcon
} from 'lucide-react';

// --- Data ---

const liveNews = [
  "Delighted to announce that our college has been sanctioned a Pre-Incubator by StartupTN.",
  "Mechanical department has enhanced its facilities with the installation of a LABMAN 'Probe Sonicator'.",
  "M.E(CSE) Student V.KRISHNAMOORTHY placed in SIERRA SUPPORT CENTRE with 38.5 LPA.",
  "Students R. GOWTHAM and C. SAHANA PRIYA (ECE) placed in CADENCE with 20.49 LPA.",
  "Congratulations to students placed in TCS: V.Navamanibalu, L.Surendhar, M.Logesh, and Manoj.",
  "2000 Batch Silver Jubilee Meet upcoming at GCE Erode campus."
];

const newsRoomItems = [
  {
    title: "Pre-Incubation Centre Sanctioned",
    description: "Our college has been sanctioned a Pre-Incubator by StartupTN to foster innovation and entrepreneurship.",
    date: "March 2026",
    link: "https://gcee.ac.in",
    category: "Innovation",
    img: "http://srecspark.org/themes/images/about/preincubation.jpg"
  },
  {
    title: "New Research Facility in Mechanical Dept",
    description: "Installation of a LABMAN 'Probe Sonicator' procured through the CMRG project grant.",
    date: "Feb 2026",
    link: "https://gcee.ac.in",
    category: "Research",
    img: "https://www.gcee.ac.in/include/ajax/mech/lab/img1.jpg"
  },
  {
    title: "Record Placement: 38.5 LPA",
    description: "V.KRISHNAMOORTHY (M.E CSE) secured a placement at SIERRA SUPPORT CENTRE with a package of 38.5 Lakhs.",
    date: "Jan 2026",
    link: "https://gcee.ac.in",
    category: "Placement",
    img: "https://www.iimtindia.net/Blog/wp-content/uploads/2021/07/download-23.jpg"
  },
  {
    title: "Cadence Design Systems Placement",
    description: "R. GOWTHAM and C. SAHANA PRIYA from ECE placed with 20.49 LPA package.",
    date: "Jan 2026",
    link: "https://gcee.ac.in",
    category: "Placement",
    img: "https://www.gcee.ac.in/newsdesk/CADENS_Placed.jpg"
  }
];

const upcomingEventsData = [
  {
    title: "2000 Batch Silver Jubilee Meet",
    date: "Upcoming",
    description: "The 2000 batch alumni are gathering for their Silver Jubilee celebration at the campus.",
    img: "https://gcee.ac.in/Events/2000SilverJubilee.jpeg",
    link: "https://gcee.ac.in/Events/2000SilverJubilee.jpeg"
  },
  {
    title: "1998 Batch Silver Jubilee Meet",
    date: "July 22 & 23, 2023",
    description: "Alumni Silver Jubilee meet held successfully at Government College of Engineering (IRTT), Erode.",
    img: "https://gcee.ac.in/newsdesk/1998Batch_SJMeet.jpeg",
    link: "https://gcee.ac.in/newsdesk/1998Batch_SJMeet.jpeg"
  }
];

const campusActivitiesData = [
  {
    title: "Research & Consultancy",
    description: "Promoting research excellence and industrial consultancy through dedicated R&D cells.",
    link: "https://gcee.ac.in/r&dconsultancy.php",
    icon: Microscope
  },
  {
    title: "Industrial Collaboration",
    description: "Fostering strong ties with industries for internships, projects, and placements.",
    link: "https://gcee.ac.in/industrialcollaboration.php",
    icon: Briefcase
  },
  {
    title: "Student Clubs & NSS",
    description: "Active participation in NSS, YRC, and various technical and cultural clubs.",
    link: "https://gcee.ac.in/clubs&events.php",
    icon: Users
  }
];

const studentAchievementsData = [
  {
    title: "Technical Quiz Competition ACREX",
    award: "First Prize",
    date: "March 2012",
    description: "Students secured the top position in the prestigious ACREX technical quiz."
  },
  {
    title: "Javelin Throw - Zonal Level",
    award: "First Prize",
    date: "November 2015",
    description: "Exceptional performance in sports, securing first prize in Javelin throw."
  },
  {
    title: "High Salary Placement",
    award: "38.5 LPA Package",
    date: "2024",
    description: "M.E CSE student V.KRISHNAMOORTHY placed in SIERRA SUPPORT CENTRE."
  }
];

const departmentData: Record<string, any> = {
  'Automobile Engineering': {
    title: 'Department of Automobile Engineering',
    about: 'Automotive engineering is a branch of mechanical engineering that concerns the design, development and manufacture of cars, trucks, motorcycles and other motor vehicles. Automotive engineers also design and test the many subsystems or components that comprise a motorized vehicle. Very few universities offer a bachelor\'s degree in automotive engineering; many students earn a mechanical engineering degree with specialized automotive courses. GCE Erode emphasizes hands-on experience, modern labs, and industry internships.',
    labs: ['Automotive Engines Lab', 'Automotive Chassis Lab', 'Auto Scanning and Vehicle Testing Lab', 'Automotive Electrical and Electronics Lab', 'Two and Three Wheelers Lab'],
    faculty: {
      hod: 'Dr.R.Senthilraja M.E. Ph.D. ',
      staff: [
        { name: 'Dr. P. Ramesh', role: 'Professor' },
        { name: 'Mr. K. Venkatesh', role: 'Assistant Professor' },
        { name: 'Ms. M. Priya', role: 'Assistant Professor' },
        { name: 'Mr. R. Anand', role: 'Assistant Professor' }
      ]
    },
    facilities: ['Smart Classrooms', 'Department Library', 'Engine Testing Rig', 'Chassis Dynamometer', 'CAD/CAM Lab'],
    images: ['https://www.gcee.ac.in/include/ajax/auto/lab/img1.jpg', 'https://www.gcee.ac.in/include/ajax/auto/lab/img2.jpg', 'https://www.gcee.ac.in/include/ajax/auto/lab/img3.jpg','https://www.gcee.ac.in/include/ajax/auto/lab/img4.jpg','https://www.gcee.ac.in/include/ajax/auto/lab/img5.jpg','https://www.gcee.ac.in/include/ajax/auto/lab/img6.jpg'],
    details: `Automotive engineering is a branch of mechanical engineering that concerns the design, development and manufacture of cars, trucks, motorcycles and other motor vehicles. Automotive engineers also design and test the many subsystems or components that comprise a motorized vehicle. Very few universities offer a bachelor's degree in automotive engineering. Consequently, many prospective automotive engineers earn a bachelor's degree in mechanical engineering from a university that also offers specialized courses in automotive engineering. The department library constitutes more than 1000 volumes of books with varied titles catering to the needs of faculty and students; volumes are updated yearly. Individual libraries help with theoretical understanding. 

Head of Department: Dr. R. Senthilraja (HOD i/c, Additional Charge), M.E., Ph.D; 12 years experience; specialization in Thermal Engineering; contact +91-94432 78504, senthilraja@irttech.ac.in`},

  'Civil Engineering': {
    title: 'Department of Civil Engineering',
    about: 'Civil Engineering at GCE Erode equips students with expertise in structural, environmental, and transportation engineering while emphasizing hands‑on site experience and modern analysis tools. The curriculum includes practical exposure through industry visits and project sites, and aims to produce professionals capable of addressing complex infrastructure challenges.',
    labs: ['Structural Engineering Lab', 'Environmental Engineering Lab', 'Soil Mechanics Lab', 'Surveying Lab', 'Concrete and Highway Lab'],
    faculty: {
      hod: 'Dr. P. Saravanakumar M.E. Ph.D. ',
      staff: [
        { name: 'Dr.G.M.Gowthama Kumar M.E. Ph.D. ', role: 'Associate Professor' },
        { name: 'Dr.D.Sathies Kumar M.E. Ph.D.', role: 'Assistant Professor' }
      ]
    },
    facilities: ['Advanced Surveying Equipment', 'Material Testing Center', 'Geotechnical Lab', 'Departmental Library'],
    images: ['https://gcee.ac.in/include/ajax/civil/lab/img1.jpg','https://gcee.ac.in/include/ajax/civil/lab/img2.jpg','https://gcee.ac.in/include/ajax/civil/lab/img3.jpg','https://gcee.ac.in/include/ajax/civil/lab/img4.jpg','https://gcee.ac.in/include/ajax/civil/lab/img5.jpg','https://gcee.ac.in/include/ajax/civil/lab/img6.jpg'],
    details: `The Civil Department emphasizes foundation work quality control, application of knowledge across structural, geotechnical, water resources, environmental, transportation, and surveying fields. Programme outcomes include design capability, research investigation, modern tool usage (CAD, STAAD), ethical responsibility, and teamwork. The department offers B.E., M.E. (Structural Engineering) and Ph.D. programmes with extensive laboratory facilities and updated curricula. 

Head of Department: Dr. P. Saravanakumar, M.E., Ph.D., 20 years experience, specialization in Structural Engineering (contact +91-94436 67806, grpsaravanan@gmail.com).`},

  'Computer Science and Engineering': {
    title: 'Department of Computer Science and Engineering',
    about: 'Information Technology has thrown open limitless possibilities. The department trains students with 24x7 computing access, digital library, internet resources and frequent visits to leading IT organisations. Graduates are prepared to meet industry needs through a curriculum that keeps pace with evolving technologies.',
    labs: ['Programming Lab', 'Database Management Systems Lab', 'Networking and Security Lab', 'Cloud Computing Lab', 'AI and Machine Learning Lab'],
    faculty: {
      hod: 'Dr.A.Kavitha, M.E., Ph.D.',
      staff: [
        { name: 'Mr.R.Sivasubramanian M.S.', role: 'Associate Professor' },
        { name: 'Mr.G.Venkatachalam M.E. Ph.D.', role: 'Associate Professor' },
        { name: 'Mrs.M.Annapoorani M.E. ', role: 'Assistant Professor'},
        { name: 'Dr.S.Palanisamy M.E., Ph.D.', role: 'Assistant Professor'   },
        { name: 'Dr.N.Mahesh', role: 'Assistant Professor' },
        { name: 'Dr.M.Marikannan M.E., Ph.D.', role: 'Assistant Professor', },
        { name: 'Dr.D.S.Thenmozhi M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.R.Kalaivani M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.N.Vasuki M.E., Ph.D.', role: 'Assistant Professor'},
        { name: 'Dr.S.Kalaivani M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Mrs.M.Vijayalakshmi M.E.', role: 'Assistant Professor'},
      ]
    },
    facilities: ['High-Performance Computing Cluster', 'Smart Classrooms', 'Department Library', '24/7 Internet Access', 'Innovation Hub'],
    images: ['https://www.gcee.ac.in/include/ajax/cse/lab/img2.jpg', 'https://www.gcee.ac.in/include/ajax/cse/lab/img3.jpg', 'https://www.gcee.ac.in/include/ajax/cse/lab/img6.jpg','https://www.gcee.ac.in/include/ajax/cse/lab/img4.jpg','https://www.gcee.ac.in/include/ajax/cse/lab/img5.jpg'],
    details: `Information Technology has thrown open limitless possibilities. The whole world is now just a click away. The department provides 24x7 access to computing, digital library, internet resources and information services. Students regularly visit leading IT organisations and keep themselves updated with the latest in the field. The department library has more than 1000 volumes, regularly updated; a digital library is also maintained. 

Head of Department: Dr. A. Kavitha, M.E., Ph.D., specialization in Semantic Web; contact 9442513055, kavitha@gcee.ac.in, kavitha.irtt@gmail.com`},

  'Electronics and Communication Engineering': {
    title: 'Department of Electronics and Communication Engineering',
    about: 'The ECE department trains students in electronics devices, communication systems, VLSI design and embedded systems, keeping pace with rapid industry advances. Students are encouraged to invent, innovate and stay updated on cutting-edge hardware and software, with ample lab access and industry interactions.',
    labs: ['Electronics Devices and Circuits Lab', 'Communication Systems Lab', 'VLSI Design Lab', 'Embedded Systems Lab', 'Digital Signal Processing Lab'],
    faculty: {
      hod: 'Mr.M. RAJA',
      staff: [
        { name: 'Dr.G.Gowrison M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Mrs.M.Bharathi M.Tech ', role: 'Assistant Professor' },
        { name: 'Mrs.S.K.Fairose Banu M.E.', role: 'Assistant Professor' },
        { name: 'Mrs.M.Madhavi  M.E.', role: 'Assistant Professor' },
        { name: 'Mr.P.Kaliram M.E.', role: 'Assistant Professor' },
        { name: 'Dr.P.K.Kowsalya  M.E., Ph.D.', role: 'Assistant Professor' },
      ]
    },
    facilities: ['Advanced VLSI Design Tools', 'Communication Test Benches', 'Robotics Lab', 'Department Library'],
    images: ['https://www.gcee.ac.in/include/ajax/ece/lab/img1.jpg', 'https://www.gcee.ac.in/include/ajax/ece/lab/img2.jpg', 'https://www.gcee.ac.in/include/ajax/ece/lab/img3.jpg','https://www.gcee.ac.in/include/ajax/ece/lab/img4.jpg','https://www.gcee.ac.in/include/ajax/ece/lab/img5.jpg'],
    details: `Communication Technology is driving our lives like never before. With IT improving system efficiencies, demand for quality electrical and communication engineers continues to soar. Students have 24x7 computing and digital library access, and they regularly visit IT organisations to stay current. Programme educational objectives include providing solutions to complex problems and building new products; outcomes emphasize fundamental application, innovation, and global awareness. 

Head of Department: Mr. M. Raja, M.E., specialization in Microwave Engineering; contact +91-9842765554, raja@irttech.ac.in`},

  'Electrical and Electronics Engineering': {
    title: 'Department of Electrical and Electronics Engineering',
    about: 'EEE students are trained in power systems, electrical machines, control systems and renewable energy, with an emphasis on staying current via IEEE membership, seminars and mini projects. Software skills include C, C++, Java, assembly language programming, microprocessors, microcontrollers and networking.',
    labs: ['Electrical Machines Lab', 'Power Electronics Lab', 'Control Systems Lab', 'Renewable Energy Lab', 'High Voltage Engineering Lab'],
    faculty: {
      hod: 'Dr. M. Mohammadha Hussaini M.E. Ph.D. ',
      staff: [
        { name: 'Dr.B.Babypriya M.E. Ph.D. ', role: 'Associate Professor' },
        { name: 'Dr.A.Vetrivel M.E. Ph.D. ', role: 'Associate Professor' },
        { name: 'Dr.S.Dhanapal M.E. Ph.D. ', role: 'Assistant Professor' },
        { name: 'Mrs.S.Gomathi M.E.', role: 'Assistant Professor' },
        { name: 'Dr.K.Tamilselvan M.E. Ph.D', role: 'Assistant Professor' },
        { name: 'Dr.A.Gowthaman M.E. Ph.D. ', role: 'Assistant Professor' },
        { name: 'Dr.P.Govindasamy M.E. Ph.D. ', role: 'Assistant Professor' }
      ]
    },
    facilities: ['Solar Power Research Center', 'Smart Grid Lab', 'Electrical Machine Workshop', 'Department Library'],
    images: ['https://gcee.ac.in/include/ajax/eee/lab/img1.jpg', 'https://gcee.ac.in/include/ajax/eee/lab/img2.jpg', 'https://gcee.ac.in/include/ajax/eee/lab/img3.jpg','https://gcee.ac.in/include/ajax/eee/lab/img4.jpg','https://gcee.ac.in/include/ajax/eee/lab/img5.jpg','https://gcee.ac.in/include/ajax/eee/lab/img6.jpg'],
    details: `In the e-world the role of electrical & electronics engineers has come into sharp focus. Advances in the field have redefined how we live and work. To cope with rapid changes, engineers constantly update their skills. The department organizes national level conferences, green club activities, gate forums, placement training and has research funds from MNRE, MOEF, DST and TEDA. 

Head of Department: Dr. M. Mohammadha Hussaini, M.E., Ph.D., specialization in Power Systems; contact +91-9443406070, hussaini1008@gmail.com`},

  'Information Technology': {
    title: 'Department of Information Technology',
    about: 'The IT department prepares students to apply technology to solve organisational and business problems. With well‑equipped software and hardware labs, WiFi, and industry-relevant curriculum, graduates are trained in areas such as AI, big data analytics, cloud computing and cyber security.',
    labs: ['Web Technology Lab', 'Mobile Application Development Lab', 'Data Analytics Lab', 'Software Engineering Lab', 'Open Source Lab'],
    faculty: {
      hod: 'Dr. I. Bhuvaneshwarri M.E. Ph.D.',
      staff: [
        { name: 'Mrs.K.G.Maheshwari M.E. ', role: 'Associate Professor' },
        { name: 'Dr.M.Poongothai M.E. Ph.D.', role: 'Assistant Professor' },
        { name: 'Mrs.M.Sathyavani M.E. ', role: 'Assistant Professor' },
        { name: 'Dr.S.Thilagavathi M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.S.Mohanasundaram M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.P.Thangavel M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.M.Sahyakala M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.M.N.Sudha M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Mr.B.V.Prakash  M.E., ', role: 'Assistant Professor' },
        { name: 'Dr.R.Anurekha M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.K.Murugan M.E., Ph.D.', role: 'Assistant Professor' },
        { name: 'Dr.T.Sumathi M.E., Ph.D.', role: 'Assistant Professor' },
      ]
    },
    facilities: ['Modern Computing Center', 'Digital Library Access', 'Project Incubation Cell', 'Smart Classrooms'],
    images: ['https://www.gcee.ac.in/include/ajax/it/lab/img4.jpg', 'https://www.gcee.ac.in/include/ajax/it/lab/img2.jpg', 'https://www.gcee.ac.in/include/ajax/it/lab/img3.jpg','https://www.gcee.ac.in/include/ajax/it/lab/img5.jpg'],
    details: `Information Technology is essential for ensuring efficiency and security of information systems. The department has four software labs with ~100 computers, a hardware lab with essential equipment, and campus WiFi. Programme Educational Objectives include training students to identify, analyse, design and implement secure IT solutions and to gain knowledge in AI, big data, cloud computing and network security. Programme Outcomes highlight building and administering databases, using infrastructure hardware/software, and working on cross-domain projects. 

Head of Department: Dr. I. Bhuvaneshwarri, M.E., Ph.D., specialization in Big Data Analytics and Network Security; contact +91-9442689006, pbw.irtt@gmail.com, ibw@gcee.ac.in`},

  'Mechanical Engineering': {
    title: 'Department of Mechanical Engineering',
    about: 'Globalization has driven the manufacturing sector toward innovative, automated production processes. Mechanical Engineering at GCE Erode trains students in cutting‑edge technologies with a balanced mix of theory and practice, including internships at TAFE, TVS, Hyundai and others. Facilities such as CAD/CAM/Mechatronics/IoT labs and the Innovative Product Development Centre support prototype development.',
    labs: ['Thermal Engineering Lab', 'Manufacturing Technology Lab', 'Dynamics of Machines Lab', 'Metrology and Measurement Lab', 'CAD/CAM Lab'],
    faculty: {
      hod: 'Dr. K. Balamurugan M.E. Ph.D. ',
      staff: [
        { name: 'Dr.R.Senthilraja M.E. Ph.D. ', role: 'Assistant Professor' },
        { name: 'Mr.N.S.Nandha Kumar M.E.', role: 'Assistant Professor' },
        { name: 'Dr.N.Vadivel M.E. Ph.D. ', role: 'Assistant Professor' },
        { name: 'Mrs.K.Uma M.E. ', role: 'Assistant Professor' },
        { name: 'Mr.P.Gowtham M.E. ', role: 'Assistant Professor' },
      ]
    },
    facilities: ['CNC Machining Center', 'Thermal Power Lab', 'Design Studio', 'Department Library'],
    images: ['https://www.gcee.ac.in/include/ajax/mech/lab/img1.jpg', 'https://www.gcee.ac.in/include/ajax/mech/lab/img2.jpg', 'https://www.gcee.ac.in/include/ajax/mech/lab/img3.jpg','https://www.gcee.ac.in/include/ajax/mech/lab/img4.jpg','https://www.gcee.ac.in/include/ajax/mech/lab/img5.jpg'],
    details: `Vision: To be a leading department fostering innovation, excellence and societal impact through quality education, applied research and industry collaboration.

Mission: Provide rigorous education, promote cutting-edge research, and support holistic student development. Produce world-class graduates ready for automotive, aerospace and defence sectors.

Programme Outcomes: Graduates will design, develop, build and test mechanical equipment, gain practical experience through projects and internships, and be industry ready. 

Head of Department: Dr. K. Balamurugan, M.E., Ph.D., specialization in Manufacturing Engineering; 23 years experience; contact +91-9150166322, drkbalamurugan@gcee.ac.in, hodmechgcee@gmail.com`},
};

// --- Components ---

const LiveNewsTicker = () => {
  return (
    <div className="bg-navy border-y border-white/10 py-2 overflow-hidden relative z-40 mt-[80px] md:mt-[100px]">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <div className="bg-gold text-navy text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-sm mr-4 flex-shrink-0 animate-pulse">
          Live News
        </div>
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap items-center"
          >
            {liveNews.map((news, i) => (
              <span key={i} className="text-white text-xs font-medium flex items-center gap-2">
                <Star className="w-3 h-3 text-gold fill-gold" /> {news}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {liveNews.map((news, i) => (
              <span key={`dup-${i}`} className="text-white text-xs font-medium flex items-center gap-2">
                <Star className="w-3 h-3 text-gold fill-gold" /> {news}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const NewsRoom = () => {
  return (
    <section id="newsroom" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-navy text-4xl md:text-5xl mb-4">From Our <span className="text-royal">News Room</span></h2>
            <p className="text-slate-500">Official updates, announcements, and success stories from the campus.</p>
          </div>
          <a 
            href="https://gcee.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-royal font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Visit Official News Desk <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsRoomItems.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 group flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                  <Calendar className="w-3 h-3" /> {item.date}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2 leading-snug">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-royal text-sm font-bold flex items-center gap-2 hover:text-navy transition-colors"
                  >
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-navy text-4xl md:text-5xl mb-4">Upcoming <span className="text-royal">Events</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Mark your calendars for these important campus gatherings and celebrations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {upcomingEventsData.map((event, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col md:flex-row border border-slate-100"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{event.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-navy text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-royal transition-all inline-flex items-center gap-2 w-fit"
                >
                  View Details <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CampusActivities = () => {
  return (
    <section id="campus-activities" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-navy text-4xl md:text-5xl mb-6">Campus <span className="text-royal">Activities</span></h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Life at GCE Erode goes beyond the classroom. Our students engage in diverse activities that foster research, industrial exposure, and social responsibility.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-navy font-bold">
                <CheckCircle2 className="text-gold w-5 h-5" /> Active Student Clubs
              </div>
              <div className="flex items-center gap-3 text-navy font-bold">
                <CheckCircle2 className="text-gold w-5 h-5" /> NSS & Social Service
              </div>
              <div className="flex items-center gap-3 text-navy font-bold">
                <CheckCircle2 className="text-gold w-5 h-5" /> Industrial Visits
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {campusActivitiesData.map((activity, idx) => (
              <motion.a 
                key={idx}
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-royal hover:border-royal transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <activity.icon className="text-royal w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-white">{activity.title}</h3>
                <p className="text-slate-500 text-sm group-hover:text-white/80">
                  {activity.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StudentAchievements = () => {
  return (
    <section id="student-achievements" className="section-padding bg-navy text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Students <span className="text-gold">Achievements</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Celebrating the excellence and competitive spirit of our students in academics, sports, and technical events.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studentAchievementsData.map((achievement, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 relative group hover:bg-white/10 transition-all"
            >
              <Trophy className="text-gold w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="bg-gold text-navy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4">
                {achievement.award}
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gold/80 text-xs font-bold mb-4 uppercase tracking-widest">{achievement.date}</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Events', href: '#upcoming-events' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPCEtLSBPdXRlciBjaXJjbGUgYm9yZGVyIC0tPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTYiIGZpbGw9IiMwQTI1NDAiIHN0cm9rZT0iI0Y0QjQwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgCiAgPCEtLSBJbm5lciB3aGl0ZSByaW5nIC0tPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODgiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjMiLz4KCiAgPCEtLSBHZWFyL2NvZyBzeW1ib2wgKGVuZ2luZWVyaW5nKSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAsNzgpIiBmaWxsPSIjRjRCNDAwIj4KICAgIDwhLS0gR2VhciB0ZWV0aCAtLT4KICAgIDxyZWN0IHg9Ii01IiB5PSItMzQiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMiIgcng9IjIiLz4KICAgIDxyZWN0IHg9Ii01IiB5PSIyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoMCAwIDApIi8+CiAgICA8cmVjdCB4PSItMzQiIHk9Ii01IiB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIHJ4PSIyIi8+CiAgICA8cmVjdCB4PSIyMiIgeT0iLTUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMCIgcng9IjIiLz4KICAgIDxyZWN0IHg9Ii0yNiIgeT0iLTI2IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHJ4PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAtMjEgLTIxKSIvPgogICAgPHJlY3QgeD0iMTYiIHk9Ii0yNiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMjEgLTIxKSIvPgogICAgPHJlY3QgeD0iLTI2IiB5PSIxNiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgLTIxIDIxKSIvPgogICAgPHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHJ4PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyMSAyMSkiLz4KICAgIDwhLS0gR2VhciBvdXRlciByaW5nIC0tPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjIyIiBmaWxsPSIjRjRCNDAwIi8+CiAgICA8IS0tIElubmVyIGNpcmNsZSAtLT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMiIgZmlsbD0iIzBBMjU0MCIvPgogICAgPCEtLSBDZW50ZXIgZG90IC0tPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjQiIGZpbGw9IiNGNEI0MDAiLz4KICA8L2c+CgogIDwhLS0gVG9yY2ggLyBsYW1wIGZsYW1lIGFib3ZlIGdlYXIgLS0+CiAgPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjQ0IiByeD0iNyIgcnk9IjExIiBmaWxsPSIjRjRCNDAwIiBvcGFjaXR5PSIwLjkiLz4KICA8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNDAiIHJ4PSI0IiByeT0iNyIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNyIvPgoKICA8IS0tIEJvb2sgaWNvbiBhdCBib3R0b20gb2YgZ2VhciBhcmVhIC0tPgogIDxyZWN0IHg9IjgyIiB5PSIxMDQiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyNiIgcng9IjMiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjE1Ii8+CiAgPGxpbmUgeDE9IjEwMCIgeTE9IjEwNCIgeDI9IjEwMCIgeTI9IjEzMCIgc3Ryb2tlPSIjRjRCNDAwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgoKICA8IS0tIFRhbWlsIE5hZHUgZW1ibGVtLXN0eWxlIGRlY29yYXRpdmUgbGluZXMgLS0+CiAgPGxpbmUgeDE9IjU1IiB5MT0iMTAwIiB4Mj0iNzgiIHkyPSIxMDAiIHN0cm9rZT0iI0Y0QjQwMCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjUiLz4KICA8bGluZSB4MT0iMTIyIiB5MT0iMTAwIiB4Mj0iMTQ1IiB5Mj0iMTAwIiBzdHJva2U9IiNGNEI0MDAiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ii8+CgogIDwhLS0gQ29sbGVnZSBuYW1lIGFyYyB0b3AgLS0+CiAgPHBhdGggaWQ9InRvcEFyYyIgZD0iTSAyOCwxMDAgQSA3Miw3MiAwIDAsMSAxNzIsMTAwIiBmaWxsPSJub25lIi8+CiAgPHRleHQgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTAuNSIgZm9udC1mYW1pbHk9Ik1vbnRzZXJyYXQsIEFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBsZXR0ZXItc3BhY2luZz0iMSI+CiAgICA8dGV4dFBhdGggaHJlZj0iI3RvcEFyYyIgc3RhcnRPZmZzZXQ9IjUlIj5HT1ZULiBDT0xMRUdFIE9GIEVOR0lORUVSSU5HPC90ZXh0UGF0aD4KICA8L3RleHQ+CgogIDwhLS0gRXJvZGUgYXJjIGJvdHRvbSAtLT4KICA8cGF0aCBpZD0iYm90dG9tQXJjIiBkPSJNIDM2LDExNSBBIDY2LDY2IDAgMCwwIDE2NCwxMTUiIGZpbGw9Im5vbmUiLz4KICA8dGV4dCBmaWxsPSIjRjRCNDAwIiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iTW9udHNlcnJhdCwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGxldHRlci1zcGFjaW5nPSIyIj4KICAgIDx0ZXh0UGF0aCBocmVmPSIjYm90dG9tQXJjIiBzdGFydE9mZnNldD0iMjAlIj5FUk9ERTwvdGV4dFBhdGg+CiAgPC90ZXh0PgoKICA8IS0tIEVzdCB5ZWFyIC0tPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTYzIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI4LjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgb3BhY2l0eT0iMC43IiBsZXR0ZXItc3BhY2luZz0iMSI+RVNULiAxOTg0PC90ZXh0Pgo8L3N2Zz4K" 
            alt="GCE Erode Logo" 
            className="h-[45px] md:h-[65px] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:block">
            <h1 className={`font-display font-bold text-sm leading-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>
              GCE ERODE
            </h1>
            <p className={`text-[10px] font-medium uppercase tracking-wider ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
              Govt. College of Engineering
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-gold ${isScrolled ? 'text-navy' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold text-navy px-5 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-navy transition-all shadow-md"
          >
            Admissions
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-navy' : 'text-white'} /> : <Menu className={isScrolled ? 'text-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-navy text-lg font-semibold py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-navy text-white py-3 rounded-xl font-bold mt-2">
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Overlay Only (No Image) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-royal/20 to-navy/80"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold border border-gold/30 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Established 1984 • Formerly IRTT
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold mb-6 leading-[1.1]">
            Government College of <br />
            <span className="text-gold">Engineering, Erode</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Empowering the next generation of engineers with technical excellence, 
            innovation, and ethical values in a sprawling green campus.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2"
            >
              Explore Campus <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Admissions 2026
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const AdminImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://lh3.googleusercontent.com/d/1_lAv1ECqC2oJZxQUhNEnVH8ITQIiK-tn",
    "https://lh3.googleusercontent.com/d/12Gxq7F7QhgkIxWFQfP3RF32BCJw039e3",
    "https://lh3.googleusercontent.com/d/1bFSc7hM3i4jIoX0wrb3f5JBUHhWX-8Fg",
    "https://lh3.googleusercontent.com/d/1S-knOyRGhyXTVpXkhZk5G9d77qugTe70"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-slate-200 border-8 border-white p-1 group">
      {/* Inner Frame */}
      <div className="absolute inset-0 border-2 border-slate-100 rounded-[2.2rem] z-20 pointer-events-none"></div>
      
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`GCE Erode Administrative Block ${current + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full object-cover brightness-[1.05] contrast-[1.1] saturate-[1.1] transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10 opacity-60 pointer-events-none"></div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-gold w-8 shadow-[0_0_10px_rgba(244,180,0,0.5)]' : 'bg-white/40 w-4 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const stats = [
    { label: 'Established', value: '1984', icon: Calendar },
    { label: 'Campus Size', value: '350+ Acres', icon: Building2 },
    { label: 'Departments', value: '7', icon: BookOpen },
    { label: 'Recruiters', value: '50+', icon: Briefcase },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:items-stretch items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-auto lg:h-full"
          >
            <AdminImageSlider />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs z-20">
              <p className="text-navy font-bold text-lg mb-2 italic">"Excellence in Technical Education"</p>
              <p className="text-slate-500 text-sm">Affiliated to Anna University and approved by AICTE, New Delhi.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-navy text-4xl md:text-5xl mb-6">Legacy of <span className="text-royal">Technical Excellence</span></h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Government College of Engineering, Erode (formerly known as Institute of Road and Transport Technology - IRTT) was established in 1984 by the Institute of Road Transport of the Government of Tamil Nadu.
              </p>
              <p>
                Located on a sprawling 350-acre campus at Chithode, Erode, the college has grown into a premier technical institution in the region. We offer a wide range of undergraduate and postgraduate programs in various engineering disciplines.
              </p>
              <p>
                Our mission is to provide quality technical education to students from all walks of life, fostering innovation, research, and professional ethics to meet the global challenges of the engineering industry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <stat.icon className="text-gold w-8 h-8 mb-4" />
                  <h4 className="text-2xl font-bold text-navy">{stat.value}</h4>
                  <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DepartmentDetails = ({ name }: { name: string }) => {
  const data = departmentData[name];
  if (!data) return null;

  return (
    <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-inner">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{data.title}</h2>
          <div className="prose prose-slate max-w-none mb-10">
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              {data.about}
            </p>
            {data.details && (
              <div className="bg-white/50 p-6 rounded-2xl border border-slate-200 mt-6">
                <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm">
                  {data.details}
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <FlaskConical className="text-royal w-5 h-5" /> Laboratories
              </h3>
              <ul className="space-y-2">
                {data.labs.map((lab: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    {lab}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Building2 className="text-royal w-5 h-5" /> Facilities
              </h3>
              <ul className="space-y-2">
                {data.facilities.map((fac: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    {fac}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
              <Users className="text-royal w-5 h-5" /> Faculty & Staff
            </h3>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="mb-4 pb-4 border-b border-slate-100">
                <p className="text-xs font-bold text-royal uppercase tracking-widest mb-1">Head of Department</p>
                <p className="text-lg font-bold text-navy">{data.faculty.hod}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.faculty.staff.map((member: any, i: number) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-navy">{member.name}</p>
                    <p className="text-xs text-slate-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <Star className="text-royal w-5 h-5" /> Gallery
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((img: string, i: number) => (
              <div key={i} className={`rounded-2xl overflow-hidden shadow-md ${i === 0 ? 'col-span-2 h-64' : 'h-40'}`}>
                <img src={img} alt={`${name} ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div className="bg-royal text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Interested in this program?</h4>
              <p className="text-white/80 text-sm mb-6">Learn more about the admission process and requirements for this department.</p>
              <button className="bg-gold text-navy px-6 py-3 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2">
                Admission Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <GraduationCap className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const depts = [
    { name: 'Automobile Engineering', icon: '🚗', desc: 'Pioneering mobility solutions and automotive design excellence.' },
    { name: 'Civil Engineering', icon: '🏗️', desc: 'Building sustainable infrastructure for a better tomorrow.' },
    { name: 'Computer Science and Engineering', icon: '💻', desc: 'Innovating through algorithms, AI, and software engineering.' },
    { name: 'Electronics and Communication Engineering', icon: '📡', desc: 'Connecting the world through advanced signal processing.' },
    { name: 'Electrical and Electronics Engineering', icon: '⚡', desc: 'Powering the future with sustainable energy systems.' },
    { name: 'Information Technology', icon: '🌐', desc: 'Managing the digital landscape and data-driven insights.' },
    { name: 'Mechanical Engineering', icon: '⚙️', desc: 'Mastering the art of machines and thermal systems.' },
  ];

  const handleDeptClick = (deptName: string) => {
    if (selectedDept === deptName) {
      setSelectedDept(null);
    } else {
      setSelectedDept(deptName);
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="departments" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-navy text-4xl md:text-5xl mb-4">Academic <span className="text-royal">Departments</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Diverse engineering disciplines tailored to meet industry demands and foster specialized expertise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {depts.map((dept, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              onClick={() => handleDeptClick(dept.name)}
              className={`cursor-pointer p-8 rounded-3xl shadow-sm border transition-all group ${selectedDept === dept.name ? 'bg-royal text-white border-royal shadow-xl' : 'bg-white border-slate-100 hover:shadow-xl'}`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{dept.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${selectedDept === dept.name ? 'text-white' : 'text-navy'}`}>{dept.name}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${selectedDept === dept.name ? 'text-white/80' : 'text-slate-500'}`}>
                {dept.desc}
              </p>
              <button className={`font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all ${selectedDept === dept.name ? 'text-gold' : 'text-royal'}`}>
                {selectedDept === dept.name ? 'Hide Details' : 'Learn More'} <ChevronRight className={`w-4 h-4 ${selectedDept === dept.name ? 'rotate-90' : ''} transition-transform`} />
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedDept && (
            <motion.div
              ref={detailsRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-16"
            >
              <DepartmentDetails name={selectedDept} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState('ug');

  const programs = {
    ug: [
      'B.E. Automobile Engineering',
      'B.E. Civil Engineering',
      'B.E. Computer Science and Engineering',
      'B.E. Electrical and Electronics Engineering',
      'B.E. Electronics and Communication Engineering',
      'B.E. Mechanical Engineering',
      'B.Tech. Information Technology'
    ],
    pg: [
      'M.E. Structural Engineering',
      'M.E. Computer Science and Engineering'
    ]
  };

  return (
    <section id="academics" className="section-padding bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Academic <span className="text-gold">Programs</span></h2>
          <p className="text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our curriculum is designed in alignment with Anna University standards, 
            focusing on both theoretical foundations and practical applications. 
            We emphasize continuous learning through workshops, seminars, and industrial visits.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('ug')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'ug' ? 'bg-gold text-navy' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Undergraduate (B.E/B.Tech)
            </button>
            <button 
              onClick={() => setActiveTab('pg')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'pg' ? 'bg-gold text-navy' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Postgraduate (M.E)
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {programs[activeTab as keyof typeof programs].map((prog, idx) => (
              <motion.div 
                key={prog}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10"
              >
                <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-slate-100">{prog}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const facilities = [
    { name: 'Modern Laboratories', icon: Microscope, img: 'https://www.gcee.ac.in/assets/img/sliders/layer/ForeignLanLab.jpeg' },
    { name: 'Central Library', icon: Library, img: 'https://assets.kollegeapply.com/images/1751563544548-1464173262phplQpJJB.jpeg' },
    { name: 'Digital Classrooms', icon: Globe, img: 'https://www.gcee.ac.in/include/ajax/cse/lab/img3.jpg' },
    { name: 'Hostel Facilities', icon: HomeIcon, img: 'https://www.gcee.ac.in/assets/img/blog/img12.jpg' },
    { name: 'Sports complex', icon: Trophy, img: 'https://www.gcee.ac.in/assets/img/sliders/layer/IndoorStadiumInnerView.jpeg' },
    { name: 'Innovation Cell', icon: FlaskConical, img: 'https://www.gcee.ac.in/assets/img/main/irtt_gal10.jpg' },
  ];

  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-navy text-4xl md:text-5xl mb-4">Campus <span className="text-royal">Facilities</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">State-of-the-art infrastructure designed to provide a conducive environment for holistic learning and growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg h-80"
            >
              <img 
                src={fac.img} 
                alt={fac.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <fac.icon className="text-gold w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold text-white">{fac.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    { title: 'Technical Symposium 2026', date: 'March 25, 2026', type: 'Workshop', img: 'https://picsum.photos/seed/event1/400/300' },
    { title: 'Annual Sports Meet', date: 'April 10, 2026', type: 'Sports', img: 'https://picsum.photos/seed/event2/400/300' },
    { title: 'Alumni Meet 2026', date: 'May 15, 2026', type: 'Alumni', img: 'https://picsum.photos/seed/event3/400/300' },
  ];

  return (
    <section id="events" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-navy text-4xl md:text-5xl mb-4">News & <span className="text-royal">Events</span></h2>
            <p className="text-slate-500">Stay updated with the latest happenings at GCE Erode.</p>
          </div>
          <button className="text-royal font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Events <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
            >
              <div className="h-48 overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-royal text-xs font-bold uppercase tracking-widest mb-3">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{event.title}</h3>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                  {event.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Placements = () => {
  const recruiters = [
    'TCS', 'Zoho', 'Infosys', 'IBM', 'HCL', 'Capgemini', 'Nokia', 'Tech Mahindra', 'Wipro', 'Cognizant'
  ];

  return (
    <section id="placements" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-navy text-4xl md:text-5xl mb-6">Career & <span className="text-royal">Placements</span></h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our dedicated placement cell works tirelessly to bridge the gap between academia and industry. 
              We provide comprehensive training in soft skills, aptitude, and technical domains to ensure our students are industry-ready.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-slate-50 px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-3xl font-bold text-navy">90%+</p>
                <p className="text-slate-500 text-sm">Placement Rate</p>
              </div>
              <div className="bg-slate-50 px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-3xl font-bold text-navy">12 LPA</p>
                <p className="text-slate-500 text-sm">Highest Package</p>
              </div>
            </div>
          </div>
          <div className="bg-navy p-10 rounded-[40px] text-white relative">
            <div className="absolute top-0 right-0 p-8">
              <Award className="text-gold w-12 h-12 opacity-20" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Top Recruiters</h3>
            <div className="grid grid-cols-2 gap-4">
              {recruiters.slice(0, 6).map(name => (
                <div key={name} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-center font-bold text-lg">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling Strip */}
        <div className="relative">
          <div className="flex overflow-hidden gap-12 py-10 border-y border-slate-200">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="flex gap-20 items-center whitespace-nowrap"
            >
              {[...recruiters, ...recruiters].map((name, i) => (
                <span key={i} className="text-3xl font-black text-slate-300 uppercase tracking-tighter hover:text-royal transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickLinks = () => {
  const links = [
    { name: 'Mandatory Disclosure', icon: Newspaper },
    { name: 'Alumni Portal', icon: Users },
    { name: 'Exam Cell', icon: Award },
    { name: 'NPTEL Courses', icon: BookOpen },
    { name: 'EDC / IPDC', icon: FlaskConical },
    { name: 'Help Desk', icon: Phone },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-navy text-3xl font-bold mb-12 text-center">Quick <span className="text-royal">Resources</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, idx) => (
            <motion.a 
              key={idx}
              href="#"
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-royal/10 rounded-full flex items-center justify-center">
                <link.icon className="text-royal w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-navy uppercase tracking-wider">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Downloads = () => {
  const docs = [
    { name: 'Academic Schedule 2025-26', size: '1.2 MB' },
    { name: 'Staff Leave Form', size: '450 KB' },
    { name: 'Scholarship Application', size: '890 KB' },
    { name: 'College Rules & Regulations', size: '2.1 MB' },
  ];

  return (
    <section id="downloads" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-navy rounded-[40px] p-12 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10">Important <span className="text-gold">Downloads</span></h2>
            <div className="grid md:grid-cols-2 gap-6">
              {docs.map((doc, idx) => (
                <div key={idx} className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 flex items-center justify-between transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                      <Download className="text-navy w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{doc.name}</h4>
                      <p className="text-slate-400 text-xs">{doc.size}</p>
                    </div>
                  </div>
                  <button className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-navy text-4xl md:text-5xl mb-8">Get in <span className="text-royal">Touch</span></h2>
            <p className="text-slate-500 mb-10">Have questions about admissions, programs, or campus life? Our team is here to help you.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-royal w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Address</h4>
                  <p className="text-slate-500">Government College of Engineering (IRTT)<br />Erode – 638316, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-royal w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Phone</h4>
                  <p className="text-slate-500">+91 424 2533279, 2533579</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-royal w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email</h4>
                  <p className="text-slate-500">principal@gcee.ac.in</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-inner border border-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.384838618698!2d77.6748466750519!3d11.452818988741857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9169974251291%3A0x906d4402d135161!2sGovernment%20College%20of%20Engineering%20(Formerly%20IRTT)%2C%20Erode!5e0!3m2!1sen!2sin!4v1710100000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
            <h3 className="text-2xl font-bold text-navy mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal focus:border-transparent outline-none transition-all" placeholder="Admission Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal focus:border-transparent outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-royal transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPCEtLSBPdXRlciBjaXJjbGUgYm9yZGVyIC0tPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTYiIGZpbGw9IiMwQTI1NDAiIHN0cm9rZT0iI0Y0QjQwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgCiAgPCEtLSBJbm5lciB3aGl0ZSByaW5nIC0tPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODgiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjMiLz4KCiAgPCEtLSBHZWFyL2NvZyBzeW1ib2wgKGVuZ2luZWVyaW5nKSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAsNzgpIiBmaWxsPSIjRjRCNDAwIj4KICAgIDwhLS0gR2VhciB0ZWV0aCAtLT4KICAgIDxyZWN0IHg9Ii01IiB5PSItMzQiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMiIgcng9IjIiLz4KICAgIDxyZWN0IHg9Ii01IiB5PSIyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoMCAwIDApIi8+CiAgICA8cmVjdCB4PSItMzQiIHk9Ii01IiB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIHJ4PSIyIi8+CiAgICA8cmVjdCB4PSIyMiIgeT0iLTUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMCIgcng9IjIiLz4KICAgIDxyZWN0IHg9Ii0yNiIgeT0iLTI2IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHJ4PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAtMjEgLTIxKSIvPgogICAgPHJlY3QgeD0iMTYiIHk9Ii0yNiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMjEgLTIxKSIvPgogICAgPHJlY3QgeD0iLTI2IiB5PSIxNiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgLTIxIDIxKSIvPgogICAgPHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHJ4PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyMSAyMSkiLz4KICAgIDwhLS0gR2VhciBvdXRlciByaW5nIC0tPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjIyIiBmaWxsPSIjRjRCNDAwIi8+CiAgICA8IS0tIElubmVyIGNpcmNsZSAtLT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMiIgZmlsbD0iIzBBMjU0MCIvPgogICAgPCEtLSBDZW50ZXIgZG90IC0tPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjQiIGZpbGw9IiNGNEI0MDAiLz4KICA8L2c+CgogIDwhLS0gVG9yY2ggLyBsYW1wIGZsYW1lIGFib3ZlIGdlYXIgLS0+CiAgPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjQ0IiByeD0iNyIgcnk9IjExIiBmaWxsPSIjRjRCNDAwIiBvcGFjaXR5PSIwLjkiLz4KICA8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNDAiIHJ4PSI0IiByeT0iNyIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNyIvPgoKICA8IS0tIEJvb2sgaWNvbiBhdCBib3R0b20gb2YgZ2VhciBhcmVhIC0tPgogIDxyZWN0IHg9IjgyIiB5PSIxMDQiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyNiIgcng9IjMiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjE1Ii8+CiAgPGxpbmUgeDE9IjEwMCIgeTE9IjEwNCIgeDI9IjEwMCIgeTI9IjEzMCIgc3Ryb2tlPSIjRjRCNDAwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgoKICA8IS0tIFRhbWlsIE5hZHUgZW1ibGVtLXN0eWxlIGRlY29yYXRpdmUgbGluZXMgLS0+CiAgPGxpbmUgeDE9IjU1IiB5MT0iMTAwIiB4Mj0iNzgiIHkyPSIxMDAiIHN0cm9rZT0iI0Y0QjQwMCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjUiLz4KICA8bGluZSB4MT0iMTIyIiB5MT0iMTAwIiB4Mj0iMTQ1IiB5Mj0iMTAwIiBzdHJva2U9IiNGNEI0MDAiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ii8+CgogIDwhLS0gQ29sbGVnZSBuYW1lIGFyYyB0b3AgLS0+CiAgPHBhdGggaWQ9InRvcEFyYyIgZD0iTSAyOCwxMDAgQSA3Miw3MiAwIDAsMSAxNzIsMTAwIiBmaWxsPSJub25lIi8+CiAgPHRleHQgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTAuNSIgZm9udC1mYW1pbHk9Ik1vbnRzZXJyYXQsIEFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBsZXR0ZXItc3BhY2luZz0iMSI+CiAgICA8dGV4dFBhdGggaHJlZj0iI3RvcEFyYyIgc3RhcnRPZmZzZXQ9IjUlIj5HT1ZULiBDT0xMRUdFIE9GIEVOR0lORUVSSU5HPC90ZXh0UGF0aD4KICA8L3RleHQ+CgogIDwhLS0gRXJvZGUgYXJjIGJvdHRvbSAtLT4KICA8cGF0aCBpZD0iYm90dG9tQXJjIiBkPSJNIDM2LDExNSBBIDY2LDY2IDAgMCwwIDE2NCwxMTUiIGZpbGw9Im5vbmUiLz4KICA8dGV4dCBmaWxsPSIjRjRCNDAwIiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iTW9udHNlcnJhdCwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGxldHRlci1zcGFjaW5nPSIyIj4KICAgIDx0ZXh0UGF0aCBocmVmPSIjYm90dG9tQXJjIiBzdGFydE9mZnNldD0iMjAlIj5FUk9ERTwvdGV4dFBhdGg+CiAgPC90ZXh0PgoKICA8IS0tIEVzdCB5ZWFyIC0tPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTYzIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI4LjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgb3BhY2l0eT0iMC43IiBsZXR0ZXItc3BhY2luZz0iMSI+RVNULiAxOTg0PC90ZXh0Pgo8L3N2Zz4K" 
                alt="GCE Erode Logo" 
                className="h-[60px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <h2 className="font-display font-bold text-xl">GCE ERODE</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              A premier government technical institution dedicated to excellence in engineering education since 1984.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#departments" className="hover:text-gold transition-colors">Departments</a></li>
              <li><a href="#academics" className="hover:text-gold transition-colors">Academics</a></li>
              <li><a href="#placements" className="hover:text-gold transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Alumni Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Mandatory Disclosure</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Exam Cell</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">NPTEL Courses</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Anti-Ragging</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Subscribe to get the latest news and event updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-gold w-full" />
              <button className="bg-gold text-navy px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <p>© 2026 Government College of Engineering, Erode. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <LiveNewsTicker />
      <main>
        <Hero />
        <About />
        <Departments />
        <Academics />
        <Facilities />
        <UpcomingEvents />
        <CampusActivities />
        <StudentAchievements />
        <NewsRoom />
        <Placements />
        <QuickLinks />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
