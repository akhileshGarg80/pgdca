import { Subject } from '../types';

export const SEM1_SUBJECTS: Subject[] = [
  {
    id: '1pgdca1',
    sem: 1,
    code: '1PGDCA1',
    name: 'Computer Fundamentals & AI Concepts',
    shortName: 'Fundamentals & AI',
    theory: 70,
    practical: 30,
    internal: 0,
    total: 100,
    questions: [
      {
        id: 101,
        qNum: 1,
        unit: 'Unit I',
        question: 'Computer System के Block Diagram और मुख्य Components (ALU, CU, Memory, I/O) को समझाइए।',
        marks: 10,
        answerSummary: 'Computer System एक इलेक्ट्रॉनिक प्रणाली है जो Input ग्रहण कर Central Processing Unit (CPU) द्वारा Process करके Output और Storage प्रदान करती है।',
        points: [
          'Input Unit: Keyboard, Mouse इत्यादि द्वारा Raw Data और Instructions को Computer में इनपुट कराया जाता है।',
          'Control Unit (CU): यह कंप्यूटर का "नर्वस सिस्टम" है जो सभी ऑपरेशन्स, सिग्नल्स और डेटा फ्लो को नियंत्रित और निर्देशित करता है।',
          'Arithmetic Logic Unit (ALU): गणितीय गणनाएं (+, -, *, /) और तार्किक तुलनाएं (>, <, ==, !=) निष्पादित करता है।',
          'Memory/Storage Unit: Primary Memory (RAM, Cache) वर्तमान रनिंग प्रोग्राम्स को रखती है जबकि Secondary Storage (HDD, SSD) स्थायी डेटा सुरक्षित रखती है।',
          'Output Unit: Processed Information को Monitor, Printer आदि पर प्रदर्शित करती है।'
        ],
        keyTerms: ['CPU Architecture', 'ALU & Control Unit', 'Registers', 'Data Flow'],
        examTip: 'परीक्षा में CPU, CU, ALU, Input, Output और Memory को दर्शाने वाला स्वच्छ ब्लॉक डायग्राम जरूर बनाएं।'
      },
      {
        id: 102,
        qNum: 2,
        unit: 'Unit I',
        question: 'Computer Memory के वर्गीकरण (Primary vs Secondary Memory, RAM, ROM, Cache, SSD) का वर्णन करें।',
        marks: 8,
        answerSummary: 'मेमोरी कंप्यूटर का वह भाग है जहां डेटा और निर्देश संग्रहित रहते हैं। इसे मुख्य रूप से Primary (Main) और Secondary (Auxiliary) मेमोरी में बांटा गया है।',
        points: [
          'Primary Memory (Volatile): RAM (Random Access Memory) एक अस्थायी वोलेटाइल मेमोरी है, जिसमें सिस्टम बंद होते ही डेटा नष्ट हो जाता है। इसके प्रकार SRAM और DRAM हैं।',
          'ROM (Read Only Memory): नॉन-वोलेटाइल मेमोरी है जिसमें BIOS और बूटस्ट्रैप लोडर प्रोग्राम्स स्टोर होते हैं (PROM, EPROM, EEPROM)।',
          'Cache Memory: CPU और RAM के बीच हाई-स्पीड बफर मेमोरी होती है जो बार-बार इस्तेमाल होने वाले डेटा को रखती है (L1, L2, L3)।',
          'Secondary Storage (Non-Volatile): HDD (Magnetic Disk) और SSD (Solid State Drive जो flash-based व बहुत तेज होती है), पेन ड्राइव और क्लाउड स्टोरेज।'
        ],
        keyTerms: ['Volatile vs Non-Volatile', 'SRAM & DRAM', 'BIOS', 'SSD NVMe'],
        examTip: 'RAM और ROM के बीच 4-5 कॉलम वाला अंतर (Difference table) लिखने से पूरे अंक मिलते हैं।'
      },
      {
        id: 103,
        qNum: 3,
        unit: 'Unit II',
        question: 'Input Devices क्या हैं? Optical Devices (Scanner, OCR, OMR, MICR, Barcode & QR Reader) को विस्तार से समझाइए।',
        marks: 8,
        answerSummary: 'इनपुट डिवाइस वे हार्डवेयर उपकरण हैं जिनके माध्यम से उपयोगकर्ता कंप्यूटर को निर्देश और डेटा प्रदान करता है।',
        points: [
          'Scanner: किसी भी प्रिंटेड पेपर, फोटो या दस्तावेज को डिजिटल इमेज (JPEG/PDF) में बदलने वाला डिवाइस।',
          'OCR (Optical Character Recognition): प्रिंटेड या हस्तलिखित टेक्स्ट को एडिटेबल डिजिटल टेक्स्ट में स्कैन करता है।',
          'OMR (Optical Mark Reader): प्रतियोगी परीक्षाओं में गोलों (marks) से भरी Answer Sheet को पेंसिल/पेन की रोशनी रिफ्लेक्शन से जांचता है।',
          'MICR (Magnetic Ink Character Recognition): बैंक चेक के नीचे चुंबकीय स्याही से लिखे 9-अंकीय कोड को तेजी और सुरक्षित रूप से पढ़ता है।',
          'Barcode & QR Code Reader: बारकोड में 1D वर्टिकल लाइन्स और QR कोड में 2D मैट्रिक्स डेटा को ऑप्टिकल लेजर या कैमरे से तुरंत डिकोड करता है।'
        ],
        keyTerms: ['OCR', 'OMR', 'MICR Check Processing', 'QR Matrix'],
        examTip: 'प्रत्येक ऑप्टिकल डिवाइस का वास्तविक उदाहरण (जैसे OMR Exam, MICR Bank Cheque) जरूर लिखें।'
      },
      {
        id: 104,
        qNum: 4,
        unit: 'Unit II',
        question: 'Monitors और Printers के प्रकार समझाइए। Impact vs Non-Impact Printers में क्या अंतर है?',
        marks: 8,
        answerSummary: 'Output Devices कंप्यूटर के डिजिटल डेटा को मनुष्य के समझने योग्य रूप में प्रस्तुत करते हैं। मॉनिटर सॉफ्ट-कॉपी और प्रिंटर हार्ड-कॉपी प्रदान करता है।',
        points: [
          'Monitors: LED, LCD, OLED स्क्रीन। मुख्य मानक: Resolution (DPI/Pixels), Refresh Rate (60Hz-144Hz) और Aspect Ratio (16:9)।',
          'Impact Printers: पेपर पर रिबन से टकराकर प्रिंट करते हैं; आवाज अधिक करते हैं और गति धीमी होती है (उदा. Dot Matrix, Daisy Wheel, Line Printer)।',
          'Non-Impact Printers: बिना पेपर को छुए स्याही या लेजर तकनीक से प्रिंट करते हैं; शांत, तेज और उच्च गुणवत्ता वाले होते हैं।',
          'Laser Printer: टोनर (सूखा पाउडर) और लेजर बीम तकनीक से उच्च गुणवत्ता के पृष्ठ तेजी से प्रिंट करता है।',
          'Inkjet Printer: लिक्विड इंक कार्ट्रिज के सूक्ष्म छिद्रों से स्प्रे करके रंगीन प्रिंट निकालता है।'
        ],
        keyTerms: ['Impact vs Non-Impact', 'Dot Matrix', 'Laser Toner', 'DPI & Resolution'],
        examTip: 'Impact और Non-Impact के अंतर की टेबल अवश्य बनाएं।'
      },
      {
        id: 105,
        qNum: 5,
        unit: 'Unit III',
        question: 'Software क्या है? System Software, Application Software और Language Translators (Compiler, Interpreter, Assembler) को समझाइए।',
        marks: 10,
        answerSummary: 'सॉफ्टवेयर प्रोग्रामों और निर्देशों का समूह है जो कंप्यूटर हार्डवेयर को बताता है कि कौन सा कार्य किस प्रकार करना है।',
        points: [
          'System Software: हार्डवेयर को प्रबंधित और संचालित करता है (उदा. Windows 11, Linux, Device Drivers, Utility Programs)।',
          'Application Software: उपयोगकर्ता की विशेष जरूरतों को पूरा करता है (उदा. MS Office, Tally, Photoshop, Web Browsers)।',
          'Assembler: Assembly Language (Mnemonics) को मशीन कोड (0 और 1) में बदलता है।',
          'Compiler: पूरे High-Level Source Code (C, C++, Java) को एक साथ पढ़कर मशीन कोड में बदलता है और त्रुटियों की सूची देता है।',
          'Interpreter: प्रोग्राम को लाइन-दर-लाइन पढ़ता और निष्पादित करता है (उदा. Python, JavaScript)। त्रुटि मिलने पर तुरंत रुक जाता है।'
        ],
        keyTerms: ['System vs Application', 'Compiler vs Interpreter', 'Machine Code'],
        examTip: 'Compiler और Interpreter में मुख्य 4 अंतर साफ-साफ पॉइंट्स में लिखें।'
      },
      {
        id: 106,
        qNum: 6,
        unit: 'Unit III',
        question: 'Number Systems (Binary, Octal, Decimal, Hexadecimal) और Character Codes (ASCII, Unicode) को समझाइए।',
        marks: 8,
        answerSummary: 'कंप्यूटर आंतरिक रूप से सभी डेटा को संख्याओं के रूप में प्रस्तुत करता है। नंबर सिस्टम्स का आधार (Radix/Base) अलग-अलग होता है।',
        points: [
          'Decimal (Base 10): अंक 0 से 9। यह मनुष्यों द्वारा दैनिक जीवन में प्रयोग किया जाता है।',
          'Binary (Base 2): अंक 0 और 1 (Bits)। कंप्यूटर हार्डवेयर इसी डिजिटल स्टेट (On/Off) पर कार्य करता है।',
          'Octal (Base 8): अंक 0 से 7। बाइनरी के 3-बिट समूह को प्रदर्शित करने में प्रयुक्त।',
          'Hexadecimal (Base 16): अंक 0-9 और अक्षर A-F। बाइनरी के 4-बिट समूह और मेमोरी एड्रेस के लिए आदर्श।',
          'ASCII Code: 7 या 8 बिट का कोड जो अंग्रेजी अक्षरों और सिंबल्स को 0-127/255 कोड देता है।',
          'Unicode: 16 या 32 बिट का वैश्विक मानक जो हिंदी (देवनागरी), चीनी, अरबी सहित दुनिया की सभी भाषाओं को सपोर्ट करता है।'
        ],
        keyTerms: ['Base 2, 8, 10, 16', 'Radix', 'ASCII 7-bit', 'Unicode UTF-8'],
        examTip: 'एक छोटा कन्वर्शन उदाहरण (जैसे Decimal 25 to Binary 11001) कॉपी में हल करके दिखाएं।'
      },
      {
        id: 107,
        qNum: 7,
        unit: 'Unit IV',
        question: 'Data Communication क्या है? Simplex, Half-Duplex, Full-Duplex और Transmission Media (Guided vs Unguided) को समझाइए।',
        marks: 8,
        answerSummary: 'दो या दो से अधिक नोड्स के बीच ट्रांसमिशन माध्यम द्वारा डेटा या सूचना के आदान-प्रदान की प्रक्रिया को डेटा कम्युनिकेशन कहते हैं।',
        points: [
          'Simplex: डेटा का प्रवाह केवल एक ही दिशा में होता है (उदा. TV/Radio प्रसारण, Keyboard to CPU)।',
          'Half-Duplex: डेटा दोनों दिशाओं में जा सकता है लेकिन एक समय में केवल एक ही दिशा में (उदा. Walkie-Talkie)।',
          'Full-Duplex: डेटा दोनों दिशाओं में एक साथ प्रवाहित हो सकता है (उदा. Mobile Telephone Call)।',
          'Guided (Wired) Media: ट्विस्टेड पेयर केबल (LAN), कोएक्सियल केबल (TV Cable), और फाइबर ऑप्टिक केबल (प्रकाश तरंगों द्वारा तीव्र गति)।',
          'Unguided (Wireless) Media: रेडियो तरंगें, माइक्रोवेव, इन्फ्रारेड, सैटेलाइट और Wi-Fi।'
        ],
        keyTerms: ['Transmission Modes', 'Fiber Optic', 'Guided vs Unguided', 'Bandwidth'],
        examTip: 'तीनों मोड्स के लिए दिशा तीर (Arrows) का सरल आरेख बनाएं।'
      },
      {
        id: 108,
        qNum: 8,
        unit: 'Unit IV',
        question: 'Computer Networks (LAN, MAN, WAN) और Network Connecting Devices (Hub, Switch, Router, Gateway) पर टिप्पणी लिखें।',
        marks: 8,
        answerSummary: 'कंप्यूटर नेटवर्क कई कंप्यूटरों का आपस में जुड़ाव है ताकि रिसोर्स शेयरिंग (प्रिंटर, फाइल, इंटरनेट) संभव हो सके।',
        points: [
          'LAN (Local Area Network): एक कमरे, लैब या भवन की छोटी भौगोलिक सीमा (1-2 किमी) तक सीमित।',
          'MAN (Metropolitan Area Network): पूरे शहर या कस्बे में फैला नेटवर्क (उदा. केबल टीवी नेटवर्क)।',
          'WAN (Wide Area Network): देश, महाद्वीप या पूरे विश्व में फैला नेटवर्क (उदा. Internet)।',
          'Hub & Switch: Hub ब्रॉडकास्ट डिवाइस है जो डेटा सभी पोर्ट्स पर भेजता है; Switch बुद्धिमान डिवाइस है जो MAC एड्रेस देखकर केवल सही पोर्ट पर भेजता है।',
          'Router: विभिन्न नेटवर्कों को जोड़ता है और IP पैकेट्स को बेस्ट रूट से भेजता है।',
          'Gateway: दो भिन्न प्रोटोकॉल वाले नेटवर्कों के बीच अनुवादक का कार्य करता है।'
        ],
        keyTerms: ['LAN/MAN/WAN', 'Switch vs Hub', 'Router Packet Routing', 'Gateway'],
        examTip: 'Hub और Switch के बीच का अंतर अक्सर लघु उत्तरीय प्रश्न में पूछा जाता है।'
      },
      {
        id: 109,
        qNum: 9,
        unit: 'Unit V',
        question: 'Artificial Intelligence (AI) क्या है? इसके प्रकार (Narrow, General, Super AI) और दैनिक जीवन में अनुप्रयोग बताइए।',
        marks: 10,
        answerSummary: 'Artificial Intelligence (कृत्रिम बुद्धिमत्ता) कंप्यूटर साइंस की वह शाखा है जो मशीनों को इंसानों की तरह सोचने, सीखने, निर्णय लेने और समस्या हल करने में सक्षम बनाती है।',
        points: [
          'Narrow AI (Weak AI): किसी एक विशिष्ट कार्य के लिए प्रशिक्षित, जैसे Apple Siri, Google Maps, शतरंज इंजन। वर्तमान का सारा AI यही है।',
          'General AI (AGI): इंसान के समान किसी भी बौद्धिक कार्य को करने की क्षमता (वर्तमान में रिसर्च जारी है)।',
          'Super AI: इंसानी बुद्धिमत्ता से भी अधिक कुशल और स्व-जागरूक काल्पनिक स्तर।',
          'मुख्य अनुप्रयोग: स्वास्थ्य (रोग निदान, मेडिकल स्कैन), शिक्षा (व्यक्तिगत ट्यूटर), ऑटोमोबाइल (टेस्ला सेल्फ-ड्राइविंग कार), ई-कॉमर्स (सिफारिश प्रणाली), वित्त (फ्रॉड डिटेक्शन)।',
          'सीमाएं व चुनौतियां: रोजगार पर प्रभाव, डेटा गोपनीयता, एथिकल बायस और अत्यधिक बिजली व कंप्यूटिंग की आवश्यकता।'
        ],
        keyTerms: ['Narrow AI vs AGI', 'Machine Learning', 'Computer Vision', 'Ethical AI'],
        examTip: 'AI के लाभ और सीमाओं (Advantages & Limitations) के अलग-अलग बुलेट पॉइंट्स बनाएं।'
      },
      {
        id: 110,
        qNum: 10,
        unit: 'Unit V',
        question: 'Machine Learning, Generative AI, Chatbots (ChatGPT, Copilot, Gemini) और Voice Assistants की कार्यप्रणाली समझाइए।',
        marks: 8,
        answerSummary: 'मशीन लर्निंग AI का उप-क्षेत्र है जो डेटा और अल्गोरिदम का उपयोग करके बिना स्पष्ट कोडिंग के पैटर्न सीखता है और भविष्यवाणी करता है।',
        points: [
          'Machine Learning के प्रकार: Supervised (लेबल डेटा), Unsupervised (अलेबल्ड क्लस्टरिंग), और Reinforcement Learning (रिवार्ड-आधारित)।',
          'Generative AI: यह नया कंटेंट (टेक्स्ट, कोड, इमेज, ऑडियो) उत्पन्न करने वाली तकनीक है जो Large Language Models (LLMs) पर आधारित है।',
          'Chatbots & LLMs: ChatGPT, Google Gemini, Microsoft Copilot ट्रांसफार्मर आर्किटेक्चर द्वारा प्राकृतिक भाषा (NLP) को समझते और उत्तर तैयार करते हैं।',
          'Voice Assistants: Siri, Alexa, Google Assistant ध्वनि तरंगों को टेक्स्ट (STT) में बदलकर कमांड निष्पादित करते हैं।',
          'ऑफिस में AI: ईमेल ड्राफ्टिंग, रिपोर्ट सारांश, एक्सेल फॉर्मूला बनाना और स्लाइड प्रजेंटेशन तैयार करना।'
        ],
        keyTerms: ['Supervised/Unsupervised', 'Large Language Models', 'NLP', 'Copilot'],
        examTip: 'ChatGPT और Gemini के व्यावहारिक उपयोग का उदाहरण लिखकर उत्तर को आधुनिक बनाएं।'
      }
    ]
  },
  {
    id: '1pgdca2',
    sem: 1,
    code: '1PGDCA2',
    name: 'PC Packages with AI Essentials',
    shortName: 'PC Packages & Office',
    theory: 70,
    practical: 20,
    internal: 30,
    total: 120,
    questions: [
      {
        id: 111,
        qNum: 1,
        unit: 'Unit I',
        question: 'Windows 11 के मुख्य फीचर्स, Desktop Personalization, Taskbar, Control Panel और Settings को समझाइए।',
        marks: 8,
        answerSummary: 'Windows 11 माइक्रोसॉफ्ट का आधुनिक GUI-आधारित ऑपरेटिंग सिस्टम है जो नया सेंटर्ड टास्कबार, विगेट्स, स्नैप लेआउट्स और उच्च सुरक्षा प्रदान करता है।',
        points: [
          'Desktop Personalization: Themes, Wallpapers, Dark/Light Mode, Accent Colors और Lock Screen को कस्टमाइज करने की सुविधा।',
          'Start Menu & Taskbar: नया सेंटर्ड डिज़ाइन, पिन किए गए ऐप्स और रीसेंट फाइल्स की त्वरित सूची।',
          'Snap Layouts & Snap Groups: स्क्रीन पर मल्टी-टास्किंग के लिए 2, 3 या 4 विंडोज को व्यवस्थित करने की सुविधा।',
          'Control Panel vs Settings App: सिस्टम हार्डवेयर, नेटवर्क, अकाउंट्स, ऐप्स और विंडोज अपडेट्स को कॉन्फ़िगर करना।',
          'Accessories: Paint (Cocreator AI सहित), Notepad (Tabs सपोर्ट), WordPad, Snipping Tool और Calculator।'
        ],
        keyTerms: ['Snap Layouts', 'GUI Operating System', 'Task Manager', 'Personalization'],
        examTip: 'Snap Layouts और Control Panel के फंक्शन्स को बिंदुवार लिखें।'
      },
      {
        id: 112,
        qNum: 2,
        unit: 'Unit I',
        question: 'File और Folder Management, Shortcuts, Recycle Bin और Windows में AI Tools (Copilot) का उपयोग समझाइए।',
        marks: 8,
        answerSummary: 'विंडोज में फाइल्स और डायरेक्ट्रीज का व्यवस्थित प्रबंधन File Explorer द्वारा किया जाता है।',
        points: [
          'File Explorer: फाइल्स का नेविगेशन, Cut, Copy, Paste (Ctrl+X, C, V), Rename, Properties और सर्च ऑपरेशन्स।',
          'Shortcuts: किसी फाइल या प्रोग्राम का पॉइंटर आइकन जो डेस्कटॉप पर त्वरित एक्सेस प्रदान करता है।',
          'Recycle Bin: हटाई गई फाइलों का अस्थायी स्टोरेज। इसे Restore किया जा सकता है या Empty करके स्थायी रूप से डिलीट किया जा सकता है।',
          'Windows Copilot: विंडोज 11 में इनबिल्ट AI असिस्टेंट जो सेटिंग्स बदलने, स्क्रीनशॉट का विश्लेषण करने और वेब सर्च में मदद करता है।',
          'AI Productivity Tools: ChatGPT, Notion AI, Gemini का उपयोग ऑफिस कार्यों में तेजी लाने के लिए।'
        ],
        keyTerms: ['File Explorer', 'Recycle Bin', 'Shortcuts', 'Windows Copilot'],
        examTip: 'File Explorer के मुख्य शॉर्टकट कीज (Ctrl+C, Ctrl+V, F2, Del, Shift+Del) अवश्य लिखें।'
      },
      {
        id: 113,
        qNum: 3,
        unit: 'Unit II',
        question: 'MS Word 2019 का परिचय दें। Ribbon, Toolbars, Page Setup, Margins, Headers & Footers को समझाइए।',
        marks: 8,
        answerSummary: 'MS Word एक शक्तिशाली वर्ड प्रोसेसिंग सॉफ्टवेयर है जिसका उपयोग पत्र, रिपोर्ट, रिज्यूम और किताबें तैयार करने के लिए किया जाता है।',
        points: [
          'Ribbon System: Tabs (Home, Insert, Layout, References, Review, View) और Groups (Clipboard, Font, Paragraph) में विभाजित इंटरफेस।',
          'Quick Access Toolbar: अक्सर इस्तेमाल होने वाले टूल्स (Save, Undo, Redo) को एक क्लिक पर उपलब्ध कराता है।',
          'Page Setup: Page Size (A4, Letter), Orientation (Portrait vs Landscape), Columns और Margins (Normal, Narrow, Custom)।',
          'Header & Footer: प्रत्येक पृष्ठ के शीर्ष (शीर्षक, लोगो) और पाद (पेज नंबर, तारीख) पर स्वचालित रूप से दिखाई देने वाली सामग्री।',
          'Text Formatting: Font Family, Font Size, Bold, Italic, Underline, Subscript, Superscript और Paragraph Alignment।'
        ],
        keyTerms: ['Ribbon Interface', 'Page Orientation', 'Header & Footer', 'Margins'],
        examTip: 'Page Setup डायलॉग बॉक्स के मुख्य ऑप्शन्स (Margins, Paper, Layout) का उल्लेख करें।'
      },
      {
        id: 114,
        qNum: 4,
        unit: 'Unit II',
        question: 'MS Word में Mail Merge क्या है? इसके मुख्य घटक (Main Document, Data Source, Merge Document) और स्टेप्स समझाइए।',
        marks: 10,
        answerSummary: 'Mail Merge एमएस वर्ड की एक अत्यंत उपयोगी सुविधा है जिसके द्वारा एक ही पत्र या आमंत्रण को अलग-अलग नामों और पतों वाले अनेक प्राप्तकर्ताओं को एक साथ भेजा जा सकता है।',
        points: [
          'Main Document: वह मुख्य पत्र या दस्तावेज जिसमें वह टेक्स्ट होता है जो सभी प्राप्तकर्ताओं के लिए समान रहता है।',
          'Data Source (Mailing List): प्राप्तकर्ताओं के व्यक्तिगत विवरण (Name, Address, City, Phone) की टेबल जो Word, Excel या Access में स्टोर होती है।',
          'Merge Document (Merged Fields): वह अंतिम दस्तावेज जहां Main Doc और Data Source को मिलाकर हर व्यक्ति का अलग-अलग पत्र जनरेट होता है।',
          'Mail Merge के चरण: 1. Start Mail Merge (Letters) चुनें, 2. Select Recipients (Type New List या Existing File), 3. Insert Merge Fields (Name, City आदि), 4. Preview Results देखें, 5. Finish & Merge पर क्लिक करके Print या Edit Individual Docs करें।',
          'Envelopes & Labels: लिफाफों और लेबल्स पर स्वचालित प्रिंटिंग में उपयोगी।'
        ],
        keyTerms: ['Main Document', 'Data Source', 'Merge Fields', 'Step-by-Step Wizard'],
        examTip: 'Mail Merge के 5 स्टेप्स को हेडिंग डालकर क्रमबद्ध (Sequential) रूप में लिखें।'
      },
      {
        id: 115,
        qNum: 5,
        unit: 'Unit III',
        question: 'MS Word में Graphics (SmartArt, Shapes, WordArt, Drop Cap) और Macros के उपयोग को समझाइए।',
        marks: 8,
        answerSummary: 'दस्तावेज को आकर्षक और विजुअल रूप से प्रभावी बनाने के लिए एमएस वर्ड विभिन्न ग्राफिक्स और ऑटोमेशन टूल्स प्रदान करता है।',
        points: [
          'SmartArt: प्रोसेस फ्लो, ऑर्गनाइजेशन चार्ट, हाइरार्की और पिरामिड आरेख बनाने के लिए पूर्व-निर्मित ग्राफिक्स।',
          'Shapes & WordArt: ज्यामितीय आकृतियां (Rectangle, Arrow, Callouts) और स्टाइलिश 3D सजावटी टेक्स्ट इफेक्ट्स।',
          'Drop Cap: पैराग्राफ के पहले अक्षर को बड़ा और स्टाइलिश बनाने की पत्रिका-शैली की सुविधा (Dropped / In Margin)।',
          'Macros: बार-बार किए जाने वाले कीबोर्ड और माउस क्रियाओं को रिकॉर्ड करके एक शॉर्टकट की से दोबारा रन करने वाला ऑटोमेशन टूल।',
          'AI Grammar Checking: वर्ड में एडवांस्ड एडिटर और AI टूल्स द्वारा व्याकरण, टोन और संक्षिप्तता के सुझाव प्राप्त करना।'
        ],
        keyTerms: ['SmartArt', 'Drop Cap', 'Macro Recording', 'VBA Automation'],
        examTip: 'Macro रिकॉर्ड करने के चरण (View Tab -> Record Macro -> Assign Shortcut -> Stop) लिखें।'
      },
      {
        id: 116,
        qNum: 6,
        unit: 'Unit IV',
        question: 'MS Excel 2019: Workbook, Worksheet, Data Types, Cell Referencing (Relative, Absolute, Mixed) को समझाइए।',
        marks: 10,
        answerSummary: 'MS Excel एक शक्तिशाली स्प्रेडशीट सॉफ्टवेयर है जिसका उपयोग डेटा एनालिसिस, अकाउंटिंग, सांख्यिकी और ग्राफिकल प्रेजेंटेशन में होता है।',
        points: [
          'Workbook vs Worksheet: वर्कबुक एक एक्सेल फाइल (.xlsx) है, जिसके अंदर कई शीट्स (ग्रिड ऑफ रो और कॉलम) हो सकती हैं।',
          'Cells & Data Types: Row (1, 2, 3...) और Column (A, B, C...) का प्रतिच्छेदन Cell कहलाता है। डेटा प्रकार: Text, Number, Date, Currency, Boolean।',
          'Relative Referencing: फॉर्मूला कॉपी करने पर सेल का पता सापेक्ष रूप से बदल जाता है (उदा. =A1+B1 नीचे खींचने पर =A2+B2 बन जाता है)।',
          'Absolute Referencing: डॉलर ($) चिह्न लगाकर रो और कॉलम को लॉक किया जाता है ताकि कॉपी करने पर पता न बदले (उदा. =$A$1*B2)।',
          'Mixed Referencing: या तो केवल रो या केवल कॉलम को लॉक किया जाता है (उदा. =$A1 या =A$1)।'
        ],
        keyTerms: ['Relative Referencing', 'Absolute ($A$1)', 'Mixed Referencing', 'Worksheet Grid'],
        examTip: 'तीनों Cell Referencing के बीच का अंतर उदाहरण सहित सूत्र लिखकर स्पष्ट करें।'
      },
      {
        id: 117,
        qNum: 7,
        unit: 'Unit IV',
        question: 'Excel के महत्वपूर्ण Formulas और Functions (SUM, AVERAGE, IF, VLOOKUP, COUNTIF) तथा Charts को समझाइए।',
        marks: 10,
        answerSummary: 'एक्सेल में गणनाएं स्वतः करने के लिए फॉर्मूले (= से शुरू) और इनबिल्ट फंक्शन्स दिए गए हैं।',
        points: [
          'SUM & AVERAGE: संख्याओं का योग और औसत ज्ञात करता है (उदा. =SUM(A1:A10), =AVERAGE(B1:B10))।',
          'IF Function: तार्किक शर्त की जांच करता है (उदा. =IF(C2>=40, "Pass", "Fail"))।',
          'VLOOKUP: किसी टेबल के पहले कॉलम में मान ढूंढकर उसी पंक्ति के संबंधित कॉलम का मान लाता है (उदा. =VLOOKUP(101, A2:D50, 2, FALSE))।',
          'COUNTIF: दी गई शर्त के अनुसार सेल्स की संख्या गिनता है (उदा. =COUNTIF(D2:D50, ">1000"))।',
          'Charts & Visuals: डेटा को बार, कॉलम, पाई, और लाइन चार्ट द्वारा ग्राफिकल रूप में प्रस्तुत करना।',
          'AI in Excel: "Analyze Data" फीचर द्वारा एक्सेल में स्वतः इनसाइट्स और समरी चार्ट्स तैयार होना।'
        ],
        keyTerms: ['VLOOKUP', 'IF Condition', 'Chart Types', 'Formula Syntax'],
        examTip: 'प्रत्येक फंक्शन का सिंटैक्स (Syntax) और एक छोटा उदाहरण अनिवार्य रूप से लिखें।'
      },
      {
        id: 118,
        qNum: 8,
        unit: 'Unit V',
        question: 'MS PowerPoint 2019: Presentation बनाना, Slide Views (Normal, Slide Sorter, Slide Show) को समझाइए।',
        marks: 8,
        answerSummary: 'PowerPoint एक प्रेजेंटेशन सॉफ्टवेयर है जिसकी मदद से स्लाइड्स, ऑडियो, वीडियो और एनिमेशन के माध्यम से विचारों को प्रभावी ढंग से प्रस्तुत किया जाता है।',
        points: [
          'Presentation Creation: Blank Presentation या पूर्व-निर्मित Templates और Themes से नई स्लाइड बनाना।',
          'Normal View: मुख्य एडिटिंग व्यू जहां स्लाइड, आउटलाइन पेन और नोट्स क्षेत्र एक साथ दिखते हैं।',
          'Slide Sorter View: सभी स्लाइड्स थंबनेल के रूप में दिखती हैं; स्लाइड्स का क्रम बदलने और डिलीट करने में श्रेष्ठ।',
          'Reading & Slide Show View: फुल स्क्रीन पर दर्शकों को प्रेजेंटेशन प्रस्तुत करने के लिए (F5 = शुरू से, Shift+F5 = वर्तमान स्लाइड से)।',
          'Notes Page View: वक्ता (Speaker) के लिए नोट्स और संदर्भ बिंदु लिखने के लिए व्यू।'
        ],
        keyTerms: ['Slide Sorter', 'Slide Master', 'Speaker Notes', 'F5 Slide Show'],
        examTip: 'Normal View और Slide Sorter View के कार्य को अलग-अलग हेडिंग में लिखें।'
      },
      {
        id: 119,
        qNum: 9,
        unit: 'Unit V',
        question: 'PowerPoint में Transitions, Animations, Slide Master और Handouts की सेटिंग्स को विस्तार से समझाइए।',
        marks: 8,
        answerSummary: 'प्रेजेंटेशन को जीवंत और पेशेवर बनाने के लिए स्लाइड ट्रांजिशन और ऑब्जेक्ट एनिमेशन का उपयोग किया जाता है।',
        points: [
          'Slide Transitions: एक स्लाइड से दूसरी स्लाइड पर जाने के दौरान दिखने वाला मोशन इफेक्ट (Fade, Push, Wipe, Morph)।',
          'Custom Animation: किसी स्लाइड के अंदर मौजूद टेक्स्ट, इमेज या शेप पर लागू होने वाले इफेक्ट्स (Entrance, Emphasis, Exit, Motion Paths)।',
          'Timing & Triggers: एनिमेशन कब शुरू हो (On Click, With Previous, After Previous) और उसकी अवधि (Duration)।',
          'Slide Master: प्रेजेंटेशन की सभी स्लाइड्स के लेआउट, बैकग्राउंड, फॉन्ट और लोगो को एक ही जगह से नियंत्रित करने वाला मास्टर टेम्पलेट।',
          'Handouts & Printing: श्रोताओं को बांटने के लिए एक पेज पर 2, 3, 6 या 9 स्लाइड्स प्रिंट करना।'
        ],
        keyTerms: ['Transition vs Animation', 'Slide Master', 'Morph Effect', 'Handouts'],
        examTip: 'Transition (स्लाइड लेवल) और Animation (ऑब्जेक्ट लेवल) में अंतर स्पष्ट करें।'
      },
      {
        id: 120,
        qNum: 10,
        unit: 'Unit V',
        question: 'AI Presentation Tools (Canva AI, Gamma, Beautiful.ai) और AI-powered Slide Design की प्रक्रिया समझाइए।',
        marks: 8,
        answerSummary: 'आधुनिक दौर में AI टूल्स प्रॉम्प्ट दर्ज करते ही पूरी प्रेजेंटेशन, लेआउट्स, सामग्री और संबंधित इमेजेस स्वतः तैयार कर देते हैं।',
        points: [
          'Gamma App & Tome: केवल एक विषय या रूपरेखा (outline) देने पर आकर्षक स्लाइड्स, हेडिंग और पैराग्राफ्स का निर्माण करता है।',
          'Canva Magic Design: टेक्स्ट प्रॉम्प्ट से टेम्पलेट, रंग और ग्राफिक मैचिंग के साथ रेडी-टू-यूज प्रेजेंटेशन बनाना।',
          'Beautiful.ai: स्मार्ट स्लाइड्स जो कंटेंट डालने पर स्वतः एलाइनमेंट और स्पेसिंग को एडजस्ट कर लेती हैं।',
          'Microsoft Copilot in PowerPoint: वर्ड डॉक्यूमेंट से सीधे पावरपॉइंट डेक तैयार करना या किसी टॉपिक पर बुलेट पॉइंट्स जनरेट करना।',
          'पारंपरिक बनाम AI प्रेजेंटेशन: घंटों का काम मिनटों में पूरा होना, उच्च विजुअल अपील और आसान संपादन।'
        ],
        keyTerms: ['Gamma App', 'Canva Magic Design', 'Prompt-to-Presentation', 'Copilot PPT'],
        examTip: 'AI टूल्स के लाभ (समय की बचत, ऑटो लेआउट) को संक्षेप में स्पष्ट करें।'
      }
    ]
  },
  {
    id: '1pgdca3',
    sem: 1,
    code: '1PGDCA3 (A)',
    name: 'Digital Publishing: PageMaker, Photoshop & InDesign',
    shortName: 'DTP & Graphics',
    theory: 70,
    practical: 20,
    internal: 30,
    total: 120,
    questions: [
      {
        id: 121,
        qNum: 1,
        unit: 'Unit I',
        question: 'Desktop Publishing (DTP) क्या है? इसके महत्व, कार्यक्षेत्र (Scope) और Newspaper Printing में भूमिका समझाइए।',
        marks: 8,
        answerSummary: 'DTP कंप्यूटर और विशेष सॉफ्टवेयरों (PageMaker, InDesign, Photoshop) का उपयोग करके किताबों, समाचार पत्रों, ब्रोशर्स और पत्रिकाओं की उच्च गुणवत्ता वाली प्रिंट डिजाइनिंग की प्रक्रिया है।',
        points: [
          'DTP का महत्व: पारंपरिक टाइपसेटिंग की तुलना में कम खर्च, तेज गति, आसान संपादन और उच्च सटीकता।',
          'Newspaper Printing में भूमिका: मल्टी-कॉलम टेक्स्ट, हेडलाइंस, फोटो प्लेसमेंट, विज्ञापनों का लेआउट तैयार करना।',
          'DTP के मुख्य घटक: हार्डवेयर (उच्च रिज़ॉल्यूशन मॉनिटर, स्कैनर, लेजर प्रिंटर) और सॉफ्टवेयर (पेजमेकर, फोटोशॉप, कोरलड्रॉ)।',
          'कमर्शियल उपयोग: बुक्स पब्लिशिंग, विजिटिंग कार्ड्स, शादी के कार्ड, बैनर, पम्फलेट्स और मैगजीन्स।'
        ],
        keyTerms: ['Desktop Publishing', 'Typesetting', 'Newspaper Layout', 'Pre-press'],
        examTip: 'DTP के पूर्व और पश्चात (Traditional vs Modern) की तुलना लिखें।'
      },
      {
        id: 122,
        qNum: 2,
        unit: 'Unit I',
        question: 'Printing के प्रकार (Offset, Screen, Digital) और Offset Printing की महत्वपूर्ण Terms (Bleed, CMYK, Halftone, Binding) समझाइए।',
        marks: 10,
        answerSummary: 'मुद्रण (Printing) तकनीकें डिज़ाइन को कागज़ या अन्य माध्यमों पर स्थानांतरित करती हैं। व्यावसायिक स्तर पर ऑफसेट प्रिंटिंग सर्वाधिक लोकप्रिय है।',
        points: [
          'Offset Printing: प्लेट्स और रबर ब्लैंकेट के माध्यम से स्याही को कागज़ पर स्थानांतरित करने की विधि; बड़ी संख्या में प्रतियों के लिए सबसे सस्ती व श्रेष्ठ।',
          'Screen Printing: मेश (जाली) और स्टेंसिल का उपयोग करके टी-शर्ट, शादी कार्ड, बैग आदि पर छपाई।',
          'Digital Printing: कंप्यूटर से सीधे लेजर या इंकजेट द्वारा प्रिंट निकालना; छोटी मात्रा (Short run) के लिए आदर्श।',
          'Offset Terms - CMYK: चार प्रिंटिंग रंग - Cyan, Magenta, Yellow, Key (Black)।',
          'Bleed: पेज के किनारे से बाहर का अतिरिक्त क्षेत्र जो कटिंग के दौरान सफेद किनारा आने से रोकता है (आमतौर पर 3mm)।',
          'Halftone: निरंतर टोन वाली छवियों को छोटे-छोटे बिंदुओं (dots) में तोड़कर प्रिंट करने की तकनीक।',
          'Binding: Saddle Stitch (स्टेपल बाइंडिंग), Perfect Binding (गोंद से बुक बाइंडिंग), Spiral/Wire-O बाइंडिंग।'
        ],
        keyTerms: ['Offset vs Digital', 'CMYK Process', 'Bleed & Crop Marks', 'Binding Types'],
        examTip: 'CMYK के चारों रंगों के पूरे नाम और Bleed का उद्देश्य जरूर लिखें।'
      },
      {
        id: 123,
        qNum: 3,
        unit: 'Unit II',
        question: 'Adobe PageMaker 7.0 के Tools, Tool Palette, Control Palette, Grids और Guides को समझाइए।',
        marks: 8,
        answerSummary: 'Adobe PageMaker 7.0 प्रकाशन उद्योग का क्लासिक पेज लेआउट सॉफ्टवेयर है जिसका उपयोग पुस्तकें, पत्रिकाएं और पैम्फलेट बनाने में होता है।',
        points: [
          'Tool Palette: 14 मुख्य टूल्स जैसे Pointer Tool (चयन), Text Tool (टाइपिंग), Rotating Tool, Line Tool, Rectangle Tool, Polygon Tool, Zoom Tool आदि।',
          'Control Palette: चयनित ऑब्जेक्ट या टेक्स्ट की स्थिति, साइज, फॉन्ट, लीडिंग, ट्रैकिंग आदि को सटीक रूप से बदलने के लिए फ्लोटिंग विंडो।',
          'Ruler Guides & Margin Guides: पेज पर टेक्स्ट ब्लॉक और ग्राफिक्स को समान सीध (alignment) में रखने के लिए गाइड लाइन्स।',
          'Column Guides: पेज को दो या तीन कॉलमों में बांटने के लिए उपयोग।',
          'Zero Lock & Snap to Guides: ऑब्जेक्ट्स को गाइडलाइंस से आसानी से चिपकाने और मापने की सुविधा।'
        ],
        keyTerms: ['Control Palette', 'Pointer Tool', 'Ruler Guides', 'Column Guides'],
        examTip: 'PageMaker टूल पैलेट के कम से कम 6 प्रमुख टूल्स का नाम व कार्य लिखें।'
      },
      {
        id: 124,
        qNum: 4,
        unit: 'Unit II',
        question: 'PageMaker में Text Editing, AutoFlow, Story Editor, Threading और Tab Setting की प्रक्रिया समझाइए।',
        marks: 10,
        answerSummary: 'पेजमेकर में टेक्स्ट को टेक्स्ट ब्लॉक्स में रखा जाता है। जब टेक्स्ट एक ब्लॉक से अधिक होता है तो उसे ऑटो-फ्लो या थ्रेडिंग द्वारा अगले ब्लॉक में ले जाया जाता है।',
        points: [
          'Text Block & Handles: टेक्स्ट ब्लॉक के ऊपर और नीचे दो हैंडल (Windowshade handles) होते हैं। लाल तीर का निशान ओवरफ्लो टेक्स्ट को दर्शाता है।',
          'Threading: कई टेक्स्ट ब्लॉक्स को आपस में जोड़ना ताकि एक ब्लॉक में टेक्स्ट बढ़ाने पर आगे के ब्लॉक्स में स्वतः टेक्स्ट खिसक जाए।',
          'AutoFlow: (Layout -> Autoflow) ऑन करने पर लंबा टेक्स्ट स्वतः अगले पृष्ठों पर नए ब्लॉक बनाकर तब तक बहता रहता है जब तक पूरा न हो जाए।',
          'Story Editor: (Ctrl+E) वर्ड प्रोसेसर जैसी अलग विंडो जहां बिना फॉर्मेटिंग के जटिल टेक्स्ट को तेजी से प्रूफरीड और एडिट किया जा सकता है।',
          'Indents/Tabs: (Ctrl+I) टेक्स्ट में कॉलम जैसी सटीक स्पेसिंग सेट करने के लिए टैब रूलर।'
        ],
        keyTerms: ['AutoFlow', 'Windowshade Handles', 'Story Editor (Ctrl+E)', 'Text Threading'],
        examTip: 'Windowshade handles के लाल तीर (Red Triangle) और AutoFlow के काम को स्पष्ट करें।'
      },
      {
        id: 125,
        qNum: 5,
        unit: 'Unit III',
        question: 'PageMaker में Master Pages, Headers/Footers, Frame Options और Document Setup को विस्तार से समझाइए।',
        marks: 8,
        answerSummary: 'मास्टर पेज वह पृष्ठ होता है जिस पर डाली गई कोई भी सामग्री (पेज नंबर, हेडर, बॉर्डर, लोगो) प्रकाशन के सभी पृष्ठों पर स्वतः दिखाई देती है।',
        points: [
          'Master Pages (L/R Master): स्क्रीन के निचले बाएं कोने पर L (Left) और R (Right) आइकन होते हैं। फेसिंग पेजेस में दोनों तरफ अलग हेडर सेट हो सकते हैं।',
          'Automatic Page Numbering: मास्टर पेज पर Text Tool से Ctrl+Alt+P दबाने पर "LM" या "RM" मार्कर बनता है जो वास्तविक पृष्ठों पर 1, 2, 3... बन जाता है।',
          'Document Setup: (Ctrl+Shift+P) पेज साइज (A4, Letter), ओरिएंटेशन, मार्जिन (Inside, Outside, Top, Bottom) और कुल पेजों की संख्या निर्धारित करना।',
          'Frame Options: टेक्स्ट को किसी फ्रेम (आयत, वृत्त) में रखने और टेक्स्ट को फ्रेम में अलाइन करने की सुविधा।',
          'Paste Special & OLE: एक्सेल या वर्ड से लिंक सहित डेटा को पेजमेकर में पेस्ट करना।'
        ],
        keyTerms: ['Master Pages', 'Ctrl+Alt+P Page Number', 'Document Setup', 'Facing Pages'],
        examTip: 'ऑटोमेटिक पेज नंबरिंग के लिए शॉर्टकट की Ctrl+Alt+P जरूर लिखें।'
      },
      {
        id: 126,
        qNum: 6,
        unit: 'Unit IV',
        question: 'Adobe Photoshop का परिचय दें। Raster vs Vector Graphics, Image Resolution और Color Modes (RGB, CMYK, Grayscale) समझाइए।',
        marks: 10,
        answerSummary: 'Adobe Photoshop दुनिया का सबसे लोकप्रिय रास्टर-आधारित इमेज एडिटिंग और फोटो मैनिपुलेशन सॉफ्टवेयर है।',
        points: [
          'Raster vs Vector: रास्टर इमेजेस पिक्सल (Dots) से बनी होती हैं और ज़ूम करने पर पिक्सलेट (धुंधली) हो जाती हैं (JPEG, PNG, PSD)। वेक्टर इमेजेस गणितीय सूत्रों पर आधारित होती हैं और कभी नहीं फटतीं (SVG, AI, CorelDraw)।',
          'Image Resolution: प्रति इंच पिक्सल की संख्या (PPI / DPI)। वेब/स्क्रीन के लिए 72 PPI और प्रिंटिंग के लिए 300 DPI मानक है।',
          'RGB Mode (Red, Green, Blue): इलेक्ट्रॉनिक स्क्रीन्स, मॉनिटर्स और सोशल मीडिया के लिए एडिटिव कलर मोड।',
          'CMYK Mode (Cyan, Magenta, Yellow, Black): प्रिंटिंग प्रेस और ऑफसेट छपाई के लिए सब्ट्रैक्टिव कलर मोड।',
          'Grayscale Mode: केवल काले और सफेद के बीच के 256 ग्रे शेड्स का मोड।'
        ],
        keyTerms: ['Raster vs Vector', '300 DPI Printing', 'RGB vs CMYK', 'Pixel Depth'],
        examTip: 'Raster और Vector के बीच 4 अंतर स्पष्ट टेबल बनाकर लिखें।'
      },
      {
        id: 127,
        qNum: 7,
        unit: 'Unit IV',
        question: 'Photoshop के Selection Tools (Marquee, Lasso, Magic Wand, Quick Selection, Pen Tool) और उनके उपयोग समझाइए।',
        marks: 8,
        answerSummary: 'फोटोशॉप में किसी छवि के किसी खास भाग को संपादित करने, काटने या रंग बदलने के लिए उसे पहले सेलेक्ट करना आवश्यक होता है।',
        points: [
          'Marquee Tools: आयताकार (Rectangular) और अंडाकार (Elliptical) निश्चित ज्यामितीय आकृतियों में चयन के लिए।',
          'Lasso Tools: Freehand Lasso (मुक्तहस्त), Polygonal Lasso (सीधी रेखाओं वाले कोनों के लिए), Magnetic Lasso (रंगों के किनारे से चिपकने वाला)।',
          'Magic Wand Tool: एक क्लिक में समान रंग (Color Tolerance के आधार पर) वाले पूरे क्षेत्र को सेलेक्ट करता है।',
          'Quick Selection Tool: ब्रश की तरह पेंट करके किनारों को स्वतः पहचानते हुए त्वरित चयन करता है।',
          'Pen Tool: बेज़ियर कर्व्स (Bezier Curves) द्वारा सबसे सटीक और पेशेवर वेक्टर पाथ आधारित कटिंग के लिए उपयोग किया जाता है।'
        ],
        keyTerms: ['Marquee Tools', 'Magnetic Lasso', 'Magic Wand Tolerance', 'Pen Tool Path'],
        examTip: 'Pen Tool को सबसे शुद्ध (Accurate) कटिंग टूल के रूप में रेखांकित करें।'
      },
      {
        id: 128,
        qNum: 8,
        unit: 'Unit V',
        question: 'Photoshop में Layers की अवधारणा, Layer Masks, Blending Modes और Filters को समझाइए।',
        marks: 10,
        answerSummary: 'लेयर्स पारदर्शी कांच की शीटों जैसी होती हैं जिन पर अलग-अलग ऑब्जेक्ट्स रखे जाते हैं। बिना मूल तस्वीर को नुकसान पहुंचाए (Non-destructive editing) कार्य करने के लिए लेयर्स अनिवार्य हैं।',
        points: [
          'Layer Palette: लेयर्स को बनाना, छुपाना (Eye Icon), लॉक करना, रीऑर्डर करना और डिलीट करना।',
          'Layer Mask: काले और सफेद रंग का उपयोग करके लेयर के किसी हिस्से को छुपाना या दिखाना (Black hides, White reveals); बिना इरेज़र से मिटाए सुरक्षित संपादन।',
          'Blending Modes: ऊपर वाली लेयर नीचे वाली लेयर के पिक्सल के साथ कैसे मिक्स होगी (उदा. Multiply, Screen, Overlay, Soft Light)।',
          'Layer Styles: Drop Shadow, Stroke, Bevel & Emboss, Outer Glow इफेक्ट्स।',
          'Filters: छवियों पर विशेष प्रभाव जैसे Gaussian Blur, Sharpen, Noise Reduction, Liquify (चेहरे/बॉडी के आकार में बदलाव) लागू करना।'
        ],
        keyTerms: ['Layers & Transparency', 'Layer Masking', 'Blending Modes', 'Liquify Filter'],
        examTip: '"Black Conceals, White Reveals" लेयर मास्क का यह मूल नियम अवश्य लिखें।'
      },
      {
        id: 129,
        qNum: 9,
        unit: 'Unit V',
        question: 'Adobe InDesign का परिचय दें। यह PageMaker से कैसे बेहतर है? इसके मुख्य फीचर्स बताइए।',
        marks: 8,
        answerSummary: 'Adobe InDesign आधुनिक प्रकाशन जगत का उद्योग-मानक सॉफ्टवेयर है, जिसने पुराने PageMaker का स्थान ले लिया है।',
        points: [
          'PageMaker से श्रेष्ठता: इनडिजाइन में मल्टी-पेज डॉक्यूमेंट्स, जटिल टेबल, ई-बुक्स (EPUB), और इंटरैक्टिव पीडीएफ डिजाइन करना बहुत आसान और उन्नत है।',
          'Master Pages & Parent Pages: पेजों के लिए कई प्रकार के पेरेंट पेज बनाकर विभिन्न सेक्शन्स पर लागू करना।',
          'Typography & OpenType: ड्रॉप कैप्स, कर्निंग, ट्रैकिंग, ग्लाइफ्स और उन्नत फॉन्ट कंट्रोल।',
          'Preflight Panel: छपाई से पहले मिसिंग फॉन्ट्स, कम रिज़ॉल्यूशन की तस्वीरों और ओवरसेट टेक्स्ट की स्वतः जांच करना।',
          'Exporting Options: प्रिंट के लिए प्रेस-क्वालिटी PDF और डिजिटल रीडिंग के लिए EPUB/HTML निर्यात करना।'
        ],
        keyTerms: ['InDesign vs PageMaker', 'Preflight Panel', 'Typography Controls', 'Interactive PDF'],
        examTip: 'InDesign के 4 ऐसे फीचर्स लिखें जो PageMaker में उपलब्ध नहीं थे।'
      },
      {
        id: 130,
        qNum: 10,
        unit: 'Unit V',
        question: 'AI Tools in Design (Photoshop Generative Fill, Microsoft Designer, Figma AI) का उपयोग समझाइए।',
        marks: 8,
        answerSummary: 'Adobe Firefly और AI तकनीक ने ग्राफिक डिजाइनिंग में क्रांतिकारी बदलाव ला दिया है, जिससे जटिल फोटो एडिटिंग कुछ सेकंड में हो जाती है।',
        points: [
          'Photoshop Generative Fill: किसी भी हिस्से को सेलेक्ट करके केवल टेक्स्ट प्रॉम्प्ट लिखकर नई वस्तुएं जोड़ना या अनचाही चीजों को हटाना (Remove Tool)।',
          'Generative Expand: कैनवास को बड़ा करने पर खाली जगह को AI द्वारा मूल तस्वीर के बैकग्राउंड से स्वतः भर देना।',
          'Microsoft Designer & Canva AI: टेक्स्ट प्रॉम्प्ट से सोशल मीडिया पोस्ट, बैनर और विज्ञापनों के रेडीमेड लेआउट बनाना।',
          'Figma AI: यूजर इंटरफेस (UI/UX) डिजाइन में वायरफ्रेम, डमी टेक्स्ट और आइकन स्वतः जनरेट करना।',
          'डिजाइनर्स को लाभ: फोटो रिटचिंग में 80% समय की बचत और रचनात्मक विकल्पों की असीमित विविधता।'
        ],
        keyTerms: ['Generative Fill', 'Adobe Firefly', 'Generative Expand', 'Figma AI'],
        examTip: 'Photoshop Generative Fill का वास्तविक उदाहरण लिखकर उत्तर पूरा करें।'
      }
    ]
  },
  {
    id: '1pgdca4',
    sem: 1,
    code: '1PGDCA4 (B)',
    name: 'MS-Access Database Management',
    shortName: 'MS-Access DBMS',
    theory: 70,
    practical: 20,
    internal: 30,
    total: 120,
    questions: [
      {
        id: 131,
        qNum: 1,
        unit: 'Unit I',
        question: 'DBMS और RDBMS क्या है? Relational Database के लाभ और Data Normalization (1NF, 2NF, 3NF) समझाइए।',
        marks: 10,
        answerSummary: 'Database Management System (DBMS) डेटा को व्यवस्थित तरीके से स्टोर, मैनेज और रिट्रीव करने का सॉफ्टवेयर है। RDBMS में डेटा टेबल्स (पंक्तियों और स्तंभों) में संबंधित रूप से स्टोर होता है।',
        points: [
          'RDBMS के लाभ: डेटा रिडंडेंसी (दोहराव) में कमी, डेटा अखंडता (Integrity), उच्च सुरक्षा, बहु-उपयोगकर्ता पहुंच और आसान बैकअप।',
          'Data Normalization: डेटाबेस में डेटा के अनावश्यक दोहराव को समाप्त करने और विसंगतियों (Anomalies) को हटाने की प्रक्रिया।',
          '1NF (First Normal Form): प्रत्येक सेल में केवल एक ही (Atomic) मान होना चाहिए; कोई रिपीटिंग ग्रुप्स न हों।',
          '2NF (Second Normal Form): टेबल 1NF में हो और कोई भी आंशिक निर्भरता (Partial Dependency) न हो; सभी नॉन-की अटरीब्यूट्स प्राइमरी की पर पूर्ण निर्भर हों।',
          '3NF (Third Normal Form): टेबल 2NF में हो और कोई भी ट्रांजिटिव निर्भरता (Transitive Dependency) न हो (A -> B और B -> C नहीं होना चाहिए)।'
        ],
        keyTerms: ['RDBMS', 'Normalization', '1NF, 2NF, 3NF', 'Data Redundancy'],
        examTip: 'Normalization के तीनों स्तरों (1NF, 2NF, 3NF) की परिभाषा उदाहरण सहित अलग-अलग लिखें।'
      },
      {
        id: 132,
        qNum: 2,
        unit: 'Unit I',
        question: 'MS Access का परिचय दें। Access Objects (Tables, Queries, Forms, Reports) और Data Types समझाइए।',
        marks: 8,
        answerSummary: 'MS Access माइक्रोसॉफ्ट का एक लोकप्रिय रिलेशनल डेटाबेस मैनेजमेंट सिस्टम (RDBMS) है जो ग्राफिकल इंटरफेस और सॉफ्टवेयर डेवलपमेंट टूल्स प्रदान करता है।',
        points: [
          'Tables: वास्तविक डेटा को Rows (Records) और Columns (Fields) के रूप में स्टोर करने वाला मूल घटक।',
          'Queries: एक या अधिक टेबल्स से शर्तों के आधार पर विशिष्ट डेटा खोजने, फ़िल्टर करने या बदलने का साधन।',
          'Forms: डेटा को स्क्रीन पर उपयोगकर्ता-अनुकूल तरीके से इनपुट, देखने और एडिट करने के लिए इंटरफेस।',
          'Reports: डेटा को प्रिंटिंग या प्रेजेंटेशन के लिए आकर्षक और सारांशित रूप में तैयार करने का टूल।',
          'Data Types: Short Text, Long Text, Number, Date/Time, Currency, AutoNumber, Yes/No, OLE Object, Hyperlink, Attachment, Calculated।'
        ],
        keyTerms: ['Access Objects', 'Tables, Queries, Forms, Reports', 'Data Types', 'AutoNumber'],
        examTip: 'MS Access के चारों मुख्य ऑब्जेक्ट्स को फ्लोचार्ट या लिस्ट बनाकर स्पष्ट करें।'
      },
      {
        id: 133,
        qNum: 2,
        unit: 'Unit I',
        question: 'Primary Key, Foreign Key, Composite Key क्या हैं? Field Properties (Validation Rule, Default Value, Required) समझाइए।',
        marks: 8,
        answerSummary: 'प्राइमरी की किसी टेबल में प्रत्येक रिकॉर्ड को विशिष्ट रूप से (Uniquely) पहचानने वाली फील्ड होती है।',
        points: [
          'Primary Key: यह कभी खाली (NULL) नहीं हो सकती और इसमें दोहराए गए (Duplicate) मान नहीं हो सकते (उदा. Roll_No, Employee_ID)।',
          'Foreign Key: एक टेबल की फील्ड जो दूसरी टेबल की प्राइमरी की को संदर्भित करती है और दोनों टेबल्स में संबंध स्थापित करती है।',
          'Composite Key: दो या दो से अधिक फील्ड्स का संयोजन जो मिलकर किसी रिकॉर्ड की विशिष्ट पहचान करता है।',
          'Field Properties: 1. Field Size (अधिकतम वर्ण), 2. Default Value (स्वतः आने वाला मान), 3. Required (खाली न छोड़ने का नियम), 4. Validation Rule (शर्त, उदा. >=18), 5. Validation Text (गलत मान डालने पर दिखने वाला एरर मैसेज)।'
        ],
        keyTerms: ['Primary Key', 'Foreign Key', 'Validation Rule & Text', 'Referential Integrity'],
        examTip: 'Primary Key और Foreign Key के बीच संबंध का उदाहरण लिखें।'
      },
      {
        id: 134,
        qNum: 4,
        unit: 'Unit II',
        question: 'MS Access में Table बनाने के तरीके (Design View vs Datasheet View) और डेटा संपादन (Add, Edit, Delete, Filter, Sort) समझाइए।',
        marks: 8,
        answerSummary: 'एमएस एक्सेस में टेबल निर्माण के लिए डेटाशीट व्यू और डिज़ाइन व्यू दो प्रमुख तरीके हैं।',
        points: [
          'Datasheet View: एक्सेल जैसा स्प्रेडशीट ग्रिड जहां सीधे कॉलम हेडिंग बनाकर डेटा टाइप किया जा सकता है।',
          'Design View: अधिक उन्नत और नियंत्रित तरीका जहां फील्ड नेम, डेटा टाइप, डिस्क्रिप्शन और फील्ड प्रॉपर्टीज को विस्तार से सेट किया जाता है।',
          'Adding & Editing Records: नेविगेशन बार का उपयोग करके नए रिकॉर्ड पर जाना या सीधे सेल में टाइप करना।',
          'Deleting Records: रिकॉर्ड सेलेक्टर पर राइट-क्लिक करके Delete Record चुनना।',
          'Sorting & Filtering: डेटा को आरोही (Ascending A-Z) या अवरोही (Descending Z-A) क्रम में सजाना; Filter by Selection द्वारा विशिष्ट रिकॉर्ड्स देखना।',
          'Freeze Columns: अधिक कॉलम होने पर मुख्य कॉलम (उदा. Name) को बाईं ओर स्थिर रखना।'
        ],
        keyTerms: ['Design View', 'Datasheet View', 'Filter by Selection', 'Freeze Columns'],
        examTip: 'Design View और Datasheet View के बीच तुलना अवश्य लिखें।'
      },
      {
        id: 135,
        qNum: 5,
        unit: 'Unit III',
        question: 'Relationships क्या हैं? इनके प्रकार (One-to-One, One-to-Many, Many-to-Many) और Referential Integrity को समझाइए।',
        marks: 10,
        answerSummary: 'रिलेशनशिप दो या अधिक टेबल्स के बीच एक समान फील्ड (Common Field) के आधार पर स्थापित संबंध है जिससे डेटा आपस में जुड़ता है।',
        points: [
          'One-to-One (1:1): टेबल A का एक रिकॉर्ड टेबल B के केवल एक रिकॉर्ड से जुड़ा होता है (उदा. Employee और Passport Details)।',
          'One-to-Many (1:N): टेबल A का एक रिकॉर्ड टेबल B के कई रिकॉर्ड्स से जुड़ा होता है (उदा. एक Customer कई Orders दे सकता है); यह सबसे आम संबंध है।',
          'Many-to-Many (N:N): दोनों टेबल्स में परस्पर कई संबंध होते हैं (उदा. Students और Courses); इसे बीच में जंक्शन टेबल (Junction Table) बनाकर जोड़ा जाता है।',
          'Referential Integrity: यह सुनिश्चित करता है कि चाइल्ड टेबल में कोई ऐसा रिकॉर्ड न बने जिसकी पैरेंट टेबल में मौजूदगी न हो।',
          'Cascade Update & Cascade Delete: पैरेंट रिकॉर्ड में बदलाव या डिलीट होने पर चाइल्ड रिकॉर्ड्स स्वतः अपडेट या डिलीट हो जाते हैं।'
        ],
        keyTerms: ['One-to-Many', 'Referential Integrity', 'Cascade Delete', 'Junction Table'],
        examTip: 'One-to-Many का वास्तविक उदाहरण (Customer - Orders) चित्र बनाकर समझाएं।'
      },
      {
        id: 136,
        qNum: 6,
        unit: 'Unit III',
        question: 'Queries क्या हैं? Query Wizard, Select Query, Parameter Query और Action Queries (Update, Delete, Append, Make Table) समझाइए।',
        marks: 10,
        answerSummary: 'क्वेरी डेटाबेस से किसी विशिष्ट शर्त के आधार पर वांछित जानकारी निकालने, फिल्टर करने या डेटा में थोक परिवर्तन करने का एक शक्तिशाली साधन है।',
        points: [
          'Select Query: सबसे सामान्य क्वेरी जो एक या अधिक टेबल्स से शर्तों (Criteria) के अनुसार डेटा छांटकर दिखाती है (उदा. City = "Bhopal")।',
          'Parameter Query: रन करते समय उपयोगकर्ता से इनपुट मांगती है (उदा. [Enter City Name]) और उसी आधार पर परिणाम देती है।',
          'Update Query: एक साथ कई रिकॉर्ड्स के मान बदलने के लिए (उदा. सभी कर्मचारियों की सैलरी में 10% वृद्धि करना)।',
          'Delete Query: शर्तों के आधार पर पुराने या अवांछित रिकॉर्ड्स को एक क्लिक में हटाना।',
          'Append Query: एक टेबल के डेटा को दूसरी मौजूदा टेबल के अंत में जोड़ना।',
          'Make Table Query: क्वेरी के परिणाम से एक बिल्कुल नई टेबल बनाना।'
        ],
        keyTerms: ['Select Query', 'Criteria & Parameters', 'Action Queries', 'Update Query'],
        examTip: 'Select Query और Action Query में अंतर स्पष्ट करें।'
      },
      {
        id: 137,
        qNum: 7,
        unit: 'Unit IV',
        question: 'Forms क्या हैं? Form Wizard, Design View, Controls (Text Box, Combo Box, List Box, Option Button) को समझाइए।',
        marks: 8,
        answerSummary: 'फॉर्म डेटाबेस का विजुअल इंटरफेस है जो डेटा एंट्री को आसान, सुरक्षित और त्रुटिहीन बनाता है।',
        points: [
          'Form Wizard: स्टेप-बाय-स्टेप विज़ार्ड जो फील्ड्स चुनकर तुरंत आकर्षक फॉर्म बना देता है।',
          'Design View: फॉर्म के हर नियंत्रण (Control) का आकार, रंग, स्थान और फोंट अपनी पसंद से सेट करना।',
          'Text Box: टेक्स्ट या संख्या इनपुट करने और प्रदर्शित करने के लिए।',
          'Combo Box (Dropdown): ड्रॉपडाउन लिस्ट जिसमें से उपयोगकर्ता विकल्प चुन सकता है या नया मान टाइप कर सकता है।',
          'List Box: विकल्पों की खुली सूची जिसमें से चयन किया जाता है।',
          'Option Button & Check Box: बहुविकल्पी या हां/ना (Boolean) प्रश्नों के लिए प्रयुक्त।'
        ],
        keyTerms: ['Form Controls', 'Combo Box', 'Design View', 'Form Wizard'],
        examTip: 'Combo Box और List Box के बीच का अंतर अक्सर पूछा जाता है।'
      },
      {
        id: 138,
        qNum: 8,
        unit: 'Unit IV',
        question: 'Subforms क्या हैं? Main Form और Subform के बीच संबंध तथा Form Header, Detail, Footer Sections समझाइए।',
        marks: 8,
        answerSummary: 'सबफॉर्म किसी मुख्य फॉर्म के अंदर सन्निहित (embedded) एक अन्य फॉर्म होता है, जिसका उपयोग One-to-Many डेटा प्रदर्शित करने के लिए किया जाता है।',
        points: [
          'Main Form - Subform का उपयोग: मुख्य फॉर्म पर ग्राहक (Customer) का विवरण और नीचे सबफॉर्म में उस ग्राहक के सभी ऑर्डर्स (Orders) की सूची दिखती है।',
          'Link Master Fields & Link Child Fields: दोनों फॉर्म्स को आपस में जोड़ने वाली कॉमन फील्ड (उदा. CustomerID)।',
          'Form Header: फॉर्म के सबसे ऊपर शीर्षक, लोगो या निर्देश दिखाने वाला स्थिर भाग।',
          'Detail Section: मुख्य भाग जहां वास्तविक डेटा फील्ड्स (Name, Address आदि) प्रदर्शित होते हैं।',
          'Form Footer: फॉर्म के नीचे बटन (Save, Close, Exit) और गणनाएं दिखाने वाला भाग।'
        ],
        keyTerms: ['Subforms', 'Master/Child Linking', 'Form Header/Detail/Footer'],
        examTip: 'Customer-Order का उदाहरण देकर सबफॉर्म की उपयोगिता बताएं।'
      },
      {
        id: 139,
        qNum: 9,
        unit: 'Unit V',
        question: 'Reports क्या हैं? Report Wizard, Report Header, Page Header, Detail, Summary और Grouping/Sorting को समझाइए।',
        marks: 8,
        answerSummary: 'रिपोर्ट डेटाबेस के डेटा को प्रिंट करने, पीडीएफ बनाने या प्रबंधन के सामने औपचारिक रूप से प्रस्तुत करने का एक फॉर्मेटेड और सारांशित आउटपुट है।',
        points: [
          'Report Wizard: फील्ड्स, लेआउट (Stepped, Block, Outline) और ओरिएंटेशन चुनकर त्वरित रिपोर्ट तैयार करना।',
          'Grouping & Sorting: डेटा को श्रेणियों में बांटना (उदा. विभागवार कर्मचारी या शहरवार बिक्री) और योग निकालना।',
          'Report Header & Footer: पूरी रिपोर्ट के पहले पेज के शीर्ष (कंपनी नाम/लोगो) और अंतिम पेज के अंत (ग्रैंड टोटल) पर आता है।',
          'Page Header & Footer: प्रत्येक पृष्ठ के ऊपर कॉलम हेडिंग्स और नीचे पेज नंबर व प्रिंट तारीख दिखाता है।',
          'Detail Section: प्रत्येक रिकॉर्ड की वास्तविक जानकारी प्रिंट करता है।',
          'Summary Options: ग्रुप या पूरी रिपोर्ट का Sum, Avg, Min, Max स्वतः निकालना।'
        ],
        keyTerms: ['Grouping & Sorting', 'Report Sections', 'Summary Functions', 'Page Header'],
        examTip: 'Report के विभिन्न सेक्शन्स (Header, Detail, Footer) का डायग्राम बनाएं।'
      },
      {
        id: 140,
        qNum: 10,
        unit: 'Unit V',
        question: 'Labels Wizard क्या है? Mailing Labels तैयार करना, Print Preview और Database Backup & Compact Utility को समझाइए।',
        marks: 8,
        answerSummary: 'एक्सेस में ग्राहकों या छात्रों के पते वाले स्टिकर लेबल्स प्रिंट करने और डेटाबेस रखरखाव के लिए विशेष उपयोगिताएं दी गई हैं।',
        points: [
          'Labels Wizard: पहले से उपलब्ध मानक लेबल शीट साइज (Avery standard आदि) चुनकर सीधे पते और बारकोड के लेबल्स तैयार करना।',
          'Print Preview: प्रिंट निकालने से पहले पृष्ठ की मार्जिन, लेआउट और पृष्ठ संख्या का पूर्वावलोकन करना।',
          'Compact and Repair Database: डेटाबेस से अनावश्यक खाली जगह को हटाकर फाइल साइज को छोटा करना और करप्ट हुई फाइलों की मरम्मत करना।',
          'Database Backup: डेटा की सुरक्षा के लिए .accdb फाइल की नियमित बैकअप प्रतिलिपि सहेजना।',
          'Database Security: डेटाबेस पर पासवर्ड लगाना और एनक्रिप्ट करना।'
        ],
        keyTerms: ['Labels Wizard', 'Compact & Repair', 'Print Preview', 'Database Backup'],
        examTip: 'Compact & Repair डेटाबेस का उद्देश्य (फाइल साइज घटाना व रिपेयर करना) जरूर लिखें।'
      }
    ]
  }
];
