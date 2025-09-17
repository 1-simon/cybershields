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
          { id: 1, question: "What is phishing?", options: ["Cooking method", "Cyber attack", "Firewall", "Antivirus"], answer: "Cyber attack" },
          { id: 2, question: "Which password is strongest?", options: ["12345", "Password", "Xy!9z#Q", "abcd"], answer: "Xy!9z#Q" },
          { id: 3, question: "What does a firewall do?", options: ["Block threats", "Play games", "Store music", "Speed up internet"], answer: "Block threats" },
          { id: 4, question: "Which website is secure?", options: ["http://bank-login.com", "https://bank.com", "http://shop-now.net", "http://test.org"], answer: "https://bank.com" },
          { id: 5, question: "What is antivirus used for?", options: ["Gaming", "Cooking", "Protecting devices", "Typing documents"], answer: "Protecting devices" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 6, question: "What does HTTPS mean?", options: ["HyperText Transfer Secure", "Hyper Transfer Text Protocol", "High-Tech Transfer Service", "Home Transfer Protocol Secure"], answer: "HyperText Transfer Secure" },
          { id: 7, question: "Which password is strongest?", options: ["Password123", "P@ssw0rd!", "qwerty", "abcd1234"], answer: "P@ssw0rd!" },
          { id: 8, question: "Which file type is risky?", options: ["report.pdf", "notes.txt", "invoice.exe", "image.jpg"], answer: "invoice.exe" },
          { id: 9, question: "What is a VPN used for?", options: ["Browsing securely", "Faster downloads", "Playing music", "Storing files"], answer: "Browsing securely" },
          { id: 10, question: "Which is social engineering?", options: ["Phishing", "Antivirus", "Firewall", "Router"], answer: "Phishing" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 11, question: "What is ransomware?", options: ["Malware demanding payment", "Free software", "Antivirus", "Firewall"], answer: "Malware demanding payment" },
          { id: 12, question: "Which attack tricks users into revealing info?", options: ["Phishing", "Encryption", "Hashing", "VPN"], answer: "Phishing" },
          { id: 13, question: "What does 2FA provide?", options: ["Extra security layer", "Faster internet", "Free storage", "More emails"], answer: "Extra security layer" },
          { id: 14, question: "Which is safer for storing passwords?", options: ["Plain text", "Hashed", "Notebook", "Excel file"], answer: "Hashed" },
          { id: 15, question: "What is a DDoS attack?", options: ["Overloading a server", "Encrypting data", "Resetting passwords", "Installing updates"], answer: "Overloading a server" },
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
          { id: 1, question: "What does VPN stand for?", options: ["Virtual Public Network", "Virtual Private Network", "Verified Personal Network", "Virus Protection Network"], answer: "Virtual Private Network" },
          { id: 2, question: "Which is safe to click?", options: ["Suspicious email link", "Official bank link", "Pop-up ads", "Unknown file"], answer: "Official bank link" },
          { id: 3, question: "Which is malware?", options: ["Trojan", "Firewall", "Router", "Server"], answer: "Trojan" },
          { id: 4, question: "Which is a cyber threat?", options: ["Phishing", "VPN", "Encryption", "Antivirus"], answer: "Phishing" },
          { id: 5, question: "Which one protects your device?", options: ["Antivirus", "Phishing", "Spam email", "Fake link"], answer: "Antivirus" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 6, question: "Best way to secure email?", options: ["Ignore spam", "Enable 2FA", "Use short passwords", "Share credentials"], answer: "Enable 2FA" },
          { id: 7, question: "Which is NOT a cyber threat?", options: ["Malware", "Phishing", "Antivirus", "Ransomware"], answer: "Antivirus" },
          { id: 8, question: "Which attack floods a system with traffic?", options: ["Phishing", "DDoS", "Keylogger", "Spyware"], answer: "DDoS" },
          { id: 9, question: "What should a strong password include?", options: ["Only letters", "Only numbers", "Letters, numbers, symbols", "Your birthday"], answer: "Letters, numbers, symbols" },
          { id: 10, question: "Which protocol is secure?", options: ["HTTP", "HTTPS", "FTP", "Telnet"], answer: "HTTPS" },
        ],
      },
     {
        level: "Hard",
        questions: [
          { id: 11, question: "Which is a strong security protocol?", options: ["SSL", "HTTP", "Telnet", "FTP"], answer: "SSL" },
          { id: 12, question: "Which is an insider threat?", options: ["Disgruntled employee", "Phishing email", "Malware", "DDoS"], answer: "Disgruntled employee" },
          { id: 13, question: "What is the purpose of hashing?", options: ["Encrypt passwords", "Compress data", "Store files", "Send emails"], answer: "Encrypt passwords" },
          { id: 14, question: "Which malware demands ransom?", options: ["WannaCry", "Trojan", "Worm", "Spyware"], answer: "WannaCry" },
          { id: 15, question: "Which is a two-factor authentication method?", options: ["Password + OTP", "Password only", "Username only", "PIN only"], answer: "Password + OTP" },
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
          { id: 1, question: "Which password is most secure?", options: ["Password123", "R@9!qB7#xY", "abc123", "qwerty"], answer: "R@9!qB7#xY" },
          { id: 2, question: "Which is weakest?", options: ["12345", "P@ssw0rd!", "Hello#2024", "Xyz!88@"], answer: "12345" },
          { id: 3, question: "Which is a strong password element?", options: ["Symbols", "Only lowercase", "Only numbers", "Common words"], answer: "Symbols" },
          { id: 4, question: "Which is safe?", options: ["Abcd!234", "mypassword", "guest123", "0000"], answer: "Abcd!234" },
          { id: 5, question: "Which is risky?", options: ["Birthday password", "Random characters", "Pass with symbols", "Long passphrase"], answer: "Birthday password" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 6, question: "What should a strong password include?", options: ["Only numbers", "Letters + numbers + symbols", "Only symbols", "Your name"], answer: "Letters + numbers + symbols" },
          { id: 7, question: "Which is stronger?", options: ["P@ssword1", "CorrectHorseStaple!23", "abcd123", "guest"], answer: "CorrectHorseStaple!23" },
          { id: 8, question: "Which password is weakest?", options: ["qwerty", "Abc!234", "Xyz#78$", "Pass!1234"], answer: "qwerty" },
          { id: 9, question: "How often should you change passwords?", options: ["Never", "Every 6–12 months", "Every day", "Once in lifetime"], answer: "Every 6–12 months" },
          { id: 10, question: "What is a passphrase?", options: ["Long random words", "Short PIN", "Name only", "Number sequence"], answer: "Long random words" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 11, question: "Choose the strongest passphrase:", options: ["correcthorsebatterystaple", "passwordpassword", "123456789", "mypassword"], answer: "correcthorsebatterystaple" },
          { id: 12, question: "Which is the weakest password practice?", options: ["Using dictionary words", "Using random symbols", "Using long passphrases", "Using numbers & symbols"], answer: "Using dictionary words" },
          { id: 13, question: "What is credential stuffing?", options: ["Reusing leaked passwords", "Creating strong passwords", "Hashing passwords", "Changing passwords"], answer: "Reusing leaked passwords" },
          { id: 14, question: "Which is safest way to store passwords?", options: ["Password manager", "Sticky notes", "Browser cache", "Email drafts"], answer: "Password manager" },
          { id: 15, question: "Which length is best for strong passwords?", options: ["4–6", "8–12", "12–16+", "3"], answer: "12–16+" },
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
          { id: 1, question: "Which email is suspicious?", options: ["From: bank@secure.com", "From: bank-alerts@secure-pay.com", "From: support@google.com", "From: amazon@official.com"], answer: "From: bank-alerts@secure-pay.com" },
          { id: 2, question: "Which link is risky?", options: ["https://paypal.com", "http://paypal.secure-login.com", "https://google.com", "https://github.com"], answer: "http://paypal.secure-login.com" },
          { id: 3, question: "Which attachment is dangerous?", options: ["Invoice.exe", "Report.pdf", "Notes.txt", "Image.jpg"], answer: "Invoice.exe" },
          { id: 4, question: "Which subject looks phishing?", options: ["Urgent: Verify Account", "Meeting at 5 PM", "Invoice #234", "Holiday Schedule"], answer: "Urgent: Verify Account" },
          { id: 5, question: "Which sender looks fake?", options: ["support@apple.com", "security@paypal-login.net", "alerts@bank.com", "admin@microsoft.com"], answer: "security@paypal-login.net" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 6, question: "Which website is safe?", options: ["https://amazon.com", "http://secure-amazon-login.com", "https://bank.com", "http://fake-bank.net"], answer: "https://amazon.com" },
          { id: 7, question: "Which email is fake?", options: ["ceo@company.com", "admin@compny.com", "it@company.org", "info@company.com"], answer: "admin@compny.com" },
          { id: 8, question: "Which link is safe?", options: ["https://paypal.com", "http://paypa1.com", "http://login-secure.net", "http://test-paypal.org"], answer: "https://paypal.com" },
          { id: 9, question: "Which request is suspicious?", options: ["Reset password via email", "Click here to win a prize", "Receive bank OTP", "Use 2FA"], answer: "Click here to win a prize" },
          { id: 10, question: "Which is risky behavior?", options: ["Clicking unknown links", "Using VPN", "Updating OS", "Using Antivirus"], answer: "Clicking unknown links" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 11, question: "Identify the risky attachment:", options: ["Invoice.pdf", "Invoice.exe", "Resume.docx", "Slides.ppt"], answer: "Invoice.exe" },
          { id: 12, question: "Which URL is a phishing attempt?", options: ["http://secure-bank-login.net", "https://bank.com", "https://microsoft.com", "https://github.com"], answer: "http://secure-bank-login.net" },
          { id: 13, question: "Which is a spoofed email domain?", options: ["micr0soft.com", "microsoft.com", "google.com", "apple.com"], answer: "micr0soft.com" },
          { id: 14, question: "Which is an unsafe file?", options: ["setup.bat", "report.doc", "summary.pdf", "image.png"], answer: "setup.bat" },
          { id: 15, question: "Which one is spear phishing?", options: ["Targeted CEO fraud", "Generic spam", "Pop-up ads", "Antivirus alerts"], answer: "Targeted CEO fraud" },
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
          { id: 1, question: "What does 2FA stand for?", options: ["Two-Factor Authentication", "Two-Faced Attack", "Two-File Access", "Two-Factor Access"], answer: "Two-Factor Authentication" },
          { id: 2, question: "Which is 2FA?", options: ["Password only", "Password + OTP", "PIN only", "Username only"], answer: "Password + OTP" },
          { id: 3, question: "Which app provides 2FA?", options: ["Google Authenticator", "Paint", "Notepad", "Calculator"], answer: "Google Authenticator" },
          { id: 4, question: "Which is an example of 2FA?", options: ["Password + SMS code", "Username + password only", "PIN only", "Password only"], answer: "Password + SMS code" },
          { id: 5, question: "Which is stronger?", options: ["Password only", "Password + OTP", "PIN only", "Username"], answer: "Password + OTP" },
        ],
      },
      {
        level: "Medium",
        questions: [
          { id: 6, question: "Which factor is 'Something you know'?", options: ["Password", "Fingerprint", "OTP", "FaceID"], answer: "Password" },
          { id: 7, question: "Which factor is 'Something you have'?", options: ["OTP token", "Password", "PIN", "Username"], answer: "OTP token" },
          { id: 8, question: "Which factor is 'Something you are'?", options: ["Fingerprint", "Password", "PIN", "Token"], answer: "Fingerprint" },
          { id: 9, question: "Which is stronger than SMS OTP?", options: ["Authenticator app", "Password only", "PIN only", "Email"], answer: "Authenticator app" },
          { id: 10, question: "Which is an example of multi-factor?", options: ["Password + Fingerprint", "PIN only", "Password only", "Username"], answer: "Password + Fingerprint" },
        ],
      },
      {
        level: "Hard",
        questions: [
          { id: 11, question: "Is 2FA mandatory for banking apps?", options: ["Yes", "No", "Sometimes", "Never"], answer: "Yes" },
          { id: 12, question: "Which is the most secure 2FA?", options: ["Hardware token", "SMS OTP", "Email OTP", "PIN"], answer: "Hardware token" },
          { id: 13, question: "Which is weakest 2FA method?", options: ["SMS OTP", "Authenticator app", "Hardware token", "Fingerprint"], answer: "SMS OTP" },
          { id: 14, question: "Which attack targets 2FA?", options: ["SIM swapping", "Ransomware", "DDoS", "Trojan"], answer: "SIM swapping" },
          { id: 15, question: "Which is the best practice for 2FA?", options: ["Use Authenticator app", "Disable 2FA", "Share OTP", "Use only password"], answer: "Use Authenticator app" },
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
        { id: 1, question: "Which is a sign of social engineering?", options: ["Urgency in email", "Calm language", "Official domain", "Secure URL"], answer: "Urgency in email" },
        { id: 2, question: "Which is NOT social engineering?", options: ["Phishing", "Malware", "Pretexting", "Tailgating"], answer: "Malware" },
        { id: 3, question: "A stranger asks for your password claiming to be IT support. What is this?", options: ["Pretexting", "Firewall", "Backup", "Encryption"], answer: "Pretexting" },
        { id: 4, question: "What is 'baiting'?", options: ["Using free USB to trick victims", "Sending encrypted email", "Installing antivirus", "Creating backups"], answer: "Using free USB to trick victims" },
        { id: 5, question: "CEO fraud is an example of?", options: ["Social Engineering", "Antivirus", "Firewall", "Router"], answer: "Social Engineering" },
      ],
    },
    {
      level: "Medium",
      questions: [
        { id: 6, question: "What should you do if someone pressures you for sensitive info?", options: ["Share quickly", "Refuse & verify", "Ignore policies", "Send password"], answer: "Refuse & verify" },
        { id: 7, question: "Tailgating in security means?", options: ["Following someone into restricted area", "Chasing emails", "Breaking passwords", "Encrypting files"], answer: "Following someone into restricted area" },
        { id: 8, question: "Pretexting relies on?", options: ["Trust & lies", "Firewalls", "Antivirus", "Password strength"], answer: "Trust & lies" },
        { id: 9, question: "What’s a common phishing clue?", options: ["Spelling errors", "Secure logo", "HTTPS only", "Professional tone"], answer: "Spelling errors" },
        { id: 10, question: "What should employees do if targeted?", options: ["Report immediately", "Ignore it", "Click link", "Save attachment"], answer: "Report immediately" },
      ],
    },
       {
      level: "Hard",
      questions: [
        { id: 11, question: "Smishing is social engineering via?", options: ["SMS", "Email", "Call", "Social media"], answer: "SMS" },
        { id: 12, question: "What is vishing?", options: ["Voice phishing", "Video hacking", "Virtual networking", "VPN issue"], answer: "Voice phishing" },
        { id: 13, question: "Dumpster diving attack involves?", options: ["Stealing trash data", "Browsing securely", "Installing antivirus", "Encrypting files"], answer: "Stealing trash data" },
        { id: 14, question: "What’s a common goal of social engineering?", options: ["Steal data", "Faster Wi-Fi", "Music streaming", "File backup"], answer: "Steal data" },
        { id: 15, question: "Best way to prevent social engineering?", options: ["Employee training", "Ignore updates", "Share passwords", "No antivirus"], answer: "Employee training" },
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
        { id: 1, question: "Which is malware?", options: ["Trojan", "Firewall", "VPN", "Router"], answer: "Trojan" },
        { id: 2, question: "Which is NOT malware?", options: ["Antivirus", "Ransomware", "Spyware", "Worm"], answer: "Antivirus" },
        { id: 3, question: "What does malware do?", options: ["Harm devices", "Protect files", "Encrypt safely", "Install antivirus"], answer: "Harm devices" },
        { id: 4, question: "Example of ransomware?", options: ["WannaCry", "Google", "Excel", "Chrome"], answer: "WannaCry" },
        { id: 5, question: "Spyware is used for?", options: ["Stealing data", "Gaming", "Music", "Firewalling"], answer: "Stealing data" },
      ],
    },
    {
      level: "Medium",
      questions: [
        { id: 6, question: "Which spreads via USB?", options: ["Worms", "Firewall", "Antivirus", "Backup"], answer: "Worms" },
        { id: 7, question: "Trojan disguises as?", options: ["Legit software", "Antivirus", "VPN", "Router"], answer: "Legit software" },
        { id: 8, question: "What’s adware?", options: ["Malware showing ads", "Firewall", "Encryption tool", "VPN"], answer: "Malware showing ads" },
        { id: 9, question: "Rootkits do what?", options: ["Hide malware", "Block hackers", "Backup files", "Encrypt passwords"], answer: "Hide malware" },
        { id: 10, question: "Keylogger records?", options: ["Keystrokes", "Music", "Videos", "Apps"], answer: "Keystrokes" },
      ],
    },
       {
      level: "Hard",
      questions: [
        { id: 11, question: "Polymorphic malware does?", options: ["Changes form to avoid detection", "Boosts Wi-Fi", "Encrypts backups", "Blocks ads"], answer: "Changes form to avoid detection" },
        { id: 12, question: "Fileless malware hides in?", options: ["RAM", "USB", "PDF", "Router"], answer: "RAM" },
        { id: 13, question: "What does ransomware demand?", options: ["Payment", "Antivirus", "Storage", "Music"], answer: "Payment" },
        { id: 14, question: "Best way to stop malware?", options: ["Antivirus & updates", "Ignore security", "Click links", "Disable firewall"], answer: "Antivirus & updates" },
        { id: 15, question: "Which is NOT malware?", options: ["Firewall", "Worm", "Spyware", "Trojan"], answer: "Firewall" },
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
        { id: 1, question: "Which URL is secure?", options: ["http://example.com", "https://example.com", "ftp://example.com", "file://example.com"], answer: "https://example.com" },
        { id: 2, question: "What does HTTPS stand for?", options: ["HyperText Transfer Secure", "High Tech Text Protocol", "Hyperlink Transfer Setup", "Hyper Tool Service"], answer: "HyperText Transfer Secure" },
        { id: 3, question: "Which website is suspicious?", options: ["paypal.com", "secure-paypal-login.com", "google.com", "microsoft.com"], answer: "secure-paypal-login.com" },
        { id: 4, question: "Why avoid public Wi-Fi?", options: ["Hackers may snoop", "Faster speed", "Low battery", "Free browsing"], answer: "Hackers may snoop" },
        { id: 5, question: "Which browser extension increases security?", options: ["Adblock", "Game booster", "Music player", "Theme changer"], answer: "Adblock" },
      ],
    },
    {
      level: "Medium",
      questions: [
        { id: 6, question: "Which is unsafe to download?", options: [".exe from unknown site", ".pdf from company", ".doc from boss", ".jpg from friend"], answer: ".exe from unknown site" },
        { id: 7, question: "Private browsing prevents?", options: ["Saving history", "Viruses", "Firewalls", "Encryption"], answer: "Saving history" },
        { id: 8, question: "What does a browser warning mean?", options: ["Unsafe site", "Safe site", "Trusted site", "VPN needed"], answer: "Unsafe site" },
        { id: 9, question: "Cookies store?", options: ["User data", "Malware", "Firewalls", "Antivirus"], answer: "User data" },
        { id: 10, question: "Safe practice for passwords?", options: ["Unique per site", "Same everywhere", "Share with friends", "Save in notes"], answer: "Unique per site" },
      ],
    },
      {
      level: "Hard",
      questions: [
        { id: 11, question: "Pharming attack affects?", options: ["DNS to redirect websites", "Wi-Fi speed", "Firewall", "Antivirus"], answer: "DNS to redirect websites" },
        { id: 12, question: "What protects from malicious sites?", options: ["Web filters", "Games", "Music apps", "Themes"], answer: "Web filters" },
        { id: 13, question: "SSL certificate proves?", options: ["Site authenticity", "Faster browsing", "Free storage", "Password length"], answer: "Site authenticity" },
        { id: 14, question: "Which is most dangerous?", options: ["Clicking unknown links", "Reading articles", "Watching YouTube", "Checking news"], answer: "Clicking unknown links" },
        { id: 15, question: "Best way to stay safe online?", options: ["Update browser", "Ignore updates", "Save passwords in text file", "Disable firewall"], answer: "Update browser" },
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
        { id: 1, question: "Which subject looks like phishing?", options: ["Invoice #234", "Urgent: Verify your account", "Meeting Reminder", "Project Plan"], answer: "Urgent: Verify your account" },
        { id: 2, question: "Which attachment is risky?", options: ["report.exe", "notes.pdf", "slides.ppt", "photo.jpg"], answer: "report.exe" },
        { id: 3, question: "Legit email usually comes from?", options: ["Official domain", "Random domain", "Fake website", "Unknown sender"], answer: "Official domain" },
        { id: 4, question: "What should you do with spam?", options: ["Delete or report", "Click links", "Reply back", "Forward"], answer: "Delete or report" },
        { id: 5, question: "What’s suspicious in emails?", options: ["Urgency & threats", "Polite greeting", "Company logo", "Signature"], answer: "Urgency & threats" },
      ],
    },
    {
      level: "Medium",
      questions: [
        { id: 6, question: "What should you NOT click in unknown emails?", options: ["Links", "Reply button", "Forward button", "Save draft"], answer: "Links" },
        { id: 7, question: "Business Email Compromise targets?", options: ["Employees", "Games", "Movies", "Music"], answer: "Employees" },
        { id: 8, question: "Spoofed email looks like?", options: ["From trusted domain", "From fake domain", "From antivirus", "From firewall"], answer: "From fake domain" },
        { id: 9, question: "Safe email practice?", options: ["Verify before clicking", "Click all links", "Ignore grammar", "Download unknown files"], answer: "Verify before clicking" },
        { id: 10, question: "Attachment that can carry malware?", options: [".exe", ".pdf", ".jpg", ".doc"], answer: ".exe" },
      ],
    },
      {
      level: "Hard",
      questions: [
        { id: 11, question: "Spear phishing targets?", options: ["Specific person", "Everyone", "Random users", "Servers"], answer: "Specific person" },
        { id: 12, question: "Whaling attack targets?", options: ["CEOs", "Students", "Gamers", "Musicians"], answer: "CEOs" },
        { id: 13, question: "Phishing filter is part of?", options: ["Email security", "Games", "Music", "Themes"], answer: "Email security" },
        { id: 14, question: "Signs of fake email?", options: ["Spelling mistakes", "Professional writing", "Official logo", "Signature"], answer: "Spelling mistakes" },
        { id: 15, question: "What prevents phishing?", options: ["Awareness & spam filter", "Click links", "Ignore training", "Save passwords"], answer: "Awareness & spam filter" },
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
        { id: 1, question: "What is a safe app source?", options: ["App Store/Play Store", "Random sites", "Email links", "Pop-up ads"], answer: "App Store/Play Store" },
        { id: 2, question: "What should you enable?", options: ["Screen lock", "No lock", "Open Wi-Fi", "Disable updates"], answer: "Screen lock" },
        { id: 3, question: "Which is a mobile threat?", options: ["Malware app", "Official app", "Calculator", "Camera"], answer: "Malware app" },
        { id: 4, question: "Why update apps?", options: ["Fix security bugs", "More ads", "Slow phone", "Change wallpaper"], answer: "Fix security bugs" },
        { id: 5, question: "Safe network to use?", options: ["VPN", "Public Wi-Fi", "Random hotspot", "Open Bluetooth"], answer: "VPN" },
      ],
    },
    {
      level: "Medium",
      questions: [
        { id: 6, question: "What is mobile phishing called?", options: ["Smishing", "Fishing", "Phishing", "Baiting"], answer: "Smishing" },
        { id: 7, question: "Best way to lock device?", options: ["PIN/Password", "No lock", "Swipe only", "Nothing"], answer: "PIN/Password" },
        { id: 8, question: "Which is risky?", options: ["Rooting phone", "Installing updates", "Official apps", "VPN use"], answer: "Rooting phone" },
        { id: 9, question: "What protects data if phone is lost?", options: ["Remote wipe", "No password", "Sharing PIN", "Disabling security"], answer: "Remote wipe" },
        { id: 10, question: "Best practice for Bluetooth?", options: ["Turn off when not used", "Always on", "Share with strangers", "No password"], answer: "Turn off when not used" },
      ],
    },
  {
      level: "Hard",
      questions: [
        { id: 11, question: "Mobile ransomware does?", options: ["Locks device demanding money", "Play music", "Save battery", "Faster Wi-Fi"], answer: "Locks device demanding money" },
        { id: 12, question: "Mobile spyware can?", options: ["Steal messages", "Improve speed", "Add storage", "Play games"], answer: "Steal messages" },
        { id: 13, question: "Best mobile payment safety?", options: ["Use official apps", "Save card info everywhere", "Click unknown links", "Public Wi-Fi payments"], answer: "Use official apps" },
        { id: 14, question: "Zero-day attack means?", options: ["New unknown exploit", "No threat", "Antivirus update", "Safe browsing"], answer: "New unknown exploit" },
        { id: 15, question: "Best mobile security?", options: ["Strong PIN + Updates", "No updates", "Shared passwords", "Public charging"], answer: "Strong PIN + Updates" },
      ],
    },
  ],
},


