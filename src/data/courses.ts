
export interface Course {
  id: number;
  title: string;
  priceINR: string;
  priceUSD: string;
  description: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Cybersecurity Fundamentals",
    priceINR: "₹8,000",
    priceUSD: "$100",
    description: "Learn the basics of cybersecurity, including network security, encryption, and threat mitigation.",
    featured: true
  },
  {
    id: 2,
    title: "Ethical Hacking",
    priceINR: "₹12,000",
    priceUSD: "$150",
    description: "Explore ethical hacking techniques and learn to identify and exploit vulnerabilities in computer systems.",
    featured: true
  },
  {
    id: 3,
    title: "Kali Linux",
    priceINR: "₹10,000",
    priceUSD: "$125",
    description: "Master Kali Linux, the OS used for penetration testing, and learn how to use its tools for security assessments."
  },
  {
    id: 4,
    title: "Network Security",
    priceINR: "₹12,000",
    priceUSD: "$150",
    description: "Learn essential network security concepts such as firewalls, VPNs, and IDS/IPS systems."
  },
  {
    id: 5,
    title: "Wireless Network Security",
    priceINR: "₹9,000",
    priceUSD: "$110",
    description: "Understand how to secure wireless networks and protect against common wireless attacks like rogue access points."
  },
  {
    id: 6,
    title: "Web Application Security",
    priceINR: "₹11,000",
    priceUSD: "$140",
    description: "Learn to secure web applications from threats like SQL injection, XSS, and CSRF."
  },
  {
    id: 7,
    title: "Penetration Testing",
    priceINR: "₹14,000",
    priceUSD: "$175",
    description: "Develop hands-on skills in penetration testing to identify and exploit vulnerabilities in systems and applications.",
    featured: true
  },
  {
    id: 8,
    title: "Bug Bounty Hunting",
    priceINR: "₹10,000",
    priceUSD: "$125",
    description: "Discover how to find vulnerabilities in websites and earn rewards by participating in bug bounty programs."
  },
  {
    id: 9,
    title: "Digital Forensics",
    priceINR: "₹15,000",
    priceUSD: "$190",
    description: "Learn how to investigate and recover data from compromised systems to uncover cybercrime."
  },
  {
    id: 10,
    title: "Advanced Ethical Hacking Techniques",
    priceINR: "₹18,000",
    priceUSD: "$225",
    description: "Dive deeper into advanced hacking techniques and exploit complex vulnerabilities."
  },
  {
    id: 11,
    title: "Red Teaming and Blue Teaming",
    priceINR: "₹15,000",
    priceUSD: "$190",
    description: "Learn both offensive and defensive strategies to simulate real-world cyber attacks and responses."
  },
  {
    id: 12,
    title: "Red Team vs Blue Team Training (Advanced)",
    priceINR: "₹20,000",
    priceUSD: "$250",
    description: "Take your Red Team and Blue Team skills to the next level with advanced tactics and real-world simulations.",
    featured: true
  },
  {
    id: 13,
    title: "Cybersecurity Risk Management",
    priceINR: "₹12,000",
    priceUSD: "$150",
    description: "Understand risk assessment, mitigation strategies, and how to manage cybersecurity risks effectively."
  },
  {
    id: 14,
    title: "Artificial Intelligence (AI) in Cybersecurity",
    priceINR: "₹17,000",
    priceUSD: "$215",
    description: "Explore the use of AI and machine learning in detecting and responding to cybersecurity threats."
  },
  {
    id: 15,
    title: "Deep Web and Dark Web Investigation",
    priceINR: "₹12,500",
    priceUSD: "$160",
    description: "Learn how to investigate the Deep Web and Dark Web for cybercriminal activity and data leaks."
  },
  {
    id: 16,
    title: "Cybersecurity for Startups",
    priceINR: "₹9,000",
    priceUSD: "$115",
    description: "Discover cost-effective security practices designed specifically for startups and small businesses."
  },
  {
    id: 17,
    title: "Cybersecurity Leadership and Management",
    priceINR: "₹22,000",
    priceUSD: "$275",
    description: "Learn how to lead and manage cybersecurity teams, build security policies, and drive organizational change."
  },
  {
    id: 18,
    title: "Cyber Security Expert",
    priceINR: "₹35,000",
    priceUSD: "$500",
    description: "Comprehensive expert-level cybersecurity training covering advanced techniques, leadership, and cutting-edge security practices."
  }
];
