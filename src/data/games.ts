// data/games.ts
export const games = [
  {
    id: 1,
    icon: "🧩",
    title: "Drag & Drop Quiz",
    subtitle: "Test with drag & drop",
    tag: "New",
    tagClass: "tag-new",
    componentKey: "DragQuiz",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "What is phishing?", options: ["Attack", "Tool"], answer: "Attack" },
          { id: 2, question: "Strongest password?", options: ["12345", "Xy!9z#Q"], answer: "Xy!9z#Q" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 3, question: "What does HTTPS mean?", options: ["Secure", "Not Secure"], answer: "Secure" },
          { id: 4, question: "Which is stronger: Password123 or P@ssw0rd!", options: ["Password123", "P@ssw0rd!"], answer: "P@ssw0rd!" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 5, question: "Which is social engineering?", options: ["Phishing", "Firewall"], answer: "Phishing" },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Cybersecurity Quiz",
    subtitle: "MCQs for awareness",
    tag: "Popular",
    tagClass: "tag-popular",
    componentKey: "QuizPage",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "What does VPN stand for?", options: ["Virtual Private Network", "Virus Protection Network"], answer: "Virtual Private Network" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "Best way to secure email?", options: ["Ignore spam", "Enable 2FA"], answer: "Enable 2FA" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Which is a strong security protocol?", options: ["SSL", "HTTP"], answer: "SSL" },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: "💡",
    title: "Password Strength Game",
    subtitle: "Guess the safest password",
    tag: "Trending",
    tagClass: "tag-trending",
    componentKey: "PasswordGame",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "Which password is most secure?", options: ["Password123", "R@9!qB7#xY"], answer: "R@9!qB7#xY" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "What should a strong password include?", options: ["Only numbers", "Letters, numbers & symbols"], answer: "Letters, numbers & symbols" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Choose the strongest passphrase:", options: ["correcthorsebatterystaple", "passwordpassword"], answer: "correcthorsebatterystaple" },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: "🔍",
    title: "Spot the Threat",
    subtitle: "Find security risks",
    tag: "New",
    tagClass: "tag-new",
    componentKey: "ThreatSpotting",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "Which email is suspicious?", options: ["From: bank@secure.com", "From: bank-alerts@secure-pay.com"], answer: "From: bank-alerts@secure-pay.com" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "Which link looks safe?", options: ["http://paypal.secure-login.com", "https://paypal.com"], answer: "https://paypal.com" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Identify the risky attachment:", options: ["Invoice.pdf", "Invoice.exe"], answer: "Invoice.exe" },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: "🔐",
    title: "2FA Challenge",
    subtitle: "Test your knowledge of 2FA",
    tag: "Hot",
    tagClass: "tag-hot",
    componentKey: "TwoFactorQuiz",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "What does 2FA stand for?", options: ["Two-Factor Authentication", "Two-Faced Attack"], answer: "Two-Factor Authentication" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "Which is an example of 2FA?", options: ["Password only", "Password + OTP"], answer: "Password + OTP" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Is 2FA mandatory for banking apps?", options: ["Yes", "No"], answer: "Yes" },
        ],
      },
    ],
  },
  {
    id: 6,
    icon: "🕵️",
    title: "Social Engineering Game",
    subtitle: "Spot manipulation tactics",
    tag: "Popular",
    tagClass: "tag-popular",
    componentKey: "SocialEngineering",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "Which is a sign of social engineering?", options: ["Urgency in email", "Formal greeting"], answer: "Urgency in email" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "What should you do if asked for a password?", options: ["Share immediately", "Never share"], answer: "Never share" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Identify social manipulation attempt:", options: ["CEO fraud", "Normal request"], answer: "CEO fraud" },
        ],
      },
    ],
  },
  {
    id: 7,
    icon: "💻",
    title: "Malware Hunt",
    subtitle: "Identify malicious software",
    tag: "New",
    tagClass: "tag-new",
    componentKey: "MalwareQuiz",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "Which is malware?", options: ["Trojan", "Firewall"], answer: "Trojan" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "Best way to avoid malware?", options: ["Download from unknown sites", "Use antivirus"], answer: "Use antivirus" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Identify ransomware example:", options: ["WannaCry", "Chrome"], answer: "WannaCry" },
        ],
      },
    ],
  },
  {
    id: 8,
    icon: "🌐",
    title: "Safe Browsing Quiz",
    subtitle: "Learn safe web practices",
    tag: "Trending",
    tagClass: "tag-trending",
    componentKey: "BrowsingQuiz",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "Which URL is secure?", options: ["http://example.com", "https://example.com"], answer: "https://example.com" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "What does HTTPS stand for?", options: ["HyperText Transfer Secure", "Hyper Transfer Text Protocol"], answer: "HyperText Transfer Secure" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Identify unsafe website:", options: ["example.com", "malware-site.com"], answer: "malware-site.com" },
        ],
      },
    ],
  },
  {
    id: 9,
    icon: "📧",
    title: "Email Security Game",
    subtitle: "Spot phishing emails",
    tag: "Popular",
    tagClass: "tag-popular",
    componentKey: "EmailSecurity",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "Which subject looks like phishing?", options: ["Invoice #234", "Urgent: Verify your account"], answer: "Urgent: Verify your account" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "What should you do with spam emails?", options: ["Click links", "Report & delete"], answer: "Report & delete" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Which email attachment is risky?", options: ["Document.pdf", "Invoice.exe"], answer: "Invoice.exe" },
        ],
      },
    ],
  },
  {
    id: 10,
    icon: "📱",
    title: "Mobile Security Quiz",
    subtitle: "Protect your smartphone",
    tag: "Hot",
    tagClass: "tag-hot",
    componentKey: "MobileSecurity",
    levels: [
      {
        level: "Easy",
        questions: [
          { id: 1, question: "What is a safe app source?", options: ["App Store/Play Store", "Random websites"], answer: "App Store/Play Store" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 2, question: "How to secure your device?", options: ["No lock screen", "Enable screen lock"], answer: "Enable screen lock" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 3, question: "Which is safest?", options: ["Open Wi-Fi", "VPN"], answer: "VPN" },
        ],
      },
    ],
  },
];