{
  id: 11,
  icon: "🔑",
  title: "Password Master",
  subtitle: "Learn to build strong passwords",
  tag: "Skills",
  tagClass: "skills",
  componentKey: "PasswordMaster",
  levels: [
    {
      level: "Easy",
      questions: [
        { id: 1, question: "Which is the weakest password?", options: ["123456", "Xy#9aT!", "My$ecure1", "Pa$$word99"], answer: "123456" },
        { id: 2, question: "Which character increases password strength?", options: ["Space", "Special symbols", "Tab key", "Empty field"], answer: "Special symbols" },
        { id: 3, question: "What is a common mistake in passwords?", options: ["Using your name", "Mixing cases", "Adding numbers", "Using @ or !"], answer: "Using your name" },
        { id: 4, question: "Which is best for security?", options: ["dog123", "Summer2024!", "Admin", "Qwerty"], answer: "Summer2024!" },
        { id: 5, question: "How often should passwords be changed?", options: ["Never", "Every few months", "Once in 10 years", "Only if hacked"], answer: "Every few months" },
      ]
    },
    {
      level: "Medium",
      questions: [
        { id: 6, question: "What is password reuse?", options: ["Using same password everywhere", "Typing password twice", "Forgotten passwords", "Saving password in notes"], answer: "Using same password everywhere" },
        { id: 7, question: "Which is safer?", options: ["Pa$$1234", "MyBank#2024", "Password", "12345"], answer: "MyBank#2024" },
        { id: 8, question: "What helps make strong passwords?", options: ["Length & randomness", "Birthday & name", "Pet’s name", "Only numbers"], answer: "Length & randomness" },
        { id: 9, question: "What tool safely stores passwords?", options: ["Password Manager", "Text file", "Sticky note", "Browser history"], answer: "Password Manager" },
        { id: 10, question: "Why avoid dictionary words?", options: ["Easily guessed", "Too long", "Not stylish", "Not memorable"], answer: "Easily guessed" },
      ]
    },
    {
      level: "Hard",
      questions: [
        { id: 11, question: "What is brute force attack?", options: ["Guessing passwords repeatedly", "Encrypting files", "Firewall update", "Installing antivirus"], answer: "Guessing passwords repeatedly" },
        { id: 12, question: "Best way to secure accounts?", options: ["2FA with strong password", "Only password", "Saving in notes", "Password = username"], answer: "2FA with strong password" },
        { id: 13, question: "What is passphrase?", options: ["Long sequence of random words", "A single word password", "PIN number", "Encryption key"], answer: "Long sequence of random words" },
        { id: 14, question: "Which is safest?", options: ["Tr0ub4dor&3", "HorseBatteryStaple$42", "Password123", "Qwerty2025"], answer: "HorseBatteryStaple$42" },
        { id: 15, question: "What’s the danger of short passwords?", options: ["Easily cracked", "Too stylish", "Hard to remember", "Too unique"], answer: "Easily cracked" },
      ]
    }
  ]
},

