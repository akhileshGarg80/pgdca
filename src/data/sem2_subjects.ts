import { Subject } from '../types';

export const SEM2_SUBJECTS: Subject[] = [
  {
    id: '2pgdca1',
    sem: 2,
    code: '2PGDCA1',
    name: 'Emerging Digital Technologies',
    shortName: 'Emerging Tech',
    theory: 70,
    practical: 30,
    internal: 0,
    total: 100,
    questions: [
      {
        id: 201,
        qNum: 1,
        unit: 'Unit I',
        question: 'Digital India, E-Governance (MPOnline, UMANG, DigiLocker) और Digital Payment Systems (UPI, IMPS, RTGS, NEFT) को समझाइए।',
        marks: 10,
        answerSummary: 'ई-गवर्नेंस सरकारी सेवाओं को नागरिकों तक इलेक्ट्रॉनिक माध्यम से पारदर्शी, त्वरित और सुगम रूप से पहुंचाने की प्रणाली है।',
        points: [
          'MPOnline & UMANG: नागरिकों को एक ही पोर्टल पर जन्म प्रमाण पत्र, बिल भुगतान, छात्रवृत्ति और सरकारी फॉर्म भरने की वन-स्टॉप सुविधा।',
          'DigiLocker: आधार से जुड़ा क्लाउड स्टोरेज जहां मार्कशीट, ड्राइविंग लाइसेंस, पैन कार्ड डिजिटल रूप में सुरक्षित व कानूनी रूप से मान्य रहते हैं।',
          'UPI (Unified Payments Interface): NPCI द्वारा विकसित 24x7 तत्काल मोबाइल भुगतान प्रणाली (VPA/QR कोड से बिना खाता संख्या साझा किए लेन-देन)।',
          'NEFT vs RTGS vs IMPS: NEFT बैच-वाइज ट्रांसफर है; RTGS बड़े लेन-देन (न्यूनतम 2 लाख) का रियल-टाइम ग्रॉस सेटलमेंट है; IMPS 24x7 तत्काल खुदरा अंतरण है।',
          'Green Computing: पर्यावरण-अनुकूल हार्डवेयर का उपयोग, बिजली की बचत और ई-कचरे (E-waste) का सुरक्षित पुनर्चक्रण।'
        ],
        keyTerms: ['DigiLocker', 'UPI & NPCI', 'RTGS vs NEFT', 'Green Computing'],
        examTip: 'NEFT, RTGS और IMPS के बीच न्यूनतम राशि और ट्रांसफर समय की अंतर तालिका बनाएं।'
      },
      {
        id: 202,
        qNum: 2,
        unit: 'Unit I',
        question: 'E-Commerce क्या है? इसके मॉडल्स (B2B, B2C, C2C, C2B), लाभ, सुरक्षा चुनौतियां और पेमेंट गेटवे समझाइए।',
        marks: 8,
        answerSummary: 'ई-कॉमर्स इलेक्ट्रॉनिक नेटवर्क (इंटरनेट) के माध्यम से वस्तुओं और सेवाओं की ऑनलाइन खरीद और बिक्री की प्रक्रिया है।',
        points: [
          'B2B (Business to Business): दो कंपनियों के बीच थोक व्यापार (उदा. IndiaMART, Alibaba)।',
          'B2C (Business to Consumer): कंपनी सीधे उपभोक्ता को उत्पाद बेचती है (उदा. Amazon, Flipkart, Myntra)।',
          'C2C (Consumer to Consumer): उपभोक्ता सीधे दूसरे उपभोक्ता को पुराना सामान बेचते हैं (उदा. OLX, Quikr, eBay)।',
          'C2B (Consumer to Business): स्वतंत्र व्यक्ति व्यवसायों को अपनी सेवाएं बेचते हैं (उदा. Freelancers, इन्फ्लुएंसर)।',
          'पेमेंट गेटवे & सुरक्षा: Razorpay, PayU, Paytm द्वारा SSL एन्क्रिप्शन और दो-चरणीय प्रमाणीकरण (2FA OTP) से सुरक्षित वित्तीय लेन-देन।'
        ],
        keyTerms: ['B2B, B2C, C2C', 'Payment Gateways', 'SSL Encryption', '2FA OTP'],
        examTip: 'चारों ई-कॉमर्स मॉडल्स के नाम और एक-एक वास्तविक कंपनी का उदाहरण दें।'
      },
      {
        id: 203,
        qNum: 3,
        unit: 'Unit II',
        question: 'Cloud Computing क्या है? इसके सर्विस मॉडल्स (IaaS, PaaS, SaaS) और डिप्लॉयमेंट मॉडल्स (Public, Private, Hybrid) समझाइए।',
        marks: 10,
        answerSummary: 'क्लाउड कंप्यूटिंग इंटरनेट के माध्यम से ऑन-डिमांड कंप्यूटिंग सेवाएं (सर्वर, स्टोरेज, डेटाबेस, नेटवर्किंग, सॉफ्टवेयर) उपलब्ध कराने की तकनीक है।',
        points: [
          'IaaS (Infrastructure as a Service): बुनियादी ढांचा (सर्वर, स्टोरेज, वर्चुअल मशीन) किराए पर लेना (उदा. AWS EC2, Google Compute Engine, Azure)।',
          'PaaS (Platform as a Service): डेवलपर्स को ऐप्स बनाने और टेस्ट करने के लिए रनटाइम प्लेटफॉर्म और टूल्स प्रदान करना (उदा. Heroku, Google App Engine)।',
          'SaaS (Software as a Service): सीधे इंटरनेट ब्राउज़र पर इस्तेमाल होने वाला रेडीमेड सॉफ्टवेयर (उदा. Gmail, Google Drive, Office 365, Netflix)।',
          'Public Cloud: सभी आम जनता के लिए उपलब्ध साझा इंफ्रास्ट्रक्चर (AWS, Google Cloud)।',
          'Private Cloud: किसी एक खास संस्था या कॉर्पोरेट द्वारा अत्यधिक सुरक्षित आंतरिक डेटा के लिए समर्पित क्लाउड।',
          'Hybrid Cloud: पब्लिक और प्राइवेट क्लाउड का मिला-जुला रूप, जो सुरक्षा और लचीलापन दोनों देता है।'
        ],
        keyTerms: ['IaaS, PaaS, SaaS', 'Public vs Private Cloud', 'Hybrid Cloud', 'AWS & Azure'],
        examTip: 'IaaS, PaaS, SaaS का पिरामिड या स्तर आरेख (Stack diagram) अवश्य बनाएं।'
      },
      {
        id: 204,
        qNum: 4,
        unit: 'Unit II',
        question: 'Virtualization, Hypervisors (Type 1 vs Type 2), Containers (Docker) और Cloud Security पर टिप्पणी लिखें।',
        marks: 8,
        answerSummary: 'वर्चुअलाइजेशन वह तकनीक है जो एक ही भौतिक हार्डवेयर पर कई स्वतंत्र वर्चुअल मशीनें (VMs) चलाने की अनुमति देती है।',
        points: [
          'Hypervisor Type 1 (Bare-Metal): सीधे हार्डवेयर पर इंस्टॉल होता है; बहुत तेज और सुरक्षित (उदा. VMware ESXi, Microsoft Hyper-V)।',
          'Hypervisor Type 2 (Hosted): ऑपरेटिंग सिस्टम के ऊपर एप्लीकेशन के रूप में चलता है (उदा. Oracle VirtualBox, VMware Workstation)।',
          'Containers (Docker): वर्चुअल मशीन से भी हल्के होते हैं जो ऐप और उसकी सभी डिपेंडेंसी को एक साथ पैकेज करते हैं।',
          'क्लाउड सुरक्षा के उपाय: डेटा एन्क्रिप्शन (At rest & In transit), फायरवॉल, मल्टी-फैक्टर ऑथेंटिकेशन और नियमित सुरक्षा ऑडिट।'
        ],
        keyTerms: ['Bare-Metal vs Hosted', 'Docker Containers', 'VirtualBox', 'Cloud Encryption'],
        examTip: 'Type-1 और Type-2 हाइपरवाइजर के बीच कार्यप्रणाली का अंतर लिखें।'
      },
      {
        id: 205,
        qNum: 5,
        unit: 'Unit III',
        question: 'Data Science और Data Analytics क्या है? Big Data के 5V और Predictive Analytics की भूमिका समझाइए।',
        marks: 8,
        answerSummary: 'डेटा साइंस वैज्ञानिक तरीकों, अल्गोरिदम्स और सिस्टम्स का उपयोग करके कच्चे डेटा से उपयोगी निष्कर्ष (Insights) और ज्ञान निकालने का क्षेत्र है।',
        points: [
          'Big Data के 5V: 1. Volume (विशाल डेटा आकार), 2. Velocity (तेज गति से निर्माण), 3. Variety (विभिन्न प्रकार - टेक्स्ट, इमेज, वीडियो), 4. Veracity (डेटा की सत्यता), 5. Value (व्यावसायिक उपयोगिता)।',
          'Data Analytics के प्रकार: Descriptive (क्या हुआ?), Diagnostic (क्यों हुआ?), Predictive (भविष्य में क्या होगा?), Prescriptive (हमें क्या करना चाहिए?)।',
          'Business Intelligence (BI): Power BI और Tableau टूल्स द्वारा डेटा को डैशबोर्ड्स और चार्ट्स में प्रदर्शित कर निर्णय लेना।',
          'उद्योगों में उपयोग: ग्राहकों के व्यवहार का पूर्वानुमान, धोखाधड़ी की रोकथाम और स्वास्थ्य देखभाल में सुधार।'
        ],
        keyTerms: ['5Vs of Big Data', 'Predictive Analytics', 'Tableau & Power BI', 'Data Insights'],
        examTip: 'Big Data के 5V (Volume, Velocity, Variety, Veracity, Value) को प्रमुखता से लिखें।'
      },
      {
        id: 206,
        qNum: 6,
        unit: 'Unit IV',
        question: 'Internet of Things (IoT) क्या है? इसके Components (Sensors, Actuators, Gateways) और Smart City/Home में अनुप्रयोग बताइए।',
        marks: 10,
        answerSummary: 'IoT भौतिक उपकरणों, वाहनों, घरेलू उपकरणों और अन्य वस्तुओं का एक नेटवर्क है जिसमें सेंसर्स, सॉफ्टवेयर और कनेक्टिविटी होती है जिससे वे डेटा एकत्र और साझा करते हैं।',
        points: [
          'Sensors: परिवेश से भौतिक डेटा (तापमान, प्रकाश, गति, धुआं, आर्द्रता) एकत्र करने वाले उपकरण।',
          'Actuators: डिजिटल सिग्नल मिलने पर भौतिक क्रिया करने वाले उपकरण (उदा. मोटर चलाना, लाइट चालू करना, वाल्व खोलना)।',
          'IoT Gateways & Cloud: डेटा को सेंसर्स से सुरक्षित रूप से क्लाउड सर्वर तक पहुंचाना और विश्लेषण करना।',
          'Smart Home: स्मार्ट बल्ब, रिमोट एसी कंट्रोल, स्मार्ट ताले और सुरक्षा कैमरे।',
          'Smart Cities & Agriculture: ऑटोमैटिक स्ट्रीट लाइट्स, कचरा प्रबंधन सेंसर्स, स्मार्ट ट्रैफिक सिग्नल और खेत में नमी सेंसर्स से ऑटोमैटिक सिंचाई।'
        ],
        keyTerms: ['Sensors & Actuators', 'Smart Grid', 'IoT Architecture', 'Smart Agriculture'],
        examTip: 'IoT के चार स्तरों (Sensing -> Connectivity -> Processing -> User Interface) का ब्लॉक डायग्राम बनाएं।'
      },
      {
        id: 207,
        qNum: 7,
        unit: 'Unit IV',
        question: 'Blockchain Technology क्या है? इसके ब्लॉक का स्ट्रक्चर, Cryptography, Smart Contracts और Cryptocurrencies समझाइए।',
        marks: 10,
        answerSummary: 'ब्लॉकचेन एक विकेंद्रीकृत (Decentralized) और वितरित बहीखाता (Distributed Ledger) है जो लेन-देन के रिकॉर्ड को क्रिप्टोग्राफी द्वारा सुरक्षित और अपरिवर्तनीय रखता है।',
        points: [
          'Block Structure: प्रत्येक ब्लॉक में डेटा, खुद का क्रिप्टोग्राफिक हैश (Hash) और पिछले ब्लॉक का हैश (Previous Hash) होता है।',
          'Immutability & Security: एक बार रिकॉर्ड दर्ज होने के बाद उसे कोई बदल या मिटा नहीं सकता क्योंकि हैश बदल जाएगा।',
          'Decentralization & P2P: कोई केंद्रीय बैंक या सर्वर नहीं होता; नेटवर्क के सभी नोड्स के पास बहीखाते की एक प्रतिलिपि होती है।',
          'Smart Contracts: ब्लॉकचेन पर लिखे स्व-निष्पादित (Self-executing) कोड जो पूर्व-निर्धारित शर्तें पूरी होते ही अपने आप निष्पादित हो जाते हैं (उदा. Ethereum)।',
          'Cryptocurrency: बिटकॉइन (Bitcoin), एथेरियम जैसी डिजिटल मुद्राएं जो ब्लॉकचेन पर आधारित हैं।'
        ],
        keyTerms: ['Distributed Ledger', 'Cryptographic Hash', 'Smart Contracts', 'Bitcoin'],
        examTip: 'ब्लॉक की चेन (Block 1 -> Block 2 -> Block 3 with Prev Hash) का सुंदर चित्र बनाएं।'
      },
      {
        id: 208,
        qNum: 8,
        unit: 'Unit IV',
        question: 'Cybersecurity क्या है? प्रमुख साइबर खतरे (Malware, Phishing, Ransomware, DDoS) और सुरक्षा के नियम समझाइए।',
        marks: 8,
        answerSummary: 'साइबर सुरक्षा इंटरनेट से जुड़े सिस्टम्स, हार्डवेयर, सॉफ्टवेयर और डेटा को साइबर हमलों, अनधिकृत पहुंच और क्षति से बचाने की प्रक्रिया है।',
        points: [
          'Malware (Malicious Software): वायरस, वर्म्स और ट्रोजन हॉर्स जो कंप्यूटर को नुकसान पहुंचाते हैं या फाइलें नष्ट करते हैं।',
          'Ransomware: उपयोगकर्ता की फाइलों को एन्क्रिप्ट (लॉक) करके खोलने के बदले फिरौती की मांग करता है (उदा. WannaCry)।',
          'Phishing: फर्जी ईमेल या वेबसाइट बनाकर उपयोगकर्ताओं से बैंक पासवर्ड, ओटीपी और कार्ड नंबर चुराना।',
          'DDoS Attack: एक साथ लाखों फर्जी रिक्वेस्ट भेजकर सर्वर को क्रैश या अनुपलब्ध कर देना।',
          'बचाव के उपाय: जटिल पासवर्ड, टू-फैक्टर ऑथेंटिकेशन (2FA), एंटीवायरस, सुरक्षित HTTPS कनेक्शन और अज्ञात लिंक्स पर क्लिक न करना।'
        ],
        keyTerms: ['Ransomware', 'Phishing Attacks', 'DDoS', 'Two-Factor Authentication'],
        examTip: 'सुरक्षा के 4 स्वर्णिम नियम (Strong Passwords, 2FA, Backup, Firewall) का उल्लेख करें।'
      },
      {
        id: 209,
        qNum: 9,
        unit: 'Unit V',
        question: '5G Technology, Edge Computing, Augmented Reality (AR) और Virtual Reality (VR) के अंतर और उपयोग समझाइए।',
        marks: 8,
        answerSummary: 'अति-आधुनिक वायरलेस और विजुअल प्रौद्योगिकियां डिजिटल दुनिया के साथ हमारे संवाद के तरीके को पूरी तरह बदल रही हैं।',
        points: [
          '5G Technology: अल्ट्रा-लो लेटेंसी (1 मिलीसेकंड), उच्च गति (10 Gbps तक) और एक साथ लाखों IoT डिवाइसेस को जोड़ने की क्षमता।',
          'Edge Computing: डेटा को दूरस्थ क्लाउड डेटा सेंटर भेजने के बजाय डेटा स्रोत के निकट (डिवाइस के पास) प्रोसेस करना ताकि विलंबता न्यूनतम रहे।',
          'Augmented Reality (AR): वास्तविक दुनिया के ऊपर डिजिटल तत्वों और सूचनाओं को सुपरइम्पोज़ करना (उदा. Pokemon Go, Google Lens, IKEA फर्नीचर ऐप)।',
          'Virtual Reality (VR): पूरी तरह से कृत्रिम 3D आभासी वातावरण का निर्माण करना जहां उपयोगकर्ता VR हेडसेट (Oculus/Meta Quest) से प्रवेश करता है।',
          'Mixed Reality (MR): वास्तविक और आभासी दुनिया का सहज मिश्रण (उदा. Apple Vision Pro, Microsoft HoloLens)।'
        ],
        keyTerms: ['5G Low Latency', 'Edge Computing', 'AR vs VR', 'Spatial Computing'],
        examTip: 'AR और VR के बीच 3 मुख्य अंतर (Real world base vs Fully synthetic) स्पष्ट करें।'
      },
      {
        id: 210,
        qNum: 10,
        unit: 'Unit V',
        question: 'Robotic Process Automation (RPA), Quantum Computing और Ethical IT Practices पर टिप्पणी लिखिए।',
        marks: 8,
        answerSummary: 'आरपीए और क्वांटम कंप्यूटिंग भविष्य की वो प्रौद्योगिकियां हैं जो उद्योगों की उत्पादकता को अभूतपूर्व स्तर पर ले जा रही हैं।',
        points: [
          'RPA (Robotic Process Automation): दोहराए जाने वाले नियम-आधारित कार्यों (डेटा एंट्री, फॉर्म प्रोसेसिंग, इनवॉइस मिलान) को सॉफ्टवेयर बॉट्स द्वारा स्वचालित करना (UiPath, Blue Prism)।',
          'Quantum Computing: पारंपरिक बिट्स (0 या 1) के बजाय Qubits (Superposition और Entanglement) का उपयोग करती है, जो जटिल गणनाएं सेकंडों में हल कर सकती है।',
          'Ethical IT Practices: उपयोगकर्ता के डेटा की गोपनीयता का सम्मान (Data Privacy Laws like DPDP Act), साइबर एथिक्स और निष्पक्ष AI सिस्टम्स।',
          'ई-कचरा प्रबंधन: पुराने इलेक्ट्रॉनिक उपकरणों का सुरक्षित निपटान ताकि पर्यावरण को विषैले पदार्थों से बचाया जा सके।'
        ],
        keyTerms: ['RPA Software Bots', 'Qubits & Superposition', 'Data Privacy DPDP', 'Green IT'],
        examTip: 'RPA का व्यावसायिक लाभ (गलतियों में 0% कमी और समय की बचत) बताएं।'
      }
    ]
  },
  {
    id: '2pgdca2',
    sem: 2,
    code: '2PGDCA2',
    name: 'Web Development Technologies',
    shortName: 'Web Development',
    theory: 70,
    practical: 20,
    internal: 30,
    total: 120,
    questions: [
      {
        id: 211,
        qNum: 1,
        unit: 'Unit I',
        question: 'Internet vs Intranet, Web Browsers, Web Servers, URL संरचना और Protocols (HTTP, HTTPS, FTP, DNS) को समझाइए।',
        marks: 10,
        answerSummary: 'इंटरनेट वैश्विक सार्वजनिक नेटवर्कों का समूह है, जबकि इंट्रानेट किसी एक विशिष्ट संगठन का सुरक्षित निजी नेटवर्क होता है।',
        points: [
          'Web Browser vs Web Server: ब्राउज़र (Chrome, Edge, Safari) क्लाइंट सॉफ्टवेयर है जो वेब पेज रेंडर करता है; सर्वर (Apache, Nginx, IIS) वेब फाइलों को स्टोर कर सर्व करता है।',
          'URL (Uniform Resource Locator): वेब संसाधन का पूरा पता, उदा. https://www.example.com/index.html (प्रोटोकॉल, डोमेन नाम, फाइल पाथ)।',
          'HTTP vs HTTPS: HTTP अनएन्क्रिप्टेड टेक्स्ट ट्रांसफर है; HTTPS में SSL/TLS एन्क्रिप्शन जुड़ जाता है जो डेटा चोरी से सुरक्षा देता है।',
          'FTP (File Transfer Protocol): लोकल कंप्यूटर से वेब सर्वर पर वेबसाइट फाइल्स अपलोड या डाउनलोड करने के लिए प्रयुक्त (उदा. FileZilla क्लाइंट)।',
          'DNS (Domain Name System): इंटरनेट की फोन-बुक जो इंसानों के अनुकूल डोमेन नाम को मशीन के IP एड्रेस में बदलती है।'
        ],
        keyTerms: ['HTTP vs HTTPS', 'DNS Lookup', 'URL Anatomy', 'FTP & FileZilla'],
        examTip: 'URL के विभिन्न भागों (Protocol, Domain, Path) को आरेख में तोड़कर दिखाएं।'
      },
      {
        id: 212,
        qNum: 2,
        unit: 'Unit I',
        question: 'Web Development Lifecycle: Domain Name Registration, Web Hosting के प्रकार और Site Live करने की प्रक्रिया समझाइए।',
        marks: 8,
        answerSummary: 'एक सफल वेबसाइट बनाने के लिए योजना, डिज़ाइन, कोडिंग, टेस्टिंग और वेब सर्वर पर पब्लिशिंग के चरणों से गुजरना होता है।',
        points: [
          'Domain Name: वेबसाइट का विशिष्ट पहचान नाम (उदा. .com, .in, .org) जिसे GoDaddy, Namecheap आदि रजिस्टर्ड रजिस्ट्रार से खरीदा जाता है।',
          'Web Hosting के प्रकार: 1. Shared Hosting (कम लागत, कई साइट्स एक सर्वर पर), 2. VPS (वर्चुअल प्राइवेट सर्वर), 3. Dedicated Hosting (पूरी मशीन आपकी), 4. Cloud Hosting (AWS, GCP)।',
          'DNS Name Servers: डोमेन को होस्टिंग सर्वर के IP से जोड़ने के लिए NS1/NS2 रिकॉर्ड्स को अपडेट करना।',
          'Uploading Files: cPanel File Manager या FileZilla FTP द्वारा public_html फोल्डर में HTML/CSS फाइल्स अपलोड करना।',
          'Testing: वेबसाइट के लिंक्स, मोबाइल रिस्पॉन्सिवनेस और लोडिंग स्पीड की जांच करना।'
        ],
        keyTerms: ['Domain Registrar', 'Shared vs Dedicated Hosting', 'Name Servers', 'public_html'],
        examTip: 'साइट लाइव करने के 5 क्रमिक चरण (Steps to go live) क्रमवार लिखें।'
      },
      {
        id: 213,
        qNum: 3,
        unit: 'Unit II',
        question: 'HTML क्या है? HTML Document Structure, Formatting Tags, Lists (Ordered, Unordered) और Hyperlinks समझाइए।',
        marks: 8,
        answerSummary: 'HTML (HyperText Markup Language) वेब पेजों की संरचना और सामग्री को परिभाषित करने वाली मानक मार्कअप भाषा है।',
        points: [
          'Basic Structure: <!DOCTYPE html>, <html>, <head> (मेटाडेटा, टाइटल), और <body> (दिखाई देने वाली सामग्री)।',
          'Text Formatting Tags: <h1> to <h6> (शीर्षक), <p> (पैराग्राफ), <b>/<strong> (बोल्ड), <i>/<em> (इटैलिक), <br> (लाइन ब्रेक), <hr> (क्षैतिज रेखा)।',
          'Lists: 1. Ordered List (<ol> और <li> - संख्याबद्ध 1,2,3), 2. Unordered List (<ul> और <li> - बुलेट पॉइंट्स), 3. Description List (<dl>, <dt>, <dd>)।',
          'Hyperlinks: <a> टैग के href अटरीब्यूट द्वारा एक पेज को दूसरे पेज से जोड़ना (उदा. <a href="about.html">About Us</a>)।',
          'Images: <img> टैग द्वारा फोटो जोड़ना (src, alt, width, height अटरीब्यूट्स)।'
        ],
        keyTerms: ['DOCTYPE html', 'Ordered vs Unordered Lists', 'Anchor Tag href', 'Image Tag alt'],
        examTip: 'HTML डॉक्यूमेंट का एक छोटा, शुद्ध बेसिक कोड उदाहरण कॉपी में लिखें।'
      },
      {
        id: 214,
        qNum: 4,
        unit: 'Unit II',
        question: 'HTML Tables (tr, th, td, colspan, rowspan) और Forms (input types, select, textarea, button) को विस्तार से समझाइए।',
        marks: 10,
        answerSummary: 'टेबल्स डेटा को पंक्तियों और स्तंभों में व्यवस्थित करती हैं जबकि फॉर्म्स उपयोगकर्ता से इनपुट और फीडबैक एकत्र करने के लिए बनाए जाते हैं।',
        points: [
          'HTML Table Tags: <table> (टेबल कंटेनर), <tr> (टेबल रो), <th> (टेबल हेडिंग - बोल्ड व सेंटर्ड), <td> (डेटा सेल)।',
          'Colspan & Rowspan: Colspan दो या अधिक कॉलमों को मिलाता है; Rowspan दो या अधिक पंक्तियों को मर्ज करता है।',
          'HTML Form (<form action="submit.php" method="POST">):',
          'Input Types: <input type="text">, <input type="password">, <input type="email">, <input type="radio"> (एक विकल्प), <input type="checkbox"> (कई विकल्प), <input type="file">।',
          'Dropdown & Multiline: <select> और <option> ड्रॉपडाउन सूची के लिए; <textarea rows="4"> लंबे संदेश या फीडबैक के लिए।',
          'Submit & Reset: <input type="submit"> डेटा भेजने के लिए और <input type="reset"> फॉर्म रीसेट करने के लिए।'
        ],
        keyTerms: ['Table colspan/rowspan', 'Form Input Types', 'GET vs POST Method', 'Dropdown select'],
        examTip: 'Colspan का उपयोग करते हुए एक छोटी 2x2 टेबल का HTML कोड जरूर लिखें।'
      },
      {
        id: 215,
        qNum: 5,
        unit: 'Unit III',
        question: 'CSS (Cascading Style Sheets) क्या है? Inline, Internal, External CSS और CSS Selectors को समझाइए।',
        marks: 8,
        answerSummary: 'CSS वेब पेजों के स्वरूप, लेआउट, रंगों, फोंट्स और रिस्पॉन्सिवनेस को डिज़ाइन करने वाली स्टाइलिंग भाषा है।',
        points: [
          'Inline CSS: सीधे HTML टैग के style अटरीब्यूट में लिखी जाती है (उदा. <h1 style="color: blue;">Title</h1>); केवल उसी एलिमेंट पर लागू होती है।',
          'Internal CSS: HTML के <head> सेक्शन में <style> टैग के अंदर लिखी जाती है; उस पूरे पेज पर लागू होती है।',
          'External CSS: अलग .css फाइल बनाकर <link rel="stylesheet" href="style.css"> द्वारा जोड़ी जाती है; कई पेजों पर एक समान लुक देने के लिए सर्वश्रेष्ठ।',
          'CSS Selectors: 1. Element Selector (p { color: red; }), 2. ID Selector (#header { width: 100%; }), 3. Class Selector (.btn { background: green; })।',
          'Specificity: Inline > ID > Class > Element नियम के अनुसार प्राथमिकता तय होती है।'
        ],
        keyTerms: ['Inline vs External', 'ID (#) vs Class (.)', 'CSS Specificity', 'Box Model'],
        examTip: 'Inline, Internal और External CSS का सिंटैक्स कोड उदाहरण के साथ समझाएं।'
      },
      {
        id: 216,
        qNum: 6,
        unit: 'Unit III',
        question: 'CSS Box Model (Content, Padding, Border, Margin) और Flexbox / Responsive Design को समझाइए।',
        marks: 8,
        answerSummary: 'CSS Box Model यह निर्धारित करता है कि किसी वेब पेज पर कोई HTML तत्व कितनी जगह घेरेगा और उसके चारों ओर की स्पेसिंग कैसी होगी।',
        points: [
          'Content: बॉक्स का वास्तविक केंद्र जहां टेक्स्ट, इमेज या वीडियो दिखाई देते हैं।',
          'Padding: कंटेंट और बॉर्डर के बीच की आंतरिक खाली जगह (हल्की सांस लेने की जगह)।',
          'Border: पैडिंग के चारों ओर खिंची जाने वाली बाहरी सीमा रेखा (style, width, color)।',
          'Margin: बॉर्डर के बाहर की खाली जगह जो इस एलिमेंट को दूसरे तत्वों से दूर रखती है।',
          'CSS Flexbox: display: flex द्वारा एलिमेंट्स को एक पंक्ति या कॉलम में आसानी से अलाइन और स्पेस देने का आधुनिक लेआउट सिस्टम।',
          'Media Queries (@media): स्क्रीन साइज (मोबाइल, टैबलेट, डेस्कटॉप) के अनुसार लेआउट को स्वतः अनुकूलित करना।'
        ],
        keyTerms: ['Box Model Layers', 'Padding vs Margin', 'Flexbox Justify/Align', 'Media Queries'],
        examTip: 'चार आयतों वाला CSS Box Model का डायग्राम (Margin -> Border -> Padding -> Content) बनाएं।'
      },
      {
        id: 217,
        qNum: 7,
        unit: 'Unit III',
        question: 'JavaScript क्या है? Variables (let, const), Datatypes, Functions और Conditional Statements (if-else, switch) समझाइए।',
        marks: 10,
        answerSummary: 'JavaScript क्लाइंट-साइड की लोकप्रिय प्रोग्रामिंग भाषा है जो वेब पेजों को इंटरैक्टिव, डायनेमिक और जीवंत बनाती है।',
        points: [
          'Variables: let (ब्लॉक स्कोप, री-असाइन करने योग्य), const (स्थिर मान, बदला नहीं जा सकता), var (पुराना फंक्शन स्कोप)।',
          'Data Types: String, Number, Boolean, Null, Undefined, Object, Array।',
          'Conditional Statements: if, else if, else और switch-case शर्तों के आधार पर विभिन्न कोड ब्लॉक्स निष्पादित करने के लिए।',
          'Loops: for लूप, while लूप, do-while लूप बार-बार कोड दोहराने के लिए।',
          'Functions: किसी विशिष्ट कार्य को करने वाले कोड का पुनः प्रयोज्य ब्लॉक (function add(a, b) { return a + b; })।',
          'Arrow Functions: ES6 का आधुनिक संक्षिप्त सिंटैक्स (const add = (a, b) => a + b;)।'
        ],
        keyTerms: ['let vs const', 'Client-side Scripting', 'Functions & Return', 'Loops'],
        examTip: 'एक साधारण JavaScript फंक्शन और if-else का कोड उदाहरण अवश्य लिखें।'
      },
      {
        id: 218,
        qNum: 8,
        unit: 'Unit III',
        question: 'JavaScript DOM (Document Object Model) क्या है? DOM Manipulation और Events (onClick, onMouseOver, onSubmit) समझाइए।',
        marks: 8,
        answerSummary: 'DOM वेब पेज का एक ट्री-संरचित (Tree-like) मॉडल है जिसके माध्यम से जावास्क्रिप्ट HTML एलिमेंट्स को गतिशील रूप से बदल सकती है।',
        points: [
          'DOM Selection: document.getElementById("myId"), document.querySelector(".myClass") द्वारा तत्वों को चुनना।',
          'DOM Modification: element.innerHTML से सामग्री बदलना, element.style.color से स्टाइल बदलना, element.setAttribute() से अटरीब्यूट बदलना।',
          'Events (घटनाएं): उपयोगकर्ता द्वारा की गई क्रियाएं जैसे क्लिक करना या माउस ले जाना।',
          'onClick: बटन पर क्लिक करने पर निष्पादित होने वाला इवेंट (उदा. फॉर्म चेक करना या अलर्ट दिखाना)।',
          'onMouseOver & onMouseOut: माउस कर्सर किसी एलिमेंट पर जाने या हटने पर रंग बदलना।',
          'onSubmit: फॉर्म सबमिट होने से पहले डेटा का सत्यापन (Validation) करना।'
        ],
        keyTerms: ['DOM Tree', 'getElementById', 'innerHTML', 'onClick & onSubmit Event'],
        examTip: 'बटन क्लिक पर टेक्स्ट बदलने वाला 3 लाइनों का JS DOM कोड लिखें।'
      },
      {
        id: 219,
        qNum: 9,
        unit: 'Unit IV',
        question: 'Microsoft Expression Web का परिचय दें। Website/Page बनाना, CSS Styling, और Hyperlinks जोड़ने की प्रक्रिया समझाइए।',
        marks: 8,
        answerSummary: 'Microsoft Expression Web एक विजुअल HTML एडिटर और वेब डिजाइनिंग सॉफ्टवेयर (WYSIWYG) है जो कोड लिखे बिना या कोड के साथ वेब पेज बनाने की सुविधा देता है।',
        points: [
          'WYSIWYG Interface: "What You See Is What You Get" - डिजाइन व्यू में सीधे टाइप करके और इमेजेस ड्रैग करके पेज तैयार करना।',
          'Views: Design View (विजुअल लुक), Code View (शुद्ध HTML/CSS कोड), Split View (दोनों एक साथ स्क्रीन पर)।',
          'Site Management: न्यू साइट बनाना, फोल्डर्स व्यवस्थित करना और इंटरनल लिंक्स की जांच करना।',
          'CSS Tools: Manage Styles और Apply Styles पैनल्स द्वारा विजुअल तरीके से स्टाइलशीट्स बनाना और टैग्स पर लागू करना।',
          'Accessibility & Standards: W3C मानकों के अनुसार स्वच्छ कोड और एक्सेसिबिलिटी जांचना।'
        ],
        keyTerms: ['WYSIWYG Editor', 'Split View', 'CSS Style Panel', 'Site Management'],
        examTip: 'Expression Web के Design, Code और Split व्यू की व्याख्या करें।'
      },
      {
        id: 220,
        qNum: 10,
        unit: 'Unit V',
        question: 'WordPress क्या है? CMS की अवधारणा, Posts vs Pages, Themes, Plugins, Widgets और Admin Dashboard समझाइए।',
        marks: 10,
        answerSummary: 'WordPress दुनिया का सबसे लोकप्रिय ओपन-सोर्स Content Management System (CMS) है, जो बिना कोडिंग के वेबसाइट्स और ब्लॉग्स बनाने की सुविधा देता है।',
        points: [
          'CMS की अवधारणा: डेटाबेस आधारित प्रणाली जो गैर-तकनीकी उपयोगकर्ताओं को आसानी से सामग्री जोड़ने, संपादित करने और पब्लिश करने देती है।',
          'Admin Dashboard: वर्डप्रेस का नियंत्रण कक्ष जहां से पूरी साइट, मीडिया, सेटिंग्स और यूजर्स मैनेज होते हैं।',
          'Posts vs Pages: Posts तारीख-वार (chronological) ब्लॉग लेख होते हैं जिनमें कैटेगरीज और टैग्स होते हैं; Pages स्थायी सामग्री (उदा. About Us, Contact) होते हैं।',
          'Themes: वेबसाइट के पूरे लुक, डिजाइन, फॉन्ट और लेआउट को एक क्लिक में बदलने वाले टेम्पलेट्स (उदा. Astra, OceanWP)।',
          'Plugins: वेबसाइट में नए फीचर्स (उदा. Contact Form 7, WooCommerce ई-कॉमर्स, Yoast SEO) जोड़ने वाले छोटे सॉफ्टवेयर मॉड्यूल्स।',
          'Widgets & Menus: साइडबार और फुटर में हालिया पोस्ट्स, सर्च बॉक्स या कस्टम मेनू प्रदर्शित करने के टूल्स।'
        ],
        keyTerms: ['Content Management System', 'Posts vs Pages', 'Themes & Plugins', 'Admin Dashboard'],
        examTip: 'Posts और Pages के बीच का 3 मुख्य अंतर स्पष्ट तालिका बनाकर लिखें।'
      }
    ]
  },
  {
    id: '2pgdca3',
    sem: 2,
    code: '2PGDCA3 (A)',
    name: 'Financial Accounting with Tally',
    shortName: 'Tally & Accounting',
    theory: 70,
    practical: 20,
    internal: 30,
    total: 120,
    questions: [
      {
        id: 221,
        qNum: 1,
        unit: 'Unit I',
        question: 'Accounting के मूल सिद्धांत, Double Entry System, और Golden Rules of Accounting (Personal, Real, Nominal) समझाइए।',
        marks: 10,
        answerSummary: 'लेखांकन (Accounting) वित्तीय लेन-देन को व्यवस्थित रूप से लिखने, वर्गीकृत करने, सारांशित करने और विश्लेषण करने की कला व विज्ञान है।',
        points: [
          'Double Entry System: प्रत्येक लेन-देन के दो पहलू होते हैं - डेबिट (Dr.) और क्रेडिट (Cr.); दोनों का योग हमेशा बराबर होता है।',
          '1. Personal Account (व्यक्तिगत खाता): व्यक्ति, फर्म या कंपनी का खाता। Golden Rule: "Debit the Receiver, Credit the Giver" (पाने वाले को नाम करो, देने वाले को जमा करो)।',
          '2. Real Account (वास्तविक खाता): संपत्तियों (Assets) जैसे Cash, Building, Machinery का खाता। Golden Rule: "Debit what comes in, Credit what goes out" (जो वस्तु व्यापार में आए उसे नाम, जो जाए उसे जमा)।',
          '3. Nominal Account (नाममात्र खाता): खर्चों, हानियों, आय और लाभ का खाता। Golden Rule: "Debit all expenses and losses, Credit all incomes and gains" (सभी खर्च व हानि को नाम, सभी आय व लाभ को जमा)।'
        ],
        keyTerms: ['Double Entry System', 'Golden Rules of Accounting', 'Debit & Credit', 'Real/Personal/Nominal'],
        examTip: 'तीनों खातों के गोल्डन रूल्स को अलग-अलग बॉक्स में स्पष्ट उदाहरण सहित लिखें।'
      },
      {
        id: 222,
        qNum: 2,
        unit: 'Unit I',
        question: 'Journal Entries, Ledger Posting, Trial Balance और Final Accounts (Trading, P&L, Balance Sheet) का चक्र समझाइए।',
        marks: 10,
        answerSummary: 'लेखांकन चक्र (Accounting Cycle) लेन-देन की प्राथमिक प्रविष्टि से लेकर अंतिम वित्तीय विवरण तैयार करने तक की निरंतर प्रक्रिया है।',
        points: [
          'Journal: लेन-देन की पहली रोजनामचा प्रविष्टि जहां डेबिट-क्रेडिट नियमों के तहत तारीख-वार रिकॉर्ड दर्ज होते हैं।',
          'Ledger Posting: जर्नल से लेन-देन को अलग-अलग व्यक्तिगत खातों (Accounts) में छांटकर पोस्ट करना।',
          'Trial Balance (तलपट): सभी खातों के डेबिट और क्रेडिट शेष (Balances) की सूची, जो गणितीय शुद्धता की जांच करती है।',
          'Trading Account: प्रत्यक्ष खर्च (Direct Expenses) और बिक्री से सकल लाभ (Gross Profit) की गणना।',
          'Profit & Loss Account: अप्रत्यक्ष खर्च (Indirect Expenses) घटाकर शुद्ध लाभ (Net Profit) ज्ञात करना।',
          'Balance Sheet: किसी निश्चित तारीख को व्यवसाय की संपत्तियों (Assets) और देनदारियों (Liabilities) का विवरण।'
        ],
        keyTerms: ['Journal to Ledger', 'Trial Balance', 'Trading & P&L A/c', 'Balance Sheet Assets/Liabilities'],
        examTip: 'Accounting Cycle के 6 चरणों का वृत्ताकार (Circular) फ्लोचार्ट बनाएं।'
      },
      {
        id: 223,
        qNum: 3,
        unit: 'Unit II',
        question: 'Tally Prime का परिचय दें। Company Creation, Alteration, Deletion, Security Password और Backup/Restore समझाइए।',
        marks: 8,
        answerSummary: 'Tally Prime भारत का अग्रणी कम्प्यूटरीकृत वित्तीय लेखांकन, कराधान और इन्वेंटरी प्रबंधन सॉफ्टवेयर है।',
        points: [
          'Company Creation (Alt+F3 -> Create Company): कंपनी का नाम, पता, वित्तीय वर्ष (Financial Year Beginning From), बुक्स बिगिनिंग और बेस करेंसी सिंबल सेट करना।',
          'Company Alteration & Deletion: Alt+K (Company Menu) -> Alter में जाकर कंपनी की जानकारी बदलना; यहीं Alt+D दबाकर कंपनी डिलीट करना।',
          'Security & TallyVault: कंपनी डेटा को अनधिकृत पहुंच से बचाने के लिए पासवर्ड लगाना और डेटा एन्क्रिप्ट करना।',
          'Backup (Alt+Y -> Backup): कंपनी डेटा का सुरक्षित .tbk आर्काइव किसी अन्य ड्राइव या पेनड्राइव में सहेजना।',
          'Restore: कंप्यूटर खराब होने या डेटा खो जाने पर बैकअप फाइल से पुनः डेटा लोड करना।'
        ],
        keyTerms: ['Tally Prime UI', 'Company Creation', 'TallyVault Password', 'Backup & Restore'],
        examTip: 'Company Creation स्क्रीन में भरी जाने वाली 5 अनिवार्य जानकारियों का उल्लेख करें।'
      },
      {
        id: 224,
        qNum: 4,
        unit: 'Unit II',
        question: 'Accounting Masters: Groups, Ledgers (Alt+G, Create), Predefined Groups और Vouchers के प्रकार (F4 to F9) समझाइए।',
        marks: 10,
        answerSummary: 'टैली में लेन-देन दर्ज करने से पहले लेजर खाते बनाना आवश्यक होता है, जो किसी न किसी पूर्व-निर्धारित ग्रुप के अंतर्गत आते हैं।',
        points: [
          'Predefined Groups: टैली में 28 पहले से बने ग्रुप्स होते हैं (15 प्राइमरी जैसे Capital, Current Assets, Sales और 13 सब-ग्रुप्स जैसे Bank Accounts, Cash-in-Hand)।',
          'Predefined Ledgers: टैली में 2 लेजर पहले से बने होते हैं - Cash और Profit & Loss A/c।',
          'Contra Voucher (F4): बैंक और कैश के बीच लेन-देन (बैंक में नकद जमा या बैंक से नकद निकासी)।',
          'Payment Voucher (F5): किसी भी प्रकार का नकद या बैंक द्वारा भुगतान करना (सैलरी, किराया, लेनदार को भुगतान)।',
          'Receipt Voucher (F6): नकद या बैंक में राशि प्राप्त होना (ग्राहकों से पैसा मिलना, कमीशन प्राप्त होना)।',
          'Journal Voucher (F7): गैर-नकद समायोजन प्रविष्टियां (Depreciation, समायोजन, उधार संपत्ति खरीद)।',
          'Sales (F8) & Purchase (F9): माल की उधार या नकद बिक्री और खरीद दर्ज करना।'
        ],
        keyTerms: ['28 Default Groups', 'F4 Contra', 'F5 Payment', 'F6 Receipt', 'F8 Sales & F9 Purchase'],
        examTip: 'F4 से लेकर F9 तक की सभी वाउचर शॉर्टकट कीज और उनके उपयोग की सूची बनाएं।'
      },
      {
        id: 225,
        qNum: 5,
        unit: 'Unit III',
        question: 'Tally में Inventory Management: Stock Groups, Stock Categories, Stock Items, Units of Measure और Godowns समझाइए।',
        marks: 8,
        answerSummary: 'इन्वेंटरी मैनेजमेंट व्यापार में मौजूद स्टॉक, कच्चे माल और तैयार माल की सटीक मात्रा, दर और गोदाम का रिकॉर्ड रखने की प्रणाली है।',
        points: [
          'Stock Groups: समान प्रकृति की वस्तुओं का वर्गीकरण (उदा. "Electronics", "Groceries")।',
          'Stock Categories: समानांतर वर्गीकरण जैसे साइज, ब्रांड या मॉडल (उदा. "Sony", "Samsung")।',
          'Units of Measure: माल को मापने की इकाई (Simple: Pcs, Kgs, Liters; Compound: 1 Box = 10 Pcs)।',
          'Stock Items: वह वास्तविक वस्तु जिसे खरीदा या बेचा जाता है (उदा. "Dell 15 Laptop i5", "Basmati Rice 5kg")।',
          'Godowns (Locations): वह स्थान या गोदाम जहां माल भौतिक रूप से रखा जाता है (Main Location, Warehouse A)।'
        ],
        keyTerms: ['Stock Items', 'Units of Measure (UOM)', 'Multi-Godown', 'Stock Groups'],
        examTip: 'Units of Measure बनाते समय Simple और Compound यूनिट का उदाहरण दें।'
      },
      {
        id: 226,
        qNum: 6,
        unit: 'Unit III',
        question: 'Inventory Vouchers: Purchase Order, Sales Order, Delivery Note, Receipt Note और Stock Journal को समझाइए।',
        marks: 8,
        answerSummary: 'व्यापार में माल के ऑर्डर, प्राप्ति, प्रेषण और गोदाम स्थानांतरण के लिए इन्वेंटरी वाउचर्स का उपयोग किया जाता है।',
        points: [
          'Purchase Order (Ctrl+F9): सप्लायर को माल भेजने का औपचारिक क्रय आदेश (Order) जारी करना।',
          'Sales Order (Ctrl+F8): ग्राहक से माल खरीदने का ऑर्डर स्वीकार करना।',
          'Receipt Note (Alt+F9): सप्लायर से चालान के साथ माल भौतिक रूप से प्राप्त होने पर एंट्री।',
          'Delivery Note (Alt+F8): ग्राहक को चालान के साथ माल भेजने पर एंट्री।',
          'Stock Journal (Alt+F7): माल को एक गोदाम (Source) से दूसरे गोदाम (Destination) में ट्रांसफर करना या उत्पादन (Manufacturing) में कच्चे माल को फिनिश्ड गुड्स में बदलना।'
        ],
        keyTerms: ['Purchase Order', 'Delivery Note', 'Stock Journal Transfer', 'Challan Entries'],
        examTip: 'Stock Journal के Source (Consumption) और Destination (Production) पक्ष को समझाएं।'
      },
      {
        id: 227,
        qNum: 7,
        unit: 'Unit IV',
        question: 'Goods and Services Tax (GST) क्या है? CGST, SGST, IGST, HSN/SAC Codes और Tax Slabs को समझाइए।',
        marks: 10,
        answerSummary: 'GST भारत में "एक राष्ट्र, एक कर" के सिद्धांत पर लागू किया गया एक व्यापक अप्रत्यक्ष कर है, जिसने कई पुराने करों (VAT, Service Tax, Excise) का स्थान लिया है।',
        points: [
          'CGST (Central GST): राज्य के भीतर (Intra-state) बिक्री पर केंद्र सरकार द्वारा वसूला जाने वाला हिस्सा।',
          'SGST (State GST): राज्य के भीतर बिक्री पर राज्य सरकार द्वारा वसूला जाने वाला हिस्सा (CGST और SGST बराबर होते हैं, उदा. 18% में 9% + 9%)।',
          'IGST (Integrated GST): दो अलग-अलग राज्यों के बीच (Inter-state) व्यापार पर लगने वाला एकीकृत कर, जो केंद्र द्वारा एकत्र किया जाता है।',
          'HSN Code (Harmonized System of Nomenclature): वस्तुओं के वर्गीकरण के लिए प्रयुक्त 6 या 8 अंकीय कोड; SAC कोड सेवाओं के लिए होता है।',
          'GST Tax Slabs: 0%, 5%, 12%, 18%, 28%।'
        ],
        keyTerms: ['Intra vs Inter-State', 'CGST + SGST vs IGST', 'HSN/SAC Code', 'GST Slabs'],
        examTip: 'Intra-state (CGST+SGST) और Inter-state (IGST) का अंतर उदाहरण सहित बताएं।'
      },
      {
        id: 228,
        qNum: 8,
        unit: 'Unit IV',
        question: 'Tally Prime में GST Configuration, Tax Ledgers (Input/Output CGST, SGST, IGST) और GST Returns (GSTR-1, 3B) समझाइए।',
        marks: 10,
        answerSummary: 'टैली प्राइम में F11 दबाकर GST सक्रिय किया जाता है जिसके बाद चालान और टैक्स गणना पूरी तरह स्वचालित हो जाती है।',
        points: [
          'GST Activation (F11 -> Taxation -> Enable GST): राज्य, GSTIN नंबर, रजिस्ट्रेशन प्रकार (Regular/Composition) और रिटर्न फाइलिंग अवधि दर्ज करना।',
          'Tax Ledgers Creation: CGST, SGST और IGST के खाते "Duties & Taxes" ग्रुप के तहत टाइप GST चुनकर बनाए जाते हैं।',
          'Auto Tax Calculation: इनवॉइस में पार्टी और स्टॉक आइटम चुनते ही टैली टैक्स स्वतः प्रतिशत के अनुसार जोड़ लेती है।',
          'GSTR-1: महीने या तिमाही में की गई सभी बाह्य आपूर्ति (Sales/Outward Supplies) का विवरण।',
          'GSTR-3B: मासिक सारांश रिटर्न जिसमें कुल बिक्री, इनपुट टैक्स क्रेडिट (ITC) और देय शुद्ध टैक्स का भुगतान किया जाता है।',
          'E-Way Bill & E-Invoicing: ₹50,000 से अधिक के माल परिवहन के लिए टैली से सीधे ई-वे बिल जनरेट करना।'
        ],
        keyTerms: ['F11 GST Activation', 'Duties & Taxes Group', 'GSTR-1 Sales', 'GSTR-3B ITC'],
        examTip: 'Duties & Taxes ग्रुप के अंतर्गत टैक्स लेजर बनाने के स्टेप्स लिखें।'
      },
      {
        id: 229,
        qNum: 9,
        unit: 'Unit V',
        question: 'Tax Deducted at Source (TDS) क्या है? Tally में TDS Configuration, Deduction Entry और TDS Payment समझाइए।',
        marks: 8,
        answerSummary: 'TDS आय के स्रोत पर ही कर कटौती की प्रणाली है, जहां भुगतानकर्ता (Deductor) निश्चित सीमा से अधिक भुगतान पर कर काटकर सरकार को जमा करता है।',
        points: [
          'TDS की आवश्यकता: कर चोरी रोकना और सरकार को नियमित कर राजस्व प्राप्त होना (उदा. किराया Sec 194I, पेशेवर फीस Sec 194J, ठेकेदार Sec 194C)।',
          'TDS Activation in Tally: F11 में जाकर Enable TDS -> TAN Registration Number और डिडक्टर का प्रकार सेट करना।',
          'TDS Nature of Payments: खर्च की धाराएं और छूट सीमा (Threshold limit) परिभाषित करना।',
          'Voucher Entry: जब पेशेवर बिल दर्ज होता है, तो पार्टी को शुद्ध राशि देय होती है और TDS लेजर में टैक्स कटकर जमा होता है।',
          'TDS Payment (Statutory Payment): चालान ITNS 281 के माध्यम से हर माह की 7 तारीख तक सरकार को बैंक द्वारा टैक्स जमा करना।'
        ],
        keyTerms: ['TDS Deductor & Deductee', 'TAN Number', 'Section 194C/J/I', 'Challan ITNS 281'],
        examTip: 'TDS की कम से कम दो लोकप्रिय धाराएं (Section 194J और 194C) और उनकी सीमाएं लिखें।'
      },
      {
        id: 230,
        qNum: 10,
        unit: 'Unit V',
        question: 'Tally में MIS Reports: Balance Sheet, Profit & Loss A/c, Cash Flow, Fund Flow, Ratio Analysis और Day Book समझाइए।',
        marks: 8,
        answerSummary: 'प्रबंधन सूचना प्रणाली (MIS) रिपोर्टें व्यवसाय मालिकों को कंपनी की वित्तीय स्थिति, तरलता और लाभप्रदता का सटीक आकलन करने में सहायता करती हैं।',
        points: [
          'Day Book: किसी निश्चित दिन हुए सभी वित्तीय वाउचरों की क्रमिक सूची।',
          'Balance Sheet: Alt+F1 दबाकर संपत्तियों और देनदारियों का विस्तृत वर्टिकल या हॉरिजॉन्टल विवरण देखना।',
          'Profit & Loss Account: ग्रॉस प्रॉफिट, नेट प्रॉफिट और ऑपरेटिंग खर्चों का तुलनात्मक विश्लेषण।',
          'Cash Flow Statement: संचालन, निवेश और वित्तीय गतिविधियों से नकद अंतर्वाह (Inflow) और बहिर्वाह (Outflow) का विवरण।',
          'Fund Flow Statement: कार्यशील पूंजी (Working Capital) में बदलाव और दीर्घकालिक निधियों के स्रोतों व उपयोगों का विश्लेषण।',
          'Ratio Analysis: वित्तीय अनुपातों (Current Ratio, Quick Ratio, Debt-Equity Ratio, Gross Profit %) का त्वरित विश्लेषण।'
        ],
        keyTerms: ['MIS Reports', 'Cash Flow vs Fund Flow', 'Ratio Analysis', 'Day Book Alt+F1'],
        examTip: 'Day Book और Ratio Analysis के 2-2 उपयोग स्पष्ट करें।'
      }
    ]
  },
  {
    id: '2pgdca4',
    sem: 2,
    code: '2PGDCA4 (A)',
    name: 'Multimedia Design and Production',
    shortName: 'Multimedia & Video',
    theory: 70,
    practical: 20,
    internal: 30,
    total: 120,
    questions: [
      {
        id: 231,
        qNum: 1,
        unit: 'Unit I',
        question: 'Multimedia क्या है? इसके मुख्य 5 घटक (Text, Audio, Video, Graphics, Animation) और Linear vs Non-Linear Multimedia समझाइए।',
        marks: 10,
        answerSummary: 'मल्टीमीडिया विभिन्न मीडिया तत्वों का कंप्यूटर-नियंत्रित एकीकरण है जो सूचना को आकर्षक, संवादात्मक और प्रभावी ढंग से प्रस्तुत करता है।',
        points: [
          'Text: सूचना संप्रेषण का मूल आधार (टाइपोग्राफी, फोंट्स, साइज, रंग)।',
          'Graphics/Images: स्थिर छवियां (Bitmaps/Vectors) जो सामग्री को विजुअल अपील देती हैं।',
          'Audio: ध्वनि, भाषण, संगीत और साउंड इफेक्ट्स (MP3, WAV, AAC) जो भावनात्मक प्रभाव डालते हैं।',
          'Video: चलती हुई तस्वीरों की श्रृंखला (24-60 फ्रेम प्रति सेकंड) जो वास्तविकता का अनुभव कराती है।',
          'Animation: स्थिर छवियों या वेक्टर आकृतियों को तेजी से बदलकर गति का भ्रम पैदा करना (2D/3D एनिमेशन)।',
          'Linear Multimedia: दर्शक का सामग्री के प्रवाह पर कोई नियंत्रण नहीं होता, यह शुरू से अंत तक सीधी चलती है (उदा. सिनेमा फिल्म, टीवी प्रसारण)।',
          'Non-Linear Multimedia: उपयोगकर्ता नेविगेशन और इंटरैक्शन को नियंत्रित कर सकता है (उदा. वीडियो गेम्स, ई-लर्निंग कोर्स, वेबसाइट्स)।'
        ],
        keyTerms: ['5 Elements of Multimedia', 'Linear vs Non-Linear', 'Typography', 'Audio & Animation'],
        examTip: 'Linear और Non-Linear के बीच 3 अंतर उदाहरण सहित लिखें।'
      },
      {
        id: 232,
        qNum: 2,
        unit: 'Unit I',
        question: 'Multimedia Hardware & Software Requirements, Authoring Tools और शिक्षा व मनोरंजन में इसके उपयोग समझाइए।',
        marks: 8,
        answerSummary: 'मल्टीमीडिया प्रोडक्शन के लिए उच्च क्षमता वाले हार्डवेयर और विशेष क्रिएशन सॉफ्टवेयर की आवश्यकता होती है।',
        points: [
          'हार्डवेयर आवश्यकताएं: शक्तिशाली मल्टी-कोर प्रोसेसर (i7/Ryzen), समर्पित ग्राफिक्स कार्ड (NVIDIA GPU), न्यूनतम 16GB RAM, SSD स्टोरेज, हाई-कलर कैलिब्रेटेड मॉनिटर, साउंड कार्ड और ऑडियो मॉनिटर स्पीकर्स।',
          'सॉफ्टवेयर टूल्स: इमेज एडिटिंग (Photoshop), वेक्टर ग्राफिक्स (CorelDraw, Illustrator), ऑडियो प्रोडक्शन (Audacity, Audition), वीडियो एडिटिंग (Premiere Pro), 3D एनिमेशन (Blender, Maya)।',
          'Multimedia Authoring Tools: विभिन्न मीडिया तत्वों को एक इंटरैक्टिव एप्लिकेशन में संयोजित करने वाले टूल्स (Adobe Animate, Director)।',
          'अनुप्रयोग: शिक्षा (स्मार्ट क्लासरूम, सिमुलेशन), विज्ञापन (कमर्शियल एड्स), मनोरंजन (मूवीज, वीएफएक्स, गेमिंग), और वर्चुअल रियलिटी।'
        ],
        keyTerms: ['GPU Acceleration', 'Authoring Tools', 'Interactive Simulation', 'VFX'],
        examTip: 'मल्टीमीडिया के न्यूनतम हार्डवेयर स्पेसिफिकेशन्स की लिस्ट लिखें।'
      },
      {
        id: 233,
        qNum: 3,
        unit: 'Unit II',
        question: 'Image File Formats (JPEG, PNG, GIF, BMP, TIFF, SVG) और Color Theory (Additive vs Subtractive, Color Wheel) समझाइए।',
        marks: 8,
        answerSummary: 'विभिन्न डिजिटल इमेज फॉर्मेट्स कम्प्रेशन, क्वालिटी और ट्रांसपेरेंसी के आधार पर अलग-अलग कार्यों के लिए चुने जाते हैं।',
        points: [
          'JPEG: Lossy कम्प्रेशन; तस्वीरों के लिए सबसे लोकप्रिय, छोटा साइज लेकिन ट्रांसपेरेंसी सपोर्ट नहीं करता।',
          'PNG: Lossless कम्प्रेशन; उच्च गुणवत्ता और पारदर्शी बैकग्राउंड (Alpha Transparency) सपोर्ट करता है; लोगो और ग्राफिक्स के लिए उत्तम।',
          'GIF: 256 रंगों तक सीमित; छोटे लूपिंग एनिमेशन के लिए प्रसिद्ध।',
          'TIFF: बिना किसी कम्प्रेशन के अधिकतम प्रिंट क्वालिटी देने वाला भारी फॉर्मेट।',
          'SVG: स्केलेबल वेक्टर ग्राफिक्स जो कोड आधारित होता है और वेब पर बिना फटे किसी भी आकार में ज़ूम हो सकता है।',
          'Color Wheel & Harmony: प्राथमिक रंग (Primary), द्वितीयक रंग (Secondary), पूरक रंग (Complementary) और एनालॉगस रंग संयोजन।'
        ],
        keyTerms: ['Lossy vs Lossless', 'PNG Transparency', 'SVG Scalability', 'Color Harmony'],
        examTip: 'JPEG और PNG के मुख्य 3 अंतर (Compression & Transparency) लिखें।'
      },
      {
        id: 234,
        qNum: 4,
        unit: 'Unit II',
        question: 'CorelDraw का परिचय दें। UI, Toolbox, Property Bar, Docker Windows, Rulers और Guides को समझाइए।',
        marks: 8,
        answerSummary: 'CorelDraw दुनिया का सबसे लोकप्रिय वेक्टर-आधारित ग्राफिक डिजाइनिंग और इलस्ट्रेशन सॉफ्टवेयर है जिसका उपयोग फ्लेक्स, बैनर, लोगो और ब्रोशर में होता है।',
        points: [
          'Vector Advantage: कोरलड्रॉ में बने डिज़ाइन कितने भी बड़े साइज (उदा. 50 फीट का होर्डिंग) में प्रिंट किए जाएं, उनके किनारे कभी पिक्सलेट नहीं होते।',
          'Toolbox: पिक टूल (Pick Tool), शेप टूल (Shape Tool), फ्रीहैंड टूल, रेक्टैंगल टूल, एलिप्स टूल, टेक्स्ट टूल, इंटरेक्टिव फिल टूल।',
          'Property Bar: चयनित टूल या ऑब्जेक्ट के अनुसार अपने ऑप्शन्स (साइज, रोटेशन एंगल, आउटलाइन मोटाई) स्वतः बदलने वाला संदर्भ बार।',
          'Dockers: स्क्रीन के दाईं ओर खुलने वाले विशेष पैनल्स जैसे Object Properties, Align & Distribute, Transformations।',
          'Rulers & Guidelines: डिज़ाइन को सटीक मिलीमीटर, इंच या पिक्सल में मापने और संरेखित करने के लिए।'
        ],
        keyTerms: ['Vector Based', 'Property Bar Dynamics', 'Shape Tool (F10)', 'Dockers'],
        examTip: 'Property Bar की विशेषता (Context-sensitive nature) को रेखांकित करें।'
      },
      {
        id: 235,
        qNum: 5,
        unit: 'Unit III',
        question: 'CorelDraw में Shape Tool (F10), Bezier Tool, Pen Tool और Curves (Nodes, Segments, Smooth vs Cusp Nodes) समझाइए।',
        marks: 10,
        answerSummary: 'कोरलड्रॉ में वेक्टर आकृतियों को सटीक रूप से मोड़ने और मनचाहा आकार देने के लिए कर्व्स और नोड एडिटिंग का उपयोग किया जाता है।',
        points: [
          'Shape Tool (F10): किसी भी ऑब्जेक्ट के नोड्स को पकड़कर खींचने, मोड़ने और कोनों को गोल करने का मुख्य टूल।',
          'Convert to Curves (Ctrl+Q): साधारण आयत या टेक्स्ट को एडिटेबल पाथ (कर्व) में बदलना जिसके बाद हर नोड स्वतंत्र हो जाता है।',
          'Bezier & Pen Tool: क्लिक और ड्रैग करके चिकने बेज़ियर वक्र और सटीक वेक्टर पाथ्स बनाना।',
          'Nodes के प्रकार: 1. Cusp Node (दोनों दिशाओं के हैंडल स्वतंत्र - नुकीला कोना), 2. Smooth Node (हैंडल्स 180 डिग्री सीध में - कोमल मोड़), 3. Symmetrical Node (दोनों हैंडल की लंबाई व दिशा एक समान)।',
          'Add & Delete Nodes: पाथ पर डबल-क्लिक करके नया नोड जोड़ना या हटाना।'
        ],
        keyTerms: ['Ctrl+Q Convert to Curves', 'Shape Tool F10', 'Cusp vs Smooth Nodes', 'Bezier Control Handles'],
        examTip: 'Cusp Node और Smooth Node का चित्र बनाकर दिखाएं।'
      },
      {
        id: 236,
        qNum: 6,
        unit: 'Unit III',
        question: 'CorelDraw में Text Tools (Artistic vs Paragraph Text), Fit Text to Path, और Special Effects (Extrude, Blend, Contour) समझाइए।',
        marks: 10,
        answerSummary: 'कोरलड्रॉ उन्नत टाइपोग्राफी और प्रभावशाली 3D विजुअल इफेक्ट्स टूल्स प्रदान करता है जो विज्ञापन डिजाइनिंग की रीढ़ हैं।',
        points: [
          'Artistic Text: सिर्फ क्लिक करके टाइप करना; शीर्षकों, लोगो और विज्ञापनों के लिए जिसे सीधे खींचा और रोटेट किया जा सकता है।',
          'Paragraph Text: टेक्स्ट बॉक्स बनाकर टाइप करना; किताबों, अखबारों और लंबे पैराग्राफ्स के लिए जिसमें टेक्स्ट फ्लो होता है।',
          'Fit Text to Path: टेक्स्ट को किसी वृत्त, लहरदार रेखा या किसी भी पाथ के ऊपर घुमावदार रूप में चिपकाना (उदा. गोल मोहर/सील बनाना)।',
          'Blend Tool: दो ऑब्जेक्ट्स के बीच मध्यवर्ती चरणों (Steps) और रंगों का क्रमिक संक्रमण तैयार करना।',
          'Contour Tool: ऑब्जेक्ट के अंदर या बाहर संकेंद्रित (Concentric) रिंग्स बनाना।',
          'Extrude Tool: 2D ऑब्जेक्ट को खींचकर गहराई देकर 3D लुक प्रदान करना।'
        ],
        keyTerms: ['Artistic vs Paragraph Text', 'Fit Text to Path (Seals)', 'Interactive Blend', '3D Extrude'],
        examTip: 'गोल मोहर (Circular Seal) बनाने के लिए Fit Text to Path का उपयोग समझाएं।'
      },
      {
        id: 237,
        qNum: 7,
        unit: 'Unit IV',
        question: 'CorelDraw में Object Manipulation: Weld, Trim, Intersect, Simplify, Grouping और PowerClip Effect समझाइए।',
        marks: 10,
        answerSummary: 'जटिल लोगो और ग्राफिक्स बनाने के लिए बुनियादी आकृतियों को आपस में जोड़ने, काटने और कंटेनर में डालने के बुलियन टूल्स दिए गए हैं।',
        points: [
          'Weld: दो या अधिक ओवरलैप हो रहे ऑब्जेक्ट्स को जोड़कर एक एकल नई आकृति बनाना।',
          'Trim: एक ऑब्जेक्ट के आकार से दूसरे ऑब्जेक्ट के भाग को काटना (Cookie-cutter प्रभाव)।',
          'Intersect: दो ऑब्जेक्ट्स के केवल परस्पर मिलते हुए (Common) भाग से नई आकृति बनाना।',
          'Group (Ctrl+G) vs Ungroup (Ctrl+U): कई ऑब्जेक्ट्स को एक साथ बांधना ताकि वे एक साथ मूव हो सकें।',
          'PowerClip Effect: किसी भी फोटो या जटिल ग्राफिक को किसी वेक्टर शेप (वृत्त, दिल, टेक्स्ट) के अंदर प्लेस करना।',
          'Extract & Edit PowerClip: कंटेनर के अंदर जाकर फोटो की स्थिति और आकार को समायोजित करना।'
        ],
        keyTerms: ['Weld, Trim, Intersect', 'PowerClip Inside', 'Ctrl+G Grouping', 'Object Shaping'],
        examTip: 'Weld, Trim और Intersect का परिणाम दर्शाने वाला दो वृत्तों का चित्र बनाएं।'
      },
      {
        id: 238,
        qNum: 8,
        unit: 'Unit V',
        question: 'Adobe Premiere Pro का परिचय दें। Interface, Project Panel, Source Monitor, Program Monitor और Timeline Panel को समझाइए।',
        marks: 10,
        answerSummary: 'Adobe Premiere Pro फिल्म और टेलीविजन उद्योग का प्रमुख नॉन-लीनियर वीडियो एडिटिंग (NLE) सॉफ्टवेयर है।',
        points: [
          'Project Panel: सभी रॉ वीडियो क्लिप्स, ऑडियो फाइल्स, म्यूजिक और ग्राफिक्स को इम्पोर्ट और स्टोर करने वाला बिन (Bin) एरिया।',
          'Source Monitor: किसी क्लिप को टाइमलाइन पर ले जाने से पहले देखना और In (I) व Out (O) पॉइंट्स मार्क करके उपयोगी हिस्सा चुनना।',
          'Timeline Panel: वीडियो एडिटिंग का दिल, जहां कई वीडियो ट्रैक्स (V1, V2, V3) और ऑडियो ट्रैक्स (A1, A2) पर क्लिप्स को व्यवस्थित व कट किया जाता है।',
          'Program Monitor: टाइमलाइन पर चल रहे अंतिम संपादित वीडियो का वास्तविक समय पूर्वावलोकन (Preview)।',
          'Tools Panel: Selection Tool (V), Razor Tool (C - क्लिप काटने के लिए), Ripple Edit, Pen Tool, Hand Tool।'
        ],
        keyTerms: ['Timeline Panel', 'Source vs Program Monitor', 'Razor Tool (C)', 'In & Out Points (I & O)'],
        examTip: 'Premiere Pro के चारों प्रमुख विंडोज का लेआउट डायग्राम कॉपी में बनाएं।'
      },
      {
        id: 239,
        qNum: 9,
        unit: 'Unit V',
        question: 'Premiere Pro में Video Cutting (Razor Tool), Transitions, Video Effects, Speed/Duration और Audio Mixing समझाइए।',
        marks: 8,
        answerSummary: 'टाइमलाइन पर क्लिप्स की कटिंग, स्मूथ ट्रांजिशन और ऑडियो-वीडियो सिंकिंग वीडियो संपादन की मूल प्रक्रिया है।',
        points: [
          'Razor Tool (C): वीडियो या ऑडियो क्लिप को किसी खास फ्रेम पर दो भागों में काटना।',
          'Video Transitions: दो वीडियो क्लिप्स के बीच का सहज बदलाव (उदा. Cross Dissolve, Dip to Black, Wipe, Push)।',
          'Motion Controls: Position, Scale, Rotation, Opacity और Keyframes द्वारा क्लिप्स में खुद मोशन (ज़ूम इन/आउट) देना।',
          'Speed & Duration (Ctrl+R): क्लिप की गति तेज (Fast Motion 200%), धीमी (Slow Motion 50%) या रिवर्स (Reverse Playback) करना।',
          'Audio Mixing: बैकग्राउंड म्यूजिक की आवाज धीमी करना (Audio Ducking) जब कोई व्यक्ति बोल रहा हो, और ऑडियो नॉइज़ हटाना।'
        ],
        keyTerms: ['Cross Dissolve', 'Keyframing Motion', 'Speed/Duration (Ctrl+R)', 'Audio Ducking'],
        examTip: 'Cross Dissolve और Dip to Black ट्रांजिशन के उपयोग का अंतर बताएं।'
      },
      {
        id: 240,
        qNum: 10,
        unit: 'Unit V',
        question: 'Premiere Pro में Color Correction (Lumetri Color), Title Creation और Video Exporting (H.264/MP4 Presets) समझाइए।',
        marks: 8,
        answerSummary: 'एडिटिंग पूरी होने के बाद कलर ग्रेडिंग, टाइटल्स और सही फॉर्मेट में रेंडरिंग वीडियो को पेशेवर लुक देती है।',
        points: [
          'Lumetri Color Panel: Basic Correction (Exposure, Contrast, Highlights, Shadows, White Balance) और Creative LUTs लगाना।',
          'Essential Graphics Panel: वीडियो पर लोअर थर्ड्स (Lower Thirds), हेडलाइंस और सबटाइटल्स (Captions) जोड़ना।',
          'Exporting Video (Ctrl+M): वीडियो को MP4/YouTube फॉर्मेट में रेंडर करना।',
          'H.264 Codec: सबसे लोकप्रिय और संपीड़ित कोडेक जो कम साइज में बेहतरीन 1080p Full HD / 4K क्वालिटी देता है।',
          'Presets: YouTube 1080p Full HD, Facebook HD या Mobile Device प्रीसेट चुनकर सीधे एक्सपोर्ट करना।'
        ],
        keyTerms: ['Lumetri Color', 'H.264 Codec (.mp4)', 'Export (Ctrl+M)', 'Lower Thirds Titles'],
        examTip: 'H.264 कोडेक को सर्वश्रेष्ठ वेब/यूट्यूब वीडियो फॉर्मेट के रूप में उल्लेख करें।'
      }
    ]
  }
];