{
  id: 12,
  icon: "🕵️‍♂️",
  title: "Cyber Detective",
  subtitle: "Solve cyber crime mysteries",
  tag: "Investigation",
  tagClass: "investigation",
  componentKey: "CyberDetective",
  levels: [
    {
      level: "Easy",
      questions: [
        { id: 1, question: "You get an email asking for bank login. What is this?", options: ["Phishing", "Antivirus", "Firewall", "Safe request"], answer: "Phishing" },
        { id: 2, question: "A pop-up says 'You won $1,000, click here'. What is it?", options: ["Scam", "Real offer", "Update", "Friend request"], answer: "Scam" },
        { id: 3, question: "A stranger asks for OTP on call. What should you do?", options: ["Never share", "Give OTP", "Ask for details", "Ignore rules"], answer: "Never share" },
        { id: 4, question: "Which app permission is risky?", options: ["Camera & microphone", "Internet", "Storage", "Calculator"], answer: "Camera & microphone" },
        { id: 5, question: "A link looks suspicious. What should you check?", options: ["URL & HTTPS", "Color of button", "Font style", "Image size"], answer: "URL & HTTPS" },
      ]
    },
    {
      level: "Medium",
      questions: [
        { id: 6, question: "Someone asks you to pay gift cards online. This is?", options: ["Fraud", "Safe trade", "Banking", "Job offer"], answer: "Fraud" },
        { id: 7, question: "What does malware do?", options: ["Damage systems", "Clean PC", "Update OS", "Speed up phone"], answer: "Damage systems" },
        { id: 8, question: "Which is a real cyber crime?", options: ["Identity theft", "Car racing", "Board game", "Cooking"], answer: "Identity theft" },
        { id: 9, question: "Best way to detect phishing?", options: ["Check sender & link", "Click fast", "Trust all emails", "Ignore spelling"], answer: "Check sender & link" },
        { id: 10, question: "What is spear phishing?", options: ["Targeted phishing", "Fishing in river", "Fake antivirus", "VPN attack"], answer: "Targeted phishing" },
      ]
    },
    {
      level: "Hard",
      questions: [
        { id: 11, question: "A hacker locks your files & asks money. This is?", options: ["Ransomware", "Firewall", "Encryption", "Backup"], answer: "Ransomware" },
        { id: 12, question: "What is whaling attack?", options: ["Targeting CEOs", "Fishing whales", "Attacking routers", "DDoS"], answer: "Targeting CEOs" },
        { id: 13, question: "What is spoofing?", options: ["Fake identity", "Encryption", "Antivirus", "VPN usage"], answer: "Fake identity" },
        { id: 14, question: "Which scam involves fake tech support?", options: ["Tech support scam", "Antivirus", "Firewall", "Encryption"], answer: "Tech support scam" },
        { id: 15, question: "Which file is suspicious?", options: ["resume.docx.exe", "notes.txt", "report.pdf", "image.jpg"], answer: "resume.docx.exe" },
      ]
    }
  ]
}

];
